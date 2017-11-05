var mongoose = require('mongoose');

var View = mongoose.model('view', {
    person: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    time: {
        required: true,
        string: true,
        trim: true,
        type: String
    }
});

module.exports = {View};