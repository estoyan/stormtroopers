/* globals module */
let tokenUtils = require('./utils/token-utils');

const PASWORD_DOES_NOT_MATCH = 'Паролата трябва да бъде минимум 8 символа и да съдържа цифри и латински букви',
    DISPLAYNAME = 'Stormtrooper',
    // AVATAR = 'stormtrooper',
    ROLE = 'user',
    USER_BASIC_PROPERTIES = ['username', 'firstname', 'lastname', 'email'],
    USER_FULL_PROPERTIES = ['username', 'firstname', 'lastname', 'email'];
    
function getNextTrooperId() {
    return Math.floor((Math.random() * 9000) + 1000);
}

function getAvatar() {
    
}

module.exports = function ({ data, hashGenerator, validator }) {
    return {
         signUp(req, res) {
            let newUser = {};
            USER_BASIC_PROPERTIES.forEach(property => {
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
                        msg: 'User was not created!'
                    });
                });
        },
        getLoggedUser(req, res) {
            const token = req.headers.authorization;

            if (token) {
                // need to remove 'JWT ' in order to decode it ... (i know it sucks!)
                let userInfo = tokenUtils.decodeToken(token);
                console.log(userInfo);
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
                    message: 'Please provide token'
                });
            }
        },
        updateUser(req, res){
            const token = req.headers.authorization;
            let userInfo = tokenUtils.decodeToken(token);
            
            data.getUserByUsername(userInfo.username)
            .then(user =>{
                    USER_FULL_PROPERTIES.forEach(property => {
                        user[property] = req.body[property] || user[property];
                    });
                
                    return data.updateUser(user);
            })
            .then(user => {
                 let token = tokenUtils.encodeToken(user);
                 let body = {
                     token: token,
                     displayname: user.displayname,
                     username: user.username,
                     avatar: user.avatar
                 }
                  
                res.status(200).json({user, body});
            })
            .catch(err => {
                return res.status(400).send({
                    msg: 'User was not updated!'
                });
            });;
        }
    };
};