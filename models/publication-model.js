/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Image', {
    author: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    likes: [{
        username: String
    }],
    dislikes: [{
        username: String
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