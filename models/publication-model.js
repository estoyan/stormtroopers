/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Publication', {
    owner: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: [{
        username: String,
        rate: Number
    }],
    comments: [{
        username: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }]
})