const { Router } = require('express')
const { subscribe } = require('../controllers/newsletter.controller')

const router = Router()

router.post('/', subscribe)

module.exports = router
