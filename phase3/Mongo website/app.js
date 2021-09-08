//load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let courseRouter = require("./router/course.router");
//create reference of express
let app = express();

//add middleware
app.use(cors());
app.use(bodyParser.json());

//url database
let url ="mongodb://localhost:27017/tcsmean"

//connect the database
mongoose.connect(url).
then(res=>console.log("connected!")).
catch(error=>console.log(error));

//middleware which help to match main path and pass the request to router file

app.use("/api/course", courseRouter);
app.listen(9090, ()=>console.log("Server is running on port number 9090"));