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
    // avatar: {
    //     name: {
    //         type: String,
    //         enum: ['Stormtrooper', 'Darth Vaider', 'Boba Fett', 'Empire', 'Rebels'],
    //         default: 'Stormtrooper'
    //             // default: 'http://avatarbox.net/avatars/img1/stormtrooper_mask_avatar_picture_32704.png'
    //     },
    //     url: String
    // },
    avatarName: String,
    avatarUrl: String,
    email: {
        type: String,
        // unique: true,
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    passhash: {
        type: String
    },
    orders: [
        {
            product: {
                name: String,
                price: Number,
                imageUrl: String
            },
            state: {
                type: String,
                enum: ['completed', 'not-completed']
            }
        }
    ],
    role: [String],
    isDeleted: Boolean
});