/* globals module */
'use strict';

module.exports = function ({
    models
}) {
    let {
        Character
    } = models;

    return {
        getCharacters() {
            return new Promise((resolve, reject) => {
                Character.find({}, (err, res) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(res);
                });
            });
        }
    };
};