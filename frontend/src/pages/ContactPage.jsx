import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm.jsx'

function ContactPage() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Let's Build Something Amazing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 lg:mx-0"
          >
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss how we can help your business thrive.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-xl shadow-slate-200/40">
              <h2 className="text-3xl font-semibold text-slate-950">Contact Information</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Use any of the channels below to talk with our team. We’re available to discuss software, payroll, billing, and construction management solutions.
              </p>

              <div className="mt-10 grid gap-4">
                <div className="flex items-start gap-4 rounded-3xl bg-violet-600/10 p-5">
                  <div className="grid h-14 w-14 place-items-center rounded-3xl bg-violet-600 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">Email</p>
                    <p className="mt-1 text-sm text-slate-600">support@makjuz.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl bg-violet-600/10 p-5">
                  <div className="grid h-14 w-14 place-items-center rounded-3xl bg-violet-600 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">Phone</p>
                    <p className="mt-1 text-sm text-slate-600">+91 95974 30022</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl bg-violet-600/10 p-5">
                  <div className="grid h-14 w-14 place-items-center rounded-3xl bg-violet-600 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">Office</p>
                    <p className="mt-1 text-sm text-slate-600">
                     No 69 B/2, Villakadi Kovil Street, <br /> Kanchipuram -631501
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-200/40"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
