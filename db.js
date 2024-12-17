const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/hotels";
// const mongoURL = "mongodb+srv://alok07:zLKjW7yl7ZaCkv1x@cluster0.n7clvy9.mongodb.net/";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
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
