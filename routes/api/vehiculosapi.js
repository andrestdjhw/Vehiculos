var express = require('express');
var router = express.Router();

var VehiculoController = require('../../controllers/api/vehiculoControllerApi');

router.get('/', VehiculoController.Vehiculo_List);
router.post('/create', VehiculoController.Vehiculo_Create);

router.delete('/delete', VehiculoController.Vehiculo_Delete);
router.put('/update', VehiculoController.Vehiculo_Update);

module.exports = router;