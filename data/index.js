/* globals module require global __dirname process */
'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

module.exports = function({ config }) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.connectionString);
    let User = require('../models/user-model');
    let Character = require('../models/character-model');
    let Movie = require('../models/movie-model');
    let Product = require('../models/product-model');
    let Publications = require('../models/publication-model');
    let models = {User,Character,Movie,Product,Publications};

    let data = {};
    fs.readdirSync('./data')
        .filter(x => x.includes('-data'))
        .forEach(file => {
            let dataModule =
                require(path.join(__dirname, file))({ models });

            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });

    return data;
};