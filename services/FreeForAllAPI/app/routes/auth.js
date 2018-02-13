//

const models = require('@FreeForAll/app/setup');

module.exports = (app) => {
    const api = app.FreeForAllAPI.app.api.auth;

    app.route('/').get((req, res) => res.send('Free For All API'));

    app.route('/api/v1/auth').post(api.login(models.User));
}