const mongoose = require('mongoose');
const athlete = require('./athlete');
const Schema = mongoose.Schema;

// TODO : jointure entre athlete et sport
const sportSchema = new Schema({
    name: String
});
module.exports = mongoose.model('sport', sportSchema);