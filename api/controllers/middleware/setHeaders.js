const setHeaders = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.set('Access-Control-Allow-Methods', ['GET', 'POST', 'DELETE', 'PUT']);
  return next();
};

module.exports = setHeaders;

