import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import TableOfContents from './TableOfContents'
import { MediaWithSkeleton } from './MediaWithSkeleton'
import { CDN_IMAGES } from '../constants/media'

// Top-level table-of-contents model: section IDs map directly to sticky navigation + scroll spy.
const arthTocSections = [
  { id: 'overview', title: 'Overview' },
  { id: 'research', title: 'Research' },
  { id: 'synthesis', title: 'Synthesis' },
  { id: 'design', title: 'Design' },
  { id: 'deliverable', title: 'Deliverable' },
  { id: 'learnings', title: 'Learnings' },
  { id: 'process', title: 'Process' },
]

const overviewBlocks = [
  {
    id: 'problem',
    title: 'Problem',
    headline: 'High Financial intent and Low Financial clarity',
    copy: 'In India, people have a high level of financial intent, but most of them lack financial clarity. The formal financial world is full of jargon, product overload, and intimidating advisors. People often turn to social media, peers, or family members for advice, only to end up making emotionally driven decisions instead of informed ones.',
  },
  {
    id: 'users',
    title: 'Users',
    headline: 'Clarity Seekers',
    details: [
      'Age group: 22 to 37',
      'Income group: Rs15,000 to Rs25,000',
      'Keeps Rs2,000 to Rs12,000 sitting idle in savings account, not sure what to do with this money. Aware about SIP, FD and RD, but feels stuck due to jargon and confusing choices that might best suit their needs.',
    ],
    painPoints: [
      'No one has explained how it works.',
      'Second-guessing before making a decision by themselves.',
      'Afraid of losing money rather than being excited to grow their money.',
    ],
    showUsersImage: true,
  },
  {
    id: 'solution',
    title: 'Solution',
    headline: 'Arth AI account',
    copy: 'An agentic-AI-powered account that understands your goals, makes your investment plans, tracks your networth, and creates your financial decision map.',
    showSolutionImage: true,
  },
]

const researchBlocks = [
  {
    id: 'hypothesis',
    title: 'Hypothesis',
    headline: 'Is it hesitation ?',
    copy: 'People know that they should save & invest money, yet the biggest challenge is the starting point. In this overly complicated financial world, decision-making can feel overwhelming. How can we make someone’s financial journey smarter, where confusion is removed & the user is guided step-by-step towards achievable as well as enjoyable goals?',
    imageSrc: CDN_IMAGES.arthAi.hypothesis,
    imageAlt: 'Hypothesis framing for Arth AI: hesitation and guided financial journey',
  },
  {
    id: 'literature-review',
    title: 'Literature review',
    headline: 'Role of AI in Financial services',
    copy: 'Agentic AI has continued to evolve user experience through real-time inputs, behavioural data, and goal-driven logic. It helps users to reduce cognitive load in an adaptive manner by operating in automatic, copilot, and manual decision modes. In digital financial services, a structure is important to build actions that translate data into planned decisions.',
    imageSrc: CDN_IMAGES.arthAi.literatureReview,
    imageAlt: 'Literature review synthesis on AI in financial services',
  },
  {
    id: 'ethnography',
    title: 'Ethnography',
    headline: 'Ethnographic study',
    copy: 'Visiting with a relationship officer at multiple Kotak 811 user touchpoints, like residential spaces, public areas, and bank branches, to understand the user experience. The goal was to observe each process, listening as well as noting the user query without intervention. Each query was resolved by a relationship officer, where users used to navigate through each process and product with the help of a relationship officer and their peers. This research brought meaningful insights across diverse demographic and socioeconomic contexts.',
    imageSrc: CDN_IMAGES.arthAi.ethnography,
    imageAlt: 'Ethnographic research observations at Kotak 811 touchpoints',
  },
]

const synthesisBlocks = [
  {
    id: 'clustering',
    title: 'Clustering',
    headline: 'Thematic patterns',
    copy: 'Cluster analysis enables to externalise these field observations to interpret them at Strategic level. Process ensures that insights are grounded in evidence. Grouping all these observation in themes, research was able to identify financial influencing factors that are actionable.',
    imageSrc: CDN_IMAGES.arthAi.clustering,
    imageAlt: 'Thematic clustering of field research observations',
  },
]

