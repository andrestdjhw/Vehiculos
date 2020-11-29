//Api Usando Base de Datos no relacional MongoDB
var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const Carro = require('../../models/carro');

try{
    mongoose.connect('mongodb+srv://dtrujillo:P@inkiller19@cluster0.h13fk.mongodb.net/test', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log('Conectado a MongoDB!');

}
catch(error){
    console.log('Ocurrio un error al conectarse: '+ console.error);
}
//Api para agregar un nuevo carro
router.post('/insert_carro', (req, res)=>{
    try{
        const carro = new Carro(req.body);
        carro.save();
        res.status(200).json({resultado: 'Carro Agregado'});
    }
    catch(error){
        console.log('Error al insertar en mongoDB'+ error);    
    }
});

//Api para obtener todos los registros (Carros)
router.get('/get_carros', async (req, res)=>{
    const carros = await Carro.find();
    res.status(200).json(carros);
});
//Modificar un Carro
router.put('/update_carro', async (req, res)=>{
    const cid = req.body.id; 

    const carroDB = await Carro.findById(cid);
    if(!carroDB){
        res.status(404).json({
            msg:'No existe un Carro'
        })
    }

    const datos = req.body;
    delete datos.placa;

    const carroactualizado = await Carro.findByIdAndUpdate(cid, datos, {new: true});
    res.status(200).json({carro: carroactualizado});
});
//Eliminar un Carro
router.delete('/delete_carro', async  (req, res)=>{
    const cid = req.query.id;


    const carroDB = await Carro.findById(cid);
    if(!carroDB){
        res.status(404).json({
            msg:'No existe un Carro'
        })
    }

    await Carro.findByIdAndDelete(cid);
    res.status(200).json({mesj: "Carro Borrado"});
});

module.exports = router;
