const mongoose = require("mongoose");

const designationSchema = mongoose.Schema({
    designationId: {
        type: Number,
        required: true,
        unique: true
    },
    designation: {
        type: String,
        required: true
    }
})

const designationModel = mongoose.model("Designation",designationSchema);
module.exports = designationModel;
