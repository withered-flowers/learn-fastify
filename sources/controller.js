const Model = require('../models/model.js');

class Controller {
  // GET / handler
  static getRootHandler(req, res) {
   res.send("Hello World");
  }

  // GET /test handler
  static getTestRootHandler(req, res) {
    // read data, using Model.readFile()
    // promise based
    Model
      .readFile()
      .then(data => {
        res.view('home', {
          title: "My First Fastify",
          header: "Data from testing.json",
          data: data
        });
      })
      .catch(err => {
        res.send(err);
      });
  }
}

module.exports = Controller;