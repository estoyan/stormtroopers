/* globals module */
let tokenUtils = require('./utils/token-utils');

const PASWORD_DOES_NOT_MATCH = 'Паролата трябва да бъде минимум 8 символа и да съдържа цифри и латински букви',
    DISPLAYNAME = 'Stormtrooper',
    AVATAR = 'Stormtrooper',
    ROLE = 'user',
    SIDE = 'Neutral',
    USER_BASIC_PROPERTIES = ['username', 'firstname', 'lastname', 'email'],
    USER_FULL_PROPERTIES = ['username', 'firstname', 'lastname', 'email', 'phoneNumber', 'address', 'side'];

function getNextTrooperId() {
    return Math.floor((Math.random() * 9000) + 1000);
}

function getAvatar(name) {
    let avatarImageUrls = [
        { name: 'Stormtrooper', url: 'http://avatarbox.net/avatars/img1/stormtrooper_mask_avatar_picture_32704.png' },
        { name: 'Darth Vaider', url: 'http://www.theisozone.com/forum/download/file.php?avatar=163958_1459213121.png' },
        { name: 'Boba Fett', url: 'https://s-media-cache-ak0.pinimg.com/236x/50/ed/13/50ed1365c9bcd3830bb8cce37e723593.jpg' },
        { name: 'Empire', url: 'https://images-mm.s3.amazonaws.com/Star_Wars_Dist_Red_Empire_logo_Black_Shirt_POP.jpg' },
        { name: 'Rebels', url: 'http://vignette1.wikia.nocookie.net/starwars/images/7/71/Redstarbird.svg/revision/latest?cb=20080228205026' },
    ]

    return avatarImageUrls.filter((x) => x.name === name)[0].url;
}

module.exports = function ({ data, hashGenerator, validator }) {
    return {
        signUp(req, res) {
            let newUser = {};
            USER_BASIC_PROPERTIES.forEach(property => {
                if (!property || property.length < 0) {
                    res.status(411).json(`Missing ${property}`);
                }
                newUser[property] = req.body[property];
            });

            // if (!validator.validatePassword(req.body.password)) {
            //     return res.status(400);
            //         // .render('bad-request', {
            //         //     result: {
            //         //         err: PASWORD_DOES_NOT_MATCH
            //         //     }
            //         // });
            // }
            newUser.password = hashGenerator(req.body.password);
            newUser.displayname = `${DISPLAYNAME} ${getNextTrooperId()}`;
            newUser.role = ROLE;
            newUser.avatarName = AVATAR;
            newUser.avatarUrl = getAvatar(AVATAR);
            newUser.side = SIDE;
            newUser.phoneNumber = '';
            newUser.address = '';

            data.createUser(newUser)
                .then((data) => {
                    res.status(200).send({
                        success: true,
                        data
                    })
                })
                .catch(err => {
                    return res.status(400).send({
                        msg: 'User was not created!'
                    });
                });
        },
        getLoggedUser(req, res) {
            const token = req.headers.authorization;

            if (token) {
                // need to remove 'JWT ' in order to decode it ... (i know it sucks!)
                let userInfo = tokenUtils.decodeToken(token);
                let user = {
                    username: userInfo.username,
                    displayname: userInfo.displayname,
                    firstname: userInfo.firstname,
                    lastname: userInfo.lastname,
                    email: userInfo.email,
                    avatarName: userInfo.avatarName,
                    avatarUrl: userInfo.avatarUrl,
                    phoneNumber: userInfo.phoneNumber,
                    address: userInfo.address,
                    orders: userInfo.orders,
                    role: userInfo.role,
                    side: userInfo.side
                    // add more info if you need it
                };

                res.status(200).json(user);
            } else {
                res.status(401).json({
                    message: 'Please provide token'
                });
            }
        },
        getUserPublications(req, res) {
            const token = req.headers.authorization;
            let userInfo = tokenUtils.decodeToken(token);

            data.getUserPublications(userInfo.username)
                .then(publications => {
                    res.status(200).json(publications);
                })
                .catch(err => {
                    return res.status(400).send({ msg: 'No publications!' });
                });
        },
        updateUser(req, res) {
            const token = req.headers.authorization;
            let userInfo = tokenUtils.decodeToken(token);

            data.getUserByUsername(userInfo.username)
                .then(user => {
                    USER_FULL_PROPERTIES.forEach(property => {
                        user[property] = req.body[property] || user[property];
                    });
                    user.avatarName = req.body.avatarName;
                    user.avatarUrl = getAvatar(user.avatarName);

                    return data.updateUser(user);
                })
                .then(user => {
                    let token = tokenUtils.encodeToken(user);
                    let body = {
                        token: token,
                        displayname: user.displayname,
                        username: user.username,
                        avatarName: user.avatarName,
                        avatarUrl: user.avatarUrl,
                        side: user.side
                    }

                    res.status(200).json({ user, body });
                })
                .catch(err => {
                    return res.status(400).send({
                        msg: 'User was not updated!'
                    });
                });;
        },
        addProductToBasket(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username;
            data.getProductById(req.body._id)
                .then(product => {
                    let order = {
                        product: {
                            _id: product._id,
                            title: product.title,
                            price: product.price,
                            imageUrl: product.imageUrl,
                            color: product.color,
                            category: product.category
                        },
                        state: 'not-completed',
                        quantity: 1,
                        total: product.price
                    }

                    return data.addProductToBasket(username, order)
                })
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Server error!', err })
                });
        },
        getUserPastOrders(req, res) {
            const token = req.headers.authorization;
            let userInfo = tokenUtils.decodeToken(token);

            data.getUserPastOrders(userInfo.username)
                .then(products => {
                    res.status(200).json(products);
                })
                .catch(err => {
                    return res.status(400).send({ msg: 'No orders!' });
                });
        },
        getUserOrdersFromBasket(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username;

            data.getUserOrdersFromBasket(username)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Error loading orders!', err })
                });
        },
        proceedUserOrders(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username
            orders = JSON.parse(req.body.orders);

            data.proceedUserOrders(username, orders)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Error proceeding orders!', err })
                });
        },
        removeUserOrdersFromBasket(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username,
                orders = JSON.parse(req.body.orders);

            data.removeUserOrdersFromBasket(username, orders)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Error removing orders!', err })
                });
        },
        getUserProceedingOrders(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username;

            data.getUserProceedingOrders(username)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Error getting proceeding orders!', err })
                });
        },
        payUserProceedingOrders(req, res) {
            let token = req.headers.authorization,
                username = tokenUtils.decodeToken(token).username,
                orders = JSON.parse(req.body.orders),
                deliveryDetails = JSON.parse(req.body.deliveryDetails);

            data.payUserProceedingOrders(username, orders, deliveryDetails)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json({ msg: 'Error on orders payment!', err })
                });
        }
    };
};
