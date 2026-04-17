const { PrismaClient } = require('../generated/prisma')
const { PrismaLibSql } = require('@prisma/adapter-libsql')
const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' })
const prisma = new PrismaClient({ adapter })

const { siteContent } = require('../src/data/siteContent.js')

async function main() {
  console.log('Starting seed...')

  if (process.argv.includes('--reset')) {
    console.log('Wiping existing data due to --reset flag...')
    const tables = [
      'heroAction', 'heroSection', 'navigationItem', 'brand', 'statItem', 
      'productPoint', 'product', 'productsIntro', 'whyChooseItem', 
      'whyChooseSection', 'testimonial', 'testimonialsIntro', 
      'contactCtaAction', 'contactCtaSection'
    ]
    for (const table of tables) {
      if (prisma[table]) await prisma[table].deleteMany()
    }
    console.log('Data wiped.')
  }

  // Brand
  await prisma.brand.upsert({
    where: { id: 1 },
    update: siteContent.brand,
    create: { id: 1, ...siteContent.brand },
  })

  // Navigation
  for (let i = 0; i < siteContent.navigation.length; i++) {
    const nav = siteContent.navigation[i]
    await prisma.navigationItem.upsert({
      where: { id: i + 1 },
      update: { ...nav, displayOrder: i },
      create: { id: i + 1, ...nav, displayOrder: i },
    })
  }

  // Hero Section
  const hero = await prisma.heroSection.upsert({
    where: { id: 1 },
    update: {
      eyebrow: siteContent.hero.eyebrow,
      title: siteContent.hero.title,
      description: siteContent.hero.description,
      image: siteContent.hero.image,
      imageAlt: siteContent.hero.imageAlt,
    },
    create: {
      id: 1,
      eyebrow: siteContent.hero.eyebrow,
      title: siteContent.hero.title,
      description: siteContent.hero.description,
      image: siteContent.hero.image,
      imageAlt: siteContent.hero.imageAlt,
    },
  })

  for (let i = 0; i < siteContent.hero.actions.length; i++) {
    const action = siteContent.hero.actions[i]
    await prisma.heroAction.upsert({
      where: { id: i + 1 },
      update: { ...action, heroSectionId: hero.id },
      create: { id: i + 1, ...action, heroSectionId: hero.id },
    })
  }

  // Stats
  for (let i = 0; i < siteContent.stats.length; i++) {
    const stat = siteContent.stats[i]
    await prisma.statItem.upsert({
      where: { id: i + 1 },
      update: { value: stat.value, suffix: stat.suffix, label: stat.label, displayOrder: i },
      create: { id: i + 1, value: stat.value, suffix: stat.suffix, label: stat.label, displayOrder: i },
    })
  }

  // Products Intro
  await prisma.productsIntro.upsert({
    where: { id: 1 },
    update: siteContent.productsIntro,
    create: { id: 1, ...siteContent.productsIntro },
  })

  // Products & Points
  for (let i = 0; i < siteContent.products.length; i++) {
    const p = siteContent.products[i]
    const product = await prisma.product.upsert({
      where: { id: i + 1 },
      update: { title: p.title, description: p.description, displayOrder: i },
      create: { id: i + 1, title: p.title, description: p.description, displayOrder: i },
    })

    for (let j = 0; j < p.points.length; j++) {
      const pointId = (i * 100) + j + 1
      await prisma.productPoint.upsert({
        where: { id: pointId },
        update: { text: p.points[j], productId: product.id },
        create: { id: pointId, text: p.points[j], productId: product.id },
      })
    }
  }

  // WhyChooseSection
  await prisma.whyChooseSection.upsert({
    where: { id: 1 },
    update: { title: siteContent.whyChoose.title, description: siteContent.whyChoose.description },
    create: { id: 1, title: siteContent.whyChoose.title, description: siteContent.whyChoose.description },
  })

  for (let i = 0; i < siteContent.whyChoose.items.length; i++) {
    const item = siteContent.whyChoose.items[i]
    await prisma.whyChooseItem.upsert({
      where: { id: i + 1 },
      update: { ...item, displayOrder: i, whyChooseSectionId: 1 },
      create: { id: i + 1, ...item, displayOrder: i, whyChooseSectionId: 1 },
    })
  }

  // Testimonials Intro
  await prisma.testimonialsIntro.upsert({
    where: { id: 1 },
    update: siteContent.testimonialsIntro,
    create: { id: 1, ...siteContent.testimonialsIntro },
  })

  // Testimonials
  for (let i = 0; i < siteContent.testimonials.length; i++) {
    const t = siteContent.testimonials[i]
    await prisma.testimonial.upsert({
      where: { id: i + 1 },
      update: { ...t, displayOrder: i },
      create: { id: i + 1, ...t, displayOrder: i },
    })
  }

  // Contact CTA
  const cta = await prisma.contactCtaSection.upsert({
    where: { id: 1 },
    update: { title: siteContent.contactCta.title, description: siteContent.contactCta.description },
    create: { id: 1, title: siteContent.contactCta.title, description: siteContent.contactCta.description },
  })

  for (let i = 0; i < siteContent.contactCta.actions.length; i++) {
    const action = siteContent.contactCta.actions[i]
    await prisma.contactCtaAction.upsert({
      where: { id: i + 1 },
      update: { ...action, contactCtaSectionId: cta.id },
      create: { id: i + 1, ...action, contactCtaSectionId: cta.id },
    })
  }

  console.log('Seed complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
