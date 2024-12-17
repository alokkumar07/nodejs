// function callback() {
//     console.log("welcome to alok")
// }

// const add = function(a,b,callback){
//     var result = a +b;
//     console.log(result,"result")
//     callback()
// }

// add(1,3,callback)

// const add = function(a,b,alok){
//     var result = a +b;
//     console.log(result,"result")
//     alok();
// }

// add(2,3,function(){
//     console.log("welcome to alok")
// })

// const add = function(a,b,alok){
//     var result = a +b;
//     console.log(result,"result")
//     alok();
// }

// add(2,3,()=>console.log("welcome to alok"))

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user.username)

// fs.appendFile("gretting.text","hi" + user.username + "!\n",()=> {
//     console.log("file is created")
// } )

// const notes = require("./notes");
// console.log(notes)

// var age = notes.age;

// var res = notes.addNumber(age,10)
// console.log(res)

// var _ = require('lodash');

// var data =["alok","alok","alok", 1,1,2,2,"name","AGE"];
// var filter =_.uniq(data)
// console.log(filter)

const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const passport = require("./auth");
require('dotenv').config();
const PORT = process.env.PORT || 3000;


const Person = require("./models/Person");
const MenuItem = require("./models/menu");


app.get("/", function (req, res) {
  res.send("welcome to bihari hotel..how i can i help you");
});

// app.get("/chicken",(req,res)=>{
//     var customized_chicken ={
//         name:"chicken chilley",
//         size:"12",
//         is_onion : true,
//         is_chutney : true,
//     }
//     res.send(customized_chicken)
// })

//Middleware function

const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  next(); //Move on to next phase
};
app.use(logRequest);



app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get("/",localAuthMiddleware, function (req, res) {
  res.send("welcome to our hotel");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
