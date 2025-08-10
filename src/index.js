require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bolsosR = require('./routes/bolsosR')
const searchR = require('./routes/searchR')
const marcas = require('./routes/marcas')

const app = express()
app.use(cors())
app.use(express.json()) // ✅ paréntesis agregados

app.use('/bolsos', bolsosR)
app.use('/search', searchR)
app.use('/marca', marcas)

app.get('/', (req, res) => {
    res.send('servidor funcionando')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})