const { getFullContent, getContentHealth, ContentValidationError } = require('../services/content.service')
const { siteContent } = require('../data/siteContent')

async function getSections(req, res, next) {
  try {
    const health = await getContentHealth()

    if (health.source === "database") {
      try {
        const data = await getFullContent()
        res.setHeader('X-Data-Source', 'database')
        return res.status(200).json({ success: true, data })
      } catch (e) {
        console.warn('DB read failed, falling back to local.', e.message)
      }
    }

    // Fallback if DB empty or unreachable, or if getFullContent threw
    res.setHeader('X-Data-Source', 'fallback')
    return res.status(200).json({ success: true, data: siteContent })

  } catch (error) {
    // This is a safety net context
    res.setHeader('Retry-After', '30')
    return res.status(503).json({ success: false, message: 'Service unavailable' })
  }
}

async function getHealth(req, res) {
  const health = await getContentHealth()
  res.json({ success: true, ...health })
}

module.exports = { getSections, getHealth }
