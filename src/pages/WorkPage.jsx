import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../assets/profile-image.png'
import NavBar from '../components/NavBar'
import SiteFooter from '../components/SiteFooter'
import { ImageWithSkeleton, VideoWithSkeleton } from '../components/MediaWithSkeleton'
import { CDN_VIDEOS } from '../constants/media'
import { WORK_CASE_STUDY } from '../constants/workRoutes'

function IntroSection() {
  const handleScrollToProjects = useCallback((event) => {
    event.preventDefault()
    const projectsSection = document.getElementById('ProjectsSection')
    if (!projectsSection) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    projectsSection.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <section className="HeroSection motion-page-enter border-b border-line pb-7 pt-12" style={{ '--motion-delay': '80ms' }}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="h-[100px] w-[100px] overflow-hidden rounded-[16px] bg-[#d7dce5] shadow-soft">
          <ImageWithSkeleton
            src={profileImage}
            alt="Siddhant profile"
            className="h-full w-full overflow-hidden rounded-[16px]"
            imgClassName="h-full w-full object-cover"
            width={100}
            height={100}
            loading="eager"
            fetchPriority="high"
            variant="fade"
          />
        </div>
      </div>

      <p className="HeroSection__subtitle mt-6 flex items-center text-base font-normal text-[#8899B2]">
        <span>M.Des | Product Design | UXUI</span>
        <span className="HeroSection__Dot group relative ml-2 inline-flex">
          <span className="relative inline-flex h-3 w-3 items-center justify-center align-middle transition-transform duration-200 group-hover:scale-110">
            <span className="absolute h-3 w-3 inset-0 rounded-full bg-[#b8f8c8]" />
            <span className="absolute h-2 w-2 rounded-full bg-[#34C759]" aria-label="Status: Lets Work Together" />
          </span>
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-10 w-max -translate-x-1/2 rounded-md border border-[#cfeecf] bg-[#eaf9ea] px-2.5 py-1.5 text-xs text-[#3f7f54] opacity-0 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100">
            Lets Work Together
          </span>
        </span>
      </p>

      <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h1 className="HeroSection__title max-w-[550px] text-[28px] font-normal leading-[1.5] tracking-[-0.01em] text-[#64748B]">
          Hello I am Siddhant Kapadne, a designer driven by storytelling and visual form with a passion for
          creating meaningful experiences.
        </h1>
        <a
          href="#ProjectsSection"
          onClick={handleScrollToProjects}
          className="subTag_link mb-1 inline-flex items-center gap-2 text-base font-normal text-[#64748B] transition-colors duration-200 hover:text-[#475569] active:text-[#334155]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4 text-[#64748B]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 4v11m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="HeroSection__subTag text-base text-[#64748B]">work</span>
        </a>
      </div>
    </section>
  )
}

function ProjectGrid() {
  return (
    <section
      id="ProjectsSection"
      className="ProjectsSection motion-page-enter border-b border-line py-7 md:py-9"
      style={{ '--motion-delay': '160ms' }}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <Link
          to={WORK_CASE_STUDY.arthAi}
          className="group relative block h-[250px] min-w-0 cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#e9e7fb] to-[#d5cff7] shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.12)] md:h-[360px] motion-reduce:transform-none"
        >
          <VideoWithSkeleton
            className="absolute inset-0 z-0 h-full w-full"
            videoClassName="block h-full w-full max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
            src={CDN_VIDEOS.arthAi}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            fetchPriority="high"
            aria-label="Arth AI at Kotak811 project preview video"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-4 left-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            Arth AI at Kotak811
          </span>
          <span className="pointer-events-none absolute bottom-4 right-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            View
          </span>
        </Link>
        <Link
          to={WORK_CASE_STUDY.serviceDesign}
          className="group relative block h-[250px] min-w-0 cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#e7f2d6] to-[#d9eeb8] shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.12)] md:h-[360px] motion-reduce:transform-none"
        >
          <VideoWithSkeleton
            className="absolute inset-0 z-0 h-full w-full"
            videoClassName="block h-full w-full max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
            src={CDN_VIDEOS.serviceDesign}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            fetchPriority="low"
            aria-label="Project showcase video"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-4 left-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            Service Design
          </span>
          <span className="pointer-events-none absolute bottom-4 right-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            View
          </span>
        </Link>
        <Link
          to={WORK_CASE_STUDY.chatbot}
          className="chatbot_case_study group relative block h-[250px] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#e6eef9] to-[#b6cff1] shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.12)] md:h-[360px] motion-reduce:transform-none"
        >
          <VideoWithSkeleton
            className="absolute inset-0 z-0 h-full w-full"
            videoClassName="block h-full w-full max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
            src={CDN_VIDEOS.chatbot}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            fetchPriority="low"
            aria-label="Kotak811 Chatbot project preview video"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-4 left-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            Chatbot Design
          </span>
          <span className="pointer-events-none absolute bottom-4 right-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            View
          </span>
        </Link>
        <Link
          to={WORK_CASE_STUDY.map}
          className="group relative block h-[250px] min-w-0 cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#e8f3f0] to-[#cfe7e0] shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.12)] md:h-[360px] motion-reduce:transform-none"
        >
          <VideoWithSkeleton
            className="absolute inset-0 z-0 h-full w-full"
            videoClassName="block h-full w-full max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
            src={CDN_VIDEOS.mapInApp}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            fetchPriority="low"
            aria-label="Map in App project preview video"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-4 left-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            Map in App
          </span>
          <span className="pointer-events-none absolute bottom-4 right-4 z-20 inline-flex translate-y-1 items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-[#334155] opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            View
          </span>
        </Link>
      </div>
    </section>
  )
}

function WorkPage({ onResumeClick }) {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-8 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <IntroSection />
      <ProjectGrid />
      <div className="motion-page-enter" style={{ '--motion-delay': '240ms' }}>
        <SiteFooter onResumeClick={onResumeClick} />
      </div>
    </main>
  )
}

export default WorkPage
