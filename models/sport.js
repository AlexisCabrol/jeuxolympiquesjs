const mongoose = require('mongoose');
const athlete = require('./athlete').schema;
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    name: String,
    athletes: {
        type: [athlete],
        default: undefined
    }
});
module.exports = mongoose.model('sport', sportSchema);