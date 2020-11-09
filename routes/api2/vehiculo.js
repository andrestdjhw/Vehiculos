var express = require('express');
var router = express.Router();

var mysql = require("mysql");

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "prueba",
    insecureAuth: true,
    multipleStatements: true

});
 
router.get('/get_vehiculos', (req, res, next)=>{
    var query= 'select * from vehiculos';
    con.query(query, (err, result, field)=>{
        if(err){
            next(err);
        }else{
            res.status(200).json(result); 
        }
    });
});

module.exports= router;