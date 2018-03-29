
/**
* @name routes/pins/pins.js
* @author Jaydipsinh Vaghela <jaydip.vaghela@sublimedatasys.com>
*
* @version 0.0.0
*/

(function(){
  'use strict'
  var express = require('express');
  var router = express.Router();
  var db = require('../../lib/db');
  var logger = require('../../lib/logger');
  var validate = require('../../lib/validator');
  var schema = require('./schema');

  /* GET API for ALL records from collection. */
  router.get('/', function(req, res, next){
    db['pins'].find({}).toArray(function(err, data) {
      if(err) {
        logger.log(err);
        res.status(501).send({"success":false, "message":err});
      }
      res.status(200).send({"success":false, "data":data});
    });
  });

  /* POST API for insert record in collection. */
  router.post('/', validate(schema), function(req, res, next) {
    var post = req.body;
    post["CreatedDate"] = new Date();

    db['pins'].insert(post, function(err, d) {
      if(err) {
        logger.error(err);
        res.status(501).send({"success":false, "message":err});
      }
      res.status(201).send({"success":true, "data":d.ops});
    });
  });

  module.exports = router;

})();
