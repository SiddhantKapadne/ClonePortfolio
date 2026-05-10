import profileImage from '../assets/profile-image.png'

const CDN_VIDEOS = {
  mapInApp: 'https://res.cloudinary.com/dqozthzrq/video/upload/v1778001774/MapInAppThumbnail_qz9ugu.webm',
  chatbot: 'https://res.cloudinary.com/dqozthzrq/video/upload/v1778001755/ChatbotThumbnail_feikou.webm',
  serviceDesign: 'https://res.cloudinary.com/dqozthzrq/video/upload/v1778001729/ServiceDesign_thumbnail_julwub.webm',
  arthAi: 'https://res.cloudinary.com/dqozthzrq/video/upload/v1778001711/ArthAi-Thumbnail_umhfbi.webm',
}

// Tier 2/3 pools are collected via glob to keep preload config aligned with assets added over time.
const caseStudyImageModules = import.meta.glob('../assets/case-studies/**/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default',
})
const caseStudyVideoModules = import.meta.glob('../assets/case-studies/**/*.webm', {
  eager: true,
  import: 'default',
})
const otherSectionImageModules = import.meta.glob('../assets/{Photography,Painting,graphics,about-images}/**/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default',
})

// Tier 1: above-the-fold homepage media shown immediately after loader.
const homepageFirstPriority = {
  images: [profileImage],
  videos: [CDN_VIDEOS.arthAi, CDN_VIDEOS.serviceDesign, CDN_VIDEOS.chatbot, CDN_VIDEOS.mapInApp],
}

const homepageAssets = new Set([...homepageFirstPriority.images, ...homepageFirstPriority.videos])
// Tier 2: case-study assets are warmed up right after homepage media.
const caseStudySecondPriority = {
  images: Object.values(caseStudyImageModules).filter((url) => !homepageAssets.has(url)),
  videos: Object.values(caseStudyVideoModules).filter((url) => !homepageAssets.has(url)),
}
// Tier 3: non-critical gallery/about assets are deferred.
const otherSectionsThirdPriority = {
  images: Object.values(otherSectionImageModules),
  videos: [],
}

function preloadImage(url, fetchPriority = 'auto') {
  const image = new Image()
  image.decoding = 'async'
  image.loading = 'eager'
  image.fetchPriority = fetchPriority
  image.src = url
}

function preloadVideo(url, as = 'metadata') {
  const video = document.createElement('video')
  video.preload = as
  video.src = url
  video.muted = true
  video.playsInline = true
  video.load()
}

function preloadBatch(batch, imagePriority, videoPreload = 'metadata') {
  batch.images.forEach((url) => preloadImage(url, imagePriority))
  batch.videos.forEach((url) => preloadVideo(url, videoPreload))
}

export function beginFirstVisitPreload() {
  if (typeof window === 'undefined') return () => {}

  // Priority sequence: homepage first, case studies second, remaining sections third.
  preloadBatch(homepageFirstPriority, 'high', 'auto')

  const secondTimer = window.setTimeout(() => {
    preloadBatch(caseStudySecondPriority, 'high', 'auto')
  }, 80)

  const thirdTimer = window.setTimeout(() => {
    preloadBatch(otherSectionsThirdPriority, 'auto', 'metadata')
  }, 700)

  return () => {
    window.clearTimeout(secondTimer)
    window.clearTimeout(thirdTimer)
  }
}
