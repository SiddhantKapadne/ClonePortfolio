import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import TableOfContents from './TableOfContents'
import { ImageWithSkeleton } from './MediaWithSkeleton'
import { CDN_IMAGES } from '../constants/media'

const chatbotSection = [
  {
    id: 'problem',
    title: 'Problem',
    description:
      'Third party chatbot, which was a product of over engineering & zero empathetic towards user',
    imageSrc: CDN_IMAGES.chatbot.problem,
  },
  {
    id: 'research',
    title: 'Research',
    description:
      'A chatbot is like a virtual assistant to help users with complex banking ideas, concepts, and actionable responses. Every banking app has chatbots that use very robotic conversations to guide user towards their task. ',
    imageSrc: null,
  },
  {
    id: 'solution',
    title: 'Solution',
    description:
      'Designing conversational Experience that is simpler, faster & interactive where users are guided appropratitly on 811 platoformDesigning conversational Experience that is simpler, faster & interactive, where users are guided appropriately on the 811 platform',
    imageSrc: null,
  },
  {
    id: 'deliverables',
    title: 'Deliverables',
    description:
      'UX flows and UI designs are been through series of feedback & design system check to ensure overall consistency.',
    imageSrc: CDN_IMAGES.chatbot.deliverables,
  },
]

const solutionSubtopics = [
  {
    title: 'Start Conversation',
    copy: 'Personalised message to welcome the user with an empathetic ask with a few suggestions of questions for the user and an open text field.',
    imageSrc: CDN_IMAGES.chatbot.start,
  },
  {
    title: 'Carousel of Products',
    copy: 'Interactive Ui elements in chat to inform user about the range of products that takes user to platform journey.',
    imageSrc: CDN_IMAGES.chatbot.carousel,
  },
  {
    title: 'Feedback',
    copy: 'With a Session end user are given a feedback form that have simplified input for further support & improvement in results',
    imageSrc: CDN_IMAGES.chatbot.feedback,
  },
  {
    title: 'Chat History',
    copy: 'With an Session end user are given a feedback form that are quicker to capture input.',
    imageSrc: CDN_IMAGES.chatbot.history1,
    extraImages: [CDN_IMAGES.chatbot.history2, CDN_IMAGES.chatbot.history3],
  },
]

function CaseImage({ alt, src, figureClassName = '', imageClassName = '', loading = 'lazy', fetchPriority }) {
  return (
    <figure className={`overflow-hidden rounded-2xl p-2 ${figureClassName}`}>
      <ImageWithSkeleton
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className="w-full overflow-hidden rounded-xl"
        imgClassName={`h-auto w-full rounded-xl object-contain transition-transform duration-300 ease-out hover:scale-[1.01] ${imageClassName}`}
        variant="fade"
      />
    </figure>
  )
}

