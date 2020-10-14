// Author: withered-flowers
// MVC based SSR Fastify with additional router

// nodejs builtin
const path = require('path');

// module for ejs
const ejs = require('ejs');
const pov = require('point-of-view');

// module for processing req.body
const urlencoded = require('fastify-formbody');

// module for fastify
const fastify = require('fastify');
const app = fastify();

const port = 10000;

// routing (express.Router alike)
const indexRoute = require('./routes/index.js');
const testRoute = require('./routes/test.js');

// set view engine to ejs
app.register(pov, {
  engine: {
    ejs: ejs,
  },
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
  options: {}
});

// set req.body
app.register(urlencoded);

// express Router definition
app.register(indexRoute, { prefix: '/' });

// run the app
app.listen(port, () => {
  console.log(`Application is working at port ${port}`);
});