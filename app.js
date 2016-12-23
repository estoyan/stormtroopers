'use strict';
var config = require('./config')();
var isProd = config.isProd;
var app = require('./config/application')(isProd);
var data = require('./data')({ config: config });
var controllers = require('./controllers')({ data: data });
require('./routes')({ app: app, data: data, controllers: controllers, isProd: isProd });
app.listen(config.port, function () { return console.log("May the force be with you on: " + config.port); });
//# sourceMappingURL=app.js.map