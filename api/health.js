module.exports = async (req, res) => {\n  res.status(200).json({ ok: true, service: api, timestamp: Date.now() });\n};\n
