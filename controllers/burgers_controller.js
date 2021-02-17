var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
  
  burgers.selectAll(function (data) {
    let hbsObject = {
      burger: data
    };
     console.log(hbsObject)
     res.render("index", hbsObject);
  });

});
  
  

// router.post("/api/burgers", function (req, res) {
//   burgers.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function (result) 
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

module.exports = router;