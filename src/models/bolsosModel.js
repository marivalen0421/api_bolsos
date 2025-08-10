const pool = require('../services/db')
const meiliIndex = require('../services/meili');



async function obtenerBolsos() {
    const res = await pool.query('SELECT * FROM bolsos')
    return res.rows    
}
async function crearBolso({marca, referencia, precio}) {
    const res = await pool.query(
        'INSERT INTO bolsos (marca, referencia, precio) VALUES ($1,$2, $3) RETURNING *' 
        [marca, referencia, precio])
    const bolsoCreado = res.rows[0]

    await meiliIndex.addDocuments([{
        id: bolsoCreado.id,
        marca: bolsoCreado.marca,
        referencia: bolsoCreado.referencia,
        precio: bolsoCreado.precio
    }])
    return bolsoCreado
}
module.exports={obtenerBolsos, crearBolso}