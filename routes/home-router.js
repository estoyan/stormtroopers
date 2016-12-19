/* globals module */

module.exports = function ({
    app,
    controllers
}) {

    app.get('/', (req, res) => {
        return res.render('index');
    });
};