import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri);
  await client.connect();
  return client.db("cse-341-project1-romel");
}
