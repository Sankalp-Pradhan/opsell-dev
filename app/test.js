require("dotenv").config({
  path: "../.env",
});

const { MongoClient } = require("mongodb");

console.log(process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log("✅ Connected");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run();