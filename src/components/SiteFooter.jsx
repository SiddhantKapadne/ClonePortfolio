import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const footerNavLinks = [
  { label: 'Work', to: '/' },
  { label: 'Art', to: '/art' },
  { label: 'About', to: '/about' },
]

const CONTACT_EMAIL = 'ksiddhant46@gmail.com'

function SiteFooter({ onResumeClick }) {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }, [])

  return (
    <>
      <footer className="pt-11 pb-9 text-[#4b505c]">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-line pb-10 md:flex-row md:gap-4">
          <div className="flex flex-row items-start justify-start justify-self-start">
            <p className="pr-8 text-[16px] font-medium italic tracking-[-0.02em] text-[#64748B] md:text-[16px]">
              Siddhant&apos;s Portfolio
            </p>

            <ul className="footer_links space-y-2 text-[16px] leading-[1.16] text-[#64748B] md:text-[16px]">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault()
                    onResumeClick?.()
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end md:text-right">
            <p className="text-[24px] leading-[1.1] text-[#64748B] md:text-[16px]">👋🏼 Lets Work together</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 md:justify-end">
              <button
                type="button"
                onClick={copyEmail}
                aria-label={emailCopied ? 'Email copied to clipboard' : 'Copy email address'}
                title={emailCopied ? 'Copied' : 'Copy email'}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#8899B2] transition-colors duration-200 hover:text-[#FF4F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90a9cc] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {emailCopied ? (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block min-w-0 break-all text-[28px] text-[#64748B] md:text-[24px]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <p className="pt-7 text-center text-[16px] text-[#7f8794] md:text-[16px]">
          Built with light roast Arabica coffee &amp; React.js
        </p>
      </footer>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 right-0 z-[80] flex max-w-[min(60vw-2rem,20rem)] items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3 shadow-soft transition-all duration-300 ease-out motion-reduce:transition-none ${
          emailCopied ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <p className="text-left text-[14px] font-medium leading-snug tracking-[-0.01em] text-[#FF4F00]">Email ID copied</p>
      </div>
    </>
  )
}

export default SiteFooter
