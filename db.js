import { MongoClient } from "mongodb"

const url = "mongodb+srv://raysuncapital:ZGJKTn45yyqH6X1y@cluster0.0jein5m.mongodb.net/sengu"; // Replace with your MongoDB connection URL
const dbName = "sengu"; // Replace with your database name

async function connectToDatabase() {
    const client = new MongoClient(url);
    try {
      // Connect to the MongoDB server
      await client.connect();
      console.log("Connected to the MongoDB server");
  
      // Access the database
      const db = client.db(dbName);
      return db;
    } catch (error) {
      console.error("Error connecting to the MongoDB server", error);
      throw error;
    }
  }
  module.exports = { connectToDatabase };
  