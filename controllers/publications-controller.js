/* globals module require */
'use strict';

module.exports = function ({ data }) {
    return {
        getTopPublications(req, res) {
            data.getTopPublications()
                .then(result => {
                    return res.send(result);
                });
        },
        getAllPublications(req, res) {
            data.getAllPublications()
                .then(result => {
                    return res.send(result);
                });
        },
        getPublicationById(req, res) {
            let id = req.params.id;
            data.getPublicationById(id)
                .then(result => {
                    return res.send(result);
                });
        }
    };
};