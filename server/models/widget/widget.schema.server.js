/**
 * Created by Jeremy on 7/22/17.
 */

var mongoose = require('mongoose')

var widgetSchema = mongoose.Schema({
    _page: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pageModel'
    },
    widgetType: {
        type: String,
        enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']
    },
    name: String,
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: {
        type: Number,
        default: 100
    },
    height: {
        type: Number,
        default: 100
    },
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'widget'
})

module.exports = widgetSchema
