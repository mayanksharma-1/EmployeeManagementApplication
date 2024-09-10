// npm run serve
const express = require('express');
const app = express();
const mongoose = require("mongoose");


require("dotenv").config();


app.listen(()=>{
    console.log("server running on port 3000");
})

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("connected to the database");
    })
    .catch((response) => {
        console.log("connection to the server failed");
        console.error(response);
    })
