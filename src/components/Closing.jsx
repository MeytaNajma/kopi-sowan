import { config } from '../config'
import { IconBean } from './Icons'

export default function Closing() {
  const { brand } = config
  const year = new Date().getFullYear()

  return (
    <footer className="container-sowan mt-10 mb-8">
      {/* Decorative ornament */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber/40" />
        <IconBean className="w-3.5 h-3.5 text-amber/60 rotate-12" />
        <span className="h-px w-2 bg-amber/40" />
        <IconBean className="w-3.5 h-3.5 text-amber/60 -rotate-12" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber/40" />
      </div>

      {/* Big closing line */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-5xl text-ivory tracking-[0.06em] leading-tight text-shadow-warm">
          SEE YOU AT <span className="italic text-amber-light">SOWAN.</span>
        </h2>
        <p className="font-serif italic text-sm sm:text-base text-ivory/60 mt-3">
          made for coffee &amp; conversations.
        </p>
      </div>

      {/* Editorial divider */}
      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-ivory/10" />
        <span className="font-mono text-[9px] tracking-[0.35em] text-ivory/35 uppercase">
          {brand.edition}
        </span>
        <span className="h-px flex-1 bg-ivory/10" />
      </div>

      {/* Footer credits */}
      <div className="text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase">
          © {year} {brand.name}. All rights reserved.
        </div>
        <div className="font-mono text-[9px] tracking-[0.2em] text-ivory/25 uppercase mt-1.5">
          Crafted with warm light &amp; slow nights.
        </div>
      </div>
    </footer>
  )
}
