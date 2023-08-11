const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // ou a rota que você deseja usar para as solicitações para o seu servidor FastAPI
    createProxyMiddleware({
      target: 'http://localhost:8000', // Endereço do servidor FastAPI
      changeOrigin: true,
    })
  );
};
