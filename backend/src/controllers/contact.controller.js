const { getPrisma } = require('../lib/prisma')
const { sendContactNotification } = require('../services/email.service')

async function submitContact(req, res, next) {
  try {
    const { name, email, company, service, details } = req.body

    if (!name || !email || !company || !service || !details) {
      res.status(400).json({
        success: false,
        message: 'Name, email, company, service, and details are required.',
      })
      return
    }

    const payload = { name, email, company, service, details }
    const prisma = getPrisma()

    if (prisma) {
      await prisma.contactSubmission.create({
        data: payload,
      })
    }

    await sendContactNotification(payload)

    res.status(201).json({
      success: true,
      message: 'Your message has been received successfully.',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { submitContact }
