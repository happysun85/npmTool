module.exports = function(app) {
  app.get('/', function(req, res, next) {
        res.render('index', {title: 'Express'});
      }
  )
  app.get('/list', function(req, res, next) {
        res.render('list', {title: 'list'});
      }
  )
};
