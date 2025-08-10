import db from '../services/db.js';

export const obtenerMarcas = async (req, res) => {
  try {
    const result = await db.query('SELECT nombre FROM marcas ORDER BY nombre');
    res.json(result.rows.map(row => row.nombre));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener marcas' });
  }
};

export const crearMarca = async (req, res) => {
  const { nombre } = req.body;
  try {
    await db.query('INSERT INTO marcas (nombre) VALUES ($1) ON CONFLICT DO NOTHING', [nombre]);
    res.json({ mensaje: 'Marca agregada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar marca' });
  }
};