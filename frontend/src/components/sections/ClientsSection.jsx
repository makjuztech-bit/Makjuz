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
  const loopedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="clients-section">
      <div className="clients-section__inner">
        <div className="clients-section__header">
          <p className="clients-section__eyebrow">Our Trusted Clients</p>
          <h2 className="clients-section__title">
            Proud to work with leading companies across various industries.
          </h2>
        </div>

        <div
          className="clients-marquee"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="clients-marquee__viewport">
            <div className={`clients-track ${isPaused ? 'paused' : ''}`}>
              {loopedLogos.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="client-item">
                  <img className="client-logo" src={logo.src} alt={`${logo.name} logo`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
