const mongoose = require('mongoose')

const adviceSchema = mongoose.Schema({
    title: String,
    content: String
})

const adviceModel = mongoose.model('advice', adviceSchema)

module.exports = adviceModel