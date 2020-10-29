// Creamos nuestro objeto Vehiculo y su constructor
var Vehiculo = function(id, propietario, color, marca, modelo){
    this.id = id;
    this.propietario = propietario;
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
}
//Redefinimos el metodo toString
Vehiculo.prototype.toString = function(){
    return 'Id: ' + this.id + "propietario: " + this.propietario;
} 
//Creamos un arreglo para almacenar todos los vehiculos
Vehiculo.allVehiculos = [];
//Creamos un metodo para agregar elementos al arreglo (vehiculod)
Vehiculo.add = function(aVehi){
    Vehiculo.allVehiculos.push(aVehi);
}

//agregar dos vehiculos por default
var a = new Vehiculo(1, 'Daniel Trujillo', 'Negro', 'Ford', 'Escape');
var b = new Vehiculo(2, 'Edwin Garcia','Rojo', 'Nissan', 'Sentra');
var c = new Vehiculo(3, 'Domingo Figueroa', 'Gris', 'Honda', 'CRV');
var d= new Vehiculo(4,'Rebecca Aguilar', 'Negro', 'Chevrolet','Silverado');
Vehiculo.add(a);
Vehiculo.add(b);
Vehiculo.add(c);
Vehiculo.add(d);

Vehiculo.RemoveById = function(aVehi){
    for(var i=0; i<Vehiculo.allVehiculos.length; i++ ){
        if(Vehiculo.allVehiculos[i].id == aVehi){
            Vehiculo.allVehiculos.splice(i,1);
            break;
        }
    }
}

Vehiculo.findById = function(aVehi){
    var aVehi = Vehiculo.allVehiculos.find(x => x.id == aVehi);
    if(aVehi)
        return aVehi
    else
        throw new Error(`No existe un vehiculo con el id ${aVehi}`); 
}


//Exportamos para que quede disponible
module.exports = Vehiculo;
