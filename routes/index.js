'use strict'
/**
* @name routes/index.js
* @author Jaydipsinh Vaghela <jaydip.vaghela@sublimedatasys.com>
*
* @version 0.0.0
*/

var _configure = function(app) {
  var pins = require('./pins');

  app.use('/pins', pins);
};

module.exports = {
  configure : _configure
};
