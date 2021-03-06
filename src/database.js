const mongoose = require('mongoose')

const connectionURL = "mongodb://127.0.0.1:27017/inventory"

//database Schema
let Schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    name:{
        type: String
    },
    stock:{
        type: Number
    },
    createdAt: {
        type: Number
    },
    note: {
        type: String
    },
    image: {
        type: Buffer
    }
})

let Item = mongoose.model('Item', Schema)


//connection to database
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = Item