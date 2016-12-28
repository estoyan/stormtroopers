/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Product', {
    title: {
        type: String,
        required: true
    },
    price: Number,
    quantity: String,
    description: String,
    category: {
        type: String,
        enum: ['mug', 't-shirt', 'poster','gadgets','toys','costumes','books']
    },
    isConfigurable: Boolean,
    imageUrl: String,
    color: String
})




