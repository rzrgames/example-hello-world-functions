const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 3000;

corsProxy.createServer({
    originWhitelist: [
      'http://localhost:3000',
      'http://localhost:5000',
      'https://portfolio-ravenous.web.app',
      'https://portfolio-ravenous.firebaseapp.com',
      'https://test-my-api-endpoint.web.app',
      'https://test-my-api-endpoint.firebaseapp.com'
    ],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
