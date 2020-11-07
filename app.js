const express = require('express');
const app = express();
const logger = require('morgan');
const connect = require('./database/mongodb');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

// CONNEXION BDD
connect();

// Moteur de template
app.set('view engine', 'hbs');

// Router pour les points /sports
const sportsRouter = require('./routers/sports.router');
// Router pour les points /athletes
const athletesRouter = require('./routers/athletes.router');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', sportsRouter);
app.use('/', athletesRouter);

// LANCEMENT SUR PORT 3000
app.listen(3000, () => console.log('API REST JO ECOUTE SUR LOCALHOST:3000'));
