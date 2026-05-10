import { CDN_IMAGES } from '../constants/media'
import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import TableOfContents from './TableOfContents'
import { ImageWithSkeleton } from './MediaWithSkeleton'

const serviceTocSections = [
  { id: 'overview', title: 'Overview' },
  { id: 'research', title: 'Research' },
  { id: 'synthesis', title: 'Synthesis' },
  { id: 'design', title: 'Design' },
  { id: 'deliverable', title: 'Deliverable' },
  { id: 'impact', title: 'Impact' },
  { id: 'learnings', title: 'Learnings' },
]

const closingBlocks = [
  {
    id: 'service-blueprint',
    title: 'Service Blueprint',
    figmaEmbedSrc: 'https://embed.figma.com/board/WJtTIcyvu0NvtzxB6Ejt70/Service-Design?node-id=67-5082&embed-host=share',
    figmaEmbedTitle: 'Service blueprint FigJam board',
  },
  {
    id: 'deliverable',
    title: 'Deliverable',
    imageSrc: CDN_IMAGES.serviceDesign.bhavnidhiDeliverable,
    imageAlt: 'Bhavnidhi deliverable',
  },
  {
    id: 'impact',
    title: 'Impact',
    headline: 'Service outcomes',
    points: [
      'For teens, a design solution makes them visible in a system and gives an early start to building a financial attitude.',
      'Dynamics between parents and teens change as a bond of trust and control is created with monitoring and full visibility of data.',
      "At the societal level, one generation's early financial literacy lifts the next with a strong foundation in financial behaviour.",
    ],
  },
  {
    id: 'learnings',
    title: 'Learning',
    imageSrc: CDN_IMAGES.serviceDesign.learnings,
    imageAlt: 'Project learnings',
    points: [
      'Empathizing with both users at once is harder; it is better to get help from others to do a theatrical play and have a conversation about this topic.',
      'There are multiple ways to solve this brief. I had to cut through the obvious noise and look at the insights to design a unique experience.',
      'Designing each channel (Solution) has taught me that important design decisions happen where no one is looking.',
    ],
  },
]

const synthesisFindings = [
  "Cash is teens' only identity, one financial tool teens could independently hold, use, and count.",
  'There is a sharp difference between watching and doing digital payment, a lack of accessibility.',
  "Teens' gestures show signs of anxiety, like stressed eyes, hesitant voices, and nervous hand switching.",
  'Counting money multiple times is a calculation ritual that helps teens build certainty before committing.',
  'Teen is treated invisibly by the shopkeeper, and prices are directly quoted to parents.',
  'Younger teens were silent and dependent. Older teen-led group, paid independently, made decisions.',
  'Change is treated like proof; well, examination of change carefully, storing it deliberately.',
  'Delayed by doubt, yet never stopped, teen collected the exact amount first and then decided to carry out the transactions.',
  'Finishing a transaction triggered a genuine emotional release. It felt like an achievement.',
  'Teens can feel the exclusion from digital payment they notice the gap.',
]

const howMightWePrompts = [
  'How might we build a financial products that speaks directly to teen ?',
  'How might we help teens to spend, save, reflect and grow financial attitude ?',
  'How might we create a shared financial layer between parent and teen that builds trust on both side - simultaneously?',
]

const solutionTaskFlows = [
  {
    id: 'savings',
    title: 'Savings',
    image: CDN_IMAGES.serviceDesign.taskflowSavingsApp,
    alt: 'Task flow for savings in Bhavnidhi app',
  },
  {
    id: 'goals',
    title: 'Goals',
    image: CDN_IMAGES.serviceDesign.taskflowGoalApp,
    alt: 'Task flow for goals in Bhavnidhi app',
  },
  {
    id: 'payments',
    title: 'Payments',
    image: CDN_IMAGES.serviceDesign.taskflowPaymentApp,
    alt: 'Task flow for payments in Bhavnidhi app',
  },
  {
    id: 'device-sync',
    title: 'Device Sync',
    image: CDN_IMAGES.serviceDesign.taskflowDeviceSync,
    alt: 'Task flow for device sync in Bhavnidhi app',
  },
]

