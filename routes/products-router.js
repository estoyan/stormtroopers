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
        .get('/products/basket', passport.authenticate('jwt', { session: false }), controller.getProductsFromBasket)
        .get('/allProducts/:id', controller.getProductById)

        
        .post('/addProduct', passport.authenticate('jwt', { session: false }), controller.addProductToBasket);

    app.use('/api', router);

    return router;
};