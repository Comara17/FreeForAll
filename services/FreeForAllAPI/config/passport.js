const PassportJWT = require ('passport-JWT'),
      ExtractJWT  = PassportJWT.ExtractJwt,
      Strategy    = PassportJWT.Strategy,
      config      = require('./index.js'),
      models      = require('@FreeForAll/app/setup');  //Check @ documentation

module.exports = (passport) => {
    const User = models.User;

    const parameters = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    };

    passport.use(new Strategy(parameters, (payload, done) => {
        User.findOne({ id: payload.id }, (error, user) => {
            if (error) return done(error, false);
            if (user) done(null, user);
            else done(null, false);
          });
        }));
}