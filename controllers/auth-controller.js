/* globals module */
'use strict';
let tokenUtils = require('./utils/token-utils');

let config = {};
module.exports = function ({
    data,
    hashGenerator,
    validator
}) {
    return {
        singIn(req, res) {
            let username = req.body.username;
            let password = req.body.password;
            data.findUserByCredentials(username, hashGenerator(password))
                .then((user) => {
                    if (user) {
                        let token = tokenUtils.encodeToken(user);
                        return res.status(200).json({
                            body: {
                                token: token,
                                displayname: user.displayname,
                                username: user.username,
                                avatarName: user.avatarName,
                                avatarUrl: user.avatarUrl,
                                side: user.side
                            }
                        });
                    }

                    return res.status(400).json({
                        msg: 'Wrong username or password!'
                    });
                })
                .catch(error => {
                    return res.send(error);
                });
        }
    };
};