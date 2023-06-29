const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const path = require('path')

require('dotenv').config();


const port = 5000;
const mongo_uri = "mongodb+srv://suraj:suraj123@cluster0.5sdyknh.mongodb.net/Twitter"

// const port = process.env.PORT;
// const mongo_uri = process.env.MONGO_URI;

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



mongoose.connect(mongo_uri, {
    useNewUrlParser: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connection Successfully");
})



app.use(express.static(path.join(__dirname, './frontend')));

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, './frontend/public/index.html'))
})

const server = app.listen(port, () =>{
    console.log("server running on port no:-", port);
})