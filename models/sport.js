const mongoose = require('mongoose');
const athlete = require('./athlete');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    name: String,
    athletes: [athlete]
});
module.exports = mongoose.model('sport', sportSchema);