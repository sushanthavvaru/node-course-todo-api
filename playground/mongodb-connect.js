const {MongoClient, ObjectID} = require('mongodb'); // this is ES6 feature instead of MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log("We were unbale to connect to the Monogodb database sever");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed :false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Sushanth',
        age :23,
        location:'4981 Catoctin Dr, California'
    },(err,result)=>{
        if(err){
            return console.log("Unable to insert Todo", err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
})