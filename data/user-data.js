/* globals module require Promise */
let dataUtils = require('./utils/data-utils');

let mockedOrders = [
     {
            product: {
                name: 'Star Wars Vintage Poster',
                price: 155,
                imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--S24cks6n--/c_scale,f_auto,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg'
            },
            state: {
                type: 'completed',
            }
        },
        {
            product: {
                name: 'Boba Fett Mug',
                price: 15,
                imageUrl: 'http://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/boba-fett-mug~0.jpg'
            },
            state: {
                type: 'completed',
            }
        }
    ]


module.exports = function ({ models }) {
    let { User } = models;

    return {
        createUser(user) {
            return new Promise((resolve) => {
                    let newUser = new User({
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        email: user.email,
                        passhash: user.password,
                        avatarName: user.avatarName,
                        avatarUrl: user.avatarUrl,
                        role: user.role,
                        displayname: user.displayname
                    });

                    resolve(newUser);
                })
                .then((newUser) => {
                    return dataUtils.save(newUser);
                });
        },
        getUserByUsername(username){
            let promise = new Promise((resolve, reject) => {
                User.findOne({
                    username
                }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });

            return promise;
        },
        updateUser(user) {
            return dataUtils.update(user);
        },
        getUserPastOrders(username) {
            return new Promise((resolve, reject) => {
                resolve(mockedOrders);
                // User.find()
                // .where('state.type').equals('completed').
                // .exec((err, res) =>{
                //     if(err){
                //         reject(err);
                //     }

                //     resolve(res);
                // });
            });
        }
    }
};