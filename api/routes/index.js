const controller = require('../controllers');

const routes = (app) => {
  app.route('/places')
    .get(controller.listAll);
};

module.exports = routes;
