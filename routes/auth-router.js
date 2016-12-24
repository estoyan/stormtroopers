/* globals module require */
'use strict';

const express = require('express');
const passport = require('passport');


module.exports = function({ app, controllers }) {

    let controller = controllers.auth;

    let router = new express.Router();

    router
        .post('/sign-up', controller.signUp)
        .post('/sing-in', controller.singIn)
        .get('/user', controller.getLoggedUser);
         
    app.use('/api', router);

    return router;
};