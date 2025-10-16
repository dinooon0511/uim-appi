const { Pool } = require('pg');

module.exports = async function handler(request) {
  try {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      return new Response(JSON.stringify({ error: 'config_error', message: 'DATABASE_URL is not set' }), {
        status: 500,
        headers: { 'content-type': 'application/json' }
      });
    }
    const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
    const result = await pool.query('select 1 as ok');
    await pool.end();
    return new Response(JSON.stringify({ db: 'connected', result: result.rows[0] }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'db_error', message: err.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
};
