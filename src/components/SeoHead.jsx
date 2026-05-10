import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_CANONICAL_ORIGIN, SITE_OG_IMAGE_PATH } from '../constants/site'

const ABSOLUTE_OG_IMAGE = `${SITE_CANONICAL_ORIGIN}${SITE_OG_IMAGE_PATH}`

const ROUTE_SEO = {
  '/': {
    title: 'Siddhant Kapadne — UX & Product Design Portfolio | M.Des NID',
    description:
      'Portfolio of Siddhant Kapadne: product design, UX/UI, and selected case studies. M.Des Information Design, National Institute of Design (NID). Design work including Kotak811 and Arth AI.',
  },
  '/about': {
    title: 'About — Siddhant Kapadne | Designer, M.Des NID',
    description:
      'About Siddhant Kapadne: journey from engineering to UX and product design, postgraduate studies at NID (Information Design), and links to LinkedIn, Behance, and more.',
  },
  '/art': {
    title: 'Art & Photography — Siddhant Kapadne',
    description: 'Visual work, art, and photography by Siddhant Kapadne — part of the portfolio at siddhant.website.',
  },
  '/work/chatbot': {
    title: 'Chatbot Design Case Study — Siddhant Kapadne',
    description:
      'Case study: Kotak811 chatbot design — UX, conversation design, and product thinking by Siddhant Kapadne.',
  },
  '/work/service-design': {
    title: 'Service Design Case Study — Siddhant Kapadne',
    description: 'Service design case study: research, journey, and systems thinking by Siddhant Kapadne.',
  },
  '/work/arth-ai': {
    title: 'Arth AI at Kotak811 — Case Study | Siddhant Kapadne',
    description:
      'Case study: Arth AI at Kotak811 — product and UX design for an AI experience, by Siddhant Kapadne.',
  },
  '/work/map': {
    title: 'Map in App — Case Study | Siddhant Kapadne',
    description: 'Case study: Map in App — mapping music discovery and UX for a Shazam-related concept, by Siddhant Kapadne.',
  },
}

const PERSON_SAME_AS = [
  'https://www.linkedin.com/in/siddhant-kapadne-459013159',
  'https://ksiddhant46.medium.com/',
  'https://github.com/SiddhantKapadne',
  'https://www.behance.net/ksiddhant4dbc6',
]

function setMeta(attrName, key, content) {
  const selector = `meta[${attrName}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkRel(rel, href) {
  const selector = `link[rel="${rel}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function injectStructuredData() {
  const id = 'portfolio-schema-jsonld'
  if (document.getElementById(id)) return

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_CANONICAL_ORIGIN}/#website`,
        name: 'Siddhant Kapadne — Portfolio',
        url: `${SITE_CANONICAL_ORIGIN}/`,
        description:
          'UX and product design portfolio by Siddhant Kapadne — M.Des Information Design, NID; case studies in fintech and digital products.',
        inLanguage: 'en',
        publisher: { '@id': `${SITE_CANONICAL_ORIGIN}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_CANONICAL_ORIGIN}/#person`,
        name: 'Siddhant Kapadne',
        url: `${SITE_CANONICAL_ORIGIN}/`,
        image: ABSOLUTE_OG_IMAGE,
        jobTitle: 'Product Designer',
        description:
          'Product and UX designer with an M.Des in Information Design from the National Institute of Design (NID). Portfolio of case studies and visual work.',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'National Institute of Design',
          alternateName: 'NID',
        },
        sameAs: PERSON_SAME_AS,
      },
    ],
  }

  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(graph)
  document.head.appendChild(script)
}

/**
 * Updates document title, canonical URL, Open Graph, Twitter, and default meta tags per route.
 */
export default function SeoHead() {
  const { pathname } = useLocation()
  const structuredDataDone = useRef(false)

  useEffect(() => {
    if (!structuredDataDone.current) {
      injectStructuredData()
      structuredDataDone.current = true
    }
  }, [])

  useEffect(() => {
    const path = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    const config = ROUTE_SEO[path] ?? ROUTE_SEO['/']
    const canonicalUrl = `${SITE_CANONICAL_ORIGIN}${path === '/' ? '/' : path}`

    document.title = config.title
    setMeta('name', 'description', config.description)
    setMeta('name', 'author', 'Siddhant Kapadne')
    setMeta('name', 'robots', 'index, follow')
    setMeta('name', 'googlebot', 'index, follow')

    setLinkRel('canonical', canonicalUrl)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Siddhant Kapadne — Portfolio')
    setMeta('property', 'og:title', config.title)
    setMeta('property', 'og:description', config.description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', ABSOLUTE_OG_IMAGE)
    setMeta('property', 'og:image:alt', 'Siddhant Kapadne — portfolio preview')
    setMeta('property', 'og:locale', 'en_IN')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', config.title)
    setMeta('name', 'twitter:description', config.description)
    setMeta('name', 'twitter:image', ABSOLUTE_OG_IMAGE)
  }, [pathname])

  return null
}
