/* globals module require */
'use strict';

const express = require('express');

module.exports = function({ app, controllers }) {
    let controller = controllers.publications;

    let router = new express.Router();

    router
        .get('/topimages', controller.getTopImages)
        .get('/images', controller.getAllImages)
        .get('/images/:id', controller.getImageById)
        .post('/ratepublication', (req, res) => {
            console.log('here');
        }); //TODO authenticate users


    app.use('/api', router);

    return router;
};