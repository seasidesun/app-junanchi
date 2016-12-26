'use strict';

var config   = require('../../config');

var restful  = require('node-restful'),
    mongoose = restful.mongoose;

var mongoUrl = 'mongodb://localhost/app-junanchi';
if (process.env.NODE_ENV == 'production')
    mongoUrl = config.mongo.url;

mongoose.connect(mongoUrl);

var ResourceCollName = restful.model('food', mongoose.Schema({
        name: String,
        // createdAt: Date,
        // image: { url: String }
    }))
    .methods(['get', 'post', 'put', 'delete']);


function register (app) {
    ResourceCollName.register(app, '/api/food');
}

module.exports.register = register;
module.exports.ResourceCollName = ResourceCollName;
