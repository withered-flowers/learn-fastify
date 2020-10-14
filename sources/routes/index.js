const Controller = require('../controllers/controller.js');

// additional router
const routeTest = require('./test.js');

// define all routes here
const routeHome = (app, opts, done) => {
  app.get('/', Controller.getRootHandler);
  
  // additional router definition
  app.register(routeTest, { prefix: '/test' });
  
  // don't forget this !
  done();
}

module.exports = routeHome;