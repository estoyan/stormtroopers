/* globals module require */
'use strict';

const express = require('express');

module.exports = function({ app, controllers }) {
    let controller = controllers.products;

    let router = new express.Router();

    router
        .get('/recentproducts', controller.getRecentProducts);

    app.use('/api', router);

    return router;
};