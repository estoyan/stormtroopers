'use strict';
var app = require('./config/application')();
var data = require('./data')();
var controllers = require('./controllers')({ data: data });
require('./routes')({ app: app, data: data, controllers: controllers });
app.listen(3000, function () { return console.log('May the force be with you on :3000'); });
//# sourceMappingURL=app.js.map