const router = require('express').Router()
const User = require('../models/User')

router.post('/', (req, res)=> {
	const user = new User()
	user.set({
		phone: req.body.phone,
		password: req.body.password
	})
	user.save((err)=> {
		if(err) return res.send(err)
		res.send(user)
	})
})

router.patch('/forgot', (req, res)=> {
	if(req.body.password == null || req.body.password.length < 1)
		return res.send({warning: 'password不能为空'})
	User.findOneAndUpdate(
	{phone: req.body.phone}, 
	{$set: {password: req.body.password}},
	{new: true}, (err,user)=> {
		if(err) return res.send(err)
		res.send(user)
	})
})

module.exports = router