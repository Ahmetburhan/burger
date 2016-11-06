var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
      cb(res);
    });
  },
  getMenu: function(cb){
    orm.selectAll('menu', function(res){
      cb(res);
    });
  },
  insertOne: function(val, cb){
    orm.insertOne('burgers', 'burger_name', val, function(res){
      cb(res);
    });
  },
  updateOne: function(colVal, condition, cb){
    orm.insertOne('burgers', colVal, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
