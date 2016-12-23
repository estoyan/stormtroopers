/* globals module */

module.exports = function ({
    app, isProd
}) {

    app.get('/', (req, res) => {
        return res.render('index', {
            result: {
                isProd
            }
        });
    });
};