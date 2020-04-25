//index.js
//import express
let express = require('express');
//import mongoose
let mongoose = require('mongoose');
//import bodyParser
let bodyParser = require('body-parser');
//import routes
let apiRoutes = require('./api-routes.js');


//initialize express
let app = express();

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//conect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugas_akhir_nodejs');

var db = mongoose.connection;

//setup server
var PORT = process.env.PORT || 8080;

//launched app
app.listen(PORT,()=>{console.log(`Server Berhasil Dijalankan Pada Port ${PORT}`)});

//send message default urlencoded
app.get('/',(req,res)=>res.send('Selamat Datang di Server Data Mahasiswa'));

//app apiRoutes
app.use('/api',apiRoutes);
