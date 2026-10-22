import { config } from '../config'
import { IconArrowRight, IconCoffee, IconSteam, IconLeaf } from './Icons'

const categoryMeta = {
  'Espresso Based':  { icon: IconCoffee, hint: 'Bold & classic' },
  'Perkopian Susu':  { icon: IconSteam,  hint: 'Creamy & sweet' },
  'Non-Coffee':      { icon: IconLeaf,   hint: 'Caffeine-free' },
}

// Format price — handles both numbers and strings like "Ask Barista".
function formatPrice(price) {
  if (typeof price === 'number') return `Rp${price.toLocaleString('id-ID')}`
  return price
}

export default function FeaturedMenuCard({ onOpenMenu }) {
  const featuredCats = ['Espresso Based', 'Perkopian Susu', 'Non-Coffee']

  return (
    <section className="container-sowan mt-6 mb-6">
      <div className="relative rounded-3xl overflow-hidden border border-amber/20 bg-gradient-to-br from-wood-light/30 via-wood/40 to-wood-dark/60 backdrop-blur-sm">
        {/* Top label row */}
        <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-amber/60" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-amber/80 uppercase">
              Curated
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase">
            Vol. 01
          </span>
        </div>

        {/* Title */}
        <div className="px-5 sm:px-6 pb-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory leading-none">
            YOUR NEXT <span className="italic text-amber-light">SIP</span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory/55 mt-2">
            A few favorites from the menu — picked for tonight.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-3 gap-px bg-ivory/5 mx-5 sm:mx-6 mb-5 rounded-xl overflow-hidden">
          {featuredCats.map((cat) => {
            const data = config.menu.find((c) => c.category === cat)
            if (!data) return null
            const Icon = categoryMeta[cat]?.icon || IconCoffee
            const hint = categoryMeta[cat]?.hint || ''
            const sample = data.items[0]
            return (
              <button
                key={cat}
                onClick={onOpenMenu}
                className="btn-press group bg-wood-dark/80 hover:bg-wood p-3 sm:p-4 text-left transition-colors"
              >
                <Icon className="w-5 h-5 text-amber/70 mb-2 group-hover:text-amber-light transition-colors" />
                <div className="font-serif text-[13px] sm:text-sm text-ivory font-medium leading-tight">
                  {cat}
                </div>
                <div className="font-mono text-[9px] text-ivory/40 mt-1 hidden sm:block">
                  {hint}
                </div>
                <div className="mt-2 text-[11px] sm:text-xs text-amber-light/80 font-medium">
                  {sample.name}
                </div>
                <div className="font-mono text-[10px] text-ivory/50">
                  {formatPrice(sample.price)}
                </div>
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="px-5 sm:px-6 pb-5">
          <button
            onClick={onOpenMenu}
            className="btn-press group w-full flex items-center justify-between gap-3 rounded-xl border border-amber/40 bg-amber/10 hover:bg-amber/20 px-4 py-3 transition-colors"
          >
            <span className="font-serif text-sm sm:text-base text-ivory font-medium">
              View Full Menu
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-amber-light uppercase">
              Open
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Bottom ornament */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-radial-warm pointer-events-none" />
      </div>
    </section>
  )
}