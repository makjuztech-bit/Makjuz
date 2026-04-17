import { motion } from 'framer-motion'
import ContactCtaSection from '../components/sections/ContactCtaSection.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import ProductsSection from '../components/sections/ProductsSection.jsx'
import StatsSection from '../components/sections/StatsSection.jsx'
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx'
import WhyChooseSection from '../components/sections/WhyChooseSection.jsx'
import { useHomeContent } from '../hooks/useHomeContent.js'

function HomePage() {
  const { sections, testimonials, isFallback } = useHomeContent()

  return (
    <>
      {isFallback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-b border-amber-300/20 bg-amber-400/10 px-4 py-3 text-center text-sm text-amber-100"
        >
          Running with local parity content. Start the backend to serve API-driven content.
        </motion.div>
      )}
      {!isFallback && (
        <div className="absolute top-28 left-4 z-50 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Live Database
        </div>
      )}
      <HeroSection hero={sections.hero} stats={sections.stats} />
      <StatsSection stats={sections.stats} />
      <ProductsSection intro={sections.productsIntro} products={sections.products} />
      <WhyChooseSection section={sections.whyChoose} />
      <TestimonialsSection intro={sections.testimonialsIntro} testimonials={testimonials} />
      <ContactCtaSection section={sections.contactCta} />
    </>
  )
}

export default HomePage
