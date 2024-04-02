const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

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
