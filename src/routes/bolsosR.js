const express = require('express')
const router = express.Router()
const {obtenerBolsos, crearBolso} = require('../models/bolsosModel')

router.get('/', async (req, res)=>{
    const bolsos = await obtenerBolsos()
    res.json(bolsos)
})
router.post('/', async(req, res)=>{
    const nuevoBolso = await crearBolso()
    res.status(201).json(nuevoBolso)
})

module.exports = router