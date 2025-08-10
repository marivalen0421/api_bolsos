const express = require('express')
const { obtenerMarcas, crearMarca } = require('../controllers/marcasController')

const router = express.Router()

router.get('/', obtenerMarcas)
router.post('/', crearMarca)

module.exports = router 