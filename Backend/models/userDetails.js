const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    imageTitle: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var userDetails = mongoose.model('User', userSchema);

module.exports = userDetails;