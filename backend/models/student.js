const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: String,
    Roll_no: Int,
    email: String,
    password: String
})

const StudentModel = mongoose.model("students", StudentSchema)
module.expors = StudentModel