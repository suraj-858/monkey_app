const mongoose = require("mongoose")

const passwordSchema = mongoose.Schema({

    password:{
        type: "String",
        required: true
    }, 
    Date:{
        type: Date
    }
})

module.exports = mongoose.model("password", passwordSchema);