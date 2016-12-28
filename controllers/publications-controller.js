/* globals module require */
'use strict';

module.exports = function ({ data }) {
    return {
        getTopImages(req, res) {
            data.getTopImages()
                .then(result => {
                    return res.send(result);
                });
        },
        getAllImages(req, res) {
            data.getAllImages()
                .then(result => {
                    return res.send(result);
                });
        },
        getImageById(req, res) {
            let id = req.params.id;
            data.getImageById(id)
                .then(result => {
                    return res.send(result);
                });
        }
    };
};