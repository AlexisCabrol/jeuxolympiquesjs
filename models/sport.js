const mongoose = require('mongoose');
const athlete = require('./athlete').schema;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const sportSchema = new Schema({
    name: String,
    athletes: [{
        type: ObjectId,
        default: undefined
    }]
});
module.exports = mongoose.model('sport', sportSchema);