function ChatbotCaseStudy({ onBack, onResumeClick }) {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-10 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <Breadcrumbs />

      <section className="chatbot_case_study_cover motion-page-enter mt-9 border-b border-line pb-8" style={{ '--motion-delay': '80ms' }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-[16px] font-normal text-[#64748B]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#34C759] shadow-[0_0_0_3px_rgba(52,199,89,0.18)]" />
              Shipped
            </p>
            <h1 className="mt-4 max-w-[660px] text-[36px] font-medium leading-[1.2] tracking-[-0.015em] text-[#64748B]">
              Kotak811 Chatbot
            </h1>
          </div>
          <div className="chatbot_description max-w-[400px] text-[28px] leading-[1.3] tracking-[-0.01em] text-[#64748B] md:justify-self-end">
            <p>
              Make banking queries simple &amp; a digital guide to help user
            </p>
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-[16px]">
          <ImageWithSkeleton
            src={CDN_IMAGES.chatbot.cover}
            alt="Kotak811 chatbot hero visual"
            className="w-full overflow-hidden rounded-[16px]"
            imgClassName="block h-auto w-full object-cover"
            loading="eager"
            fetchPriority="high"
            variant="fade"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-[0.42fr_0.58fr] md:gap-10">
          <div className="space-y-6">
            <div>
              <p className="text-[16px] text-[#8899B2]">My role</p>
              <p className="mt-1 text-[18px] leading-[1.1] tracking-[-0.01em] text-[#64748B]">UXUI Designer</p>
            </div>

            <div>
              <p className="text-[16px] text-[#8899B2]">Timeline</p>
              <p className="mt-1 text-[18px] leading-[1.1] tracking-[-0.01em] text-[#64748B]">Q3 &amp; Q4 2025</p>
            </div>

            <div>
              <p className="text-[16px] text-[#8899B2]">Skills</p>
              <p className="mt-1 max-w-[310px] text-[18px] leading-[1.25] tracking-[-0.01em] text-[#64748B]">
                UX Research, Product design, UX flow, UI Design, stakeholder communication, developer walk
                through
              </p>
            </div>
          </div>

          <div className="pl-0 md:pl-10">
            <p className=" text-[32px] leading-[1.18] tracking-[-0.015em] text-[#64748B]">
              Designed in-house chatbot for kotak 811. New chatbot that is developed on state of the art
              tech where I was responsible for UX and UI design, making conversational flows for user with
              intuitive interface to interact
            </p>
          </div>
        </div>
      </section>

      <section
        className="chatbot_content motion-page-enter grid grid-cols-1 gap-8 py-8 md:grid-cols-[220px_1fr] md:gap-10"
        style={{ '--motion-delay': '160ms' }}
      >
        <aside className="hidden md:block">
          <TableOfContents sections={chatbotSection} onBack={onBack} />
        </aside>

        <div className="space-y-8">
          {chatbotSection.map((section) => (
            <article id={section.id} key={section.id} className="grid grid-cols-1 gap-4 border-b border-line pb-8 md:grid-cols-[180px_1fr] md:gap-8">
              <h2 className="text-[16px] font-medium uppercase tracking-[0.08em] text-[#8899B2]">{section.title}</h2>
              <div className="space-y-4">
                <p className="text-[24px] leading-[1.6] text-[#64748B]">{section.description}</p>
                {section.imageSrc ? <CaseImage alt={`${section.title} visual`} src={section.imageSrc} /> : null}
                {section.extraImages ? (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {section.extraImages.map((imgSrc, index) => (
                      <CaseImage
                        key={`${section.title}-extra-${index}`}
                        alt={`${section.title} extra visual ${index + 1}`}
                        src={imgSrc}
                        figureClassName="w-full rounded-none p-0"
                        imageClassName="h-auto rounded-none object-contain"
                      />
                    ))}
                  </div>
                ) : null}

                {section.id === 'solution' ? (
                  <div className="space-y-8 pt-2">
                    {solutionSubtopics.map((topic) => (
                      <article key={topic.title} className="space-y-3 border-t border-line pt-6 first:border-t-0 first:pt-0">
                        <h3 className="text-[16px] font-regular leading-[1.3] text-[#8899B2]">{topic.title}</h3>
                        <p className="max-w-[880px] text-[18px] leading-[1.6] text-[#64748B]">{topic.copy}</p>
                        {topic.title === 'Chat History' && topic.extraImages ? (
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-6">
                            <CaseImage
                              alt={`${topic.title} visual`}
                              src={topic.imageSrc}
                              figureClassName="w-full rounded-none p-0"
                              imageClassName="max-h-[620px] rounded-none object-contain"
                            />
                            <div className="grid grid-cols-1 gap-4">
                              {topic.extraImages.map((imgSrc, index) => (
                                <CaseImage
                                  key={`${topic.title}-${index}`}
                                  alt={`${topic.title} extra visual ${index + 1}`}
                                  src={imgSrc}
                                  figureClassName="w-full rounded-none bg-[#f4f5f8] p-0"
                                  imageClassName="h-[186px] rounded-none object-cover"
                                />
                              ))}
                            </div>
                          </div>
                        ) : (
                          <CaseImage
                            alt={`${topic.title} visual`}
                            src={topic.imageSrc}
                            figureClassName={topic.title === 'Carousel of Products' ? 'w-full max-w-[690px]' : 'w-full max-w-[365px]'}
                          />
                        )}
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="chatbot_end_section motion-page-enter border-b border-line py-10" style={{ '--motion-delay': '240ms' }}>
        <p className="mb-6 text-[16px] leading-[1.4] text-[#64748B] max-w-[260px]">
          Collaborated with Pankti, Nirja, Raghav, Sandesh
        </p>
        <div className="mx-auto w-full max-w-[960px]">
          <CaseImage
            alt="Chatbot end visual"
            src={CDN_IMAGES.chatbot.end}
            figureClassName="mx-auto w-full rounded-none p-0"
            imageClassName="h-auto rounded-none object-contain"
          />
        </div>
      </section>

      <div className="motion-page-enter" style={{ '--motion-delay': '320ms' }}>
        <SiteFooter onResumeClick={onResumeClick} />
      </div>
    </main>
  )
}

export default ChatbotCaseStudy
