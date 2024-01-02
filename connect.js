const { MongoClient } = require("mongodb");
const url = "mongodb+srv://dillonmerriam:asdf;lkj@cluster0.dqxwf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
async function run() {
  try {
      await client.connect();
      console.log("Successfully connected to Atlas");
      const db = client.db("journalr_db");
      const col = db.collection("entries");
      result = await col.find({}).toArray();
      console.log(JSON.stringify(result))
    //   const filter = {"date":"1/1/2024"};
    //      const document = await col.findOne(filter);
    //      console.log("Document found:\n" + JSON.stringify(document))
  } catch (err) {
      console.log(err.stack);
  }
  finally {
      await client.close();
  }
}
run().catch(console.dir);

