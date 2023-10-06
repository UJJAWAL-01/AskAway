const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: String,
    Roll_no: Number,
    email: String,
    password: String
})

module.exports = mongoose.model("students", StudentSchema)