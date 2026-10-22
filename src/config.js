// ============================================================
//  SOWAN KOPI — Central Configuration
//  Edit this file to update brand info, links, menu, hours.
//  All assets (logo, photos) live in /public — replace the
//  files there to swap images without touching this file.
// ============================================================

export const config = {
  brand: {
    name: 'SOWAN KOPI',
    tagline: 'good coffee, good company.',
    description: 'A little place to pause, sip, and stay awhile.',
    label: 'YOUR LOCAL COFFEE SPOT',
    edition: 'EST. 2026',
    // Logo — replace /public/logo.jpg to change.
    logoSrc: '/logo.jpg',
    // Featured café photo — replace /public/cafe-photo.jpg to change.
    featuredPhoto: '/cafe-photo.jpg',
    featuredPhotoCaption: 'SOWAN AFTER DARK',
  },

  socials: {
    instagram: {
      handle: '@sowan.kopi141',
      url: 'https://www.instagram.com/sowan.kopi141/',
      label: 'Instagram',
    },
    tiktok: {
      handle: '@sowan.kopi141',
      url: 'https://www.tiktok.com/@sowan.kopi141',
      label: 'TikTok',
    },
  },

  // CONTACT — replace placeholder WA number with the real one.
  contact: {
    whatsappNumber: '6281234567890', // TODO: replace with real WhatsApp number (intl format, no +)
    whatsappMessage: "Hi Sowan Kopi! Saya mau tanya seputar menu / kerja sama.",
    email: '', // TODO: optional — fill if available
  },

  // LOCATION — verified Sowan Kopi location (Ponorogo, Jawa Timur)
  location: {
    // Alamat yang ditampilkan di Location Card
    address: 'Ponorogo, Jawa Timur, Indonesia',
    // URL asli dari Google Maps (link share Sowan Kopi)
    mapsUrl: 'https://maps.app.goo.gl/31FR6mf3wzAB7dwm7',
    // Koordinat untuk embed map (lebih akurat dari nama tempat)
    mapsEmbedQuery: '-7.8648714,111.4656776',
    note: 'Tap "Get Directions" to open Google Maps.',
  },

  // OPENING HOURS — Weekday 08:00–00:00, Weekend 06:00–00:00.
  openingHours: [
    { day: 'Monday',    hours: '08:00 — 00:00' },
    { day: 'Tuesday',   hours: '08:00 — 00:00' },
    { day: 'Wednesday', hours: '08:00 — 00:00' },
    { day: 'Thursday',  hours: '08:00 — 00:00' },
    { day: 'Friday',    hours: '08:00 — 00:00' },
    { day: 'Saturday',  hours: '06:00 — 00:00' },
    { day: 'Sunday',    hours: '06:00 — 00:00' },
  ],

  // MENU — based on the real Sowan Kopi menu.
  // Names & prices preserved as provided. Edit freely.
  menu: [
    {
      category: 'Manual Brew',
      items: [
        { name: 'Filter Coffee', price: 'Ask Barista' },
      ],
    },
    {
      category: 'Espresso Based',
      items: [
        { name: 'Espresso',  price: 10000 },
        { name: 'Cappucino', price: 15000 },
        { name: 'Black',     price: 13000 },
        { name: 'Magic',     price: 18000 },
      ],
    },
    {
      category: 'Non-Coffee',
      items: [
        { name: 'Matcha Latte', price: 15000 },
        { name: 'Coklat',       price: 15000 },
        { name: 'Matchaber',    price: 18000 },
        { name: 'Mokacinta',    price: 18000 },
      ],
    },
    {
      category: 'Old',
      items: [
        { name: 'Tubruk',       price: 5000 },
        { name: 'Tubruk Susu',  price: 8000 },
        { name: 'Vietnam Drip', price: 10000 },
      ],
    },
    {
      category: 'Perkopian Susu',
      items: [
        { name: 'Kopsubis',     price: 15000 },
        { name: 'Creamy Latte', price: 15000 },
        { name: 'Aren Latte',   price: 15000 },
        { name: "Pandan's",     price: 15000 },
        { name: 'Butter Skup',  price: 15000 },
      ],
    },
    {
      category: 'Mocktail',
      items: [
        { name: 'Kiwir',     price: 15000 },
        { name: 'Strawberry',price: 15000 },
        { name: 'Lemonade',  price: 15000 },
      ],
    },
    {
      category: 'Add-on',
      items: [
        { name: 'Add on Oat Milk', price: 3000 },
        { name: 'Extra Shoot',     price: 5000 },
      ],
    },
  ],
}

export default config