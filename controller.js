"user strict";

var response = require("./res");
var connection = require("./koneksi");


exports.index = function (req, res) {
    response.ok ("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields) {
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};


//menampilkan semua data mahasiswa berdasarkan idnya
exports.tampilberdasarkanid = function (req, res) {
    let id= req.params.id
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function (error, rows, fields) {
            if(error) {
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data mahasiswa 
// body = data yang akan kita post kan berdasarkan input user
exports.tambahmahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",
    [nim,nama,jurusan],
    function (error, rows, fields) {
        if(error) {
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data", res);
        }
    });
};

//mengubah data berdasarkan id
exports.ubahMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", 
    [nim,nama,jurusan,id],
    function (error, rows, fields) {
        if(error) {
            console.log(error);
        }else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};