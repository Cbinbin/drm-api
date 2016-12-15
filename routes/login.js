const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Admin = require('../models/Admin')

router.post('/', (req, res)=> {
	if(req.body.phone) {
		User.findOne({phone: req.body.phone}, {createTime:0, updateTime:0}, (err, user)=> {
			if(err) return res.send(err)
			if(req.body.password === user.password) {
				user = {id: user._id, phone: user.phone}
				jwt.sign(user, 'userKey', {expiresIn: '7d'}, (err, usertoken)=> {
					if(err) return res.send(err)
					res.send({userToken: usertoken})
				})
			}
		})
	} else if(req.body.admin) {
		Admin.findOne({admin: req.body.admin}, {createTime:0, updateTime:0}, (err, warden)=> {
			if(err) return res.send(err)
			if(req.body.password === warden.password) {
				warden = {id: warden._id, admin: warden.admin, superAdmin: warden.superAdmin}
				jwt.sign(warden, 'adminKey', {expiresIn: '7d'}, (err, wardentoken)=> {
					if(err) return res.send(err)
					res.send({adminToken: wardentoken})
				})
			}
		})
	}
	else return res.json('木有phone或admin！')
})

module.exports = router