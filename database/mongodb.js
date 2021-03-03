const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:D83KRFd1wvKbc8U2@firstcluster.jrlpb.mongodb.net/jeuxOlympiquesJS?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    } catch(err) {
        console.error('Impossible de se log à la BDD.', err);
        throw err;
    }
}

module.exports = connect;