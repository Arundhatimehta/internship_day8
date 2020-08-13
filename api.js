const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let col_name="movies";

app.get('/',(req,res) => {
    res.status(200).send("Api is Running")
});

MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('edurekainteernship')
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(Server is running on port ${port})
});