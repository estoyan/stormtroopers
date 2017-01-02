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
],
    mockedBasket = [
        {
            product: {
                name: 'Star Wars Vintage Poster',
                price: 155,
                imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--S24cks6n--/c_scale,f_auto,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg'
            },
            state: {
                type: 'not-completed',
            },
            quantity: 1,
            total: 155
        },
        {
            product: {
                name: 'Boba Fett Mug',
                price: 15,
                imageUrl: 'http://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/boba-fett-mug~0.jpg'
            },
            state: {
                type: 'not-completed',
            },
            quantity: 1,
            total: 15
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
        getUserByUsername(username) {
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
        addProductToBasket(username, order) {
            return new Promise((resolve, reject) => {
                this.getUserByUsername(username)
                    .then(user => {
                        user.orders.push(order);

                        return dataUtils.update(user);
                    })
                    .then(res => {
                        resolve(res);
                    })
            });
        },
        getUserPastOrders(username) {
            return new Promise((resolve, reject) => {
                User.find({username})
                    .select('orders')
                    .exec((err, res) => {
                        if (err) {
                            reject(err);
                        }

                        let orders = res[0] ? res[0].orders.filter(x => x.state === 'completed') : [];

                        resolve(orders);
                    });
            });
        },
        getUserOrdersFromBasket(username) {
            return this.getUserByUsername(username)
                .then((user) => {
                    let ordersFromBasket = user.orders.filter(x =>
                        !x.isDeleted && (x.state === 'proceeding' || x.state === 'not-completed'));

                    return Promise.resolve(ordersFromBasket);
                });
        },
        proceedUserOrders(username, orders) {
            return this.getUserByUsername(username)
                .then(user => {
                    orders = orders.map(order => {
                        order.state = 'proceeding';
                        return order;
                    });

                    user.orders = user.orders.map(order => {
                        if (order.state === 'proceeding') {
                            order.state = 'not-completed';
                        }

                        order = orders.find(x => x._id == order._id) || order;

                        return order;
                    });

                    return this.updateUser(user);
                })
                .then(user => {
                    return Promise.resolve(user.orders);
                });
        },
        removeUserOrdersFromBasket(username, orders) {
            return this.getUserByUsername(username)
                .then(user => {
                    user.orders = user.orders.map(order => {
                        if (orders.find(x => x._id == order._id)) {
                            order.isDeleted = true;
                        }

                        return order;
                    });

                    return this.updateUser(user);
                })
                .then(user => {
                    return Promise.resolve(user.orders);
                });
        }
    }
};