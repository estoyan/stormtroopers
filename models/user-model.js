/* globals require module */

const modelRegistrator = require('./utils/model-registrator');
const mongoose = require('mongoose');

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
    side: {
        type: String,
        enum: ['Dark', 'Light', 'Neutral'],
        default: 'Neutral'
    },
    orders: [
        {
            product: {
                _id: mongoose.Schema.Types.ObjectId,
                title: String,
                price: Number,
                imageUrl: String
            },
            state: {
                type: String,
                enum: ['completed', 'not-completed', 'proceeding']
            },
            quantity: Number,
            total: {
                type: Number,
                default: 1
            },
            isDeleted: {
                type: Boolean,
                default: false
            }
        }
    ],
    role: [String],
    isDeleted: Boolean
});