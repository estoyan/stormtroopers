/* globals module require */
'use strict';

const express = require('express');

module.exports = function({ app, controllers }) {
    let controller = controllers.gallery;

    let router = new express.Router();

    router
        .get('/topimages', controller.getTopImages);

    app.use('/api', router);

    return router;
};