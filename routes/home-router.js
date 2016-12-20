/* globals module */

module.exports = function ({
    app, data
}) {

    app.get('/', (req, res) => {
        return res.render('index');
    });
};