'use strict';

import express = require('express');

const app = express();

module.exports = function (isProd: boolean) {

    let app = express();

    app.set('view engine', 'pug');

    let staticPath = false ? './dist' : './public';
    app.use('/libs', express.static('./node_modules'));
    app.use('/static', express.static(staticPath));

    return app;
};