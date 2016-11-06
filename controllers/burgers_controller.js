var express = require('express');
var router = express.Router();
var burger = require('./../models/burger.js');

router.get('/', function(req, res){
  burger.selectAll(function(data){
    res.render('index', { brgr: data });
  });
});

router.get('/', function(req, res){
  burger.getMenu(function(data){
    res.render('menuDropdown', { itm: data });
  });
});

router.post('/create', function(req, res){
  burger.insertOne([req.body.burgerInput], function(){
    res.redirect('/');
  });
});

router.put('/update/:id', function(req, res){
  var condition = 'id = ' + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, function(){
    res.redirect('/');
  });
});

module.exports = router;