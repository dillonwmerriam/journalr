import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.ENTRIES_DB_URI,
  {
    poolSize: 50
  }
)