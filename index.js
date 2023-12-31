const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const path = require('path')

require('dotenv').config();


// const port = 5000;
// const mongo_uri = "mongodb+srv://suraj:suraj123@cluster0.5sdyknh.mongodb.net/Twitter"

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

app.use(cors());

app.use(
    cors({
        origin:"https://facebook-wtyi.onrender.com",
        credentials: true
    })
) 


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//route to get the password dataset;

app.use('/api/password', require('./Route/passwordRoute'));



mongoose.connect(mongo_uri, {
    useNewUrlParser: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connection Successfully");
})


app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    next();
})


app.use(express.static(path.join(__dirname, './frontend/build')));

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

const server = app.listen(port, () =>{
    console.log("server running on port no:-", port);
})