const { z } = require('zod')
const { PrismaClient } = require('../../generated/prisma')
const { PrismaLibSql } = require('@prisma/adapter-libsql')

const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' })
const prisma = new PrismaClient({ adapter })

const HeroSectionSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  actions: z.array(z.object({
    label: z.string(),
    href: z.string(),
    variant: z.string()
  }))
})

const StatItemSchema = z.object({
  value: z.number(),
  suffix: z.string(),
  label: z.string(),
})

class ContentValidationError extends Error {
  constructor(message, errors) {
    super(message)
    this.name = 'ContentValidationError'
    this.errors = errors
  }
}

async function getContentHealth() {
  try {
    const [heroCount, statCount, testCount] = await Promise.all([
      prisma.heroSection.count(),
      prisma.statItem.count(),
      prisma.testimonial.count()
    ])

    const seeded = heroCount > 0
    return {
      seeded,
      source: seeded ? "database" : "fallback",
      tables: {
        hero: heroCount > 0,
        stats: statCount > 0,
        testimonials: testCount > 0
      }
    }
  } catch (err) {
    return {
      seeded: false,
      source: "fallback",
      tables: { hero: false, stats: false, testimonials: false }
    }
  }
}

async function getFullContent() {
  const [brand, nav, hero, stats, prodIntro, prods, why, testIntro, cta] = await Promise.all([
    prisma.brand.findFirst(),
    prisma.navigationItem.findMany({ orderBy: { displayOrder: 'asc' } }),
    prisma.heroSection.findFirst({ include: { actions: true } }),
    prisma.statItem.findMany({ orderBy: { displayOrder: 'asc' } }),
    prisma.productsIntro.findFirst(),
    prisma.product.findMany({ orderBy: { displayOrder: 'asc' }, include: { points: true } }),
    prisma.whyChooseSection.findFirst({ include: { items: { orderBy: { displayOrder: 'asc' } } } }),
    prisma.testimonialsIntro.findFirst(),
    prisma.contactCtaSection.findFirst({ include: { actions: true } })
  ])

  if (!hero) {
    throw new Error('Database empty.')
  }

  // Zod basic validation on critical parts
  try {
    HeroSectionSchema.parse(hero)
    stats.forEach(s => StatItemSchema.parse(s))
  } catch (err) {
    throw new ContentValidationError('Database content validation failed', err.errors)
  }

  // Assemble the exact structure expected by the frontend
  return {
    brand: {
      name: brand?.name || '',
      tagline: brand?.tagline || '',
      description: brand?.description || ''
    },
    navigation: nav.map(n => ({ label: n.label, href: n.href })),
    hero: {
      eyebrow: hero.eyebrow,
      title: hero.title,
      description: hero.description,
      image: hero.image,
      imageAlt: hero.imageAlt,
      actions: hero.actions.map(a => ({ label: a.label, href: a.href, variant: a.variant }))
    },
    stats: stats.map(s => ({ value: s.value, suffix: s.suffix, label: s.label })),
    productsIntro: prodIntro ? { title: prodIntro.title, description: prodIntro.description } : null,
    products: prods.map(p => ({
      title: p.title,
      description: p.description,
      points: p.points.map(pt => pt.text)
    })),
    whyChoose: why ? {
      title: why.title,
      description: why.description,
      items: why.items.map(i => ({ title: i.title, description: i.description }))
    } : null,
    testimonialsIntro: testIntro ? { title: testIntro.title, description: testIntro.description } : null,
    contactCta: cta ? {
      title: cta.title,
      description: cta.description,
      actions: cta.actions.map(a => ({ label: a.label, href: a.href, variant: a.variant }))
    } : null
  }
}

module.exports = {
  getFullContent,
  getContentHealth,
  ContentValidationError
}
