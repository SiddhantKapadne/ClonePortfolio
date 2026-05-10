import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import TableOfContents from './TableOfContents'
import { ImageWithSkeleton } from './MediaWithSkeleton'
import { CDN_IMAGES, CDN_VIDEOS } from '../constants/media'

const mapTocSections = [
  { id: 'overview', title: 'Overview' },
  { id: 'solution', title: 'Solution' },
  { id: 'process', title: 'Process' },
]

const overviewBlocks = [
  {
    id: 'about-project',
    title: 'About Project',
    copy: 'Visualising where music is discovered and which music is most discovered on what location. To discover music track by location. Create a map of individual based on location of discovered music.',
    imageSrc: CDN_IMAGES.mapInApp.aboutOverview,
    imageAlt: 'About project overview',
  },
  {
    id: 'target-audience',
    title: 'Target Audience',
    copy: 'Music enthuse who like to discover new songs and trace melody journey. For people to know music vibe of place. People who want to check which music is been played and where.',
    imageSrc: CDN_IMAGES.mapInApp.targetAudience,
    imageAlt: 'Target audience for Map in App',
    imageFit: 'cover',
    imageSpanFull: true,
  },
]

const solutionBlocks = [
  {
    id: 'prototype-ux-flow',
    title: 'Prototype UX flow',
    copy: 'Core prototype flow in sequence: World_wide, MyMusicMap, MusicMap.',
    images: [
      {
        src: CDN_IMAGES.mapInApp.worldWideDiscover,
        title: 'World wide discover',
        alt: 'World wide discover prototype',
      },
      {
        src: CDN_IMAGES.mapInApp.myMusicMap,
        title: 'My Music Map',
        alt: 'My Music Map prototype',
      },
      {
        src: CDN_IMAGES.mapInApp.musicMap,
        title: 'Music Map',
        alt: 'Music Map prototype',
      },
    ],
  },
  {
    id: 'working-prototype',
    title: 'Working prototype',
    videoSrc: CDN_VIDEOS.mapInApp,
    videoLabel: 'Map in App working prototype video',
  },
]

const processBlock = {
  id: 'design-process',
  title: 'Design Process',
  copy: 'A quick sprint for feature addition where user survey played a major role in understanding how Map can matter to the users.',
  imageSrc: CDN_IMAGES.mapInApp.designProcess,
  imageAlt: 'Map in App design process',
  figmaEmbedSrc: 'https://embed.figma.com/board/noNTeWgWAyKOks3wbel8Yj/Cartography-1?node-id=2-537&embed-host=share',
  figmaEmbedTitle: 'Map in App research artefacts board',
  figmaEmbedCopy: 'View other artefacts regarding research below.',
}

function SectionGroup({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8">
      <h2 className="border-b border-line pb-4 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#334155]">{title}</h2>
      {children}
    </section>
  )
}

function MapArticle({ block }) {
  const imageNode = block.imageSrc ? (
    <div className={`max-w-[960px] overflow-hidden rounded-[16px] ${block.imageSpanFull ? 'md:col-span-2 md:max-w-none' : ''}`}>
      <ImageWithSkeleton
        src={block.imageSrc}
        alt={block.imageAlt ?? block.title}
        className="w-full overflow-hidden rounded-[16px]"
        imgClassName={`h-auto w-full ${block.imageFit === 'cover' ? 'object-cover' : 'object-contain'}`}
        loading="lazy"
        variant="blur"
      />
    </div>
  ) : null

  return (
    <article id={block.id} className="grid scroll-mt-24 grid-cols-1 gap-4 pb-8 md:grid-cols-[180px_1fr] md:gap-8">
      <h3 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">{block.title}</h3>
      <div className="space-y-4">
        {block.copy ? <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">{block.copy}</p> : null}
        {!block.imageSpanFull ? imageNode : null}
        {block.images?.length ? (
          <div className="max-w-[960px] space-y-5">
            {block.images.map((image) => (
              <div key={image.alt} className="space-y-2">
                {image.title ? (
                  <p className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-[#64748B]">{image.title}</p>
                ) : null}
                <div className="overflow-hidden rounded-[16px]">
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    className="w-full overflow-hidden rounded-[16px]"
                    imgClassName="h-auto w-full object-contain"
                    loading="lazy"
                    variant="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {block.videoSrc ? (
          <div className="max-w-[960px] overflow-hidden rounded-[16px] border border-line bg-black">
            <video
              className="h-auto w-full"
              src={block.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={block.videoLabel ?? block.title}
            />
          </div>
        ) : null}
        {block.figmaEmbedSrc ? (
          <div className="max-w-[960px] space-y-3">
            {block.figmaEmbedCopy ? (
              <p className="text-[16px] leading-[1.6] text-[#64748B] p-4">{block.figmaEmbedCopy}</p>
            ) : null}
            <div className="relative w-full max-w-[800px] overflow-hidden rounded-[16px] bg-white">
              <div className="relative aspect-[800/450] w-full">
                <iframe
                  title={block.figmaEmbedTitle ?? 'Figma embed'}
                  src={block.figmaEmbedSrc}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {block.imageSpanFull ? imageNode : null}
    </article>
  )
}

function MapCaseStudy({ onResumeClick, onBack }) {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-10 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <Breadcrumbs />

      <section className="motion-page-enter mt-9 border-b border-line pb-10" style={{ '--motion-delay': '80ms' }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-start md:gap-10">
          <div>
            <img
              src={CDN_IMAGES.mapInApp.logo}
              alt="Shazam project logo"
              className="h-auto w-full max-w-[300px] object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-[460px] text-[20px] leading-[1.3] tracking-[-0.015em] text-[#64748B]">
              Map in App is an exercise to identify the location as a gap in Application and bridge information between users and
              the feature
            </p>
            <div className="mt-4 flex justify-between gap-8 text-[#64748B] sm:gap-14">
              <p className="text-[16px] font-medium leading-[1.1] tracking-[-0.02em]">4 WEEKS</p>
              <p className="text-[12px] font-medium leading-[1.2]">2025</p>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px]">
          <ImageWithSkeleton
            src={CDN_IMAGES.mapInApp.cover}
            alt="Map in App project cover showing music map clusters"
            className="w-full overflow-hidden rounded-[28px]"
            imgClassName="block h-auto w-full object-cover"
            loading="eager"
            fetchPriority="high"
            variant="fade"
          />
        </div>
      </section>

      <section
        className="motion-page-enter grid grid-cols-1 gap-8 py-8 md:grid-cols-[220px_1fr] md:gap-10"
        style={{ '--motion-delay': '160ms' }}
      >
        <aside className="hidden md:block">
          <TableOfContents sections={mapTocSections} onBack={onBack} />
        </aside>

        <div className="space-y-8">
          <SectionGroup id="overview" title="Overview">
            {overviewBlocks.map((block) => (
              <MapArticle key={block.id} block={block} />
            ))}
          </SectionGroup>

          <SectionGroup id="solution" title="Solution">
            {solutionBlocks.map((block) => (
              <MapArticle key={block.id} block={block} />
            ))}
          </SectionGroup>

          <SectionGroup id="process" title="Process">
            <MapArticle block={processBlock} />
          </SectionGroup>
        </div>
      </section>

      <div className="motion-page-enter" style={{ '--motion-delay': '240ms' }}>
        <SiteFooter onResumeClick={onResumeClick} />
      </div>
    </main>
  )
}

export default MapCaseStudy
