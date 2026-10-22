// Icon library — lightweight inline SVGs (no extra deps).
// All icons inherit `currentColor` and accept standard SVG props.

export const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 4h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/>
    <path d="M5 14h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z"/>
    <path d="M8 4v6M16 4v6M8 14v6M16 14v6"/>
  </svg>
)

export const IconCoffee = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 8h13v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    <path d="M16 9h2a3 3 0 0 1 0 6h-2"/>
    <path d="M7 2c-.5 1 .5 2 0 3M11 2c-.5 1 .5 2 0 3M15 2c-.5 1 .5 2 0 3"/>
  </svg>
)

export const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

export const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

export const IconTikTok = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.5 7.4a6.7 6.7 0 0 1-3.9-1.25 6.7 6.7 0 0 1-1.4-1.5v8.7a5.85 5.85 0 1 1-5.85-5.85c.3 0 .6.03.88.08v2.6a3.27 3.27 0 1 0 2.3 3.13V2h2.55a4.13 4.13 0 0 0 .04.45 4.13 4.13 0 0 0 4.08 3.68c.43 0 .85-.07 1.24-.18v1.45z"/>
  </svg>
)

export const IconChat = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"/>
    <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>
  </svg>
)

export const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </svg>
)

export const IconArrowUp = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
)

export const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
)

export const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
)

export const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="7"/>
    <path d="M21 21l-4.3-4.3"/>
  </svg>
)

export const IconWhatsApp = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 6.5 13.2 8.2 8.2 0 0 1-10.4 1.6l-.4-.2-2.6.8.8-2.5-.3-.4A8.2 8.2 0 0 1 12 3.8zm-2.7 4c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.2 0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3l-.7-.4-1.5-.7c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.1-1.4-.5-.5-.9-1.1-1-1.3-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5z"/>
  </svg>
)

export const IconBean = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="6" ry="9" transform="rotate(35 12 12)"/>
    <path d="M9 7.5c1 3 1 6 0 9" transform="rotate(35 12 12)"/>
  </svg>
)

export const IconSteam = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 3c-1 1.5 1 2.5 0 4M12 3c-1 1.5 1 2.5 0 4M16 3c-1 1.5 1 2.5 0 4"/>
  </svg>
)

export const IconLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16z"/>
    <path d="M11 20c0-5 2-9 6-12"/>
  </svg>
)

export default {
  IconMenu, IconCoffee, IconMapPin, IconInstagram, IconTikTok,
  IconChat, IconClock, IconArrowUp, IconArrowRight, IconClose,
  IconSearch, IconWhatsApp, IconBean, IconSteam, IconLeaf,
}
