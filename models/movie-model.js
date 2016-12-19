/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Movie', {
    title: String,
    images: [],
    story: String,
    characters: [{
        name: String,
        actor: String
    }],
    trailerLink: String,
    rating: Number,
    imdbLink: String
})