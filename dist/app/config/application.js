'use strict';
var express = require('express');
var app = express();
module.exports = function () {
    var app = express();
    app.set('view engine', 'pug');
    app.use('/libs', express.static('./node_modules'));
    app.use('/static', express.static('./public'));
    return app;
};
//# sourceMappingURL=application.js.map