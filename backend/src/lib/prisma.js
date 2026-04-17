let prisma = null

function getPrisma() {
  if (!process.env.DATABASE_URL) {
    return null
  }

  if (!prisma) {
    try {
      const { PrismaClient } = require('../../generated/prisma')
      prisma = new PrismaClient()
    } catch (e) {
      console.warn('Prisma Client initialization failed. Falling back to local data.', e.message)
      return null
    }
  }

  return prisma
}

module.exports = { getPrisma }
