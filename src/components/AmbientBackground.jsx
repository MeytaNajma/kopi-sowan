// Ambient background: deep wood gradient + warm amber radial glows
// + subtle grain. Stays fixed behind everything.
export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-wood-dark">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark via-wood to-wood-dark" />

      {/* warm amber glow top */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-amber/8 blur-[100px] rounded-full" />
      {/* teal glow middle-left */}
      <div className="absolute top-[40%] left-[-15%] w-[60vw] h-[60vh] bg-teal-deep/40 blur-[120px] rounded-full" />
      {/* amber glow bottom */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[50vh] bg-amber/6 blur-[120px] rounded-full" />

      {/* wood grain texture (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 80px, rgba(185,130,69,0.5) 80px, rgba(185,130,69,0.5) 81px)',
        }}
      />

      {/* grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-grain"
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(31,20,15,0.6) 100%)',
        }}
      />
    </div>
  )
}
