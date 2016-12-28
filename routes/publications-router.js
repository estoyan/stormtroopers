/* globals module require */
'use strict';

const express = require('express');

module.exports = function({ app, controllers }) {
    let controller = controllers.publications;

    let router = new express.Router();

    router
        .get('/publications', controller.getAllPublications)
        .get('/publications/top', controller.getTopPublications)
        .get('/publications/:id', controller.getPublicationById)
        .post('/ratepublication', controller.ratePublication); //TODO authenticate users

    app.use('/api', router);

    return router;
};