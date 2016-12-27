/* global module */
'use strict';
let jwt = require('jwt-simple');
let secret = require('../../config/index')().secret;

module.exports = {
    decodeToken(token) {
        return jwt.decode(token.split(' ')[1], secret);
    },
    encodeToken(user) {
        // put whateever you want the token to contain
        let tokenInfo = {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            displayname: user.displayname,
            avatar: user.avatar,
            email: user.email,
            orders: user.orders,
            role: user.role
        }
        
        return jwt.encode(tokenInfo, secret);
    }
}