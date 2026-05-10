const resumeCards = [
  {
    title: 'Summary',
    content: 'Navigating towards clarity with the intent to make technological experiences more humane.',
  },
  {
    title: 'Work Experience',
    rows: [
      { label: 'Role', value: 'User Experience Design Intern' },
      { label: 'Organization', value: 'Kotak811' },
      { label: 'Duration', value: '23 Jun 2025 - 23 Dec 2025' },
      {
        label: 'Highlights',
        value:
          'Identified user problems from product requirements, created user flows and UX journeys, and designed conversational AI-human interaction.',
      },
    ],
  },
  {
    title: 'Education',
    rows: [
      {
        label: 'Master of Design',
        value: 'Information Design, National Institute of Design Bengaluru (2023 - Present), AGPA 8.46',
      },
      {
        label: 'Bachelor of Engineering',
        value: 'Information Technology, University of Mumbai (2017 - 2020), CGPI 6.75',
      },
      {
        label: 'Diploma',
        value: 'Information Technology, MSBTE (2014 - 2017), 79.65%',
      },
    ],
  },
  {
    title: 'Certification',
    rows: [
      { label: 'Institute', value: 'Interaction Design Foundation (IxDF)' },
      { label: 'Topics', value: 'Visual Design, Design Thinking, Gestalt Psychology, HCI, Usability, Journey Mapping' },
      { label: 'Member Since', value: '2022' },
    ],
  },
  {
    title: 'Publications & Workshop',
    rows: [
      { label: 'Paper', value: 'Web access for visually impaired people - Yash Adke, Siddhant Kapadne' },
      {
        label: 'Paper',
        value: 'Nostalgia and meaningfulness, sense of self, and emotional reward processing - Siddhant Kapadne',
      },
      {
        label: 'Workshop',
        value: "Creative coding using p5.js - Nisha Ekka, Siddhant Kapadne (NID Bengaluru D'frost 2025)",
      },
    ],
  },
  {
    title: 'Skills',
    rows: [
      {
        label: 'Industry',
        value: 'UX Audit, UX Journey, Information Architecture, Banking Workflow, Conversational AI, Design Thinking',
      },
      {
        label: 'Tools',
        value: 'Figma, Adobe Illustrator, Adobe Photoshop, Blender, Colab, Confluence, Jira, Miro, Postman',
      },
      {
        label: 'Personal',
        value: 'Problem Solving, Strategic Planning, Public Presentation, Team Building, Negotiation, Leadership',
      },
    ],
  },
]

function ResumeCard({ title, content, rows }) {
  return (
    <section className="rounded-2xl border border-line bg-white/70 p-4">
      <h3 className="text-[15px] font-medium text-[#64748B]">{title}</h3>
      {content ? <p className="mt-2 text-sm leading-[1.55] text-[#5f7088]">{content}</p> : null}
      {rows ? (
        <div className="mt-3">
          {rows.map((row, index) => (
            <div
              key={`${row.label}-${index}`}
              className={`grid grid-cols-[110px_1fr] gap-3 py-2.5 text-sm ${index === 0 ? '' : 'border-t border-[#e8edf5]'}`}
            >
              <p className="font-medium text-[#8899B2]">{row.label}</p>
              <p className="leading-[1.5] text-[#64748B]">{row.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}

function ResumeDrawer({ isOpen, onClose }) {
  return (
    <>
      <button
        type="button"
        aria-label="Close resume panel overlay"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[#0f172a]/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[560px] border-l border-line bg-canvas shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } motion-reduce:transition-none`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <div>
              <p className="text-sm text-[#8899B2]">Resume</p>
              <h2 className="text-[22px] font-medium text-[#64748B]">Siddhant Kapadne</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-line bg-white p-2 text-[#64748B] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
              aria-label="Close resume panel"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div className="text-xs text-[#8899B2]">Mumbai 400042 - +91-9920565310</div>
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#FF4F00] bg-[#FF4F00] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:brightness-95 active:brightness-90"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 3v8m0 0 3-3m-3 3-3-3M4 13.5V15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download resume
            </a>
          </div>

          <div className="space-y-4 overflow-y-auto px-6 py-5">
            {resumeCards.map((card) => (
              <ResumeCard key={card.title} title={card.title} content={card.content} rows={card.rows} />
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default ResumeDrawer
