/* globals module */
let jwt = require('jwt-simple');
let secret = require('../config/index')().secret;

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
                        let token = jwt.encode(user, secret);
                        return res.status(200).json({
                            success: true,
                            body: {
                                token: token,
                                displayname: user.displayname,
                                username: user.username,
                                avatar: user.avatar
                            }
                        });
                    }

                    return res.status(400).json({
                        success: false,
                        msg: 'Authenticaton failed, wrong password.'
                    });
                })
                .catch(error => {
                    return res.send(error);
                });
        }
    };
};