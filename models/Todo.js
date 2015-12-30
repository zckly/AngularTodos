var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
  creationDate: {type: Date, default: Date.now() },
  text: String
})

module.exports = mongoose.model('Todo', todoSchema)