const { getPrisma } = require('../lib/prisma')
const { sendContactNotification } = require('../services/email.service')

async function submitContact(req, res, next) {
  try {
    console.log('Contact form submitted with body:', req.body)
    
    const { name, email, company, service, details } = req.body

    if (!name || !email || !company || !service || !details) {
      console.log('Missing required fields')
      res.status(400).json({
        success: false,
        message: 'Name, email, company, service, and details are required.',
      })
      return
    }

    const payload = { name, email, company, service, details }
    const prisma = getPrisma()

    // Save to database in the background (non-blocking)
    if (prisma) {
      prisma.contactSubmission.create({
        data: payload,
      }).then(() => {
        console.log('Contact saved to database')
      }).catch((error) => {
        console.error('Failed to save contact to database:', error)
      })
    }

    console.log('Sending notification email...')
    await sendContactNotification(payload)
    console.log('Email notification sent')

    res.status(201).json({
      success: true,
      message: 'Your message has been received successfully.',
    })
  } catch (error) {
    console.error('Error in submitContact:', error)
    next(error)
  }
}

module.exports = { submitContact }
