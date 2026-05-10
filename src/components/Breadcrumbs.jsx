import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const CASE_STUDY_LABELS = {
  '/work/chatbot': 'Kotak811 Chatbot',
  '/work/service-design': 'Service Design',
  '/work/arth-ai': 'Arth AI',
  '/work/map': 'Map in App',
}

function itemsForPath(pathname) {
  if (pathname === '/') {
    return [{ label: 'Work', current: true }]
  }
  if (pathname === '/art') {
    return [{ label: 'Art', current: true }]
  }
  if (pathname === '/about') {
    return [{ label: 'About', current: true }]
  }
  const studyLabel = CASE_STUDY_LABELS[pathname]
  if (studyLabel) {
    return [
      { label: 'Work', to: '/' },
      { label: studyLabel, current: true },
    ]
  }
  return [{ label: 'Work', to: '/' }]
}

function Breadcrumbs() {
  const { pathname } = useLocation()
  const items = useMemo(() => itemsForPath(pathname), [pathname])

  return (
    <nav aria-label="Breadcrumb" className="pb-4 pt-1">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] leading-snug text-[#8899B2]">
        {items.map((item, index) => {
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="select-none text-[#cbd5e1]">
                  /
                </span>
              ) : null}
              {item.current ? (
                <span className="font-medium text-[#64748B]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="transition-colors duration-200 hover:text-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
