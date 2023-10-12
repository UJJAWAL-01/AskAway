const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  text: {type:String, required: true},
  answer: {type:String}
});

const Doubt = mongoose.model('Doubt', doubtSchema);

module.exports = Doubt;