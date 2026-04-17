import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-2xl rounded-4xl border border-white/10 bg-white/5 px-6 py-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-fuchsia-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-lg text-slate-300">
          The page you requested does not exist in this Makjuz rebuild.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Return home
        </Link>
      </motion.div>
    </section>
  )
}

export default NotFoundPage
