const express = require('express')
const app = express()
const routes = require('./routes')
const admin = require('./Admins')
const user = require('./Users')
const port = process.env.PORT || 2200
const cors = require('cors')
const bodyParser = require('body-parser')

require('./mongodb')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', routes.home)
app.use('/reg', routes.reg)
app.use('/login', routes.login)
app.use('/admin', admin)
app.use('/user', user)


app.listen(port, ()=> {
	console.log('Server is ruuning on port: ' + port)
	console.log('Use Ctrl-C to stop')
})