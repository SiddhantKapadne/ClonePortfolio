import { ProgressiveArtImage } from './MediaWithSkeleton'

/** Matches `duration-300` on the gallery drawer; used if `transitionend` does not fire (e.g. reduced motion). */
export const GALLERY_DRAWER_CLOSE_MS = 320

export default function ArtGalleryDrawer({
  activeItem,
  activeIndex,
  totalCount,
  isOpen,
  isArtworkVisible,
  onClose,
  onCloseComplete,
  onPrevious,
  onNext,
}) {
  if (!activeItem) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Artwork gallery"
      className="fixed inset-0 z-50 flex items-stretch justify-end"
    >
      <button
        type="button"
        aria-label="Close artwork gallery overlay"
        onClick={onClose}
        className={`fixed inset-0 bg-[#0b1220bf] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <div
        aria-hidden={!isOpen}
        onTransitionEnd={(event) => {
          if (event.propertyName !== 'transform') return
          if (!isOpen) onCloseComplete()
        }}
        className={`art_gallery_dialog relative h-full w-[70vw] border-l border-[#dbe3ee] bg-[#f8fafc]/95 p-4 shadow-[-20px_0_60px_rgba(15,23,42,0.28)] transition-transform duration-300 ease-out md:p-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } motion-reduce:transition-none`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line pb-3 md:pb-4">
          <p className="text-[16px] font-medium tracking-[-0.01em] text-[#475569]">
            {activeItem.title}, {activeItem.year}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dbe3ee] bg-white/90 text-[#64748B] transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-[#334155] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90a9cc] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="relative mt-4 md:mt-5">
          <div
            key={activeItem.id}
            className={`mx-auto aspect-[16/10] w-full overflow-hidden rounded-xl transition-all duration-300 ease-out motion-reduce:transition-none ${
              isArtworkVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-1 scale-[0.992] opacity-0'
            }`}
          >
            {activeItem.imageSrc ? (
              <ProgressiveArtImage
                key={activeItem.id}
                src={activeItem.imageSrc}
                alt={`${activeItem.title} artwork`}
                className="h-full w-full"
                imgClassName="h-full w-full object-contain"
                loading="eager"
              />
            ) : null}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 md:mt-5">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous artwork"
            className="inline-flex min-w-[110px] items-center justify-center rounded-full border border-[#dbe3ee] bg-white/90 px-4 py-2 text-[14px] font-medium text-[#475569] transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90a9cc] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <span aria-hidden="true">‹</span>
            <span className="ml-2">Previous</span>
          </button>
          <p className="text-[13px] text-[#7a889f]">
            {activeIndex + 1} / {totalCount}
          </p>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next artwork"
            className="inline-flex min-w-[110px] items-center justify-center rounded-full border border-[#dbe3ee] bg-white/90 px-4 py-2 text-[14px] font-medium text-[#475569] transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90a9cc] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <span className="mr-2">Next</span>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </div>
  )
}
