const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO : les types de gender et country sont à corriger.
const athleteSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    country: String
});
module.exports = mongoose.model('athlete', athleteSchema);