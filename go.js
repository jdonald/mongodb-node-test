import { MongoClient as mongoclient } from "mongodb";

mongoclient.connect('mongodb://localhost:27017/animals', (err, db) => {
  if (err) throw err
  db.collection('mammals').find().toArray((err, result) => {
    if (err) throw err
    console.log(result)
    db.close()
  })
})
