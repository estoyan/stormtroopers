/* globals module */
'use strict';

let mockedData = [{
    owner: 'The Rock',
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/39/9e/78/399e78221867d2b9581966af6f3a8ff9.jpg',
    likes: [{
        username: 'Pamy666  '
    }, {
        username: 'THe Rock'
    }],
    dislikes: [{
        username: 'Pesho'
    }],
    comments: [{
        username: 'Pamy666',
        content: 'Yeeee'
    }]
}, {
    owner: 'pamy666',
    imageUrl: 'http://pre14.deviantart.net/f239/th/pre/i/2014/352/7/9/star_wars_fan_art_by_raf107-d8a97lp.jpg',
    likes: [{
        username: 'Pamy666'
    }, {
        username: 'The Rock'
    }],
    dislikes: [{
        username: 'Pesho'
    }],
    comments: [{
        username: 'Pesho',
        content: 'Not cool'
    }]
}, {
    owner: 'Gosho ot Pochivka',
    imageUrl: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/53b1c665e4b04c885d51cad8/1404159591558/jedi-hunter-fan-art-by-yvan-quinet',
    likes: [{
        username: 'pamy666'
    }, {
        username: 'The Rock'
    }],
    dislikes: [{
        username: 'Pesho'
    }],
    comments: [{
        username: 'The Rock',
        content: 'Super cool'
    }]
}]

module.exports = function ({
    models
}) {
    let {
        Image
    } = models;

    return {
        getTopImages() {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                resolve(mockedData);

            })
        }
    };
};