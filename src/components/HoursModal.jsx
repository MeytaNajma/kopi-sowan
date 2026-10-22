import { useState, useEffect } from 'react'
import { config } from '../config'
import { IconClose, IconClock, IconMapPin } from './Icons'

const dayIndex = (new Date().getDay() + 6) % 7 // Mon=0 ... Sun=6

export default function HoursModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const today = config.openingHours[dayIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Opening Hours"
    >
      <div
        className="absolute inset-0 bg-wood-dark/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal panel — DARK THEME matching the main page */}
      <div className="relative w-full sm:max-w-md max-h-[85vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden bg-wood-dark border border-amber/25 shadow-2xl shadow-black/70 animate-slide-up">
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <span className="w-10 h-1 rounded-full bg-ivory/20" />
        </div>

        {/* Header */}
        <div className="px-5 sm:px-7 pt-4 sm:pt-6 pb-4 border-b border-ivory/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <IconClock className="w-3 h-3 text-amber" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-amber uppercase">
                  Opening Hours
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory leading-none">
                When we're <span className="italic text-amber-light">open</span>
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="btn-press flex-shrink-0 w-9 h-9 rounded-full border border-ivory/20 hover:border-amber hover:bg-amber/10 flex items-center justify-center transition-colors"
            >
              <IconClose className="w-4 h-4 text-ivory" />
            </button>
          </div>

          {/* Today highlight */}
          {today && (
            <div className="mt-4 rounded-xl bg-teal-deep border border-amber/30 p-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] text-amber/80 uppercase">
                    Today
                  </div>
                  <div className="font-serif text-base text-ivory mt-0.5">
                    {today.day}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm text-amber-light">
                    {today.hours}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-ivory/50 uppercase mt-0.5">
                    Open Now
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Schedule list */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-4">
          <ul className="space-y-1">
            {config.openingHours.map((row, i) => {
              const isToday = i === dayIndex
              return (
                <li
                  key={row.day}
                  className={`flex items-baseline justify-between gap-3 py-2.5 px-3 rounded-lg transition-colors ${
                    isToday ? 'bg-amber/10 border border-amber/30' : 'hover:bg-wood-light/30'
                  }`}
                >
                  <div className="flex items-baseline gap-2.5">
                    {isToday && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
                    <span
                      className={`font-serif text-base ${
                        isToday ? 'text-amber-light font-semibold' : 'text-ivory/85'
                      }`}
                    >
                      {row.day}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-sm ${
                      isToday ? 'text-amber-light font-medium' : 'text-ivory/60'
                    }`}
                  >
                    {row.hours}
                  </span>
                </li>
              )
            })}
          </ul>

          {/* Note */}
          <div className="mt-5 pt-4 border-t border-ivory/10">
            <div className="flex items-start gap-2 text-ivory/55">
              <IconMapPin className="w-3.5 h-3.5 mt-0.5 text-amber flex-shrink-0" />
              <p className="text-xs leading-relaxed">
                Hours may vary on public holidays. We recommend checking our Instagram story for real-time updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}