const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log("We were unbale to connect to the Monogodb database sever");
    }
    console.log("Connected to MongoDB server");
    // db.collection("Todos").find({_id: }).toArray().then((docs) =>{
    //  console.log("Todos");
    //  console.log(JSON.stringify(docs, undefined,2));
    // },(err) =>{
    //     console.log("Unable to fetch Todos", err);
    // });

    db.collection("Todos").find().count().then((count) =>{     //find returns Cursor.
        console.log(`Todos Count: ${count}`);
    });
    //db.close();
});