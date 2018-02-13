//Routes for authentication

const passport = require('passport'),
    config = require('@config'),
    models = require('@FreeForAll/app/setup');
module.exports = (app) => {
    const api = app.FreeForAllAPI.app.api.user;
    app.route('/api/v1/setup')
        .post(api.setup(models.User))

    app.route('/api/v1/users')

        .get(passport.authenticate('jwt', config.session), api.index(models.User, app.get('FreeForAllSecret')));
    app.route('/api/v1/signup')
    
        .post(api.signup(models.User));
}