/* globals module require */
'use strict';
let tokenUtils = require('./utils/token-utils');

module.exports = function ({ data }) {
    return {
        getTopPublications(req, res) {
            data.getTopPublications()
                .then(publications => {
                    res.status(200).json(publications);
                })
                .catch(err => {
                    return res.status(500).send({ msg: 'Server error!' });
                });
        },
        getAllPublications(req, res) {
            data.getAllPublications()
                .then(publications => {
                    res.status(200).json(publications);
                })
                .catch(err => {
                    return res.status(500).send({ msg: 'Server error!' });
                });
        },
        getPublicationById(req, res) {
            let id = req.params.id;
            data.getPublicationById(id)
                .then(publication => {
                    res.status(200).json(publication);
                })
                .catch(err => {
                    return res.status(500).send({ msg: 'Server error!' });
                });
        },
        ratePublication(req, res) {
            data.ratePublication(req.body.id, req.body.rate, req.body.username)
                .then(result => {
                    return res.status(200).json(result)
                })
                .catch(err => {
                    res.status(400).json({ msg: 'Unsuccessfull rating!' })
                })
        },
        addComment(req, res) {
            data.addComment(req.body.id, req.body.content, req.body.username)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Unsuccessfull comment add!' })
                });
        },
        addPublication(req, res) {
            let token = req.headers.authorization,
                userInfo = tokenUtils.decodeToken(token),
                publicationInfo = {
                    title: req.body.title,
                    imageUrl: req.body.imageUrl,
                    owner: userInfo.username
                }

            data.addPublication(publicationInfo)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Unsuccessfull publication add!' })
                });
        }
    };
};