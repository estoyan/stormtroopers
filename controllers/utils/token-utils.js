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
            avatarName: user.avatarName,
            avatarUrl: user.avatarUrl,
            email: user.email,
            orders: user.orders,
            address: user.address,
            phoneNumber: user.phoneNumber,
            role: user.role,
            side: user.side
        }

        return jwt.encode(tokenInfo, secret);
    }
}