const { Pool } = require( pg);\nconst connectionString = process.env.DATABASE_URL;\nconst pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });\nmodule.exports = { pool };\n
