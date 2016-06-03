/**
 * Created by wangshuang on 16/6/3.
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/test", function(err, db) {
    var adminDB = db.admin();
    adminDB.serverStatus(function(err, status){
        console.log(status);
        db.close();
    });
});