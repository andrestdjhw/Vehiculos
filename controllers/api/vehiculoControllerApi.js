var Vehiculo = require('../../models/vehiculo');

exports.Vehiculo_List = function(req, res){
    res.status(200).json({
        vehiculos: Vehiculo.allVehiculos
    });
}

exports.Vehiculo_Create = function(req, res){
    var vehi = new Vehiculo(req.body.id, req.body.propietario, 
                            req.body.color, req.body.marca, req.body.modelo);
    Vehiculo.add(vehi);
    
    res.status(200).json({
        vehiculo: vehi
    });
}

exports.Vehiculo_Delete = function(req, res){
    Vehiculo.RemoveById(req.body.id);
    res.status(204).send();
}

exports.Vehiculo_Update = function (req, res){
    
    var Vehi = new Vehiculo.findById(req.body.id);

    Vehi.id = req.body.id2;
    Vehi.propietario = req.body.propietario;
    Vehi.color = req.body.color;
    Vehi.marca= req.body.marca;
    Vehi.modelo= req.body.modelo;
    
    
    res.status(200).json({
        vehiculo: Vehi
    })

}