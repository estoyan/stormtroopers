/* globals module, require */
'use strict';

const passport = require('passport'),
    jwtStrategy = require('./strategies/jwt-strategy');

module.exports = function (app, data) {
    app.use(passport.initialize());
    jwtStrategy(passport, data);
};