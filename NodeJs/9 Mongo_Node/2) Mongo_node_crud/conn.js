const {MongoClient} = require('mongodb')
const databaseName='shop_db';
const client= new MongoClient('mongodb://localhost:27017');


async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('customers');
}
module.exports= dbConnect;
