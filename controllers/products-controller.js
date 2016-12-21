/* globals module require */
'use strict';

module.exports = function({ data }) {
    return {
        getRecentProducts(req, res) {
            data.getRecentProducts()
            .then(result => {
                return res.send(result);
            });
        }
    };
};