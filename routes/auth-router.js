/* globals module require */
'use strict';

const express = require('express');
const passport = require('passport');


module.exports = function({ app, controllers }) {

    let controller = controllers.auth;

    let router = new express.Router();

    router
        .post('/sing-in', controller.singIn);
         
    app.use('/api', router);

    return router;
};