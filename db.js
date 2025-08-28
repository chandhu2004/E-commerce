// const {MongoClient} = require('mongodb');

// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri)
// let db=null;
// async function connectDB(){
//     if(!db)
//     {
//         try{ 
//             await client.connect();
//             db=client.db('log');
//             console.log("Connected to MOngoDB");

//         }
//         catch(error){
//             console.error("MongoDB connection error",error);
//             throw error;



//         }
//     }
//     return db
// }
// const getDb=()=>db;
// module.exports={connectDB,getDb};
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;   // ✅ now takes from .env
const client = new MongoClient(uri);

let db = null;

async function connectDB() {
    if (!db) {
        try {
            await client.connect();

            // you can change 'log' to any db name you prefer, 
            // or leave it and Atlas will auto-create it
            db = client.db("log");  
            console.log("✅ Connected to MongoDB Atlas");
        } catch (error) {
            console.error("❌ MongoDB connection error", error);
            throw error;
        }
    }
    return db;
}

const getDb = () => db;

module.exports = { connectDB, getDb };
