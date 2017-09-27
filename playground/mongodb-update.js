const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log("We were unbale to connect to the Monogodb database sever");
    }
    console.log("Connected to MongoDB server");

    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("59cb763ce3ee221b500d7d98")
    }, {
        $set:{
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    })

    //db.close();
});