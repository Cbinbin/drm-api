const router = require('express').Router()
const Equipment = require('../models/Equipment')
const checkUserToken = require('../utils/checkUserToken')

checkUserToken(router)

router.post('/', (req, res)=> {
	const eqm = new Equipment()
	eqm.set({
		userId: req.user.id,
		eqmName: req.body.eqmName || 'empty',
		eqmCode: req.body.eqmCode || 'empty',
		introduction: req.body.introduction || 'empty',
		eqmClass: req.body.eqmClass || 'empty',
		state: req.body.state || false,
		runTimes: req.body.runTimes || 'empty',
		remark: req.body.remark || 'empty',
		eqmPics: req.body.eqmPics || [],
	})
	eqm.save((err)=> {
		if(err) return res.send(err)
		res.send(eqm)
	})
})

module.exports = router