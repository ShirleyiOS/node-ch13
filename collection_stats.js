/**
 * Created by wangshuang on 16/6/3.
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
    var newDB = db.db("newDB");
    newDB.createCollection("newCollection", function(err, collection){
        collection.stats(function(err, stats){
            console.log(stats);
            db.close();
        });
    });
});