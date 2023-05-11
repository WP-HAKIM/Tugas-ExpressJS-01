require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/biodata',function(req,res){
    const nama = req.query.name;
    const tempatLahir = req.query.tempatLahir;
    const tanggalLahir = req.query.tanggalLahir;
    const alamat = req.query.alamat;

    res.send({
        'Nama' : nama,
        'Tempat Lahir' : tempatLahir,
        'Tanggal Lahir': tanggalLahir,
        'Alamat' : alamat
    })
})

app.post('/biodata',function(req,res){
    const nama = req.body.name;
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const alamat = req.body.alamat;

    res.send({
        'Nama' : nama,
        'Tempat Lahir' : tempatLahir,
        'Tanggal Lahir': tanggalLahir,
        'Alamat' : alamat
    })
})


const server = app.listen(port,function(req,res){
    console.log('Server Listening in Port '+port);
})