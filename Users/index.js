const router = require('express').Router()

const bondeqms = require('./bondEquipms')

router.use('/bondeqms', bondeqms)

module.exports = router