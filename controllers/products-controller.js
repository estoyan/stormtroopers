/* globals module require */
'use strict';
let tokenUtils = require('./utils/token-utils');

module.exports = function ({ data }) {
    return {
        getRecentProducts(req, res) {
            data.getRecentProducts()
                .then(result => {
                    return res.send(result);
                });
        },
        getAllProducts(req, res) {
            data.getAllProducts()
                .then(result => {
                    return res.send(result);
                });
        },
        getProductById(req, res) {
            let id = req.params.id;
            data.getProductById(id)
                .then(result => {
                    return res.send(result);
                });
        },
        getProductsFromBasket(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username;

            data.getProductsFromBasket(username)
        },
    };
};