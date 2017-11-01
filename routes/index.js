var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Eli Lilly' });
});

// router.get('/discussion.tools', function(req, res, next) {
//   res.render('discussion_tools');
// });
// router.get('/psoriasis.treatments', function(req, res, next) {
//   res.render('psoriasis_treatments');
// });
// router.get('/find.a.dermatologist', function(req, res, next) {
//   res.render('find_a_dermatologist');
// });
// router.get('/psoriasis.trivia', function(req, res, next) {
//   res.render('psoriasis_trivia');
// });

router.get('/*', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
