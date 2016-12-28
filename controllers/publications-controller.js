/* globals module require */
'use strict';

module.exports = function ({ data }) {
    return {
        getTopImages(req, res) {
            data.getTopImages()
                .then(result => {
                    return res.send(result);
                });
        },
        getAllImages(req, res) {
            data.getAllImages()
                .then(result => {
                    return res.send(result);
                });
        },
        getImageById(req, res) {
            let id = req.params.id;
            data.getImageById(id)
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