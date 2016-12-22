/* globals module */

module.exports = function ({
    app, controller
}) {

    app.get('/', (req, res) => {
        let isProd = process.env.ENV_MODE === 'PRODUCTION';
        return res.render('index', {
            result: {
                isProd
            }
        });
    });
};