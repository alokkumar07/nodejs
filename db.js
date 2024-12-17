const mongoose = require("mongoose");
require('dotenv').config();


// const mongoURL = MONGODB_URL_LOCAL
// const mongoURL = "mongodb+srv://alok07:zLKjW7yl7ZaCkv1x@cluster0.n7clvy9.mongodb.net/";
const mongoURL =process.env.MONGODB_URL



mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error: " + err);
});

db.on("disconnected", () => {
  console.log("disconnected to MongoDB");
});

module.exports = db;
