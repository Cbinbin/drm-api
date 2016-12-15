const router = require('express').Router()
const Admin = require('../models/Admin')
const checkAdminToken = require('../utils/checkAdminToken')

checkAdminToken(router)

router.patch('/', (req, res)=> {
	if(req.warden.superAdmin == false) return res.json('没权限')
	Admin.findOneAndUpdate(
	{admin: req.body.admin}, 
	{$set: {password: req.body.password}},
	{new: true}, (err,admin)=> {
		if(err) return res.send(err)
		res.send(admin)
	})
})

router.patch('/reset', (req, res)=> {
	if(req.warden.superAdmin == false) return res.json('没权限')
	Admin.findOneAndUpdate(
	{_id: req.warden.id}, 
	{$set: {password: req.body.password}},
	{new: true}, (err,admin)=> {
		if(err) return res.send(err)
		res.send(admin)
	})
})

module.exports = router