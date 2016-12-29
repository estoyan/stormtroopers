/* globals module require */
'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function ({ app, controllers }) {
    let controller = controllers.products;

    let router = new express.Router();

    router
        .get('/recentproducts', controller.getRecentProducts)
        .get('/allProducts', controller.getAllProducts)
        .get('/allProducts/:id', controller.getProductById);


    app.use('/api', router);

    return router;
};