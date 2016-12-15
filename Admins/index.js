const router = require('express').Router()

const newAdmin = require('./admin')
const password = require('./password')

router.use('/new', newAdmin)
router.use('/password', password)

module.exports = router