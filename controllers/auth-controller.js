/* globals module */
var jwt = require('jwt-simple');
let secret = 'secret';
const passport = require('passport');
const PASWORD_DOES_NOT_MATCH = 'Паролата трябва да бъде минимум 8 символа и да съдържа цифри и латински букви';

let config = {};

module.exports = function ({ data, hashGenerator, validator }) {
    return {
        Oauthenticate(req, res) {
            let username = req.body.username;
            let password = req.body.password;
            data.findUserByCredentials(username, hashGenerator(password))
                .then((user)=>{
                    if(user){
                          let token = jwt.encode(user, secret);
                         return res.status(200).json({ success: true, token: token }); 
                    }
              
                     return res.status(400).json({success: false, msg: 'Authenticaton failed, wrong password.'});
                })
                .catch(error => {
                    return res.send(error);
                });
        },
        signUp(req, res) {
            let newUser = {};
            let propoerties = ['username', 'firstName', 'lastName', 'email'];
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
            data.createUser(newUser)
                .then(
                () => {
                    res.send("succsess");
                })
                .catch(err => {
                     return res.status(400).send(err);
                    //     .render('bad-request', {
                    //         result: {
                    //             err
                    //         }
                    //     });
                });
        },
        signOut(req, res) {
            req.logout();
            return res.redirect('/');
        }
    };
};