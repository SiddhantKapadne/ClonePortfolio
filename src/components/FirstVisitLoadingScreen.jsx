import { useEffect, useMemo, useRef, useState } from 'react'

const TOTAL_BARS = 30

// Branded loading overlay: token-aligned colors + progress bars inspired by the portfolio visual language.
function FirstVisitLoadingScreen({ durationMs = 3000, onComplete }) {
  const [progress, setProgress] = useState(0)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    const start = performance.now()
    let rafId = 0

    const tick = (timestamp) => {
      const elapsed = timestamp - start
      const nextProgress = Math.min(100, Math.round((elapsed / durationMs) * 100))
      setProgress(nextProgress)
      if (nextProgress >= 100 && !hasCompletedRef.current) {
        hasCompletedRef.current = true
        onComplete?.()
      }
      if (elapsed < durationMs) rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(rafId)
  }, [durationMs, onComplete])

  const filledBars = useMemo(() => Math.round((progress / 100) * TOTAL_BARS), [progress])

  return (
    // Full-viewport overlay ensures no layout shift during startup asset warm-up.
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-canvas px-6">
      <div className="loader_container w-full max-w-[760px]">
        
        <h1 className="text-[24px] font-medium tracking-[-0.04em] text-[#889DBB] mb-4">
          Portfolio 2026
        </h1>
   
        <hr></hr>

        <p className="text-[42px] font-semibold tracking-[-0.03em] text-[#8ea3c1]">{progress}%</p>
        {/* Equal-width bar rhythm mirrors the design-system spacing cadence used across case-study grids. */}
        <div className="mt-8 flex w-full items-end justify-between">
          {Array.from({ length: TOTAL_BARS }).map((_, index) => (
            <span
              key={index}
              className={`shrink-0 rounded-sm transition-colors duration-150 ${
                index < filledBars ? 'bg-[#ff5a1f]' : 'bg-[#e5edf7]'
              }`}
              style={{ width: '16px', height: '100px' }}
              aria-hidden
            />
          ))}
        </div>

        <p className="mt-16 text-center text-[16px] tracking-[-0.02em] text-[#8ea3c1]">
          Preparing to solve next problem using design
        </p>
      </div>
    </div>
  )
}

export default FirstVisitLoadingScreen
