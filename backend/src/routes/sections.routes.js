const { Router } = require('express')
const { getSections } = require('../controllers/sections.controller')

const router = Router()

router.get('/', getSections)

module.exports = router
