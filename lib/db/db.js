'use strict'
/**
* @name db/db.js
* @author Jaydipsinh Vaghela <jaydip.vaghela@sublimedatasys.com>
*
* @version 0.0.0
*/
var logger = require('../logger');
var config = require('../../config');
var _ = require('lodash');
var skin = require('mongoskin');

//var connectionString = 'mongodb://localhost:27017/' + (process.env.DB_NAME || 'location');
var connectionString = (config.dbUrl || 'mongodb://localhost:27017') + '/' + (process.env.DB_NAME || 'location');

logger.info('Conn String :: ' + connectionString);
var db = skin.db(connectionString, {native_parser:true}); // Need to discuss use of native_parser in mongo?

// Used to create new objectID in from route
db.ObjectID = skin.ObjectID;  // Helpfull when we need to convert or create ObjectId for query direct to mongo

var _configure = function() {
  logger.info('bind collections to mongoskin');
  logger.info(arguments);

  try {
    _.forEach(arguments, function configureEntities(entity) {
      logger.info('process ' + entity.collection + ' for binding with db');
      db.bind(entity.collection); // help in creating collection in mongodb and allow operation on it.

      // further code need to implement as per requirement for audit log and indexing
    });

    logger.info('binding for all entity is completed successfully');
  } catch (err) {
    logger.error('Error while binding entity to the db');
    logger.error(err);
  }
  return db;
};

module.exports = {
  configure: _configure
};
