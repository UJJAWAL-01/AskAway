<<<<<<< HEAD
const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/AskAway")
=======
const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/login")
>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection