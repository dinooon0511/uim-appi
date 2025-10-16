const { Pool } = require('pg');

async function handler(req, res) {
  try {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      return res.status(500).json({ error: 'config_error', message: 'DATABASE_URL is not set' });
    }
    const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
    const result = await pool.query('select 1 as ok');
    await pool.end();
    return res.status(200).json({ db: 'connected', result: result.rows[0] });
  } catch (err) {
    return res.status(500).json({ error: 'db_error', message: err.message });
  }
}

module.exports = handler;
module.exports.config = { runtime: 'nodejs22.x' };
