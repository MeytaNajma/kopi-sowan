import { useState, useEffect } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Profile from './components/Profile'
import FeaturedPhoto from './components/FeaturedPhoto'
import LinkButtons from './components/LinkButtons'
import SocialCards from './components/SocialCards'
import LocationCard from './components/LocationCard'
import ContactCard from './components/ContactCard'
import Closing from './components/Closing'
import MenuModal from './components/MenuModal'
import HoursModal from './components/HoursModal'
import BackToTop from './components/BackToTop'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoursOpen, setHoursOpen] = useState(false)

  // Scroll restoration on mount
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen w-full text-ivory">
      <AmbientBackground />

      {/* Main single-page link-in-bio */}
      <main className="relative z-10 pt-4 pb-4">
        <Profile />
        <FeaturedPhoto />
        <LinkButtons
          onOpenMenu={() => setMenuOpen(true)}
          onOpenHours={() => setHoursOpen(true)}
        />
        <SocialCards />
        <LocationCard />
        <ContactCard />
        <Closing />
      </main>

      {/* Modals */}
      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
      <HoursModal open={hoursOpen} onClose={() => setHoursOpen(false)} />

      {/* Floating back-to-top */}
      <BackToTop />
    </div>
  )
}7