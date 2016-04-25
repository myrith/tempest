'use strict';

const config = require('./config'),
  routes = require('./routes');

module.exports = function bootstrap(app) {

  routes(app);

  return {
    start: function start() {
      app.listen(config.port, function() {
        console.log(`Server listening at port ${config.port}`);
      });
    }
  };
};
