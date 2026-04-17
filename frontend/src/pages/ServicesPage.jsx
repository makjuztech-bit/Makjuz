import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ── Sunlight-sweep keyframe (injected once) ── */
const shimmerStyle = `
@keyframes sunSweep {
  0%   { transform: translateX(-130%) skewX(-12deg); opacity: 0; }
  10%  { opacity: 1; }
  60%  { opacity: 1; }
  100% { transform: translateX(230%) skewX(-12deg); opacity: 0; }
}
.shimmer-card {
  position: relative;
  overflow: hidden;
}
.shimmer-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255,255,255,0.22) 48%,
    rgba(255,230,140,0.14) 54%,
    transparent 68%
  );
  transform: translateX(-130%) skewX(-12deg);
  animation: sunSweep 3s ease-in-out infinite;
  animation-delay: var(--sweep-delay, 0s);
  pointer-events: none;
  z-index: 20;
}
`

/* ── Core (linked) services ── */
const coreServices = [
  {
    emoji: '💻',
    title: 'IT Solutions',
    description: 'Innovative IT solutions tailored to your business needs, from infrastructure management to custom software development.',
    path: '/it-solutions',
    color: 'from-cyan-500 to-blue-600',
    glow: '#06b6d4',
  },
  {
    emoji: '👥',
    title: 'Manpower Supply',
    description: 'Connecting you with the right talent. We provide skilled professionals to meet your project demands and organizational goals.',
    path: '/manpower-supply',
    color: 'from-violet-500 to-purple-600',
    glow: '#8b5cf6',
  },
  {
    emoji: '🏢',
    title: 'BPO Services',
    description: 'Streamline your business processes with our efficient BPO services, allowing you to focus on core business growth.',
    path: '/bpo-services',
    color: 'from-emerald-500 to-teal-600',
    glow: '#10b981',
  },
  {
    emoji: '📣',
    title: 'Digital Marketing',
    description: 'Drive measurable growth with SEO, PPC, social media, email marketing, and more — all under one data-driven strategy.',
    path: '/digital-marketing',
    color: 'from-fuchsia-500 to-pink-600',
    glow: '#d946ef',
  },
]

/* ── Marketing & media service cards ── */
const marketingServices = [
  {
    emoji: '📱',
    title: 'Social Media Marketing',
    description: 'Strategic campaigns that boost engagement, build communities, and drive conversions across all platforms.',
    color: 'from-sky-500 to-blue-500',
    delay: 0,
  },
  {
    emoji: '🎬',
    title: 'Video Marketing',
    description: 'Engaging video content that captures attention and delivers your message effectively.',
    color: 'from-rose-500 to-pink-600',
    delay: 0.5,
  },
  {
    emoji: '🎯',
    title: 'Meta & Google Ads',
    description: 'Data-driven paid advertising campaigns that maximize ROI and drive qualified leads.',
    color: 'from-amber-500 to-orange-500',
    delay: 1.0,
  },
  {
    emoji: '🎨',
    title: 'Branding',
    description: 'Build a powerful brand identity that stands out and connects with your customers.',
    color: 'from-fuchsia-500 to-violet-600',
    delay: 1.5,
  },
  {
    emoji: '📈',
    title: 'Lead Generation',
    description: 'Proven strategies to attract, capture, and convert high-quality leads for your business.',
    color: 'from-emerald-500 to-green-600',
    delay: 2.0,
  },
  {
    emoji: '🎥',
    title: 'Video Production',
    description: 'Professional video production services from concept to final cut, creating cinematic content that engages and converts.',
    color: 'from-red-500 to-rose-600',
    delay: 2.5,
  },
  {
    emoji: '📊',
    title: 'Business Analysis',
    description: 'In-depth market research and business intelligence to drive data-informed strategic decisions.',
    color: 'from-cyan-500 to-teal-600',
    delay: 0.3,
  },
  {
    emoji: '🖌️',
    title: 'Graphic Design',
    description: 'Creative visual designs that communicate your brand message and leave lasting impressions.',
    color: 'from-purple-500 to-indigo-600',
    delay: 0.8,
  },
  {
    emoji: '📢',
    title: 'Outdoor Advertising',
    description: 'Strategic outdoor advertising campaigns including billboards, transit ads, and street marketing for maximum visibility.',
    color: 'from-yellow-500 to-amber-600',
    delay: 1.3,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Inject shimmer keyframe once */}
      <style>{shimmerStyle}</style>

      <div className="pb-24 bg-slate-950 text-white ">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-fuchsia-600/20 rounded-full blur-[130px]" />
            <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-violet-600/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-fuchsia-300 mb-5">
              What We Do
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-fuchsia-300 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
              Explore our full suite of services — from IT infrastructure to creative marketing — designed to help your business scale, innovate, and thrive.
            </p>
          </motion.div>
        </section>

        {/* ── Core Services ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400 mb-2">Core Offerings</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Main Services</h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreServices.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="shimmer-card"
                  style={{ '--sweep-delay': `${i * 0.75}s` }}
                >
                  <Link
                    to={svc.path}
                    className="flex flex-col h-full rounded-3xl border border-slate-700/50 bg-slate-900/70 p-7 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-slate-500/60 group"
                    style={{ boxShadow: `0 0 0 0 ${svc.glow}22` }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 48px ${svc.glow}44`}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${svc.glow}22`}
                  >
                    {/* Gradient orb top-right */}
                    <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${svc.color} opacity-10 rounded-bl-full -mr-6 -mt-6 group-hover:opacity-20 transition-opacity`} />

                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-2xl mb-5 shadow-lg relative z-10`}>
                      {svc.emoji}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 relative z-10">{svc.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 relative z-10">{svc.description}</p>
                    <div className={`mt-6 text-sm font-semibold bg-gradient-to-r ${svc.color} bg-clip-text text-transparent flex items-center gap-1 group-hover:gap-2 transition-all relative z-10`}>
                      Explore Service →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800" />
        </div>

        {/* ── Marketing & Media Services ── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400 mb-2">Creative & Growth</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Marketing & Media Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Everything you need to grow your brand, generate leads, and dominate your market online and offline.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {marketingServices.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="shimmer-card"
                  style={{
                    /* stagger the shimmer so each card lights up at different time */
                    '--sweep-delay': `${svc.delay}s`,
                  }}
                >
                  <div
                    className="flex flex-col h-full rounded-3xl border border-slate-700/50 bg-slate-900/70 p-7 shadow-xl backdrop-blur-sm relative transition-all duration-300 hover:border-slate-500/60 group cursor-default"
                  >
                    {/* Animated glow border on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none`} />

                    {/* Orb accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${svc.color} opacity-[0.08] rounded-bl-full -mr-8 -mt-8 group-hover:opacity-[0.15] transition-opacity pointer-events-none`} />

                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-2xl mb-5 shadow-lg relative z-10`}>
                      {svc.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">{svc.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 relative z-10">{svc.description}</p>

                    <div className="mt-6 relative z-10">
                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${svc.color} bg-clip-text text-transparent group-hover:gap-2.5 transition-all`}
                      >
                        Get Started →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center relative"
          >
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-fuchsia-700/20 rounded-full blur-[80px]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Not sure which service you need?
            </h2>
            <p className="text-slate-300 leading-8 mb-10">
              Let's talk. Our team will understand your goals and recommend the perfect combination of services for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-fuchsia-600 px-8 py-4 text-sm font-bold text-white hover:bg-fuchsia-500 transition shadow-xl shadow-fuchsia-900/40"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  )
}
