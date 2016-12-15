const mongoose = require('mongoose')
const User = require('./User')
const Equipment = require('./Equipment')

const InfoSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	bondedEquipment: [{     //已绑设备
		type: Schema.Types.ObjectId, 
		ref: 'Equipment' 
	}],
	boughtEquipment: [{     //已买设备
		type: String,
	}],

})

module.exports = mongoose.model('Info', InfoSchema)