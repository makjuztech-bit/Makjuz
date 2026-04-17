const { Router } = require('express')
const { getTestimonials } = require('../controllers/testimonials.controller')

const router = Router()

router.get('/', getTestimonials)

module.exports = router
