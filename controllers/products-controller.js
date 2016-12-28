/* globals module require */
'use strict';

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
                    console.log(result);
                    return res.send(result);
                });
        }
    };
};