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
        getCharacters(req, res) {
            data.getCharacters()
            .then(characters => {
                return res.status(200).json({body: characters});
            })
            .catch(err => {
                return res.status(400).json({msg: 'No characters!'});
            });
        }
    };
};