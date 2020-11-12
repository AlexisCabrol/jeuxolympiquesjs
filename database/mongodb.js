const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://test:test@firstcluster.jrlpb.mongodb.net/jeuxOlympiquesJS?retryWrites=true&w=majority', { useNewUrlParser: true });
    } catch(err) {
        console.error('Impossible de se log à la BDD.', err);
        throw err;
    }
}

module.exports = connect;