// Insight cards use the shared neutral surface system (rounded + soft line border) for scanable findings.
const arthInsightCards = [
  {
    title: 'Friction Kills Intent',
    body: 'Without easy access, motivated users drops in mid process.',
  },
  {
    title: 'First Step Wins',
    body: 'The first step can be a winning move.',
  },
  {
    title: 'Choice Paralyses',
    body: 'People get stuck choosing between many products',
  },
  {
    title: 'Delayed Action',
    body: 'Decision paralysis leads to delayed in taking action',
  },
  {
    title: 'Loss Aversion',
    body: 'People worry about losing money',
  },
  {
    title: 'Safety = Confidence',
    body: 'Users need to see investment choice is safe before they act',
  },
  {
    title: 'Errors Erode Trust',
    body: 'Operational failures lead to perception of unreliability',
  },
  {
    title: 'Engagement',
    body: 'Users respond and engage when progress is visible.',
  },
]

const personaSeeking = [
  'Building short- and long-term stability through salary management and emergency funds.',
  'Avoiding financial penalties and hidden charges.',
  'Understanding the “why” behind financial decisions, not only the “what”.',
  'Gaining confidence that his money is moving in the right direction.',
]

const personaDifficulty = [
  'Turning income and savings into clear, actionable plans.',
  'Prioritising between financial products and everyday spending.',
  'Tracking decisions without feeling overwhelmed.',
  'Understanding overall personal net worth at a glance.',
]

const empathyMapBlock = {
  id: 'empathy-map',
  title: 'Empathy map',
  headline: 'Willing yet Stucked',
  copy: 'Four quadrants capture what clarity seekers say, think, do, and feel—grounding tone, reassurance, and intervention points for Arth AI.',
  imageSrc: CDN_IMAGES.arthAi.empathyMap,
  imageAlt: 'Empathy map: Says, Thinks, Does, Feels for the clarity seeker',
}

const arthHmwQuestions = [
  'How might we bridge the gap between users’ financial goals and their expertise to make informed decisions in complex financial planning?',
  'How might we Design experience that helps users with goal- oriented motivation towards long-term financial success?',
  'How might we make users learn from past design decisions that prepare them for future financial strategy?',
]

// Idea cards represent feature-level chips with compact copy and consistent corner radii.
const arthIdeaCards = [
  'Dedicated AI Planner account',
  'Investments that are goal based',
  'Financial Decision Map',
  'Net-worth insights generation',
  'Goals visual journey',
  'Timeline based decisions',
]

const ideaBlock = {
  id: 'idea',
  title: 'Idea',
  headline: 'Arth AI features',
}

// Ordered prototype progression used by a single renderer to keep spacing/typography consistent.
const arthPrototypeScreens = [
  { label: 'Homepage', src: CDN_IMAGES.arthAi.protoHome, alt: 'Arth AI prototype: homepage' },
  { label: 'Goal Selection', src: CDN_IMAGES.arthAi.protoInp1, alt: 'Arth AI prototype: input screen 1' },
  { label: 'Enter Amount', src: CDN_IMAGES.arthAi.protoInp2, alt: 'Arth AI prototype: input screen 2' },
  { label: 'Set Timelne', src: CDN_IMAGES.arthAi.protoInp3, alt: 'Arth AI prototype: screen 3' },
  { label: 'Select Path', src: CDN_IMAGES.arthAi.protoInp4, alt: 'Arth AI prototype: screen 4' },
  { label: 'AI Mode', src: CDN_IMAGES.arthAi.protoInp5, alt: 'Arth AI prototype: screen 5' },
  { label: 'Review & Confirm', src: CDN_IMAGES.arthAi.protoReview, alt: 'Arth AI prototype: review' },
  { label: 'Success state', src: CDN_IMAGES.arthAi.protoSuccess, alt: 'Arth AI prototype: success state, goal creation' },
  { label: 'Arth AI account', src: CDN_IMAGES.arthAi.protoAccount, alt: 'Arth AI prototype: account screen' },
  { label: 'AutoMode', src: CDN_IMAGES.arthAi.protoAutoMode, alt: 'Arth AI prototype: AutoMode' },
  { label: 'CopilotMode', src: CDN_IMAGES.arthAi.protoCopilotMode, alt: 'Arth AI prototype: CopilotMode' },
  { label: 'ManualMode', src: CDN_IMAGES.arthAi.protoManualMode, alt: 'Arth AI prototype: ManualMode' },
  { label: 'Networth', src: CDN_IMAGES.arthAi.protoNetworth, alt: 'Arth AI prototype: networth screen' },
]

