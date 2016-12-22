module.exports = function (passport, data) {

    var JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = 'secret';
    opts.issuer = "accounts.examplesoft.com";
    opts.audience = "yoursite.net";
    passport.use(new JwtStrategy(opts, function (jwtPayload, done) {
         data.findOne({ id: jwtPayload.sub }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create a new account 
            }
        });
    }));
};