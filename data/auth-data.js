/* globals module require Promise */
let dataUtils = require('./utils/data-utils');

module.exports = function({ models }) {
    let { User } = models;

    return {
        createUser(user) {
            return new Promise((resolve) => {
                let newUser = new User({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    // googleId: user.googleId,
                    email: user.email,  
                    passhash: user.password
                });
                
                resolve(newUser);
            })
                .then((newUser) => {
                    return dataUtils.save(newUser);
                });
        },
        findUserByCredentials(username, passhash    ) {
            return new Promise((resolve, reject) => {
                User.findOne({ username, passhash }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        findUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id: id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        findByGoogleId(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ googleId: id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        }
    };
};