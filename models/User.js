const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
	phone: {
		type: Number,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	createTime: {
		type: Date,
		default: Date.now
	},
	updateTime: {
		type: Date,
		default: Date.now
	},
},
{
	timestamps: {
		createdAt: 'createTime',   //自动生成createTime
		updatedAt: 'updateTime'　　　　//管理updateTime
	}
})

module.exports = mongoose.model('User', UserSchema)