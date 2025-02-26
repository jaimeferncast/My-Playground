const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema({
    "id": Number,
    "name": String,
    "manufacturer": String,
    "description": String,
    "color": String,
    "price": Number,
    "imageFileName": String,
    "screen": String,
    "processor": String,
    "ram": Number,
}, {
    timestamps: true
})

const Phone = mongoose.model('Phone', phoneSchema)
module.exports = Phone