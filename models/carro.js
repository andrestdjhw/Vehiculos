const mongoose = require('mongoose');
//Crear un estructura(esquema) 

const Schema = mongoose.Schema;

const Carro = new Schema({
    placa:String,
    color:String,
    marca: String,
    modelo: String
});

//modelo a partir del esquema

const model = mongoose.model('Vehiculos', Carro);

module.exports = model; 


