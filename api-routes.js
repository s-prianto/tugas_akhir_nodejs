//api-routes.js
//initialize express router
let router = require('express').Router();

//set default api
router.get('/',(req,res)=>{
	res.json({
		status:'API Berhasil Dijalankan',
		message:'Welcome to Mahasiwa - API'
	});
});

//import mahasiswa from mahasiswaController
let mahasiswaController = require('./mahasiswaController');

router.route('/mahasiswa')
.get(mahasiswaController.index)
.post(mahasiswaController.new);

router.route('/mahasiswa/:mahasiswa_id')
.get(mahasiswaController.view)
.patch(mahasiswaController.update)
.put(mahasiswaController.update)
.delete(mahasiswaController.delete);

module.exports = router;
