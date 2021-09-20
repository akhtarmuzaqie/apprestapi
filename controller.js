'use strict';

var response = require('./res');
var connection = require('./conn');

exports.index = function (req, res) {
    response.ok("My REST API App Is Running", res);
}


//menampilkan semua data mahasiswa

exports.tampilSemuaMahasiswa = function (req, res) {
    connection.query(' SELECT * FROM mahasiswa', function (error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan data berdasarkan id

exports.tampilBerdsarkanID = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if(error){
                console.log(error)
            }else{
                response.ok(rows, res)
            }
         })
}