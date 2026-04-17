const { Router } = require('express')
const { getPricing } = require('../controllers/pricing.controller')

const router = Router()

router.get('/', getPricing)

module.exports = router
