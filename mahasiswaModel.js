//mahasiswa.js
let mongoose = require('mongoose');

//setuup schema
var mahasiswaSchema = mongoose.Schema({
	create_date:{
		type : Date,
		default : Date.now()
	},
	nim:{
		type:Number,
		required:true,
		index:{
			unique : true
		}
	},
	nama:{
		type:String,
		required:true
	},
	jurusan:{
		type:String,
		required:true
	},
	semester:{
		type:Number,
		required:true
	}
})

var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);

module.exports.get = (callback,limit)=>{
	Mahasiswa.find(callback).limit(limit);
}
