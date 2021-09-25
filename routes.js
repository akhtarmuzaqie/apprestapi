'use strict';

module.exports = function (app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/mahasiswa')
        .get(myjson.tampilSemuaMahasiswa);
    
    app.route('/mahasiswa/:id')
        .get(myjson.tampilBerdsarkanID);

    app.route('/mahasiswa/tambah')
        .post(myjson.tambahMahasiswa);
}