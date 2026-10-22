import { useRef, useState, useEffect } from 'react'
import { config } from '../config'

export default function FeaturedPhoto() {
  const { brand } = config
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowH = window.innerHeight
      // Only parallax when in view
      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height)
        setOffset((progress - 0.5) * 30) // subtle ±15px
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={ref}
      className="container-sowan mt-4 mb-6 opacity-0-init animate-scale-in animation-delay-700"
    >
      <figure className="relative group">
        {/* Frame border */}
        <div className="relative rounded-[1.75rem] overflow-hidden border border-amber/25 shadow-2xl shadow-black/50">
          {/* corner ticks */}
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber/60 z-20" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber/60 z-20" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-amber/60 z-20" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-amber/60 z-20" />

          {/* Image with parallax */}
          <div className="relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-wood">
            <img
              src={brand.featuredPhoto}
              alt="Suasana Kopi Sowan di malam hari"
              onLoad={() => setLoaded(true)}
              className="absolute inset-0 w-full h-[115%] object-cover -top-[7%] transition-transform duration-700 will-change-transform"
              style={{ transform: `translateY(${offset}px) scale(1.05)` }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/60 via-transparent to-transparent" />

            {/* Caption */}
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.35em] text-amber/80 uppercase mb-1">
                    Featured · No. 01
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl text-ivory text-shadow-warm leading-tight">
                    {brand.featuredPhotoCaption}
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="font-mono text-[9px] tracking-[0.3em] text-ivory/40 uppercase">
                    ISO 800 · f/1.8
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.3em] text-ivory/40 uppercase">
                    35mm · 22:14
                  </div>
                </div>
              </div>
            </figcaption>
          </div>
        </div>

        {/* Editorial caption below */}
        <div className="flex items-center gap-3 mt-3 px-1">
          <span className="h-px flex-1 bg-ivory/10" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-ivory/40 uppercase">
            Warm light, slow night.
          </span>
          <span className="h-px flex-1 bg-ivory/10" />
        </div>
      </figure>
    </section>
  )
}
