module.exports = async function handler(request) {
  const body = JSON.stringify({ ok: true, service: 'api', timestamp: Date.now() });
  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
};
