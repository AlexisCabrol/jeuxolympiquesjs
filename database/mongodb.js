const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('');
    } catch(err) {
        console.error('Impossible de se log à la BDD.', err);
        throw err;
    }
}

module.exports = connect;