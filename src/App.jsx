import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ResumeDrawer from './components/ResumeDrawer'
import SeoHead from './components/SeoHead'
import FirstVisitLoadingScreen from './components/FirstVisitLoadingScreen'
import WorkPage from './pages/WorkPage'
import { Analytics } from '@vercel/analytics/react'
import { beginFirstVisitPreload } from './utils/assetPreloader'

const AboutPage = lazy(() => import('./components/AboutPage'))
const ArtPage = lazy(() => import('./components/ArtPage'))
const ChatbotCaseStudyPage = lazy(() =>
  import('./pages/CaseStudyPages').then((m) => ({ default: m.ChatbotCaseStudyPage })),
)
const ServiceDesignCaseStudyPage = lazy(() =>
  import('./pages/CaseStudyPages').then((m) => ({ default: m.ServiceDesignCaseStudyPage })),
)
const ArthAiCaseStudyPage = lazy(() =>
  import('./pages/CaseStudyPages').then((m) => ({ default: m.ArthAiCaseStudyPage })),
)
const MapCaseStudyPage = lazy(() =>
  import('./pages/CaseStudyPages').then((m) => ({ default: m.MapCaseStudyPage })),
)

// Neutral fallback keeps route transitions visually stable while lazy chunks load.
function RouteFallback() {
  return <div className="min-h-screen bg-canvas" aria-hidden />
}

// Shared route UX behavior: resets the viewport on page change with reduced-motion support.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }, [pathname])

  return null
}

function App() {
  const firstVisitLoaderDurationMs = 5000
  // QA helper: append ?loader=1 to force-show the loading experience.
  const forceLoaderForTest =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('loader') === '1'
  // Loader gate for first session. Keeps initial reveal and staged prefetch deterministic.
  const [showFirstVisitLoader, setShowFirstVisitLoader] = useState(() => {
    if (typeof window === 'undefined') return false
    if (new URLSearchParams(window.location.search).get('loader') === '1') return true
    return !window.localStorage.getItem('portfolio2026-first-visit-complete')
  })
  const [isResumeDrawerOpen, setIsResumeDrawerOpen] = useState(false)
  const onResumeClick = useCallback(() => setIsResumeDrawerOpen(true), [])
  const handleFirstVisitLoaderComplete = useCallback(() => {
    if (!forceLoaderForTest) {
      window.localStorage.setItem('portfolio2026-first-visit-complete', 'true')
    }
    setShowFirstVisitLoader(false)
  }, [forceLoaderForTest])

  useEffect(() => {
    // Global scroll lock aligns with modal + loading-overlay design behavior.
    const lockScroll = showFirstVisitLoader || isResumeDrawerOpen
    document.body.style.overflow = lockScroll ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isResumeDrawerOpen, showFirstVisitLoader])

  useEffect(() => {
    if (!showFirstVisitLoader) return undefined

    // Starts tiered media warm-up while the branded loading screen is visible.
    const cleanupPreload = beginFirstVisitPreload()

    return () => {
      cleanupPreload()
    }
  }, [showFirstVisitLoader])

  return (
    <>
      <SeoHead />
      <ScrollToTop />
      <div
        className={`transition-all duration-700 ease-out ${
          showFirstVisitLoader ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<WorkPage onResumeClick={onResumeClick} />} />
            <Route path="/work/chatbot" element={<ChatbotCaseStudyPage onResumeClick={onResumeClick} />} />
            <Route path="/work/service-design" element={<ServiceDesignCaseStudyPage onResumeClick={onResumeClick} />} />
            <Route path="/work/arth-ai" element={<ArthAiCaseStudyPage onResumeClick={onResumeClick} />} />
            <Route path="/work/map" element={<MapCaseStudyPage onResumeClick={onResumeClick} />} />
            <Route path="/work" element={<Navigate to="/" replace />} />
            <Route path="/art" element={<ArtPage onResumeClick={onResumeClick} />} />
            <Route path="/about" element={<AboutPage onResumeClick={onResumeClick} />} />
          </Routes>
        </Suspense>
      </div>
      <ResumeDrawer isOpen={isResumeDrawerOpen} onClose={() => setIsResumeDrawerOpen(false)} />
      <Analytics />
      {showFirstVisitLoader ? (
        <FirstVisitLoadingScreen durationMs={firstVisitLoaderDurationMs} onComplete={handleFirstVisitLoaderComplete} />
      ) : null}
    </>
  )
}

export default App
