/* globals module */
let jwt = require('jwt-simple');
let secret = require('../config/index')().secret;
const passport = require('passport'),
    PASWORD_DOES_NOT_MATCH = 'Паролата трябва да бъде минимум 8 символа и да съдържа цифри и латински букви',
    DISPLAYNAME = 'Stormtrooper',
    // AVATAR = 'stormtrooper',
    ROLE = 'user';

let config = {};
let trooperId = 1000;

function getNextTrooperId() {
    return trooperId += 1;
}

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
        },
        signUp(req, res) {
            let newUser = {};
            let propoerties = ['username', 'firstname', 'lastname', 'email'];
            propoerties.forEach(property => {
                if (!property || property.length < 0) {
                    res.status(411).json(`Missing ${property}`);
                }
                newUser[property] = req.body[property];
            });

            // if (!validator.validatePassword(req.body.password)) {
            //     return res.status(400);
            //         // .render('bad-request', {
            //         //     result: {
            //         //         err: PASWORD_DOES_NOT_MATCH
            //         //     }
            //         // });
            // }
            newUser.password = hashGenerator(req.body.password);
            newUser.displayname = `${DISPLAYNAME} ${getNextTrooperId()}`;
            // newUser.avatar = AVATAR;
            newUser.role = ROLE;

            data.createUser(newUser)
                .then((data) => {
                    res.status(200).send({
                        success: true,
                        data
                    })
                })
                .catch(err => {
                    return res.status(400).send({
                        success: false,
                        msg: 'User was not created'
                    });
                });
        }
    };
};