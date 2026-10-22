import { config } from '../config'
import { IconMapPin, IconArrowRight } from './Icons'

export default function LocationCard() {
  const { location } = config

  // Google Maps embed URL (no API key needed — uses public embed endpoint)
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location.mapsEmbedQuery || 'Sowan Kopi'
  )}&z=15&output=embed`

  return (
    <section className="container-sowan mt-2 mb-6">
      <div className="relative rounded-2xl overflow-hidden border border-ivory/10 bg-wood/40 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-5">
          {/* Real Google Maps embed side */}
          <div className="relative sm:col-span-2 h-48 sm:h-auto min-h-[180px] overflow-hidden bg-teal-deep">
            <iframe
              title="Lokasi Sowan Kopi di Google Maps"
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'saturate(0.85) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Subtle dark overlay to blend with theme */}
            <div className="absolute inset-0 bg-wood-dark/20 pointer-events-none" />

            {/* overlay label */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-wood-dark/80 backdrop-blur-sm pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-soft" />
              <span className="font-mono text-[9px] tracking-[0.25em] text-ivory/90 uppercase">
                You'll find us here
              </span>
            </div>
          </div>

          {/* Info side */}
          <div className="sm:col-span-3 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <IconMapPin className="w-4 h-4 text-amber" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-amber/80 uppercase">
                  Location
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory leading-tight">
                Drop by for a cup.
              </h3>
              <p className="text-xs sm:text-sm text-ivory/60 mt-2 leading-relaxed">
                {location.address}
              </p>
              <p className="text-[11px] text-ivory/40 mt-2 italic">
                {location.note}
              </p>
            </div>

            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press group mt-4 inline-flex items-center justify-between gap-3 rounded-xl border border-amber/40 bg-amber/10 hover:bg-amber/20 px-4 py-2.5 transition-colors"
            >
              <span className="font-serif text-sm text-ivory font-medium">
                Get Directions
              </span>
              <IconArrowRight className="w-4 h-4 text-amber-light group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}