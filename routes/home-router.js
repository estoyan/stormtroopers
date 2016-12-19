/* globals module */

module.exports = function ({
    app,
    controllers
}) {
    let controller = controllers.home;

    app.get('/', (req, res) => {
        return res.render('index');
    });
};