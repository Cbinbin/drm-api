const router = require('express').Router()

router.get('/', (req, res)=> {
	res.send({
		'/reg' : 'http://localhost:2200/reg',
		'/login' : 'http://localhost:2200/login',
		'/admin/new' : 'http://localhost:2200/admin/new?token=${token}',
		'/admin/password' : 'http://localhost:2200/admin/password?token=${token}',
		'/admin/password/reset' : 'http://localhost:2200/admin/password/reset?token=${token}',
	})
})

module.exports = router