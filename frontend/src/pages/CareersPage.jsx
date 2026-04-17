import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Briefcase, MapPin, CheckCircle2, ChevronRight, Send, FileSearch, Users } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function CareersPage() {
  const reduceMotion = useReducedMotion()

  const openings = [
    {
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "Remote / On-site",
      desc: "We're looking for a creative and data-driven Digital Marketing Intern to help us grow our online presence and engage with our community.",
      requirements: [
        "Basic understanding of SEO and SEM",
        "Experience with social media platforms",
        "Strong writing and communication skills",
        "Familiarity with marketing tools is a plus"
      ],
      responsibilities: [
        "Create engaging social media content",
        "Assist in email marketing campaigns",
        "Monitor and report on web analytics",
        "Help with content strategy and execution"
      ]
    },
    {
      title: "Web Development Intern",
      type: "Internship",
      location: "Remote / On-site",
      desc: "Join our tech team to build and maintain cutting-edge web applications. You'll work closely with experienced developers and gain hands-on experience.",
      requirements: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Basic knowledge of React or similar frameworks",
        "Understanding of responsive design",
        "Eagerness to learn new technologies"
      ],
      responsibilities: [
        "Develop and style UI components",
        "Fix bugs and improve site performance",
        "Collaborate on new feature development",
        "Participate in code reviews"
      ]
    }
  ]

  const processSteps = [
    {
      num: "01",
      title: "Submit Application",
      desc: "Send your Resume/CV to support@makjuz.com with the job title in the subject line.",
      icon: Send
    },
    {
      num: "02",
      title: "Review Process",
      desc: "Our team will review your application and portfolio within 3-5 business days.",
      icon: FileSearch
    },
    {
      num: "03",
      title: "Interview",
      desc: "Shortlisted candidates will be invited for a technical or marketing assessment interview.",
      icon: Users
    }
  ]

  return (
    <div className="pb-2">
      {/* Breadcrumb / Sub-header */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-4 text-sm">
          <Link to="/" className="text-slate-400 hover:text-white transition flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-teal-400 font-medium">Careers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-500 to-emerald-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Grow Your Career with MakJuz
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 max-w-2xl mx-auto"
          >
            Join a team of visionaries and builders. We're looking for passionate individuals to help us shape the future of technology.
          </motion.p>
        </div>
      </section>

      {/* Openings Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-white">Current Openings</h2>
          </div>

          <div className="space-y-8">
            {openings.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 sm:p-10 transition hover:bg-slate-800"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400">
                        <Briefcase size={14} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-700/50 px-3 py-1 text-sm font-medium text-slate-300">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">{job.desc}</p>
                  </div>
                  <a
                    href="mailto:support@makjuz.com"
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
                  >
                    Apply Now <ChevronRight size={16} />
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8 border-t border-slate-700/50 pt-8 mt-8">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Requirements</h4>
                    <ul className="space-y-3">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                          <span className="text-slate-300 text-sm leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Responsibilities</h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                          <span className="text-slate-300 text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Process */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white">How to Apply</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px bg-slate-800 -z-10"></div>
            
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="bg-slate-950 p-2 rounded-full mb-6">
                  <div className="h-16 w-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-teal-400/10 scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
                    <step.icon size={28} />
                  </div>
                </div>
                <div className="text-xs font-bold text-teal-500 mb-2 tracking-widest">{step.num}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-400">
              Questions about our process? Reach out to us at{' '}
              <a href="mailto:support@makjuz.com" className="text-teal-400 hover:text-teal-300 hover:underline transition">
                support@makjuz.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
