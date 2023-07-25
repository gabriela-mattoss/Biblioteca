var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('Funcionou!!');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Adoro Praia!');
});

router.get('/ifc', function(req, res, next) {
  res.send('Seja bem-vindo ao IFC!');
});

module.exports = router;

