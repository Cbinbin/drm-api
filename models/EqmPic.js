const mongoose = require('mongoose')

const EqmPicPicSchema = new mongoose.Schema({
	epicUrl: String
})
module.exports = mongoose.model('EqmPic', EqmPicPicSchema)