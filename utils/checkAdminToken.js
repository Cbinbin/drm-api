const jwt = require('jsonwebtoken')

function checkAdminToken(router) {
	router.use('*', (req, res ,next)=> {
		var token = req.query.token
		jwt.verify(token, 'adminKey', (err, warden)=> {
			if(err) return res.send(err)
			else {
				req.warden = warden
				next()
			}
		})
	}) 
}

module.exports = checkAdminToken