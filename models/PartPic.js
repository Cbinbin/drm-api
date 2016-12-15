const mongoose = require('mongoose')

const PartPicSchema = new mongoose.Schema({
	ppicUrl: String
})
module.exports = mongoose.model('PartPic', PartPicSchema)