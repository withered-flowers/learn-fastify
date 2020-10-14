const Controller = require('../controllers/controller.js');

// additional router definition here
const routeTest = (app, opts, done) => {
  // don't forget to use the '/'
  // prefix already handled at index.js
  app.get('/', Controller.getTestRootHandler);

  // don't forget this !
  done();
}

module.exports = routeTest;