const designBlocks = [
  {
    id: 'info-arch',
    title: 'IA',
    headline: 'Information Architecture',
    copy: 'The top-down structure allows users to navigate and access detailed information only when required. Consistent use of renewable patterns helps users to strengthen learning and predictability of steps like confirmation, success and edit flow. Feedback mechanism provides user with clear system understanding and status that builds confidence in user to take action. Information architecture demonstrate high level of usability efficiency and stability, creating a balance of AI integration with a user-friendly experience.',
    figmaEmbedSrc:
      'https://embed.figma.com/board/AN79A7hooYiHonHDbJtOvl/GP?node-id=650-3794&embed-host=share',
    figmaEmbedTitle: 'Arth AI information architecture board in Figma',
  },
  {
    id: 'prototype',
    title: 'Prototype',
    headline: 'From narrative flows to testable screens',
    copy: 'Prototypes explored conversational prompts, plan summaries, and progressive depth—so advanced users could drill in while newcomers stayed in a guided path.',
    prototypeScreens: arthPrototypeScreens,
  },
]

// Closing sections reuse the same article template while allowing image/iframe enrichments.
const closingBlocks = [
  {
    id: 'deliverable',
    title: 'Deliverable',
    headline: 'Complete solution with UX flow',
    copy: 'The entire solution with UX flow is consolidated in a figma section under GP deliverable file which was shared with Design team head and Vice president of UX. Following Figjam link',
    imageSrc: CDN_IMAGES.arthAi.userFlow,
    imageAlt: 'Arth AI user flow deliverable artefact',
  },
  {
    id: 'learnings',
    title: 'Learnings',
    headline: 'Reflections from the graduation project',
    details: [
      'Acquired practical, real-world knowledge of designing for the technology users who are at the bottom of the pyramid, addressing economic sensitivity.',
      'Developed ability to engage in structured communication within multidisciplinary design team, and shared decision-making throughout the design process of the product.',
      'Experience gained in making business requirements into human- center design.',
      'Prioritizing simplicity, clarity, and usability of experience designed for a diverse user group in India.',
      'Engagement with economically constrained users taught how empathy-driven design works in users’ lives.',
    ],
    imageSrc: CDN_IMAGES.arthAi.learnings,
    imageAlt: 'Key learnings from Arth AI project',
  },
  {
    id: 'process',
    title: 'Process',
    headline: 'Check out full process and other artefacts',
    figmaEmbedSrc:
      'https://embed.figma.com/board/AN79A7hooYiHonHDbJtOvl/GP?node-id=724-18772&embed-host=share',
    figmaEmbedTitle: 'Arth AI process board in Figma',
  },
]

