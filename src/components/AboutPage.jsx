import { useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import { ImageWithSkeleton } from './MediaWithSkeleton'
import { CDN_IMAGES } from '../constants/media'

if (typeof Image !== 'undefined') {
  const preloadAboutProfile = new Image()
  preloadAboutProfile.src = CDN_IMAGES.aboutProfile
}

const timelineItems = [
  {
    year: '1998',
    title: 'Birth year',
    copy: '4th May 1998, I am born in Mumbai, the first child in a family of 4+1. My family used to live in one room with a small garden outside, where there was my favourite tree to climb on at the age of 3',
    imageSrc: CDN_IMAGES.aboutTimeline['1998'],
  },
  {
    year: '2007',
    title: 'Eureka',
    copy: 'My first interaction with a computer at my cousin\'s house. Nobody taught me how to use it, yet I was good at it, especially drawing on paint software, which was my Eureka moment.',
    imageSrc: CDN_IMAGES.aboutTimeline['2007'],
  },
  {
    year: '2014',
    title: 'Rollercoaster',
    copy: 'Completed school, and my parents bought me my first computer. I got admission in Diploma polytechnic for information technology, started learning basic coding C, C++, Java, and confusion started, followed by ups and downs. ',
    imageSrc: CDN_IMAGES.aboutTimeline['2014'],
  },
  {
    year: '2017',
    title: 'Aced Diploma',
    copy: 'Built an app for visually impaired people and won a first prize, my first trophy so far, took admission for the Bachelor of Engineering with hopes to learn more about graphical user interface, thus getting into complexity. ',
    imageSrc: CDN_IMAGES.aboutTimeline['2017'],
  },
  {
    year: '2020',
    title: 'Transformation',
    copy: 'Got in good shape, took a trip to Manali, and after that, the whole world went into lockdown. I still kept learning, made a project using blockchain technology, got 2nd prize in a hackathon, did a web design internship, and learned React.js, web3, and coding just became a tool. ',
    imageSrc: CDN_IMAGES.aboutTimeline['2020'],
  },
  {
    year: '2021',
    title: 'Self Discovery',
    copy: 'I worked as a frontend developer and became curious about how UI decisions are made and what is UX, took a leap of faith, and started learning UXUI design and exploring my creative side.',
    imageSrc: CDN_IMAGES.aboutTimeline['2021'],
  },
  {
    year: '2023',
    title: 'Niched down',
    copy: 'Got into India’s oldest and best Design school NID, for post-graduation in information design, a new way of learning and growing.',
    imageSrc: CDN_IMAGES.aboutTimeline['2023'],
  },
  {
    year: '2025',
    title: 'Design Industry ',
    copy: 'After successfully completing the 4th semester, I found a graduation project sponsor and an internship at Kotak811. Worked in an office environment, and here I presented the company with a design brief of Arth AI. ',
    imageSrc: CDN_IMAGES.aboutTimeline['2025'],
  },
  {
    year: '2026',
    title: 'Knocking doors',
    copy: 'Just submitted my graduation project documentation to the college, waiting for jury dates, and in the meantime, applying for a UXUI, Product Designer position actively. is there any opportunity?',
    imageSrc: CDN_IMAGES.aboutTimeline['2026'],
  },
]

function AboutField({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-2.5">
      <p className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">{label}</p>
      <p className="text-right text-[16px] leading-[1.35] tracking-[-0.01em] text-[#64748B]">{value}</p>
    </div>
  )
}

function SocialChip({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#64748B] transition-colors duration-200 hover:text-[#FF4F00]"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

function AboutPage({ onResumeClick }) {
  const [activeYear, setActiveYear] = useState('2026')
  const activeTimelineItem =
    timelineItems.find((item) => item.year === activeYear) ?? timelineItems[timelineItems.length - 1]

  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-10 md:px-12 lg:px-[120px]">
      <NavBar onResumeClick={onResumeClick} />
      <Breadcrumbs />

      <section className="about_content motion-page-enter py-10 md:py-12" style={{ '--motion-delay': '80ms' }}>
        <div className="mx-auto w-full">
          <ImageWithSkeleton
            src={CDN_IMAGES.aboutProfile}
            alt="Siddhant profile"
            className="about_profile_image min-h-[220px] w-full overflow-hidden rounded-[32px] bg-[#d8dee6]"
            imgClassName="block min-h-[220px] h-auto w-full object-cover"
            loading="eager"
            fetchPriority="high"
            variant="fade"
          />

          <div className="about_details_content mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            <div className="timeline_section motion-page-stagger p-1" style={{ '--motion-delay': '140ms' }}>
              <p className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Timeline</p>
              <div className="mt-4 border-b border-line pb-3">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                  {timelineItems.map((item) => (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setActiveYear(item.year)}
                      className={`text-[12px] font-normal leading-none tracking-[-0.01em] transition-colors duration-200 ${
                        item.year === activeYear ? 'font-medium text-[#FF4F00]' : 'text-[#8899B2] hover:text-[#475569]'
                      }`}
                      aria-current={item.year === activeYear ? 'true' : undefined}
                    >
                      {item.year}
                    </button>
                  ))}
                </div>
              </div>

              <div
                key={activeTimelineItem.year}
                className="time_content motion-page-enter mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_220px] md:items-start"
                style={{ '--motion-delay': '0ms' }}
              >
                <ImageWithSkeleton
                  key={activeTimelineItem.year}
                  src={activeTimelineItem.imageSrc}
                  alt={`${activeTimelineItem.year} timeline visual`}
                  className="h-[180px] overflow-hidden rounded-[22px] bg-[#d8dee6] md:h-[220px]"
                  imgClassName="h-full w-full object-cover"
                  loading="eager"
                  variant="fade"
                />
                <div className="space-y-4">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2] tracking-[4px]">{activeTimelineItem.title}</p>
                  <p className="text-[16px] leading-[1.5] tracking-[-0.01em] text-[#64748B]">{activeTimelineItem.copy}</p>
                </div>
              </div>
            </div>

            <div className="about_details_section w-full p-1 md:ml-auto md:justify-self-end sm:w-[50%] md:w-[80%]">
              <AboutField label="Name" value="Siddhant Kapadne" />
              <AboutField label="Age" value="27" />
              <AboutField label="Location" value="India" />
              <AboutField label="Email" value="ksiddhant46@gmail.com" />

              <div className="mt-4">
                <p className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Summary</p>
                <p className="mt-3 text-[18px] leading-[1.7] tracking-[-0.01em] text-[#64748B]">
                  I design product experiences with strong visual form and thoughtful interaction patterns. I enjoy
                  simplifying complex flows, creating consistent design systems, and crafting stories that help teams
                  align and ship with confidence.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[12px] uppercase tracking-[0.12em] text-[#8899B2]">Connect with me</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <SocialChip label="LinkedIn" href="https://www.linkedin.com/in/siddhant-kapadne-459013159">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                      <path d="M6.75 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5.5 9.5h2.5V18H5.5V9.5Zm4 0h2.4v1.2h.03c.33-.63 1.14-1.3 2.35-1.3 2.51 0 2.97 1.65 2.97 3.79V18h-2.5v-4.1c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17V18h-2.5V9.5Z" />
                    </svg>
                  </SocialChip>
                  <SocialChip label="Medium" href="https://ksiddhant46.medium.com/">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                      <circle cx="6" cy="12" r="3.5" />
                      <ellipse cx="13.5" cy="12" rx="2.8" ry="3.5" />
                      <ellipse cx="19.5" cy="12" rx="1.5" ry="3.5" />
                    </svg>
                  </SocialChip>
                  <SocialChip label="GitHub" href="https://github.com/SiddhantKapadne">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                      <path d="M12 3.8A8.2 8.2 0 0 0 9.4 19.8c.4.08.55-.17.55-.38v-1.33c-2.24.48-2.7-.95-2.7-.95-.36-.92-.88-1.17-.88-1.17-.72-.5.05-.49.05-.49.8.06 1.21.82 1.21.82.7 1.2 1.85.86 2.3.66.08-.5.27-.86.5-1.06-1.78-.2-3.66-.9-3.66-3.98 0-.88.31-1.6.82-2.16-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.16 0 3.09-1.89 3.77-3.69 3.97.28.24.53.72.53 1.45v2.14c0 .21.14.47.56.38A8.2 8.2 0 0 0 12 3.8Z" />
                    </svg>
                  </SocialChip>
                  <SocialChip label="Behance" href="https://www.behance.net/ksiddhant4dbc6">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                      <path d="M4 7h5.2c2.1 0 3.3 1.1 3.3 2.7 0 1.1-.5 1.9-1.4 2.3 1.2.3 1.9 1.3 1.9 2.7 0 1.9-1.4 3.3-3.8 3.3H4V7Zm4.8 4.4c.9 0 1.4-.4 1.4-1.1 0-.7-.5-1.1-1.4-1.1H6.4v2.2h2.4Zm.2 4.5c1 0 1.6-.5 1.6-1.3 0-.8-.6-1.3-1.6-1.3H6.4v2.6H9Zm5-7.3h6v1.2h-6V8.6Zm6 6h-4.3c.1 1 .7 1.5 1.6 1.5.7 0 1.2-.3 1.4-.8h1.2c-.3 1.4-1.4 2.3-2.7 2.3-1.8 0-3-1.3-3-3.3s1.2-3.3 3-3.3c1.9 0 2.9 1.5 2.8 3.6Zm-1.3-1c-.1-.9-.6-1.4-1.4-1.4-.8 0-1.3.5-1.5 1.4h2.9Z" />
                    </svg>
                  </SocialChip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="motion-page-enter" style={{ '--motion-delay': '180ms' }}>
        <SiteFooter onResumeClick={onResumeClick} />
      </div>
    </main>
  )
}

export default AboutPage
