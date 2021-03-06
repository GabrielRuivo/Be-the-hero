const { Router } = require('express');

const routes = new Router();

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

routes.get('/profile', ProfileController.index);

routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;