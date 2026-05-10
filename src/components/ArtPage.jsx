import { useCallback, useEffect, useMemo, useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import ArtGalleryDrawer, { GALLERY_DRAWER_CLOSE_MS } from './ArtGalleryDrawer'
import { ProgressiveArtImage } from './MediaWithSkeleton'
import SketchInfiniteCanvas from './SketchInfiniteCanvas'
import { CDN_IMAGES } from '../constants/media'
import artFerry from '../assets/Art/Ferry.png'

const artCategories = ['Sketch', 'Graphics', 'Photography', 'Paintings']

const artItems = [
  { id: 's-1', category: 'Sketch', title: 'Morning line study', year: '2019', imageSrc: CDN_IMAGES.artSketch.sexyPlantOnCampus },
  { id: 's-2', category: 'Sketch', title: 'Hands and gesture', year: '2020', imageSrc: CDN_IMAGES.artSketch.hands },
  { id: 's-3', category: 'Sketch', title: 'Urban notebook', year: '2021', imageSrc: CDN_IMAGES.artSketch.danYa },
  { id: 's-4', category: 'Sketch', title: 'Portrait values', year: '2021', imageSrc: CDN_IMAGES.artSketch.ngma },
  { id: 's-5', category: 'Sketch', title: 'Form blocks', year: '2022', imageSrc: CDN_IMAGES.artSketch.aluu },
  { id: 's-6', category: 'Sketch', title: 'Character draft', year: '2022', imageSrc: CDN_IMAGES.artSketch.reelCamera },
  { id: 's-7', category: 'Sketch', title: 'Perspective drill', year: '2023', imageSrc: CDN_IMAGES.artSketch.bodyInPerspective },
  { id: 's-8', category: 'Sketch', title: 'Transit people', year: '2023', imageSrc: CDN_IMAGES.artSketch.furniture },
  { id: 's-9', category: 'Sketch', title: 'Figure contour', year: '2024', imageSrc: CDN_IMAGES.artSketch.myCrushForever },
  { id: 's-10', category: 'Sketch', title: 'Quick ideation set', year: '2024', imageSrc: CDN_IMAGES.artSketch.building },
  { id: 's-11', category: 'Sketch', title: 'Space thumbnail', year: '2025', imageSrc: CDN_IMAGES.artSketch.handHeld },
  { id: 's-12', category: 'Sketch', title: 'Story frames', year: '2025', imageSrc: CDN_IMAGES.artSketch.ngma2 },
  { id: 's-13', category: 'Sketch', title: 'Line rhythm', year: '2026', imageSrc: CDN_IMAGES.artSketch.ngma1 },
  { id: 's-14', category: 'Sketch', title: 'Material texture', year: '2026', imageSrc: CDN_IMAGES.artSketch.trainToMumbai },
  { id: 's-15', category: 'Sketch', title: 'Light notes', year: '2026', imageSrc: CDN_IMAGES.artSketch.catchThePlantsBehaviour },
  { id: 's-16', category: 'Sketch', title: 'Ferry', year: '2026', imageSrc: artFerry },
  { id: 's-17', category: 'Sketch', title: 'Shadows', year: '2026', imageSrc: CDN_IMAGES.artSketch.shadows },
  { id: 's-18', category: 'Sketch', title: 'IsoMet', year: '2026', imageSrc: CDN_IMAGES.artSketch.isoMet },
  { id: 's-19', category: 'Sketch', title: 'Heads', year: '2026', imageSrc: CDN_IMAGES.artSketch.heads },
  { id: 's-20', category: 'Sketch', title: 'Oa Plant', year: '2026', imageSrc: CDN_IMAGES.artSketch.oaPlant },
  { id: 's-21', category: 'Sketch', title: 'Scroll Mech', year: '2026', imageSrc: CDN_IMAGES.artSketch.scrollMech },
  { id: 's-22', category: 'Sketch', title: 'Train to Bengaluru', year: '2026', imageSrc: CDN_IMAGES.artSketch.trainToBengaluru },
  { id: 'g-1', category: 'Graphics', title: 'Tote bag', year: '2021', imageSrc: CDN_IMAGES.artGraphics.toteBag },
  { id: 'g-2', category: 'Graphics', title: 'Illustrator study', year: '2022', imageSrc: CDN_IMAGES.artGraphics.illustratorEx },
  { id: 'g-3', category: 'Graphics', title: 'Type L', year: '2023', imageSrc: CDN_IMAGES.artGraphics.typL },
  { id: 'g-4', category: 'Graphics', title: 'Logo', year: '2023', imageSrc: CDN_IMAGES.artGraphics.logo },
  { id: 'g-5', category: 'Graphics', title: 'Pillars, Begur', year: '2024', imageSrc: CDN_IMAGES.artGraphics.pillarsBegur },
  { id: 'g-6', category: 'Graphics', title: 'Pillar bird', year: '2024', imageSrc: CDN_IMAGES.artGraphics.pillarBird },
  { id: 'g-7', category: 'Graphics', title: 'Coding portrait', year: '2025', imageSrc: CDN_IMAGES.artGraphics.codingPortrait },
  { id: 'g-8', category: 'Graphics', title: 'Newspaper', year: '2025', imageSrc: CDN_IMAGES.artGraphics.newsPaper },
  { id: 'g-9', category: 'Graphics', title: 'Type Q', year: '2025', imageSrc: CDN_IMAGES.artGraphics.typQ },
  { id: 'g-10', category: 'Graphics', title: 'Map', year: '2026', imageSrc: CDN_IMAGES.artGraphics.map },
  { id: 'p-1', category: 'Photography', title: 'Window', year: '2024', imageSrc: CDN_IMAGES.artPhotography.window },
  { id: 'p-2', category: 'Photography', title: 'The curve', year: '2024', imageSrc: CDN_IMAGES.artPhotography.theCurve },
  { id: 'p-3', category: 'Photography', title: 'Small pond', year: '2023', imageSrc: CDN_IMAGES.artPhotography.smallPond },
  { id: 'p-4', category: 'Photography', title: 'Little fish', year: '2024', imageSrc: CDN_IMAGES.artPhotography.littleFish },
  { id: 'p-5', category: 'Photography', title: 'Light and bat', year: '2024', imageSrc: CDN_IMAGES.artPhotography.lightAndBat },
  { id: 'p-6', category: 'Photography', title: 'Eggs', year: '2022', imageSrc: CDN_IMAGES.artPhotography.eggs },
  { id: 'p-7', category: 'Photography', title: 'Beautiful beetle', year: '2021', imageSrc: CDN_IMAGES.artPhotography.beautifulBeetle },
  { id: 'p-8', category: 'Photography', title: 'Architecture', year: '2020', imageSrc: CDN_IMAGES.artPhotography.architecture },
  { id: 'p-9', category: 'Photography', title: 'Bamboo', year: '2021', imageSrc: CDN_IMAGES.artPhotography.bamboo },
  { id: 'p-10', category: 'Photography', title: 'Fancy cup', year: '2022', imageSrc: CDN_IMAGES.artPhotography.fancyCup },
  { id: 'p-11', category: 'Photography', title: 'Cactus flower', year: '2022', imageSrc: CDN_IMAGES.artPhotography.cactusFlower },
  { id: 'pa-1', category: 'Paintings', title: 'Apophenia', year: '2024', imageSrc: CDN_IMAGES.artPaintings.apophenia },
  { id: 'pa-2', category: 'Paintings', title: 'Synchronicity', year: '2025', imageSrc: CDN_IMAGES.artPaintings.synchronicity },
]

function ArtPage({ onResumeClick }) {
  const [activeCategory, setActiveCategory] = useState('Graphics')
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isArtworkVisible, setIsArtworkVisible] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(false)

  const visibleItems = useMemo(
    () => artItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const openGallery = useCallback(
    (index) => {
      if (visibleItems.length === 0 || index < 0 || index >= visibleItems.length) return
      setActiveGalleryIndex(index)
      setIsGalleryOpen(false)
      requestAnimationFrame(() => {
        setIsGalleryOpen(true)
      })
    },
    [visibleItems.length],
  )

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false)
  }, [])

  const goToNext = useCallback(() => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null || visibleItems.length === 0) return currentIndex
      return (currentIndex + 1) % visibleItems.length
    })
  }, [visibleItems.length])

  const goToPrevious = useCallback(() => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null || visibleItems.length === 0) return currentIndex
      return (currentIndex - 1 + visibleItems.length) % visibleItems.length
    })
  }, [visibleItems.length])

  useEffect(() => {
    setIsGalleryOpen(false)
    setActiveGalleryIndex(null)
  }, [activeCategory])

  useEffect(() => {
    if (activeGalleryIndex === null) {
      setIsArtworkVisible(false)
      return
    }

    setIsArtworkVisible(false)
    const animationFrameId = requestAnimationFrame(() => {
      setIsArtworkVisible(true)
    })

    return () => cancelAnimationFrame(animationFrameId)
  }, [activeGalleryIndex])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsPageVisible(true)
      return
    }

    setIsPageVisible(false)
    const animationFrameId = requestAnimationFrame(() => {
      setIsPageVisible(true)
    })

    return () => cancelAnimationFrame(animationFrameId)
  }, [activeCategory])

  useEffect(() => {
    if (!isGalleryOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeGallery()
      if (event.key === 'ArrowRight') goToNext()
      if (event.key === 'ArrowLeft') goToPrevious()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeGallery, goToNext, goToPrevious, isGalleryOpen])

  useEffect(() => {
    if (isGalleryOpen || activeGalleryIndex === null) return
    const timeoutId = window.setTimeout(() => {
      setActiveGalleryIndex(null)
    }, GALLERY_DRAWER_CLOSE_MS)
    return () => window.clearTimeout(timeoutId)
  }, [isGalleryOpen, activeGalleryIndex])

  const activeGalleryItem =
    activeGalleryIndex !== null &&
    activeGalleryIndex >= 0 &&
    activeGalleryIndex < visibleItems.length
      ? visibleItems[activeGalleryIndex]
      : null

  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-10 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <Breadcrumbs />

      <section
        className={`border-b border-line py-9 transition-all duration-500 ease-out md:py-11 motion-reduce:transition-none ${
          isPageVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[170px_1fr] md:gap-10">
          <aside
            className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
              isPageVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <ul className="art_categories space-y-2.5 text-[18px] leading-[1.2] tracking-[-0.01em] text-[#64748B]">
              {artCategories.map((category, index) => {
                const isActive = category === activeCategory
                return (
                  <li
                    key={category}
                    style={{
                      transitionDelay: isPageVisible ? `${80 + index * 45}ms` : '0ms',
                    }}
                    className="transition-all duration-500 ease-out motion-reduce:transition-none"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`relative text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90a9cc] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                        isActive ? 'font-medium text-[#FF4F00]' : 'font-normal text-[#64748B] hover:text-[#475569]'
                      }`}
                    >
                      <span className="inline-block">{category}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </aside>

          {activeCategory === 'Sketch' ? (
            <div key={activeCategory} className="motion-page-enter" style={{ '--motion-delay': '0ms' }}>
              <SketchInfiniteCanvas items={visibleItems} isPageVisible={isPageVisible} />
            </div>
          ) : (
            <div
              key={activeCategory}
              className="motion-page-enter grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              style={{ '--motion-delay': '0ms' }}
            >
              {visibleItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`group transition-all duration-500 ease-out motion-reduce:transition-none ${
                    isPageVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isPageVisible ? `${140 + index * 30}ms` : '0ms',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => openGallery(index)}
                    className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90a9cc] focus-visible:ring-offset-2"
                    aria-label={`${item.title}, ${item.year}`}
                  >
                    <div className="aspect-square overflow-hidden rounded-[4px] bg-[#d9dbe0] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
                      {item.imageSrc ? (
                        <ProgressiveArtImage
                          src={item.imageSrc}
                          alt={item.title}
                          className="h-full w-full"
                          imgClassName="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : null}
                    </div>
                    <p className="pt-2 text-[12px] tracking-[0.02em] text-[#8a93a2]">
                      {item.title}, {item.year}
                    </p>
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <div
        className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
          isPageVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
        style={{
          transitionDelay: isPageVisible ? '320ms' : '0ms',
        }}
      >
        <SiteFooter onResumeClick={onResumeClick} />
      </div>

      {activeGalleryItem ? (
        <ArtGalleryDrawer
          activeItem={activeGalleryItem}
          activeIndex={activeGalleryIndex}
          totalCount={visibleItems.length}
          isOpen={isGalleryOpen}
          isArtworkVisible={isArtworkVisible}
          onClose={closeGallery}
          onCloseComplete={() => setActiveGalleryIndex(null)}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      ) : null}
    </main>
  )
}

export default ArtPage
