import { useEffect, useMemo, useRef, useState } from 'react'

const MIN_SCALE = 0.6
const MAX_SCALE = 2.2
const ZOOM_STEP = 0.12

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

/** Small edge-to-edge sketch tile layout. */
const TILE_SIZE = 420
const TILE_GAP = 24
const GRID_COLS = 8
const INTERACTION_PADDING = 180

const DOT_SPACING = 20
const DOT_WORLD_EXTENT = 6000

const clampViewToBounds = ({ x, y, scale, containerWidth, containerHeight, gridWidth, gridHeight }) => {
  if (!containerWidth || !containerHeight) return { x, y }

  const scaledWidth = gridWidth * scale
  const scaledHeight = gridHeight * scale

  const minX = containerWidth - scaledWidth - INTERACTION_PADDING
  const maxX = INTERACTION_PADDING
  const minY = containerHeight - scaledHeight - INTERACTION_PADDING
  const maxY = INTERACTION_PADDING

  const boundedX =
    minX > maxX ? (containerWidth - scaledWidth) / 2 : clamp(x, minX, maxX)
  const boundedY =
    minY > maxY ? (containerHeight - scaledHeight) / 2 : clamp(y, minY, maxY)

  return { x: boundedX, y: boundedY }
}

export default function SketchInfiniteCanvas({ items, isPageVisible }) {
  const containerRef = useRef(null)
  const [view, setView] = useState({ x: 360, y: 260, scale: 1 })
  const [dragState, setDragState] = useState(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  const positionedItems = useMemo(
    () =>
      items.map((item, index) => {
        const col = index % GRID_COLS
        const row = Math.floor(index / GRID_COLS)
        return {
          ...item,
          x: col * (TILE_SIZE + TILE_GAP),
          y: row * (TILE_SIZE + TILE_GAP),
        }
      }),
    [items],
  )
  const totalRows = Math.max(1, Math.ceil(items.length / GRID_COLS))
  const gridWidth = GRID_COLS * TILE_SIZE + (GRID_COLS - 1) * TILE_GAP
  const gridHeight = totalRows * TILE_SIZE + (totalRows - 1) * TILE_GAP

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect
      if (!rect) return
      setContainerSize({ width: rect.width, height: rect.height })
    })

    resizeObserver.observe(node)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    setView((previous) => {
      const bounded = clampViewToBounds({
        x: previous.x,
        y: previous.y,
        scale: previous.scale,
        containerWidth: containerSize.width,
        containerHeight: containerSize.height,
        gridWidth,
        gridHeight,
      })
      return { ...previous, ...bounded }
    })
  }, [containerSize.height, containerSize.width, gridHeight, gridWidth])

  const setScaledView = (targetScale, centerX, centerY) => {
    setView((previous) => {
      const scale = clamp(targetScale, MIN_SCALE, MAX_SCALE)
      const nextX = centerX - ((centerX - previous.x) / previous.scale) * scale
      const nextY = centerY - ((centerY - previous.y) / previous.scale) * scale
      const bounded = clampViewToBounds({
        x: nextX,
        y: nextY,
        scale,
        containerWidth: containerSize.width,
        containerHeight: containerSize.height,
        gridWidth,
        gridHeight,
      })
      return { x: bounded.x, y: bounded.y, scale }
    })
  }

  const handlePointerDown = (event) => {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragState({
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: view.x,
      startY: view.y,
    })
  }

  const handlePointerMove = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return
    setView((previous) => ({
      ...previous,
      ...clampViewToBounds({
        x: dragState.startX + (event.clientX - dragState.startClientX),
        y: dragState.startY + (event.clientY - dragState.startClientY),
        scale: previous.scale,
        containerWidth: containerSize.width,
        containerHeight: containerSize.height,
        gridWidth,
        gridHeight,
      }),
    }))
  }

  const clearDragState = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return
    setDragState(null)
  }

  const handleWheel = (event) => {
    event.preventDefault()
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return
    const centerX = event.clientX - containerRect.left
    const centerY = event.clientY - containerRect.top
    const zoomDirection = event.deltaY > 0 ? -1 : 1
    setScaledView(view.scale + zoomDirection * ZOOM_STEP, centerX, centerY)
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-[62vh] min-h-[420px] w-full overflow-hidden rounded-[10px] border border-[#dbe3ee] bg-[#f8fafc] transition-all duration-500 ease-out motion-reduce:transition-none ${
        isPageVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      } ${dragState ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={clearDragState}
      onPointerCancel={clearDragState}
      style={{ touchAction: 'none' }}
      aria-label="Sketch canvas. Drag to pan and use mouse wheel to zoom."
    >
      <div
        className="pointer-events-none absolute inset-0 origin-top-left will-change-transform"
        style={{
          transform: `translate3d(${view.x}px, ${view.y}px, 0px) scale(${view.scale})`,
        }}
      >
        <div
          className="pointer-events-none absolute bg-[#f8fafc]"
          style={{
            left: -DOT_WORLD_EXTENT,
            top: -DOT_WORLD_EXTENT,
            width: DOT_WORLD_EXTENT * 2,
            height: DOT_WORLD_EXTENT * 2,
            backgroundImage: `radial-gradient(circle, #94a3b8 1.1px, transparent 1.1px)`,
            backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`,
            backgroundPosition: '0 0',
            zIndex: 0,
          }}
          aria-hidden
        />
        {positionedItems.map((item, index) => (
          <article
            key={item.id}
            className="absolute"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${TILE_SIZE}px`,
              height: `${TILE_SIZE}px`,
              zIndex: index + 1,
            }}
          >
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                decoding="async"
                draggable={false}
                onDragStart={(event) => event.preventDefault()}
                className="pointer-events-none block h-full w-full select-none object-contain"
              />
            ) : (
              <div className="h-full w-full bg-[#e2e8f0]" aria-hidden />
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
