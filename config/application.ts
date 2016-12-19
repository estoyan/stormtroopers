'use strict';

import express = require('express');

const app = express();

module.exports = function () {

    let app = express();

    app.set('view engine', 'pug');

    app.use('/libs', express.static('./node_modules'));
    app.use('/static', express.static('./public'));

    return app;
};