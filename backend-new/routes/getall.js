var express = require('express');
var router = express.Router();

/* GET all users listing. */
router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://devops:Aa123456@cluster0.36gco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    MongoClient.connect(url, function(err, db) {
      //console.log(db)
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        res.send(result);
      });
    });  
});
module.exports = router;