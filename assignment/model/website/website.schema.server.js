let pageSchema = require('../page/page.schema.server')
let mongoose = require('mongoose')

var WebsiteSchema = mongoose.Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    pages: {
        type: [pageSchema],
    },
    dateCreated: {
        type: Date,
    },
})

module.exports = WebsiteSchema 