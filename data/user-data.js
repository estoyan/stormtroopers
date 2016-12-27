/* globals module require Promise */
let dataUtils = require('./utils/data-utils');

module.exports = function ({ models }) {
    let { User } = models;

    return {
        createUser(user) {
            return new Promise((resolve) => {
                    let newUser = new User({
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        email: user.email,
                        passhash: user.password,
                        avatarName: user.avatarName,
                        avatarUrl: user.avatarUrl,
                        role: user.role,
                        displayname: user.displayname
                    });

                    resolve(newUser);
                })
                .then((newUser) => {
                    return dataUtils.save(newUser);
                });
        },
        getUserByUsername(username){
            let promise = new Promise((resolve, reject) => {
                User.findOne({
                    username
                }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });

            return promise;
        },
        updateUser(user) {
            return dataUtils.update(user);
        }
    }
};