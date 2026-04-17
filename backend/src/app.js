const cors = require('cors')
const express = require('express')
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler')
const contactRoutes = require('./routes/contact.routes')
const newsletterRoutes = require('./routes/newsletter.routes')
const pricingRoutes = require('./routes/pricing.routes')
const sectionsRoutes = require('./routes/sections.routes')
const testimonialsRoutes = require('./routes/testimonials.routes')

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : true,
    credentials: true,
  }),
)
app.use(express.json())

const { getHealth } = require('./controllers/sections.controller')

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Makjuz API is healthy.' })
})

app.get('/api/health/content', getHealth)

app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)
app.use('/api/pricing', pricingRoutes)
app.use('/api/sections', sectionsRoutes)
app.use('/api/testimonials', testimonialsRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
