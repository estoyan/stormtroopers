/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Character', {
    name: String,
    homeland: String,
    born: String,
    dead: String,
    story: String,
    species: String,
    affiliation: String,
    image: String
})