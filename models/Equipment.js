const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')
const EqmPic = require('./EqmPic')

const EquipmentSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	eqmName: {            //设备名
		type: String,
	},
	eqmCode: {            //设备编号
		type: String,
	},
	introduction: {       //设备简介       
		type: String,
	},
	eqmClass: {           //设备分类
		type: String,
	},
	state: {              //设备状态
		type: Boolean,
	},
	runTimes: {           //已运行时长
		type: String,
	},
	remark: {             //设备备注
		type: String,
	},
	eqmPics: [{            //图片
		type: Schema.Types.ObjectId, 
		ref: 'EqmPic'
	}],
	addTime: {            //添加时间
		type: Date,
		default: Date.now
	},
})

module.exports = mongoose.model('Equipment', EquipmentSchema)