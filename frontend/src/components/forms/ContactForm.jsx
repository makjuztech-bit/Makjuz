import { motion, useReducedMotion } from 'framer-motion'
import { LoaderCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitContactForm } from '../../lib/api.js'

const inputBase =
  'peer w-full rounded-3xl border border-slate-300/80 bg-white px-4 pt-4 pb-3 text-sm text-slate-950 outline-none transition duration-300 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20'

const textareaBase = `${inputBase} min-h-[160px] resize-none leading-6`

function ContactForm() {
  const reduceMotion = useReducedMotion()
  const [status, setStatus] = useState({ type: '', message: '' })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      details: '',
    },
  })

  const onSubmit = async (values) => {
    try {
      const response = await submitContactForm(values)
      setStatus({
        type: 'success',
        message: response.message || 'Thanks for reaching out. We will get back to you soon.',
      })
      reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.response?.data?.message || 'Unable to submit your request right now. Please try again.',
      })
    }
  }

  return (
    <motion.form
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            aria-invalid={errors.name ? 'true' : 'false'}
            className={`${inputBase} ${errors.name ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
            placeholder="Enter your name"
            {...register('name', { required: 'Full name is required.' })}
          />
          {errors.name ? (
            <p className="mt-2 text-sm text-rose-500">{errors.name.message}</p>
          ) : (
            <p className="mt-2 text-sm text-slate-500">Enter your name</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            className={`${inputBase} ${errors.email ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
            placeholder="you@company.com"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /\S+@\S+\.\S+/, 
                message: 'Enter a valid email address.',
              },
            })}
          />
          {errors.email ? (
            <p className="mt-2 text-sm text-rose-500">{errors.email.message}</p>
          ) : (
            <p className="mt-2 text-sm text-slate-500">you@company.com</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="company">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          aria-invalid={errors.company ? 'true' : 'false'}
          className={`${inputBase} ${errors.company ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
          placeholder="Your company name"
          {...register('company', { required: 'Company name is required.' })}
        />
        {errors.company ? (
          <p className="mt-2 text-sm text-rose-500">{errors.company.message}</p>
        ) : (
          <p className="mt-2 text-sm text-slate-500">Your company name</p>
        )}
      </div>

      {/* ── Service Selector ── */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="service">
          Service Interested In
        </label>
        <select
          id="service"
          aria-invalid={errors.service ? 'true' : 'false'}
          className={`w-full rounded-3xl border bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 focus:ring-2 focus:ring-violet-500/20 appearance-none cursor-pointer ${
            errors.service
              ? 'border-rose-400 focus:border-rose-400'
              : 'border-slate-300/80 focus:border-violet-500'
          }`}
          {...register('service', { required: 'Please select a service.' })}
        >
          <option value="">— Select a service —</option>
          <optgroup label="Core Services">
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="BPO Services">BPO Services</option>
            <option value="Manpower Supply">Manpower Supply</option>
            <option value="IT Solutions">IT Solutions</option>
          </optgroup>
          <optgroup label="Marketing & Advertising">
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Video Marketing">Video Marketing</option>
            <option value="Meta & Google Ads">Meta &amp; Google Ads</option>
            <option value="Branding">Branding</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="Outdoor Advertising">Outdoor Advertising</option>
            <option value="Graphic Design">Graphic Design</option>
          </optgroup>
          <optgroup label="Content & Media">
            <option value="Video Production">Video Production</option>
            <option value="Podcasting">Podcasting</option>
          </optgroup>
          <optgroup label="Business">
            <option value="Business Analysis">Business Analysis</option>
          </optgroup>
        </select>
        {errors.service ? (
          <p className="mt-2 text-sm text-rose-500">{errors.service.message}</p>
        ) : (
          <p className="mt-2 text-sm text-slate-500">Choose the service you need help with</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="details">
          Project Details
        </label>
        <textarea
          id="details"
          aria-invalid={errors.details ? 'true' : 'false'}
          className={`${textareaBase} ${errors.details ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          {...register('details', { required: 'Project details are required.' })}
        />
        {errors.details ? (
          <p className="mt-2 text-sm text-rose-500">{errors.details.message}</p>
        ) : (
          <p className="mt-2 text-sm text-slate-500">Tell us about your project, timeline, and any specific requirements...</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-3xl bg-violet-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-violet-400"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      {status.message && (
        <div
          className={`mt-5 rounded-3xl border px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200'
              : 'border-rose-400/30 bg-rose-500/10 text-rose-200'
          }`}
        >
          {status.message}
        </div>
      )}
    </motion.form>
  )
}

export default ContactForm
