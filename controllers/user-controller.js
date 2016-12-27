/* globals module */
let jwt = require('jwt-simple');
let secret = require('../config/index')().secret;

const PASWORD_DOES_NOT_MATCH = 'Паролата трябва да бъде минимум 8 символа и да съдържа цифри и латински букви',
    DISPLAYNAME = 'Stormtrooper',
    // AVATAR = 'stormtrooper',
    ROLE = 'user';

let trooperId = 1000;

function getNextTrooperId() {
    return trooperId += 1;
}

function getAvatar() {
    
}

module.exports = function ({ data, hashGenerator, validator }) {
    return {
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
        },
        getLoggedUser(req, res) {
            const token = req.headers.authorization;

            if (token) {
                // need to remove 'JWT ' in order to decode it ... (i know it sucks!)
                let userInfo = jwt.decode(token.split(' ')[1], secret);
                let user = {
                    username: userInfo.username,
                    displayname: userInfo.displayname,
                    firstname: userInfo.firstname,
                    lastname: userInfo.lastname,
                    email: userInfo.email,
                    avatar: userInfo.avatar,

                    // add more info if you need it
                };

                res.status(200).json(user);
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Please provide token'
                });
            }
        },
        updateUser(req, res){
           
        }
    };
};