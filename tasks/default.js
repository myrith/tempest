'use strict';

const project = require('../package');

module.exports = function() {
  return function() {
    let message = `\nTempest v${project.version}\n`;
    message += `Jerven Clark Chua <jervenclark@gmail.com>\n`;
    console.log(message);
  };
};
