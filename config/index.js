/* globals module */
// module.exports = {
//     port: 3000,
//     connectionString: 'mongodb://localhost/stormtroopers'
// };
module.exports = function () {
    return {
        port : process.env.PORT|| 3000,
        connectionString: process.env.MONGOLAB_URI||'mongodb://localhost/stormtroopers'
    };
};

