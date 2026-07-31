import { useState } from 'react'
import './ClientsSection.css'

const clientLogos = [
  { name: 'Durgas', src: '/clients/client-durgas.png' },
  { name: 'Vikram Solar', src: '/clients/client-vikram-solar.png' },
  { name: 'SKP Mines', src: '/clients/client-skp-mines.png' },
  { name: 'Sparkz India', src: '/clients/client-sparkz-india.png' },
  { name: 'Plant Green Inertia', src: '/clients/client-plant-green-inertia.png' },
  { name: 'Vijay Silks & Jewellers', src: '/clients/client-vijay-silks.png' },
  { name: 'Tamilnadu Silambam Sports Association', src: '/clients/client-silambam-sports-association.png' },
  { name: 'Leviva an', src: '/clients/client-levivaan.png' },
  { name: 'Factory', src: '/clients/client-factory.jpeg' },
  { name: 'Delfingen', src: '/clients/client-delfingen.png' },
  { name: 'Sunlight', src: '/clients/client-sunlight.png' },
  { name: 'Kirthigs Silks', src: '/clients/client-kirthigs-silks.png' },
]

export default function ClientsSection() {
  const [isPaused, setIsPaused] = useState(false)

  const renderCards = (logos, suffix) =>
    logos.map((logo, index) => (
      <div
        key={`${logo.name}-${index}-${suffix}`}
        className="client-card"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img className="client-logo" src={logo.src} alt={`${logo.name} logo`} />
      </div>
    ))

  return (
    <section className="clients-section px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-slate-950/80 p-10 shadow-glow">
        <div className="mb-10 max-w-3xl text-center mx-auto">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Our Trusted Clients</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Proud to work with leading companies across various industries.
          </h2>
        </div>

        <div className="clients-marquee">
          <div className="clients-marquee-inner">
            <div className={`clients-track ${isPaused ? 'paused' : ''}`}>
              {renderCards(clientLogos, 'first')}
              {renderCards(clientLogos, 'second')}
            </div>
          </div>
          <div className="marquee-fade left" aria-hidden="true" />
          <div className="marquee-fade right" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
