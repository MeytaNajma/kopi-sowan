import { config } from '../config'
import { IconChat, IconArrowRight, IconWhatsApp } from './Icons'

export default function ContactCard() {
  const { contact, socials } = config
  const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section className="container-sowan mt-2 mb-6">
      <div className="relative rounded-2xl overflow-hidden bg-teal-deep border border-teal-light/30 shadow-xl shadow-black/40">
        {/* Decorative warm glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-teal-light/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top label row */}
        <div className="relative flex items-center justify-between px-5 sm:px-6 pt-5 pb-2">
          <div className="flex items-center gap-2">
            <IconChat className="w-3.5 h-3.5 text-amber" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-amber/80 uppercase">
              Say Hello
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase">
            Open Line
          </span>
        </div>

        {/* Body */}
        <div className="relative px-5 sm:px-6 pb-5">
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory leading-tight">
            Questions, collaborations,
            <br />
            <span className="italic text-amber-light">or just say hi.</span>
          </h3>
          <p className="text-xs sm:text-sm text-ivory/65 mt-3 leading-relaxed">
            We read every message. Reach out for partnerships, event bookings,
            catering, or simply to talk coffee.
          </p>

          {/* Action buttons */}
          <div className="mt-5 grid grid-cols-1 gap-2.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press group flex items-center justify-between gap-3 rounded-xl bg-amber hover:bg-amber-light px-4 py-3 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <IconWhatsApp className="w-5 h-5 text-wood-dark" />
                <span className="font-serif text-sm sm:text-base text-wood-dark font-semibold">
                  Chat on WhatsApp
                </span>
              </span>
              <IconArrowRight className="w-4 h-4 text-wood-dark group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press group flex items-center justify-between gap-3 rounded-xl border border-ivory/25 hover:border-amber/50 hover:bg-ivory/5 px-4 py-2.5 transition-colors"
            >
              <span className="font-serif text-xs sm:text-sm text-ivory/85 font-medium">
                Or DM us on Instagram
              </span>
              <IconArrowRight className="w-3.5 h-3.5 text-ivory/60 group-hover:text-amber group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
