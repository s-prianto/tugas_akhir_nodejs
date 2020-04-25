//mahasiswaController.js

//import mahasiswaModel
Mahasiswa = require('./mahasiswaModel');

//handle index actions
exports.index=(req,res)=>{
	Mahasiswa.get((err,mahasiswa)=>{
		if(err){
			res.json({
				status:"error",
				message:err
			})
		}
		res.json({
			status:"Success",
			message:"Data Mahasiswa Berhasil Didapatkan",
			data:mahasiswa
		})
	})
}

//handle create mahasiswa actions
exports.new=(req,res)=>{
	var mahasiswa = new Mahasiswa();
	mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
	mahasiswa.nama = req.body.nama;
	mahasiswa.jurusan = req.body.jurusan;
	mahasiswa.semester = req.body.semester;

	//save the data mahasiswa and check for errors;
	mahasiswa.save((err)=>{
		if(err)
		res.json(err);
		res.json({
			message:"Mahasiswa Baru Berhasil Didaftarkan!",
			data:mahasiswa
		});
	});
};

//handle view mahasiswa info
exports.view = (req,res)=>{
	Mahasiswa.findById(req.params.mahasiswa_id,(err,mahasiswa)=>{
		if(err)
		res.send(err);
		res.json({
			message:"Mahasiswa details loading..",
			data : mahasiswa
		});
	});
}


//handle update mahsiswa info
exports.update = (req,res)=>{
	Mahasiswa.findById(req.params.mahasiswa_id, (err,mahasiswa)=>{
		if(err)
		res.send(err);
		mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
		mahasiswa.nama = req.body.nama;
		mahasiswa.jurusan = req.body.jurusan;
		mahasiswa.semester = req.body.semester;

		//save the mahasiswa and check errors
		mahasiswa.save((err)=>{
			if(err)
			res.json(err);
			res.json({
				message:"Mahasiswa Info updated",
				data : mahasiswa
			});
		});
	});
}

//handle delete siswa info
exports.delete = (req,res) =>{
	Mahasiswa.remove({_id:req.params.mahasiswa_id}, (err,mahasiswa)=>{
		if(err)
		res.send(err);
		res.json({
			status:"success",
			message:"Mahasiswa Deleted"
		})
	});
}
