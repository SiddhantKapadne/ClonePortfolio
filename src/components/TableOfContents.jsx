import { useCallback, useEffect, useMemo, useState } from 'react'

/** All element ids the TOC links to, in document order (parent before children when nested). */
function collectSectionIds(sections) {
  const ids = []
  for (const s of sections) {
    ids.push(s.id)
    if (s.subsections?.length) {
      s.subsections.forEach((sub) => ids.push(sub.id))
    }
  }
  return ids
}

function linkClassName(isActive) {
  return isActive
    ? 'font-medium text-[#FF4F00] transition-colors duration-200'
    : 'font-normal text-[#64748B] transition-colors duration-200 hover:text-[#475569]'
}

/**
 * Scroll-spy: active section = last id in order whose top is at or above `scrollOffsetPx`
 * (typical sticky header + breathing room). Throttled with rAF.
 */
function TableOfContents({ sections, onBack, title = 'Contents', scrollOffsetPx = 140 }) {
  const sectionIds = useMemo(() => collectSectionIds(sections), [sections])
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  const updateActive = useCallback(() => {
    if (sectionIds.length === 0) return
    const marker = scrollOffsetPx
    let current = sectionIds[0]
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const { top } = el.getBoundingClientRect()
      if (top <= marker) current = id
      else break
    }
    setActiveId((prev) => (prev === current ? prev : current))
  }, [sectionIds, scrollOffsetPx])

  useEffect(() => {
    updateActive()
    let ticking = false
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          updateActive()
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [updateActive])

  const handleTocClick = (event, sectionId) => {
    event.preventDefault()
    setActiveId(sectionId)
    const sectionEl = document.getElementById(sectionId)
    if (!sectionEl) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    sectionEl.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
    window.setTimeout(updateActive, prefersReducedMotion ? 0 : 400)
  }

  return (
    <div className="sticky top-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[16px] font-normal text-[#64748B] transition-colors duration-200 hover:text-[#475569]"
      >
        <span aria-hidden className="text-[12px] leading-none">
          ←
        </span>
        <span>back</span>
      </button>
      <div className="my-4 h-px bg-line" />
      <nav aria-label="Table of contents">
        <p className="mb-3 text-xs uppercase tracking-[0.08em] text-[#8899B2]">{title}</p>
        <ul className="space-y-2.5 text-[12px] leading-[1.4]">
          {sections.map((section) => (
            <li key={section.id}>
              {section.subsections?.length ? (
                <>
                  <a
                    href={`#${section.id}`}
                    onClick={(event) => handleTocClick(event, section.id)}
                    className={linkClassName(activeId === section.id)}
                    aria-current={activeId === section.id ? 'location' : undefined}
                  >
                    {section.title}
                  </a>
                  <ul className="mt-2 space-y-1.5 border-l border-line pl-3">
                    {section.subsections.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          onClick={(event) => handleTocClick(event, sub.id)}
                          className={linkClassName(activeId === sub.id)}
                          aria-current={activeId === sub.id ? 'location' : undefined}
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={`#${section.id}`}
                  onClick={(event) => handleTocClick(event, section.id)}
                  className={linkClassName(activeId === section.id)}
                  aria-current={activeId === section.id ? 'location' : undefined}
                >
                  {section.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents
