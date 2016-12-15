const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
	admin: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	superAdmin: {
		type: Boolean,
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

module.exports = mongoose.model('Admin', AdminSchema)