function ArthInsightsSection() {
  return (
    <article
      id="insights"
      className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-10 md:grid-cols-[180px_1fr] md:gap-8"
    >
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Insights</h2>
      <div className="max-w-[960px] space-y-6">
        <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">The Gaps</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {arthInsightCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[18px] bg-[#f4f4f6] px-4 py-4 border border-line"
            >
              <p className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[#334155]">{card.title}</p>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#64748B]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function ArthHmwSection() {
  return (
    <article
      id="how-might-we"
      className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-10 md:grid-cols-[180px_1fr] md:gap-8"
    >
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">How might we</h2>
      <div className="max-w-[960px] space-y-10">
        <div className="overflow-hidden rounded-[28px] border border-line bg-[#f8fafc] shadow-soft">
          <MediaWithSkeleton
              src={CDN_IMAGES.arthAi.hmwBanner}
            alt="Abstract banner with question marks representing How Might We exploration"
            className="relative w-full"
            imgClassName="h-auto w-full object-cover"
            loading="lazy"
            variant="blur"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-10 lg:pr-8">
          {arthHmwQuestions.map((question) => (
            <p
              key={question}
              className="text-left text-[16px] font-normal leading-[1.7] tracking-[-0.01em] text-[#475569]"
            >
              {question}
            </p>
          ))}
        </div>
      </div>
    </article>
  )
}

function ArthIdeaSection() {
  const block = ideaBlock
  return (
    <article
      id={block.id}
      className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8"
    >
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">{block.title}</h2>
      <div className="max-w-[960px] space-y-6">
        {block.headline ? (
          <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">{block.headline}</p>
        ) : null}
        {block.copy ? (
          <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">{block.copy}</p>
        ) : null}

        <div className="overflow-hidden rounded-[20px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {arthIdeaCards.map((label) => (
              <div
                key={label}
                className="flex min-h-[112px] items-center justify-center rounded-[22px] bg-[#F1F3F8] px-2 py-6 text-left text-[12px] font-medium leading-snug tracking-[-0.01em] text-[#667B92] md:min-h-[82px] md:text-[16px]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function PersonaStat({ label, value }) {
  return (
    <div>
      <dt className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">{label}</dt>
      <dd className="mt-1.5 text-[16px] leading-snug tracking-[-0.01em] text-[#475569]">{value}</dd>
    </div>
  )
}

function ArthPersonaSection() {
  return (
    <article
      id="persona"
      className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-10 md:grid-cols-[180px_1fr] md:gap-8"
    >
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Persona</h2>
      <div className="max-w-[960px] space-y-10">
        <header>
          <h4 className="text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-[#334155] md:text-[36px]">
            Hustler Pravin
          </h4>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,132px)_minmax(0,220px)_1fr] sm:items-start sm:gap-x-10 lg:gap-x-12">
          <div className="flex justify-start sm:block">
            <div className="aspect-square w-full max-w-[162px] shrink-0 overflow-hidden rounded-[22px] sm:max-w-none">
              <MediaWithSkeleton
                src={CDN_IMAGES.arthAi.personaAvatar}
                alt="Illustrated portrait of Pravin, retail associate persona"
                className="h-full w-full overflow-hidden rounded-[14px]"
                imgClassName="h-full w-full object-contain object-center"
                loading="lazy"
                variant="fade"
              />
            </div>
          </div>

          <dl className="space-y-4">
            <PersonaStat label="Name" value="Pravin" />
            <PersonaStat label="Age" value="29 years" />
            <PersonaStat label="Occupation" value="Retail store associate" />
            <PersonaStat label="Income" value="₹25,000 per month" />
            <PersonaStat label="Location" value="Semi-urban" />
            <PersonaStat label="Financial literacy" value="Low" />
          </dl>

          <p className="text-[17px] leading-[1.65] text-[#64748B] sm:pt-0">
            Pravin is motivated to improve his financial decisions and build stability for his family. Long retail shifts
            and irregular breaks make it difficult to find trustworthy, plain-language guidance—so he often turns to peers
            or pieces together advice from YouTube and Google.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-12">
          <div>
            <h5 className="text-[18px] font-semibold tracking-[-0.01em] text-[#334155]">Seeking</h5>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[17px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
              {personaSeeking.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[18px] font-semibold tracking-[-0.01em] text-[#334155]">Difficulty</h5>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[17px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
              {personaDifficulty.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

function ArthArticle({ block, suppressSidebarTitle = false }) {
  // Canonical content renderer for case-study blocks:
  // headline -> copy -> prototypes -> iframe -> image -> supporting lists.
  const body = (
    <div className="space-y-4">
        {block.headline ? (
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">
            {block.headline}
          </p>
        ) : null}
        {block.copy ? <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">{block.copy}</p> : null}
        {block.prototypeScreens?.length ? (
          <div className="max-w-[960px] space-y-8">
            {block.prototypeScreens.map((screen) => (
              <figure key={screen.label} className="space-y-3">
                <figcaption className="text-[12px] uppercase tracking-[0.08em] text-[#8899B2]">{screen.label}</figcaption>
                <div className="overflow-hidden">
                  <MediaWithSkeleton
                    src={screen.src}
                    alt={screen.alt}
                    className="relative w-full"
                    imgClassName="h-auto w-full object-contain"
                    loading="lazy"
                    variant="blur"
                  />
                </div>
              </figure>
            ))}
          </div>
        ) : null}
        {block.figmaEmbedSrc ? (
          <div className="max-w-[960px]">
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
        {block.imageSrc ? (
          <div className="max-w-[960px] overflow-hidden rounded-[16px] border border-line bg-white">
            <MediaWithSkeleton
              src={block.imageSrc}
              alt={block.imageAlt ?? ''}
              className="relative w-full"
              imgClassName="h-auto w-full object-contain"
              loading="lazy"
              variant="blur"
            />
          </div>
        ) : null}
        {block.showUsersImage ? (
          <div className="max-w-[960px] overflow-hidden rounded-[16px] border border-line bg-[#e8ecf1]">
            <MediaWithSkeleton
              src={CDN_IMAGES.arthAi.users}
              alt="Arth AI target users overview"
              className="relative w-full"
              imgClassName="h-full w-full object-cover"
              loading="lazy"
              variant="blur"
            />
          </div>
        ) : null}
        {block.details ? (
          <ul className="max-w-[920px] space-y-3 text-[18px] leading-[1.6] text-[#64748B]">
            {block.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
        {block.painPoints ? (
          <div className="max-w-[920px] space-y-3">
            <p className="text-[16px] font-medium uppercase tracking-[0.08em] text-[#8899B2]">Users&apos; pain points</p>
            <ol className="list-decimal space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B]">
              {block.painPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </div>
        ) : null}
        {block.showSolutionImage ? (
          <div className="max-w-[960px] overflow-hidden rounded-[16px] border border-line bg-[#e8ecf1]">
            <MediaWithSkeleton
              src={CDN_IMAGES.arthAi.solution}
              alt="Arth AI solution overview"
              className="relative w-full"
              imgClassName="h-full w-full object-cover"
              loading="lazy"
              variant="blur"
            />
          </div>
        ) : null}
    </div>
  )

  if (suppressSidebarTitle) {
    return (
      <div className="space-y-4 border-b border-line pb-8">
        {body}
      </div>
    )
  }

  return (
    <article
      id={block.id}
      className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8"
    >
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">{block.title}</h2>
      {body}
    </article>
  )
}

function SectionGroup({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8">
      <h2 className="border-b border-line pb-4 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#334155] md:text-[24px]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ArthAiCaseStudy({ onResumeClick, onBack }) {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-10 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <Breadcrumbs />

      <section className="case-study-hero motion-page-enter mt-9 border-b border-line pb-10" style={{ '--motion-delay': '80ms' }}>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <h1 className="max-w-[720px] text-[28px] font-medium leading-[1.25] tracking-[-0.02em] text-[#334155] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Agentic AI for informed financial capability enhancement in India
          </h1>
          <div className="flex shrink-0 items-center justify-start md:justify-end md:pt-1">
            <img
              src={CDN_IMAGES.arthAi.logos}
              alt="Kotak 811 and National Institute of Design"
              className="h-11 w-auto object-contain object-right sm:h-12 md:h-14"
              width={280}
              height={56}
              loading="eager"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[16px] border border-line h-full bg-[#e8ecf1] lg:mt-12">
          <MediaWithSkeleton
            src={CDN_IMAGES.arthAi.heroCover}
            alt="Arth AI graduation project preview"
            className="relative w-full"
            imgClassName="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            variant="blur"
          />
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5 lg:gap-x-8">
          <div>
            <dt className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Timeline</dt>
            <dd className="mt-2 text-[16px] leading-snug tracking-[-0.01em] text-[#475569]">6 Months</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Type</dt>
            <dd className="mt-2 text-[16px] leading-snug tracking-[-0.01em] text-[#475569]">Graduation project</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Program</dt>
            <dd className="mt-2 text-[16px] leading-snug tracking-[-0.01em] text-[#475569]">Masters of Design</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Department</dt>
            <dd className="mt-2 text-[16px] leading-snug tracking-[-0.01em] text-[#475569]">Information Design</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Sponsor</dt>
            <dd className="mt-2 text-[16px] leading-snug tracking-[-0.01em] text-[#475569]">Kotak 811</dd>
          </div>
        </dl>
      </section>

      <section
        className="case-study-content motion-page-enter grid grid-cols-1 gap-8 py-8 md:grid-cols-[220px_1fr] md:gap-10"
        style={{ '--motion-delay': '160ms' }}
      >
        <aside className="hidden md:block">
          <TableOfContents sections={arthTocSections} onBack={onBack} />
        </aside>
        <div className="space-y-8">
          <SectionGroup id="overview" title="Overview">
            {overviewBlocks.map((block) => (
              <ArthArticle key={block.id} block={block} />
            ))}
          </SectionGroup>

          <SectionGroup id="research" title="Research">
            {researchBlocks.map((block) => (
              <ArthArticle key={block.id} block={block} />
            ))}
          </SectionGroup>

          <SectionGroup id="synthesis" title="Synthesis">
            {synthesisBlocks.map((block) => (
              <ArthArticle key={block.id} block={block} />
            ))}
            <ArthInsightsSection />
            <ArthPersonaSection />
            <ArthArticle block={empathyMapBlock} />
            <ArthHmwSection />
          </SectionGroup>

          <SectionGroup id="design" title="Design">
            <ArthIdeaSection />
            {designBlocks.map((block) => (
              <ArthArticle key={block.id} block={block} />
            ))}
          </SectionGroup>

          {closingBlocks.map((block) => (
            <SectionGroup key={block.id} id={block.id} title={block.title}>
              <ArthArticle block={block} suppressSidebarTitle />
            </SectionGroup>
          ))}
        </div>
      </section>

      <div className="motion-page-enter" style={{ '--motion-delay': '240ms' }}>
        <SiteFooter onResumeClick={onResumeClick} />
      </div>
    </main>
  )
}

export default ArthAiCaseStudy
