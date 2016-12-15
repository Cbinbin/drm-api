const jwt = require('jsonwebtoken')

function checkUserToken(router) {
	router.use('*', (req, res ,next)=> {
		var token = req.query.token
		jwt.verify(token, 'userKey', (err, user)=> {
			if(err) return res.send(err)
			else {
				req.user = user
				next()
			}
		})
	}) 
}

module.exports = checkUserToken