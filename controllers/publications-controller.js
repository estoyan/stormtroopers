/* globals module require */
'use strict';

module.exports = function ({ data }) {
    return {
        getTopPublications(req, res) {
            data.getTopPublications()
                .then(result => {
                    return res.send(result);
                });
        },
        getAllPublications(req, res) {
            data.getAllPublications()
                .then(result => {
                    return res.send(result);
                });
        },
        getPublicationById(req, res) {
            let id = req.params.id;
            data.getPublicationById(id)
                .then(result => {
                    return res.send(result);
                });
        },
        ratePublication(req, res){
            data.ratePublication(req.body.id, req.body.rate, req.body.username)
            .then(result =>{
                return res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json({msg: 'Unsuccessfull rating!'})
            })
        }
    };
};