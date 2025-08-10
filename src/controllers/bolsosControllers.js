import db from '../db.js';

export const crearBolso = async (req, res) => {
  const { nombre, referencia, marca } = req.body;
  try {
    await db.query(
      'INSERT INTO bolsos (nombre, referencia, marca) VALUES ($1, $2, $3)',
      [nombre, referencia, marca]
    );
    res.json({ mensaje: 'Bolso agregado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar bolso' });
  }
};