let websiteSchema = require('../website/website.schema.server')
let mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    websites: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'website'
    },
    dateCreated: {
        type: Date,
    },
})

module.exports = UserSchema 