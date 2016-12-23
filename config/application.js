'use strict';
var express = require('express');
var app = express();
module.exports = function (isProd) {
    var app = express();
    app.set('view engine', 'pug');
    var staticPath = false ? './dist' : './public';
    app.use('/libs', express.static('./node_modules'));
    app.use('/static', express.static(staticPath));
    return app;
};
//# sourceMappingURL=application.js.map