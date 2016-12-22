/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('User', {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    displayname: String,
    avatar: {
        type: String,
        enum: ['stormtrooper, dartVaider', 'jangoFett', 'empire', 'rebels']
    },
    email: {
        type: String,
        // unique: true,
    },
    phoneNumber: {
        type: String
    },
    userRating: Number,
    passhash: {
        type: String
    },
    orders: [{}],
    role: [String],
    isDeleted: Boolean
});