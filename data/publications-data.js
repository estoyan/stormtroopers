/* globals module */
'use strict';
let dataUtils = require('./utils/data-utils');

let mockedData = [{
    _id: '1',
    owner: 'The Rock',
    title: 'Cool stormtrooper',
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/39/9e/78/399e78221867d2b9581966af6f3a8ff9.jpg',
    rating: [{
        username: 'Pamy666',
        rate: 2
    }, {
        username: 'The Rock',
        rate: 4
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
    rating: [{
        username: 'Pamy666',
        rate: 2
    }, {
        username: 'Pesho',
        rate: 4
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
    rating: [{
        username: 'Pamy666',
        rate: 2
    }, {
        username: 'Gosho ot Pochivka',
        rate: 4
    }, {
        username: 'The Rock',
        rate: 5
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
        findPublicationById(id) {
            return new Promise((resolve, reject) => {
                Publication.findOne({
                    _id: id
                }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });

        },
        getTopPublications() {
            return new Promise((resolve, reject) => {
                Publication.find()
                    .exec((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    })
                    .then(res => {
                        let top = res.sort((a, b) => {
                                return b.rating.reduce((acc, val) => acc + val.rate, 0)
                                        - a.rating.reduce((acc, val) => acc + val.rate, 0);
                            })
                            .slice(0, 3);

                        return Promise.resolve(top);
                    });
            });
        },
        getAllPublications() {
            return new Promise((resolve, reject) => {
                Publication.find()
                    .exec((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
            });
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
                Publication.findById(id)
                    .exec((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
            });
        },
        ratePublication(id, rate, username) {
            return new Promise((resolve, reject) => {
                this.findPublicationById(id)
                    .then(publication => {
                        let hasVoted = publication.rating.some(x => x.username === username);
                        if (hasVoted) {
                            console.log(publication.rating.find(x => x.username === username).rate, rate);
                            publication.rating.find(x => x.username === username).rate = rate;
                        } else {
                            publication.rating.push({
                                username,
                                rate
                            });
                        }

                        dataUtils.update(publication);
                        resolve(publication);
                    })
            });
        },
        addComment(id, content, username) {
            return this.getPublicationById(id)
                .then(publication => {
                    publication.comments.push({username, content})

                    return dataUtils.update(publication);
                });
        },
        addPublication(publicationInfo) {
            let publication = new Publication({
                owner: publicationInfo.owner,
                title: publicationInfo.title,
                imageUrl: publicationInfo.imageUrl,
                comments: [],
                rating: []
            });

            return dataUtils.save(publication);
        }
    };
};