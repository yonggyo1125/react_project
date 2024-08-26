const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/payment/process',
    createProxyMiddleware({
      target: 'http://localhost:3001/payment/process',
      changeOrigin: true,
    }),
  );
};
