const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    } catch(err) {
        console.error('Impossible de se log à la BDD.', err);
        throw err;
    }
}

module.exports = connect;