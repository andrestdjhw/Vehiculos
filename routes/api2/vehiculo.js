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
//Muestra Todos Los Vehiculos Existentes en la Base de Datos 
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

//Devuelve un Vehiculo consultado por ID
router.get('/get_vehiculo', (req, res, next)=>{
    var query= 'select * from vehiculos where id = ?';
    var values= [req.query.id];
    con.query(query, values,  (err, result, field)=>{
        if(err){
            next(err);
        }else{
            res.status(200).json(result); 
        }
    });
});

//Insertar un nuevo vehiculo
router.post('/insert_vehiculo', (req, res, next)=>{
    var query= 'INSERT INTO vehiculos (propietario, color, marca, modelo) VALUES (?, ?, ?, ?)';
    var values= [ req.body.propietario, req.body.color, 
                 req.body.marca, req.body.modelo];
    con.query(query, values,  (err, result, field)=>{
        if(err){
            next(err);
        }else{
            res.status(200).json(result); 
        }
    });
});

//Eliminar un Vehiculo
router.delete('/delete_vehiculo', (req, res, next)=>{
    var query= 'delete from vehiculos where id = ?';
    var values= [req.query.id];
    con.query(query, values,  (err, result, field)=>{
        if(err){
            next(err); 
        }else{
            res.status(200).json(result); 
        }
    });
});


module.exports= router; 