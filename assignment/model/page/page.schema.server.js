let widgetSchema = require('../widget/widget.schema.server')
let mongoose = require('mongoose')

var PageSchema = mongoose.Schema({
    _website: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'website'
    },
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    widgets: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'widget'
 
    },
    dateCreated: {
        type: Date,
    },
})

module.exports = PageSchema 