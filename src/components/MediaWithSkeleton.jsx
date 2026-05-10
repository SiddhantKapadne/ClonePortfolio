import { useEffect, useState } from 'react'

/**
 * Image with shimmer skeleton; fades in when loaded.
 * Build-time optimization: vite-plugin-image-optimizer (see vite.config.js).
 */
export function ImageWithSkeleton({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority,
  variant = 'fade',
  width,
  height,
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [src])

  const fetchProps = {}
  if (loading === 'eager') {
    fetchProps.fetchPriority = fetchPriority ?? 'high'
  } else if (fetchPriority !== undefined && fetchPriority !== null) {
    fetchProps.fetchPriority = fetchPriority
  } else if (loading === 'lazy') {
    fetchProps.fetchPriority = 'low'
  }

  const imgClasses =
    variant === 'blur'
      ? `relative z-[2] will-change-[filter,opacity,transform] transition-[filter,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-opacity motion-reduce:duration-300 motion-reduce:ease-out ${
          loaded
            ? 'opacity-100 blur-0 scale-100 motion-reduce:blur-none'
            : 'opacity-0 blur-2xl scale-[1.06] motion-reduce:blur-none'
        } ${imgClassName}`
      : `relative z-[2] transition-opacity duration-300 motion-reduce:transition-none ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`media-skeleton-micro pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300 motion-reduce:transition-none ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        {...fetchProps}
        className={imgClasses}
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) {
            setLoaded(true)
          }
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  )
}

/** Art grid / gallery: blur-up reveal + skeleton (same as former ProgressiveArtImage). */
export function ProgressiveArtImage({ src, alt, className = '', imgClassName = '', loading = 'lazy' }) {
  return (
    <ImageWithSkeleton
      src={src}
      alt={alt}
      className={className}
      imgClassName={imgClassName}
      loading={loading}
      variant="blur"
    />
  )
}

/**
 * Video with shimmer skeleton until first frame / metadata is ready.
 */
export function VideoWithSkeleton({
  className = '',
  videoClassName = '',
  src,
  type = 'video/mp4',
  children,
  onLoadedData,
  onCanPlay,
  onError,
  fetchPriority,
  preload = 'metadata',
  ...videoProps
}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
  }, [src])

  const markReady = () => setReady(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`media-skeleton-micro pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300 motion-reduce:transition-none ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      />
      <video
        {...videoProps}
        preload={preload}
        {...(fetchPriority ? { fetchPriority } : {})}
        className={`relative z-[2] transition-opacity duration-300 motion-reduce:transition-none ${
          ready ? 'opacity-100' : 'opacity-0'
        } ${videoClassName}`}
        ref={(el) => {
          if (el && el.readyState >= 2) {
            setReady(true)
          }
        }}
        onLoadedData={(e) => {
          onLoadedData?.(e)
          markReady()
        }}
        onCanPlay={(e) => {
          onCanPlay?.(e)
          markReady()
        }}
        onError={(e) => {
          onError?.(e)
          markReady()
        }}
      >
        {children ?? <source src={src} type={type} />}
      </video>
    </div>
  )
}

/** Alias: same as `ImageWithSkeleton` — use on case studies and anywhere you want the named “MediaWithSkeleton” API. */
export { ImageWithSkeleton as MediaWithSkeleton }
