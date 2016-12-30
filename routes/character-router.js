/* globals module require */
'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function ({ app, controllers }) {
    let controller = controllers.characters;

    let router = new express.Router();

    router
        .get('/characters', controller.getCharacters);

    app.use('/api', router);

    return router;
};