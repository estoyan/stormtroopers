/* globals module require */
'use strict';

module.exports = function({ data }) {
    return {
        getTopImages(req, res) {
            data.getTopImages()
            .then(result => {
                return res.send(result);
            });
        }
    };
};