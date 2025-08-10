const express = require('express')
const router = express.Router()
const meiliIndex = require('../services/meili')

router.get('/', async (req, res) => {
  const { q = '', marca, referencia, minPrecio, maxPrecio, page = 1, limit = 10 } = req.query;

  const filters = [];

  if (marca) filters.push(`marca = "${marca}"`);
  if (referencia) filters.push(`referencia = "${referencia}"`);
  if (minPrecio && maxPrecio) filters.push(`precio >= ${minPrecio} AND precio <= ${maxPrecio}`);
  else if (minPrecio) filters.push(`precio >= ${minPrecio}`);
  else if (maxPrecio) filters.push(`precio <= ${maxPrecio}`);

  const offset = (page - 1) * limit;

  const resultados = await meiliIndex.search(q, {
    filter: filters.length ? filters.join(' AND ') : undefined,
    limit: parseInt(limit),
    offset: parseInt(offset)
  });

  res.json({
    total: resultados.estimatedTotalHits,
    page: parseInt(page),
    limit: parseInt(limit),
    resultados: resultados.hits
  });
});


module.exports = router