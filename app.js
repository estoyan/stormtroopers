'use strict';
var config = require('./config')();
var data = require('./data')({ config: config });
var hashGenerator = require('./utils/hashGenerator.js');
var validator = require('./utils/validator.js');
var app = require('./config/application')(data);
var controllers = require('./controllers')({ data: data, hashGenerator: hashGenerator, validator: validator });
require('./routes')({ app: app, data: data, controllers: controllers });
app.listen(config.port, function () { return console.log("May the force be with you on: " + config.port); });
//# sourceMappingURL=app.js.map