var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var mongodbUri = 'mongodb://ra:@ds035290.mongolab.com:35290/shemesh';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);



mongoose.connect(mongooseUri);
//mongoose.connect('mongodb://localhost/shemesh_js6');
module.exports = mongoose;