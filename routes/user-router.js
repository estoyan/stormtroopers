/* globals module require */
'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function({ app, controllers }) {

    let controller = controllers.user;

    let router = new express.Router();

    router
        .post('/sign-up', controller.signUp)
        .get('/user', passport.authenticate('jwt', { session: false}), controller.getLoggedUser)
        .get('/user/publications', passport.authenticate('jwt', { session: false}), controller.getUserPublications)
        .get('/user/pastorders', passport.authenticate('jwt', { session: false}), controller.getUserPastOrders)
        .post('/user/update', passport.authenticate('jwt', { session: false}), controller.updateUser);
         
    app.use('/api', router);

    return router;
};