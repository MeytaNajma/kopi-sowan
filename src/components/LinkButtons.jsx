import { config } from '../config'
import {
  IconMenu, IconMapPin, IconChat, IconClock, IconArrowRight
} from './Icons'

export default function LinkButtons({ onOpenMenu, onOpenHours }) {
  const { socials, contact, location } = config

  const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <nav className="container-sowan mt-2 mb-6 space-y-3">
      {/* Primary — OUR MENU (most prominent) */}
      <button
        onClick={onOpenMenu}
        className="link-card btn-press group w-full text-left relative overflow-hidden rounded-2xl"
        aria-label="Open digital menu"
      >
        {/* Amber accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber group-hover:w-1.5 transition-all" />
        <div className="flex items-center gap-4 p-4 sm:p-5 pl-5 sm:pl-6">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber/15 border border-amber/30 flex items-center justify-center group-hover:bg-amber/25 transition-colors">
            <IconMenu className="w-6 h-6 sm:w-7 sm:h-7 text-amber-light" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-[0.3em] text-amber/70 uppercase">01 · Featured</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-semibold text-ivory leading-tight mt-0.5">
              OUR MENU
            </div>
            <div className="text-xs sm:text-sm text-ivory/60 mt-0.5">
              Explore our coffee and drinks.
            </div>
          </div>
          <IconArrowRight className="w-5 h-5 text-amber/60 group-hover:text-amber group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </button>

      {/* Secondary — FIND US ON MAPS */}
      <a
        href={location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link-card btn-press group block w-full text-left relative overflow-hidden rounded-2xl"
      >
        <div className="flex items-center gap-4 p-4 sm:p-5">
          <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-ivory/15 bg-wood-light/40 flex items-center justify-center group-hover:border-amber/40 transition-colors">
            <IconMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-ivory/80 group-hover:text-amber-light transition-colors" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-serif text-base sm:text-lg font-medium text-ivory">
              FIND US ON MAPS
            </div>
            <div className="text-xs sm:text-sm text-ivory/55">
              Come by and say hello.
            </div>
          </div>
          <IconArrowRight className="w-4 h-4 text-ivory/40 group-hover:text-amber group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </a>

      {/* CONTACT US — outline style with teal accent */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-press group block w-full text-left relative overflow-hidden rounded-2xl border border-ivory/20 bg-teal-deep/40 hover:bg-teal-deep/60 hover:border-amber/40 transition-all"
      >
        <div className="flex items-center gap-4 p-4 sm:p-5">
          <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-amber/30 bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
            <IconChat className="w-5 h-5 sm:w-6 sm:h-6 text-amber-light" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-serif text-base sm:text-lg font-medium text-ivory">
              CONTACT US
            </div>
            <div className="text-xs sm:text-sm text-ivory/55">
              Questions, collaborations, or just say hi.
            </div>
          </div>
          <IconArrowRight className="w-4 h-4 text-amber/70 group-hover:text-amber group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </a>

      {/* OPENING HOURS — solid dark button with clock icon */}
      <button
        onClick={onOpenHours}
        className="btn-press group block w-full text-left relative overflow-hidden rounded-2xl bg-wood/80 border border-ivory/10 hover:bg-wood-light/60 hover:border-amber/30 transition-all"
      >
        <div className="flex items-center gap-4 p-4 sm:p-5">
          <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-ivory/15 bg-wood-dark/60 flex items-center justify-center group-hover:border-amber/40 transition-colors">
            <IconClock className="w-5 h-5 sm:w-6 sm:h-6 text-ivory/80 group-hover:text-amber-light transition-colors" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-serif text-base sm:text-lg font-medium text-ivory">
              OPENING HOURS
            </div>
            <div className="text-xs sm:text-sm text-ivory/55">
              Check our operating hours.
            </div>
          </div>
          <IconArrowRight className="w-4 h-4 text-ivory/40 group-hover:text-amber group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </button>
    </nav>
  )
}
