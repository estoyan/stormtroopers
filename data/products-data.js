/* globals module */
'use strict';
let dataUtils = require('./utils/data-utils');

let mockedData = [{

    _id: 3,
    name: 'D',
    // arth Vader T-shirt',
    description: "",
    price: 100055,
    quantity: 10,
    info: 'Join the dark side',
    category: 't-shirt',
    images: ['http://hideyourarms.com/wp-content/uploads/2011/10/Expressions-Darth-Vader-Shirt-480x380.jpg'],
    color: 'red',
    isConfigurable: false
},
{
    _id: 2,
    name: 'L',
    // Star Wars Vintage Poster',
    price: 155,
    quantity: 1,
    description: "",
    info: 'Star Wars IV vintage poster. One of its kind!',
    category: 'poster',
    images: ['https://i.kinja-img.com/gawker-media/image/upload/s--S24cks6n--/c_scale,f_auto,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg'],
    color: 'multy',
    isConfigurable: true,
},
{
    _id: 1,
    name: 'B',
    // oba Fett Mug',
    price: 15,
    quantity: 20,
    description: "Alabala Cuki mnnogo go izpolzva. Joda is the best jeday master",
    info: 'Ideal for bear',
    category: 'mug',
    images: ['http://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/boba-fett-mug~0.jpg'],
    color: 'green'
}]


module.exports = function ({
    models
}) {
    let {
        Product
    } = models;

    return {
        getRecentProducts() {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                resolve(mockedData);
            })
        },
        getAllProducts() {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                resolve(mockedData);
            })
        },
        getProductById(id) {
            return new Promise((resolve, reject) => {
                // TODO: write query to database here
                //check in DB how what should be the query mockedData.find(x => x._id == id) or ====
                resolve(mockedData.find(x => x._id == id));
            });
        }
    };
};