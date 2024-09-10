// npm run serve
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const roleModel = require("./models/role.model");
const designationModel = require("./models/designation.model");
const cors = require('cors');

require("dotenv").config();

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server running on port ${PORT}`);
});

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to the database");
  })
  .catch((response) => {
    console.log("connection to the server failed");
    console.error(response);
  });

app.get("/api/roles", async (req, res) => {
  try {
    const roles = await roleModel.find();
    res.json({
      message: "Roles fetched successfully",
      result: true,
      data: roles,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching roles",
      result: false,
      error: error.message,
    });
  }
});

app.get("/api/designations", async (req, res) => {
    try {
      const designation = await designationModel.find();
      res.json({
        message: "designations fetched successfully",
        result: true,
        data: designation,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error fetching roles",
        result: false,
        error: error.message,
      });
    }
  });


app.post("/api/insert/role",async (req,res)=>{
    try {
        
       const role = await roleModel.create(req.body);
       res.status(200).json({
        message:"roles added",
        result:true,
        data : role
       })

    } catch (error) {
        res.status(500).json({
            message: "Error fetching roles",
            result: false,
            error: error.message,
          });        
    }
})



app.post("/api/insert/designation",async (req,res)=>{
    try {
        
       const designation = await designationModel.create(req.body);
       res.status(200).json({
        message:"designation added",
        result:true,
        data : designation
       })

    } catch (error) {
        res.status(500).json({
            message: "Error fetching roles",
            result: false,
            error: error.message,
          });        
    }
})

