const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var subscriberSchema = new Schema({
    emailId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var subscriberDetails = mongoose.model('Subscribers', subscriberSchema);

module.exports = subscriberDetails;