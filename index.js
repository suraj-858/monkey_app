const express = require("express");
const port = 5000;
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const path = require('path')
const MONGO_URI = "mongodb+srv://suraj:suraj123@cluster0.5sdyknh.mongodb.net/Twitter"
const moro = require("../frontend/build/index.js")

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials: true
    })
) 



app.use(express.json());
app.use(express.urlencoded({extended: true}));

//route to get the password dataset;

app.use('/api/password', require('./Route/passwordRoute'));



mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connection Successfully");
})

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, '../frontend/build/index.js'))
})

const server = app.listen(port, () =>{
    console.log("server running on port no:-", port);
})