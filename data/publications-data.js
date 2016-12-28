/* globals module */
'use strict';

let mockedData = [{
    _id: '1',
    owner: 'The Rock',
    title: 'Cool stormtrooper',
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
    _id: '2',
    owner: 'pamy666',
    title: 'Cool stormtrooper',
    imageUrl: 'http://pre14.deviantart.net/f239/th/pre/i/2014/352/7/9/star_wars_fan_art_by_raf107-d8a97lp.jpg',
    likes: [{
        username: 'Pamy666'
    }],
    dislikes: [{
        username: 'Pesho'
    }],
    comments: [{
        username: 'Pesho',
        content: 'Not cool'
    }]
}, {
    _id: '3',
    owner: 'Gosho ot Pochivka',
    title: 'Cool stormtrooper',
    imageUrl: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/53b1c665e4b04c885d51cad8/1404159591558/jedi-hunter-fan-art-by-yvan-quinet',
    likes: [{
        username: 'pamy666'
    }, {
        username: 'The Rock'
    }, {
        username: 'Gosho ot Pochivka'
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
        Publication
    } = models;

    return {
        getTopPublications() {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                resolve(mockedData);
            });
        },
        getAllPublications() {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                resolve(mockedData);

            })
        },
        getUserPublications(username) {
            return new Promise((resolve, reject) => {
                resolve(mockedData);
                // Publication.find()
                // .where({username})
                // .exec((err, res) => {
                //         if (err) {
                //             reject(err);
                //         }

                //         resolve(res);
                //     });

            });
        },
        getPublicationById(id) {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                resolve(mockedData.find(x => x._id === id));
            });
        }
    };
};