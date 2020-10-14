// using expremiental fs promises
const fs = require('fs').promises;

// class for Instance
class Testing {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// the Model
class Model {
  static readFile() {

    // Promise based, for easier async / await, if needed.
    return fs
      .readFile('./data/test.json')
      .then(data => {
        data = JSON.parse(data);
        
        data = data.map(element => {
          return new Testing(element.id, element.name);
        });

        return data;
      });
  }
}

module.exports = Model;