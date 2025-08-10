(async()=>{
    await index.updateSearchableAttributes(['marca','referencia','precio'])
    await index.updateFilterableAttributes(['referencia', 'precio','marca'])
})

const {MeiliSearch} = require('meilisearch')
require('dotenv').config()

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: process.env.MEILI_API_KEY,
})

const index = client.index('bolsos')

module.exports = index