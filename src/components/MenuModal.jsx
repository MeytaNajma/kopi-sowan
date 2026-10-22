import { useState, useEffect, useMemo, useRef } from 'react'
import { config } from '../config'
import { IconClose, IconSearch, IconCoffee, IconBean } from './Icons'

// Format price — handles both numbers and strings like "Ask Barista".
function formatPrice(price) {
  if (typeof price === 'number') return `Rp${price.toLocaleString('id-ID')}`
  return price
}

export default function MenuModal({ open, onClose }) {
  const [activeCat, setActiveCat] = useState(0)
  const [query, setQuery] = useState('')
  const scrollRef = useRef(null)

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open')
      setActiveCat(0)
      setQuery('')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [open])

  // ESC to close
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Filtered items
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return config.menu
    return config.menu
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => it.name.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [query])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Digital Menu Sowan Kopi"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-wood-dark/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal panel — DARK THEME matching the main page */}
      <div className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden bg-wood-dark border border-amber/25 shadow-2xl shadow-black/70 animate-slide-up">
        {/* Top grip (mobile) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <span className="w-10 h-1 rounded-full bg-ivory/20" />
        </div>

        {/* Header */}
        <div className="relative px-5 sm:px-7 pt-4 sm:pt-6 pb-4 border-b border-ivory/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <IconBean className="w-3 h-3 text-amber" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-amber uppercase">
                  Digital Menu
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory leading-none">
                The Sowan <span className="italic text-amber-light">Menu</span>
              </h2>
              <p className="font-mono text-[10px] tracking-[0.2em] text-ivory/40 uppercase mt-1.5">
                {config.brand.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="btn-press flex-shrink-0 w-9 h-9 rounded-full border border-ivory/20 hover:border-amber hover:bg-amber/10 flex items-center justify-center transition-colors"
            >
              <IconClose className="w-4 h-4 text-ivory" />
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mt-4">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search drinks..."
              className="w-full bg-wood-light/30 border border-ivory/10 focus:border-amber rounded-xl pl-10 pr-10 py-2.5 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory/40 hover:text-ivory transition-colors"
              >
                <IconClose className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category tabs */}
          {!query && (
            <div
              ref={scrollRef}
              className="flex gap-1 mt-4 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1"
            >
              {config.menu.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCat(i)}
                  className={`menu-tab whitespace-nowrap flex-shrink-0 ${i === activeCat ? 'active' : ''}`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto px-5 sm:px-7 py-5"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <IconCoffee className="w-8 h-8 text-ivory/30 mx-auto mb-3" />
              <p className="font-serif text-lg text-ivory/60 italic">
                No drinks match "{query}".
              </p>
              <button
                onClick={() => setQuery('')}
                className="mt-3 text-xs font-mono tracking-wider text-amber hover:text-amber-light uppercase"
              >
                Clear search
              </button>
            </div>
          ) : query ? (
            <div className="space-y-6">
              {filtered.map((cat) => (
                <CategoryBlock key={cat.category} cat={cat} />
              ))}
            </div>
          ) : (
            <CategoryBlock cat={filtered[activeCat] || config.menu[0]} expand />
          )}
        </div>

        {/* Footer note */}
        <div className="px-5 sm:px-7 py-3 border-t border-ivory/10 bg-wood/60">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.25em] text-ivory/50 uppercase">
              Prices in IDR · Dine-in &amp; Takeaway
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-amber uppercase">
              {config.brand.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CategoryBlock({ cat, expand }) {
  if (!cat) return null
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="font-serif text-xl sm:text-2xl text-ivory">
          {cat.category}
        </h3>
        <span className="font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase">
          {cat.items.length} items
        </span>
      </div>
      <div className="editorial-line mb-4" />

      <ul className="space-y-3">
        {cat.items.map((item, i) => (
          <li
            key={item.name + i}
            className="flex items-baseline justify-between gap-3 group animate-fade-in"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div className="flex items-baseline gap-2 flex-1 min-w-0">
              <span className="font-mono text-[10px] text-ivory/30 w-5 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-base sm:text-lg text-ivory/90 font-medium leading-tight">
                {item.name}
              </span>
              {/* dotted leader */}
              <span className="flex-1 mx-2 border-b border-dotted border-ivory/20 translate-y-[-3px]" />
            </div>
            <span className="font-mono text-sm sm:text-base text-amber-light font-medium flex-shrink-0">
              {formatPrice(item.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}