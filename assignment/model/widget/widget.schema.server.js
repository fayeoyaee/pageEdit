let widgetSchema = require('../widget/widget.schema.server')
let mongoose = require('mongoose')

var WidgetSchema = mongoose.Schema({
    _page: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'page'
    },
    type: {
        type: String,
        enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT'],
    },
    name: {
        type: String,
    },
    text: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    rows: {
        type: Number,
    },
    size: {
        type: Number,
    },
    class: {
        type: String,
    },
    icon: {
        type: String,
    },
    deletable: {
        type: Boolean,
    },
    formatted: {
        type: Boolean,
    },
    dateCreated: {
        type: Date,
    },
})

module.exports = WidgetSchema 