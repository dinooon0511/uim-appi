async function handler(req, res) {
  return res.status(200).json({ ok: true, service: 'api', timestamp: Date.now() });
}

module.exports = handler;
module.exports.config = { runtime: 'nodejs22.x' };
