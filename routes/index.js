var express = require('express');
var apod = require('../apod/apodService');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('index', { title: 'Express' });*/
  res.redirect('fetch_picture');
});


/* Fetch a picture from APOD. If random is specified, get a random
 picture. Otherwise, get today's picture.  */
router.get('/fetch_picture', function(req, res, next){


    console.log('RANDOM? '  + req.query.random );

    /*
    for (item in req) {
        console.log('item = ' + item);
        console.log('req(item) = ' + req[item]);
    }
    */


      apod(function(err, apod_data){

          if (err) {
              return res.render('apod_error', {error: err.message, title : "Error"});
          }
          else {
              return res.render('index', { apod : apod_data, title : "APOD for " + apod_data.date });
          }

      }, req.query.random);


});

module.exports = router;
