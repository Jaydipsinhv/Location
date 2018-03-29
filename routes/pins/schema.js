var types = require('../../lib/validator/types');

var rString =  types.rString;
var rExtraLargeString = types.rExtraLargeString;
var rNumber =  types.rNumber;
var bool = types.bool;

var schema = {
  label: rString.label('Label for Pin Location'),
  address: rExtraLargeString.label('Address of Location'),
  lat: rNumber.label('Latitude'),
  lng: rNumber.label('Longitude'),
  isDeleted: bool.label('Is Deleted')
}

module.exports = schema;
