import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Blocks, BriefcaseBusiness, Calculator, CheckCircle2, Package } from 'lucide-react'
import { fadeInUp } from '../../lib/motion.js'
import { Link } from 'react-router-dom'

const icons = [Calculator, Package, BriefcaseBusiness, Blocks]

// 4 cards → 4 sides: left, top, bottom, right
const directions = [
  { x: -220, y: 0 },   // card 0 → from left
  { x: 0,    y: -220 }, // card 1 → from top
  { x: 0,    y: 220 },  // card 2 → from bottom
  { x: 220,  y: 0 },   // card 3 → from right
]

const makeVariant = (dir) => ({
  hidden: { opacity: 0, x: dir.x, y: dir.y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.1, ease: 'easeOut' },
  },
})

function ProductsSection({ intro, products }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="products" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">Our Products</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{intro.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{intro.description}</p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = icons[index % icons.length]
            const variant = makeVariant(directions[index])

            return (
              <motion.article
                key={product.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={variant}
                transition={{ delay: index * 0.15 }}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                className="product-card group flex flex-col rounded-2xl p-6"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={22} />
                </div>

                {/* Title + description */}
                <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{product.description}</p>

                {/* Feature points */}
                <ul className="mt-4 flex flex-col gap-2">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="shrink-0 text-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className="mt-5 pt-4 border-t border-white/8">
                  {product.title === 'Payroll Software' ? (
                    <Link to="/payroll" className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300 transition-all duration-200 hover:gap-3 hover:text-fuchsia-200">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  ) : product.title === 'Inventory Management' ? (
                    <Link to="/inventory" className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300 transition-all duration-200 hover:gap-3 hover:text-fuchsia-200">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  ) : product.title === 'Billing Software' ? (
                    <Link to="/billing" className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300 transition-all duration-200 hover:gap-3 hover:text-fuchsia-200">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  ) : product.title === 'Construction Management' ? (
                    <Link to="/construction" className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300 transition-all duration-200 hover:gap-3 hover:text-fuchsia-200">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300 transition-all duration-200 hover:gap-3 hover:text-fuchsia-200">
                      Learn More <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
