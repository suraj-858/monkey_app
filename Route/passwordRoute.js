const express = require("express")
const router = express.Router();
const Passwords = require("../models/Passwordmodel")

router.post('/createPassword',  async(req, res) =>{

    try {
        const {password} = req.body;

        const response = await Passwords.create({
            password: password
        })

        
        res.status(200).send("password uploaded successfully");
        console.log(response);

    } catch (error) {
        res.status(500).send("Internal server error")
        console.log(error);
    }
})

module.exports = router;