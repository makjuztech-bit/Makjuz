const { getPrisma } = require('../lib/prisma')

async function subscribe(req, res, next) {
  try {
    const { email } = req.body

    if (!email) {
      res.status(400).json({ success: false, message: 'Email is required.' })
      return
    }

    const prisma = getPrisma()

    if (prisma) {
      await prisma.newsletterSubscriber.upsert({
        where: { email },
        update: {},
        create: { email },
      })
    }

    res.status(201).json({
      success: true,
      message: 'Newsletter subscription captured.',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { subscribe }
