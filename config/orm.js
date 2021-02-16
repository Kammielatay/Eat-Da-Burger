var connection = require("../config/connection.js");

var orm = {
  selectAll: function (selectedTable) {
    var queryString = "SELECT * FROM ?";
    connection.query(queryString,[selectedTable], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function (selectedTable, nameOfBurger, initBooleanValue) {
    var queryString = "INSERT INTO ?? VALUES (?,?)";
    console.log(queryString);
    connection.query(queryString, [selectedTable, nameOfBurger, initBooleanValue], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function (selectedTable, colToUpdate, newColValue, nameOfColSearch, nameOfColValue) {
    var queryString = `
    UPDATE ?
    SET ? = ?
    WHERE ?? = ??
    `
    connection.query(
      queryString,
      [selectedTable, colToUpdate, newColValue, nameOfColSearch, nameOfColValue],
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;