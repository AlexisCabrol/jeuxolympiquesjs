const express = require('express');
const router = express.Router();

//On instancie nos controllers
const SportsController = require('../controllers/sports.controller');
const sportscontroller = new SportsController();

const AthletesController = require('../controllers/athletes.controller');
const athletesController = new AthletesController();

// ROUTE GET
router.get('/sports', async (req, res) => {
    const sports = await sportscontroller.getAllSports();
    res.render('sport', { sports: sports });
});

router.get('/sports/new', async(req, res) => {
    res.render('nouveau-sport');
});

router.get('/sports/:sportId/athletes', async (req, res) => {
    const listeAthletes = await sportscontroller.getAthleteFromSport(req, res);
    res.render('athlete-from-sport', { listeAthletes: listeAthletes});
});

router.get('/sports/:sportId/addAthlete', async (req, res) => {
    const sport = await sportscontroller.getSportById(req, res);
    res.render('nouvel-athlete-sport', { sport: sport });
});

router.get('/sports/add', async(req, res) => {
    res.render('sports-add');
});

// ROUTE POST
router.post('/sports', async (req, res) => {
    sportscontroller.create(req, res);
    res.redirect('/sports');
});

router.post('/sport/:sportId/athlete', async (req, res) => {
    sportscontroller.createAthleteToSport(req, res);
    res.redirect('/sports');
});

// ROUTE PUT
router.put('/sports/:sportId', async (req, res) => {

});

// ROUTE DELETE
router.delete('/sports/:sportId', async (req, res) => {

});

router.delete('/sports/:sportId/athletes/:athletesId', async (req, res) => {

});


module.exports = router;