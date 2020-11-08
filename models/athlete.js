const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// TODO : les types de gender et country sont à corriger.
const athleteSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    country: String,
    sports: [{
        type: ObjectId,
        ref: 'sport'
    }]
});
module.exports = mongoose.model('athlete', athleteSchema);