const deviceTaskFlows = [
  {
    id: 'payment-device',
    title: 'Payment',
    image: CDN_IMAGES.serviceDesign.taskflowPaymentsDevice,
    alt: 'Task flow for payment on Bhavnidhi device',
  },
  {
    id: 'payment-phno-device',
    title: 'Payment via Phone Number',
    image: CDN_IMAGES.serviceDesign.taskflowPaymentsPhNoDevice,
    alt: 'Task flow for payment by phone number on Bhavnidhi device',
  },
  {
    id: 'create-savings-device',
    title: 'Create Savings',
    image: CDN_IMAGES.serviceDesign.taskflowCreateSavingsDevice,
    alt: 'Task flow for creating savings on Bhavnidhi device',
  },
  {
    id: 'withdraw-savings-device',
    title: 'Withdraw Savings',
    image: CDN_IMAGES.serviceDesign.taskflowWithdrawSavingsDevice,
    alt: 'Task flow for withdrawing savings on Bhavnidhi device',
  },
  {
    id: 'withdraw-goals-device',
    title: 'Withdraw Goals',
    image: CDN_IMAGES.serviceDesign.taskflowWithdrawGoalsDevice,
    alt: 'Task flow for withdrawing goals on Bhavnidhi device',
  },
  {
    id: 'badges-goals-device',
    title: 'Badges Goals',
    image: CDN_IMAGES.serviceDesign.taskflowBadgesGoalsDevice,
    alt: 'Task flow for badges and goals on Bhavnidhi device',
  },
  {
    id: 'fetch-money-device',
    title: 'Fetch Money',
    image: CDN_IMAGES.serviceDesign.taskflowFetchMoneyDevice,
    alt: 'Task flow for fetching money on Bhavnidhi device',
  },
]

const dashboardTaskFlows = [
  {
    id: 'transaction-dashboard',
    title: 'Transaction',
    image: CDN_IMAGES.serviceDesign.taskflowTransactionDashboard,
    alt: 'Task flow for transaction in dashboard',
  },
  {
    id: 'create-goal-dashboard',
    title: 'Create Goal',
    image: CDN_IMAGES.serviceDesign.taskflowCreateGoalDashboard,
    alt: 'Task flow for creating goal in dashboard',
  },
]

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

