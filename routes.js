"use strict";

const { json } = require("body-parser");

// untuk memanggil
module.exports = function (app) {
    var jsonku = require("./controller");

    app.route('/')
        .get(jsonku.index);

    app.route("/tampil")
        .get(jsonku.tampilsemuamahasiswa);

    app.route("/tampil/:id")
        .get(jsonku.tampilberdasarkanid);

    app.route("/tambah")
        .post(jsonku.tambahmahasiswa);

    app.route("/ubah")
        .put(jsonku.ubahMahasiswa);

    app.route("/hapus")
        .delete(jsonku.hapusMahasiswa);
}