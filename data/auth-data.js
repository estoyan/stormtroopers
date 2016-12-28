/* globals module require Promise */
let dataUtils = require('./utils/data-utils');

module.exports = function({ models }) {
    let { User } = models;

    return {
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
        }       
    };
};