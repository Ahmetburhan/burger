var connection = require('./connection.js');

var orm ={
  selectAll: function(table, callback){
    var queryString = 'SELECT * FROM ' + table;
    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  insertOne: function(table, column, burgerInput, callback){
    var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';
    connection.query(queryString, [burgerInput], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  updateOne: function(table, colVal, condition, callback){
    var queryString = 'UPDATE ' + table;
    queryString+= ' SET ';
    queryString+= objToSql(colVal);
    queryString+= ' WHERE ';
    queryString+= condition;

    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  }
};

module.exports = orm;
