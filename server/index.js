const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const StudentModel = require("./models/Student.model.js");
const Doubt = require('./models/doubtModel.js')

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/AskAway", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });


let AskAway = [];

// const handleAnswerSubmit = async (doubtID, answer) => {
//   try {
//     const doubt = await Doubt.findById(doubtID);
//     doubt.answer = answer;
//     await doubt.save();
//     console.log('Answer saved successfully');
//   } catch (error) {
//     console.error('Error saving answer:', error);
//   }
// };

// const getDoubtsWithAnswers = async () => {
//   try {
//     const doubtsWithAnswers = await Doubt.find({ answer: { $ne: null } }); // Find doubts with answers
//     return doubtsWithAnswers;
//   } catch (error) {
//     console.error('Error fetching doubts with answers:', error);
//   }
// };

app.post("/api/GetDoubt", async (req, res) => {
  try {
    let d = await Doubt.find({}, { __v: 0 });
    res.json({ success: true, data: d });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/api/saveAnswer", async (req, res) => {
  const { text, id } = req.body;
  console.log(text, id)
  try {
    let doubt = await Doubt.findOne({_id: id})
    console.log(doubt)
    doubt['answer'] = text;
    await doubt.save()
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
app.post("/api/saveDoubt", async (req, res) => {
  const { text } = req.body;

  try {
    const newDoubt = new Doubt({ text, answer: " " });
    await newDoubt.save();
    res.json({ success: true, _id: newDoubt._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record exists");
    }
  });
});

app.post("/register", (req, res) => {
  StudentModel.create(req.body)
    .then((students) => res.json(students))
    .catch((err) => res.json(err));
});

app.post("/api/getData", (req, res) => {
  Doubt.find({}, { __v: 0 }).then((doubts) => {
    nd = 0
    na = 0
    for(let i=0; i<doubts.length; i++){
      if(doubts[i].answer === " "){
        nd += 1
        na += 1
      }else{
        nd += 1
      }
    }
    res.json({doubts:nd, unanswered: na})
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
