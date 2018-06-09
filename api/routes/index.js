const routes = (app) => {
  const controller = require('../controllers');

  app.route('/places')
    .get(controller.listAll);
};

module.exports = routes;
