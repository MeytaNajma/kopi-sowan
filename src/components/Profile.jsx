import { config } from '../config'
import { IconBean } from './Icons'

export default function Profile() {
  const { brand, socials } = config

  return (
    <header className="relative pt-10 pb-8 sm:pt-14 sm:pb-10">
      {/* Editorial top label */}
      <div className="flex items-center justify-center gap-3 mb-6 opacity-0-init animate-fade-in animation-delay-100">
        <span className="h-px w-8 bg-amber/60" />
        <span className="font-mono text-[10px] tracking-[0.35em] text-amber/80 uppercase">
          {brand.label}
        </span>
        <span className="h-px w-8 bg-amber/60" />
      </div>

      {/* Logo in circle */}
      <div className="relative flex justify-center mb-6 opacity-0-init animate-scale-in animation-delay-200">
        {/* glow */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-amber/20 blur-2xl animate-pulse-soft" />
        </div>
        {/* rotating dashed ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] rounded-full border border-amber/20" />
        {/* logo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-1 ring-amber/40 shadow-2xl shadow-black/60">
          <img
            src={brand.logoSrc}
            alt={`${brand.name} logo`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Brand name */}
      <h1 className="text-center font-serif text-4xl sm:text-5xl font-bold tracking-[0.08em] text-ivory text-shadow-warm opacity-0-init animate-fade-up animation-delay-300">
        {brand.name}
      </h1>

      {/* Editorial sub-line */}
      <div className="flex items-center justify-center gap-3 mt-3 opacity-0-init animate-fade-in animation-delay-400">
        <IconBean className="w-3 h-3 text-amber/70" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-ivory/50 uppercase">
          {brand.edition}
        </span>
        <IconBean className="w-3 h-3 text-amber/70" />
      </div>

      {/* Tagline */}
      <p className="text-center mt-5 font-serif italic text-lg sm:text-xl text-amber-light opacity-0-init animate-fade-up animation-delay-500">
        "{brand.tagline}"
      </p>

      {/* Description */}
      <p className="text-center mt-2 text-sm sm:text-base text-ivory/70 max-w-xs mx-auto leading-relaxed opacity-0-init animate-fade-up animation-delay-700">
        {brand.description}
      </p>

      {/* Social handles preview */}
      <div className="flex items-center justify-center gap-5 mt-5 opacity-0-init animate-fade-in animation-delay-1000">
        <span className="font-mono text-xs text-ivory/60 tracking-wide">
          {socials.instagram.handle}
        </span>
        <span className="h-3 w-px bg-ivory/20" />
        <span className="font-mono text-xs text-ivory/60 tracking-wide">
          {socials.tiktok.handle}
        </span>
      </div>
    </header>
  )
}