function ServiceArticle({ block }) {
  return (
    <article id={block.id} className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">{block.title}</h2>
      <div className="space-y-4">
        {block.headline ? (
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">{block.headline}</p>
        ) : null}
        {block.copy ? <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">{block.copy}</p> : null}
        {block.points ? (
          <ul className="max-w-[960px] list-disc space-y-2.5 pl-5 text-[18px] leading-[1.7] text-[#64748B] marker:text-[#94a3b8]">
            {block.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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
          <div className="max-w-[960px] overflow-hidden rounded-[16px]">
            <img src={block.imageSrc} alt={block.imageAlt ?? block.title} className="h-auto w-full object-contain" />
          </div>
        ) : null}
      </div>
    </article>
  )
}

function ServiceOverviewSection() {
  return (
    <article id="overview-foundation" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-10 md:grid-cols-[180px_1fr] md:gap-8">
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Foundation</h2>
      <div className="space-y-7">
        <div>
          <h4 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Problem</h4>
          <p className="mt-2 max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">
            Currently, adolescents are excluded from digital payment systems and highly rely on cash or cards, leaving them
            untracked, unlearned, and unsupervised.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Solution</h4>
            <p className="mt-2 text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Props</p>
            <div className="mt-3 max-w-[960px] overflow-hidden">
              <img src={CDN_IMAGES.serviceDesign.props} alt="Props for financial literacy activities" className="h-auto w-full object-contain" />
            </div>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Solution</h4>
            <p className="mt-2 text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">People</p>
            <div className="mt-3 max-w-[960px] overflow-hidden rounded-[16px]">
              <img src={CDN_IMAGES.serviceDesign.people} alt="People involved in the service design" className="h-auto w-full object-contain" />
            </div>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Solution</h4>
            <p className="mt-2 text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Process</p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl bg-[#eef3da] p-4">
                <p className="text-[20px] text-[#64748B]">₹</p>
                <p className="mt-3 text-[18px] text-[#5f6f86]">Digital Payments</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-[#6f7f96]">Send and receive money digitally</p>
              </div>
              <div className="rounded-xl bg-[#f6deef] p-4">
                <p className="text-[20px] text-[#64748B]">✧</p>
                <p className="mt-3 text-[18px] text-[#5f6f86]">Savings & Goals</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-[#6f7f96]">Develop savings habit and set goals</p>
              </div>
              <div className="rounded-xl bg-[#e5eaf3] p-4">
                <p className="text-[20px] text-[#64748B]">~</p>
                <p className="mt-3 text-[18px] text-[#5f6f86]">Monitoring</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-[#6f7f96]">Check progress across time</p>
              </div>
              <div className="rounded-xl bg-[#e5eaf3] p-4">
                <p className="text-[20px] text-[#64748B]">◔</p>
                <p className="mt-3 text-[18px] text-[#5f6f86]">User Support</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-[#6f7f96]">Get assisted help online and offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ServiceResearchSection() {
  return (
    <>
      <article id="project-about" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Problem Context</h2>
        <div className="space-y-4">
          <h4 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">What&apos;s the project about?</h4>
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">
            Excluded Teens from Digital Payments
          </p>
          <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">
            Adolescents are forgotten at the door of the digital payment system, where products and services are designed only for
            adults. They are invisible to the existing system. Financial attitude doesn&apos;t start at age 18, it begins when curiosity
            is alive, when the smallest decision feels big, and when the instinct to spend wisely is still being shaped.
          </p>
        </div>
      </article>

      <article id="literature-study" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Literature Review</h2>
        <div className="space-y-4">
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Literature Study</p>
          <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">
          <ol className="list-decimal pl-6">
            <li>Financial Behaviour in adolescents is more influenced by learning from real-world exposure than from formal education.</li>
            <li>There is a gap between intention and action, where teens understand the value of saving but default to impulsive spending & present bias.</li>
            <li>Financial attitude is carried forward in adulthood.</li>
          </ol>
     
          </p>
          <div className="max-w-[960px] overflow-hidden rounded-[16px]">
            <img src={CDN_IMAGES.serviceDesign.literatureReview} alt="Literature study insights" className="h-auto w-full object-contain" />
          </div>
        </div>
      </article>

      <article id="ethnographic-study" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Ethnography</h2>
        <div className="space-y-4">
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">
            Ethnographic Study with Informal Interview
          </p>
          <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">
            <ol className="list-decimal pl-6">
              <li>Watching money move in live transaction spaces is fieldwork before designing.</li>
              <li>Placing myself inside the busy market, food stalls, and retail spaces, to watch and learn how adolescents navigate through transactions and handle money.</li>
              <li>Money is felt before it is spent. Teens count and handle cash with intention, not habits.</li>
              <li>Digital payments exist, but don’t belong to Teens.</li>
            </ol>
       
          </p>
          <div className="max-w-[960px] overflow-hidden rounded-[16px]">
            <img src={CDN_IMAGES.serviceDesign.ethnography} alt="Ethnographic study and informal interview findings" className="h-auto w-full object-contain" />
          </div>
          <div className="max-w-[960px]">
            <div className="relative w-full max-w-[800px] overflow-hidden rounded-[16px] bg-white">
              <div className="relative aspect-[800/450] w-full">
                <iframe
                  title="Ethnographic research Figma board"
                  src="https://embed.figma.com/board/WJtTIcyvu0NvtzxB6Ejt70/Service-Design?node-id=19-3847&embed-host=share"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

function ServiceSynthesisSection() {
  return (
    <>
      <article id="what-research-reveals" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Insights</h2>
        <div className="space-y-4">
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">What Research Has Revealed</p>
          <div className="max-w-[960px]">
            <div className="relative w-full max-w-[800px] overflow-hidden rounded-[16px] bg-white">
              <div className="relative aspect-[800/450] w-full">
                <iframe
                  title="Synthesis FigJam board"
                  src="https://embed.figma.com/board/WJtTIcyvu0NvtzxB6Ejt70/Service-Design?node-id=3-1106&embed-host=share"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <ul className="max-w-[960px] list-disc space-y-2.5 pl-5 text-[18px] leading-[1.7] text-[#64748B] marker:text-[#94a3b8]">
            {synthesisFindings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ul>
        </div>
      </article>

      <article id="persona" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Persona</h2>
        <div className="max-w-[980px] space-y-8">
          <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Curious Charvi</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
            <div>
              <div className="overflow-hidden">
                <img src={CDN_IMAGES.serviceDesign.teenPersona} alt="Teen persona illustration of Charvi" className="h-auto w-full object-contain" />
              </div>
              <ul className="mt-4 space-y-1.5 text-[17px] leading-[1.6] text-[#64748B]">
                <li>16 year old</li>
                <li>Female</li>
                <li>Bengaluru</li>
                <li>High school student</li>
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Background</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                  <li>She is from middle-class family</li>
                  <li>High hopes regarding education & success</li>
                  <li>Modern & traditional with a balance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Goals</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                  <li>To learn more about online platform that shape her future.</li>
                  <li>Wants to learn about financial independence & elevate her understanding in money management as she grows older.</li>
                  <li>Express herself authentically without compromising her sense of self</li>
                  <li>She wants to contribute her understanding of digital technology & mentor up coming younger generation about financial attitude</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Challenges</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                    <li>Feels pressured by overwhelming about budgeting</li>
                    <li>Open to new possibilities</li>
                    <li>Anxiety when exploring possibilities with expectation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Motivation</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                    <li>Wants to improve herself in intellectually & social aspect.</li>
                    <li>Highly motivated by new apps, online learning platform & Technologies.</li>
                    <li>Curious about how digital payments work.</li>
                  </ul>
                </div>
              </div>

              <p className="text-[22px] leading-[1.5] tracking-[-0.01em] text-[#5f6f86]">
                &quot;I am a Growth seeker, Enthusiastic about technology, using information to navigate world around me and money&quot;
              </p>
            </div>
          </div>
        </div>
      </article>

      <article id="parent-persona" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Persona</h2>
        <div className="max-w-[980px] space-y-8">
          <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Watchful Dev</p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
            <div>
              <div className="overflow-hidden">
                <img src={CDN_IMAGES.serviceDesign.parentPersona} alt="Parent persona illustration of Dev" className="h-auto w-full object-contain" />
              </div>
              <ul className="mt-4 space-y-1.5 text-[17px] leading-[1.6] text-[#64748B]">
                <li>37 year old</li>
                <li>Male</li>
                <li>Bengaluru</li>
                <li>Office Clerk</li>
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Background</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                  <li>Works a steady job with regular income cycles.</li>
                  <li>Uses UPI and QR payments for daily transactions.</li>
                  <li>Believes financial discipline comes from experience, not theory</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Goals</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                  <li>Teach his child the value of money.</li>
                  <li>Ensure the child doesn&apos;t misuse or lose money.</li>
                  <li>Help his child become financially smart earlier than he did.</li>
                  <li>gradually shift from cash dependency to digital confidence.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Challenges</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                    <li>No visibility into how or where cash is spent.</li>
                    <li>Limited trust in letting the child handle money independently.</li>
                    <li>Struggles to balance teaching vs controlling.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[20px] font-medium tracking-[-0.01em] text-[#475569]">Motivation</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[18px] leading-[1.6] text-[#64748B] marker:text-[#94a3b8]">
                    <li>Wants his child to &apos;learn by doing&apos; but without making costly mistakes.</li>
                    <li>Open to digital tools that provide tracking and limited safety.</li>
                    <li>Inspired by idea of his child becoming financially independent early.</li>
                  </ul>
                </div>
              </div>

              <p className="text-[22px] leading-[1.5] tracking-[-0.01em] text-[#5f6f86]">
                &quot;I want Charvi to learn on her own, but I don&apos;t trust the world enough to let go.&quot;
              </p>
            </div>
          </div>
        </div>
      </article>

      <article id="empathy-map" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Empathy Map</h2>
        <div className="max-w-[980px] space-y-8">
          <div>
            <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Charvis Empathy Map</p>
            <div className="mt-3 overflow-hidden rounded-[16px]">
              <img src={CDN_IMAGES.serviceDesign.teenEmpathyMap} alt="Empathy map for teen persona" className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </article>
      <article id="empathy-map" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Empathy Map</h2>
        <div className="max-w-[980px] space-y-8">
        <div>
            <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Dev Empathy Map</p>
            <div className="mt-3 overflow-hidden rounded-[16px]">
              <img src={CDN_IMAGES.serviceDesign.parentEmpathyMap} alt="Empathy map for parent persona" className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </article>

      <article id="brief" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Brief</h2>
        <div className="max-w-[980px] space-y-4">
          <p className="text-[16px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">What designer should do ?</p>
          <p className="max-w-[980px] text-[24px] leading-[1.4] tracking-[-0.01em] text-[#64748B]">
            <span style={{ color: '#E451A2' }}>Adolescents are invisible</span> in current financial system, where they{' '}
            <span style={{ color: '#4795A1' }}>depend totally on cash and card-based payment</span>, which requires an enabler that{' '}
            <span style={{ color: '#8EA900' }}>guide users with digital payment experience under parental supervision.</span>
          </p>
        </div>
      </article>
    </>
  )
}

function ServiceIdeationSection() {
  return (
    <>
      <article id="how-might-we" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">How might we</h2>
        <div className="space-y-4">
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">How might we</p>
          <ul className="max-w-[960px] list-disc space-y-2.5 pl-5 text-[18px] leading-[1.7] text-[#64748B] marker:text-[#94a3b8]">
            {howMightWePrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </div>
      </article>

      <article id="brain-stroming" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
        <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Brain Stroming</h2>
        <div className="space-y-4">
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Brain Stroming</p>
          <div className="max-w-[960px]">
            <div className="relative w-full max-w-[800px] overflow-hidden rounded-[16px] bg-white">
              <div className="relative aspect-[800/450] w-full">
                <iframe
                  title="Brain storming FigJam board"
                  src="https://embed.figma.com/board/WJtTIcyvu0NvtzxB6Ejt70/Service-Design?node-id=11-2791&embed-host=share"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

function ServicePrototypeSection() {
  return (
    <article id="service-prototype-content" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Prototype</h2>
      <div className="space-y-4">
        <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Service Prototype</p>
        <p className="max-w-[920px] text-[18px] leading-[1.7] text-[#64748B]">
          The prototype demonstrates how blueprint decisions translate into real interaction flows for teens and parents.
        </p>
        <div className="max-w-[960px] overflow-hidden rounded-[16px]">
          <img src={CDN_IMAGES.serviceDesign.servicePrototype} alt="Service prototype screens" className="h-auto w-full object-contain" />
        </div>
      </div>
    </article>
  )
}

function ServiceSolutionChannelSection() {
  return (
    <article id="solution-channel" className="grid scroll-mt-24 grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
      <h2 className="text-[16px] font-regular leading-[1.3] tracking-[-0.02em] text-[#8899B2]">Solution Channel</h2>
      <div className="space-y-3">
        <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Bhavnidhi App</p>
        <div className="space-y-1 border-t border-line pt-3">
          <h3 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Information Architecture</h3>
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Structure for Clarity</p>
        </div>
        <div className="max-w-[960px] overflow-hidden rounded-[16px]">
          <img src={CDN_IMAGES.serviceDesign.informationArchitectureApp} alt="Bhavnidhi app information architecture" className="h-auto w-full object-contain" />
        </div>
        <div className="space-y-4">
          <h3 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Task Flow</h3>
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Walk Through journey</p>
          <div className="space-y-4">
            {solutionTaskFlows.map((flow) => (
              <div key={flow.id} className="space-y-2 rounded-[16px] p-3">
                <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">{flow.title}</p>
                <div className="overflow-hidden rounded-[12px]">
                  <img src={flow.image} alt={flow.alt} className="h-auto w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="PaymentDevice border-t border-line pt-3">
          <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569] mt-8">Bhavnidhi Device</p>
          <div className="space-y-1 border-t border-line pt-3">
            <h3 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Information Architecture</h3>
            <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Structure for Clarity</p>
          </div>
          <div className="max-w-[960px] overflow-hidden rounded-[16px]">
            <img
              src={CDN_IMAGES.serviceDesign.informationArchitectureDevice}
              alt="Bhavnidhi app information architecture on device"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="mt-4 space-y-4">
            <h3 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Task Flow</h3>
            <div className="space-y-4">
              {deviceTaskFlows.map((flow) => (
                <div key={flow.id} className="space-y-2 rounded-[16px] p-3">
                  <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">{flow.title}</p>
                  <div className="overflow-hidden rounded-[12px]">
                    <img src={flow.image} alt={flow.alt} className="h-auto w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Dashboard border-t border-line pt-3">
          <p className="mt-8 max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Dashboard</p>
          <div className="space-y-1 border-t border-line pt-3">
            <h3 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Information Architecture</h3>
            <p className="max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Structure for Clarity</p>
          </div>
          <div className="max-w-[960px] overflow-hidden rounded-[16px]">
            <img src={CDN_IMAGES.serviceDesign.informationArchitectureDashboard} alt="Dashboard information architecture" className="h-auto w-full object-contain" />
          </div>
          <div className="mt-4 space-y-4">
            <h3 className="text-[12px] tracking-[0.04em] text-[#9aa8bd]">Task Flow</h3>
            <div className="space-y-4">
              {dashboardTaskFlows.map((flow) => (
                <div key={`dashboard-${flow.id}`} className="space-y-2 rounded-[16px] p-3">
                  <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">{flow.title}</p>
                  <div className="overflow-hidden rounded-[12px]">
                    <img src={flow.image} alt={`Dashboard ${flow.alt.toLowerCase()}`} className="h-auto w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Support border-t border-line pt-3">
          <p className="mt-8 max-w-[920px] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#475569]">Support Channel</p>
          <div className="space-y-1 border-t border-line pt-3">
          </div>
          <div className="max-w-[960px] overflow-hidden rounded-[16px]">
            <img src={CDN_IMAGES.serviceDesign.supportChannel} alt="Support channel flow" className="h-auto w-full object-contain" />
          </div>
        </div>
      </div>
    </article>
  )
}

function ServiceDesignCaseStudy({ onBack, onResumeClick }) {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-10 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <Breadcrumbs />

      <section className="case-study-hero motion-page-enter mt-9 border-b border-line pb-10" style={{ '--motion-delay': '80ms' }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-[16px] text-[#64748B]">
              <span className="inline-flex h-7 items-center rounded-full border border-[#dbe4ef] bg-white px-3 text-[12px] tracking-[0.06em] text-[#5f6f86]">
                CASE STUDY
              </span>
            </p>
            <h1 className="mt-4 max-w-[680px] text-[36px] font-medium leading-[1.2] tracking-[-0.015em] text-[#64748B]">
            Empowering adolescents with digital financial activities 
            </h1>
          </div>
          <div className="max-w-[420px] text-[18px] leading-[1.45] text-[#7a889f] md:justify-self-end">
          <div className="mt-6 flex justify-center">
            <img
              src={CDN_IMAGES.serviceDesign.brand}
              alt="Brand.Png"
              className="rounded-[12px] h-auto w-[220px] object-contain"
              style={{ maxWidth: 320 }}
            />
          </div>
    
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[18px] border border-[#e7edf5] bg-[#f7fafc]">
          <ImageWithSkeleton
            className="h-full w-full"
            imgClassName="block h-full w-full max-w-none object-cover"
            src={CDN_IMAGES.serviceDesign.cover}
            alt="Service design case study banner"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-6">
          <div>
            <p className="text-[14px] uppercase tracking-[0.08em] text-[#9aa8bd]">Role</p>
            <p className="mt-2 text-[18px] text-[#64748B]">Service Designer</p>
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-[0.08em] text-[#9aa8bd]">Timeline</p>
            <p className="mt-2 text-[18px] text-[#64748B]">7 weeks, 2024</p>
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-[0.08em] text-[#9aa8bd]">Scope</p>
            <p className="mt-2 text-[18px] text-[#64748B]">Discovery, blueprinting, interaction framework, handoff</p>
          </div>
        </div>
      </section>

      <section
        className="case-study-content motion-page-enter grid grid-cols-1 gap-8 py-8 md:grid-cols-[220px_1fr] md:gap-10"
        style={{ '--motion-delay': '160ms' }}
      >
        <aside className="hidden md:block">
          <TableOfContents sections={serviceTocSections} onBack={onBack} />
        </aside>

        <div className="space-y-8">
          <SectionGroup id="overview" title="Overview">
            <ServiceOverviewSection />
          </SectionGroup>

          <SectionGroup id="research" title="Research">
            <ServiceResearchSection />
          </SectionGroup>

          <SectionGroup id="synthesis" title="Synthesis">
            <ServiceSynthesisSection />
          </SectionGroup>

          <SectionGroup id="design" title="Design">
            <ServiceIdeationSection />
            <div className="border-b border-line pb-8">
              <div className="max-w-[960px] overflow-hidden rounded-[16px]">
                <img src={CDN_IMAGES.serviceDesign.branding} alt="Service design branding" className="h-auto w-full object-contain" />
              </div>
            </div>
            <ServiceArticle block={closingBlocks[0]} />
            <ServicePrototypeSection />
            <ServiceSolutionChannelSection />
          </SectionGroup>

          {closingBlocks.slice(1).map((block) => (
            <SectionGroup key={block.id} id={block.id} title={block.title}>
              <ServiceArticle block={block} />
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

export default ServiceDesignCaseStudy
