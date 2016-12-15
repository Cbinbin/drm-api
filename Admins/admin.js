const router = require('express').Router()
const Admin = require('../models/Admin')
const checkAdminToken = require('../utils/checkAdminToken')

checkAdminToken(router)

router.post('/', (req, res)=> {
	if(req.warden.superAdmin == false) return res.json('没权限')
	const admin = new Admin()
	admin.set({
		admin: req.body.admin,
		password: req.body.password,
		superAdmin: req.body.superAdmin || false
	})
	admin.save((err)=> {
		if(err) return res.send(err)
		res.send(admin)
	})
})

module.exports = router