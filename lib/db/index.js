'use strict'
/**
* @name db/index.js
* @author Jaydipsinh Vaghela <jaydip.vaghela@sublimedatasys.com>
*
* @version 0.0.0
*/

var db = require('./db');

/**
* Set of all entities that will be used throughout the system, with following
* format:
* {
*   collection: <Name Of The Collection>,
*   audit: <true/false> indicates where to enable audit for this entity if this
*           is set true, auditig will be done for Create / Update when "Resource"
*           is used. Auto routes generated using routeBuilder also supports same.
*           POST => Create, PUT (Draft) => Update (Soft), PUT => Update. Soft
*           updates will cause minor-version to increment otherwise, major-version
*           will increment.,
*    index : <Pass index in exactly same format as expected by mongodb>
*           REF: https://docs.mongodb.org/manual/reference/method/db.collection.createIndex/
* }
*
*
*/

var entities = [
  {
    collection: 'pins',
    index:{
      label: ''
    }
  }
];
/**
*  I have used apply because I wanna pass more then one entity as argument and
*  not as array, using "apply" will fill "arguments" ("Array Like Object").
*/
module.exports = db.configure.apply(this, entities);
