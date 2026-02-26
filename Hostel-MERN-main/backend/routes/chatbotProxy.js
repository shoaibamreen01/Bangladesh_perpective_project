const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

// Proxying /chatbot to FastAPI's /login route
router.use(
  '/chatbot',
  createProxyMiddleware({
    target: 'http://127.0.0.1:8000', // FastAPI server
    changeOrigin: true,
    pathRewrite: {
      '^/chatbot': '/login',  // Redirects to /login route of FastAPI
    },
  })
);

module.exports = router;
