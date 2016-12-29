/* globals module require */
'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function({ app, controllers }) {
    let controller = controllers.publications;

    let router = new express.Router();

    router
        .get('/publications', controller.getAllPublications)
        .get('/publications/top', controller.getTopPublications)
        .get('/publications/:id', controller.getPublicationById)
        .post('/ratepublication', controller.ratePublication) //TODO authenticate users
        .post('/publication/comment', passport.authenticate('jwt', { session: false}), controller.addComment);

    app.use('/api', router);

    return router;
};