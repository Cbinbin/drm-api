const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PartPic = require('./PartPic')

const PartSchema = new mongoose.Schema({
	materialName: {    //配件名称
		type: String,
		required: true
	},
	mCode: {           //配件代码
		type: Number,
	},
	standard: {        //规格
		type: String,
	},
	unit: {            //单位
		type: String,
	},
	quantity: {        //数量
		type: Number,
	},
	pics: [{            //图片
		type: Schema.Types.ObjectId, 
		ref: 'PartPic'
	}],
	suitableEquipments: [{    //适用设备
		type: String,
	}]
})

module.exports = mongoose.model('Part', PartSchema)