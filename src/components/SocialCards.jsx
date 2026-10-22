import { config } from '../config'
import { IconInstagram, IconTikTok, IconArrowRight } from './Icons'

export default function SocialCards() {
  const { socials } = config

  const cards = [
    {
      key: 'instagram',
      label: socials.instagram.label,
      handle: socials.instagram.handle,
      url: socials.instagram.url,
      Icon: IconInstagram,
      tagline: 'Follow our daily moments.',
      accent: 'from-amber/15 to-amber/5',
      ring: 'group-hover:border-amber/50',
      iconBg: 'bg-amber/15 border-amber/30',
      iconColor: 'text-amber-light',
    },
    {
      key: 'tiktok',
      label: socials.tiktok.label,
      handle: socials.tiktok.handle,
      url: socials.tiktok.url,
      Icon: IconTikTok,
      tagline: 'More Sowan moments.',
      accent: 'from-teal-mid/30 to-teal-deep/10',
      ring: 'group-hover:border-teal-light/50',
      iconBg: 'bg-teal-mid/30 border-teal-light/30',
      iconColor: 'text-ivory',
    },
  ]

  return (
    <section className="container-sowan mt-2 mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="font-mono text-[10px] tracking-[0.3em] text-ivory/40 uppercase">
          Stay connected
        </span>
        <span className="h-px flex-1 ml-3 bg-ivory/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c) => (
          <a
            key={c.key}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-card btn-press group relative overflow-hidden rounded-2xl border border-ivory/10 bg-gradient-to-br ${c.accent} ${c.ring} transition-all`}
          >
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl border ${c.iconBg} flex items-center justify-center transition-colors`}>
                  <c.Icon className={`w-5 h-5 ${c.iconColor}`} />
                </div>
                <IconArrowRight className="w-4 h-4 text-ivory/30 group-hover:text-amber group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-serif text-lg sm:text-xl text-ivory font-medium leading-tight">
                {c.label}
              </div>
              <div className="font-mono text-xs text-amber-light/80 mt-0.5">
                {c.handle}
              </div>
              <div className="text-xs text-ivory/55 mt-2">
                {c.tagline}
              </div>
            </div>

            {/* Subtle decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </section>
  )
}
