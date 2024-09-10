const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    roleId: {
        type: Number,
        required: true,
        unique: true
      },
    role:{
        type: String,
        required: true
    }
})

const roleModel = mongoose.model("Role",roleSchema);
module.exports = roleModel;