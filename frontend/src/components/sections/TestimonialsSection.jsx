import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { fadeInUp } from '../../lib/motion.js'

function TypingText({ text, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('')
  
  return (
    <motion.p
      key={text} // Add key to force re-render when text changes
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => {
        let index = 0
        const interval = setInterval(() => {
          if (index <= text.length) {
            setDisplayedText(text.slice(0, index))
            index++
          } else {
            clearInterval(interval)
          }
        }, 20)
      }}
      transition={{ delay }}
      className="mt-6 text-lg leading-8 text-slate-200"
    >
      {displayedText}
    </motion.p>
  )
}

function TestimonialsSection({ intro, testimonials }) {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Client feedback</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{intro.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{intro.description}</p>
        </motion.div>

        <div className="mt-16 mx-auto max-w-4xl relative">
          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="absolute inset-y-0 -left-4 sm:-left-12 flex items-center z-10">
              <button 
                onClick={handlePrev}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}
          
          {testimonials.length > 1 && (
            <div className="absolute inset-y-0 -right-4 sm:-right-12 flex items-center z-10">
              <button 
                onClick={handleNext}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIndex}
                initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="testimonial-card p-8 sm:p-12 text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full border border-white/10 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{activeTestimonial.name}</h3>
                    <p className="text-sm text-slate-400">{activeTestimonial.role}</p>
                  </div>
                  <div className="flex gap-1 text-amber-300">
                    {Array.from({ length: activeTestimonial.rating }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <TypingText text={activeTestimonial.quote} delay={0.2} />
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
