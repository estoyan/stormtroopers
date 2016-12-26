/* globals module */
let jwt = require('jwt-simple');
let secret = require('../config/index')().secret;

module.exports = function ({ data, hashGenerator, validator }) {
    return {
        getLoggedUser(req, res) {
            const token = req.headers.authorization;

            if (token) {
                // need to remove 'JWT ' in order to decode it ... (i know it sucks!)
                let userInfo = jwt.decode(token.split(' ')[1], secret);
                let user = {
                    username: userInfo.username
                    // add more info if you need it
                };

                res.status(200).json(user);
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Please provide token'
                });
            }
        }
    };
};