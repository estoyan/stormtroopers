/* globals module */
'use strict';


let mockedData = [{
    name: 'Boba Fett Mug',
    price: 15,
    quantity: 20,
    info: 'Ideal for bear',
    category: 'mug',
    images: ['http://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/boba-fett-mug~0.jpg'],
    color: 'green'
}, {
    name: 'Darth Vader T-shirt',
    price: 55,
    quantity: 10,
    info: 'Join the dark side',
    category: 't-shirt',
    images: ['http://hideyourarms.com/wp-content/uploads/2011/10/Expressions-Darth-Vader-Shirt-480x380.jpg'],
    color: 'red'
},
{
    name: 'Star Wars Vintage Poster',
    price: 155,
    quantity: 1,
    info: 'Star Wars IV vintage poster. One of its kind!',
    category: 'poster',
    images: ['https://i.kinja-img.com/gawker-media/image/upload/s--S24cks6n--/c_scale,f_auto,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg'],
    color: 'multy'
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
        }
    };
};