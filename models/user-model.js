/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('User', {
    firstname: {
        type: String,
        required: true
    },
    lastname: {
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
        // enum: ['stormtrooper', 'dartVaider', 'jangoFett', 'empire', 'rebels'],
        // default: 'stormtrooper'
        default: 'http://avatarbox.net/avatars/img1/stormtrooper_mask_avatar_picture_32704.png'
    },
    email: {
        type: String,
        // unique: true,
    },
    phoneNumber: {
        type: String
    },
    userRating: {
        type: Number,
        default: 0
    },
    passhash: {
        type: String
    },
    orders: [{}],
    role: [String],
    isDeleted: Boolean
});