/* globals module */

module.exports = function ({
    app, controller
}) {

    app.get('/', (req, res) => {
        return res.render('index');
    });
};