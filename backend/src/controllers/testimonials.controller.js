const { PrismaClient } = require('../../generated/prisma')
const { PrismaLibSql } = require('@prisma/adapter-libsql')
const { siteContent } = require('../data/siteContent')

const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' })
const prisma = new PrismaClient({ adapter })

async function getTestimonials(_req, res) {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { displayOrder: 'asc' },
    })

    if (!testimonials || testimonials.length === 0) {
      return res.status(200).json({ success: true, data: siteContent.testimonials })
    }

    res.status(200).json({
      success: true,
      data: testimonials,
    })
  } catch (error) {
    console.warn('Testimonial DB read failed, falling back to local.', error.message)
    res.status(200).json({ success: true, data: siteContent.testimonials })
  }
}

module.exports = { getTestimonials }
