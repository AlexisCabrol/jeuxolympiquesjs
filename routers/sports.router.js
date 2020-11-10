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
    const sport = await sportscontroller.getSportById(req, res);
    const listeAthletes = await sportscontroller.getAthleteFromSport(req, res);
    res.render('athlete-from-sport', { sport: sport, listeAthletes: listeAthletes});
});

router.get('/sports/:sportId/addAthlete', async (req, res) => {
    const sport = await sportscontroller.getSportById(req, res);
    const listeAthletes = await athletesController.getListeDesAthletes();
    res.render('nouvel-athlete-sport', { sport: sport, listeAthletes: listeAthletes });
});

router.get('/sports/add', async(req, res) => {
    res.render('sports-add');
});

router.get('/sports/supprimer/:sportId', async (req, res) => {
    await sportscontroller.supprimerSport(req, res);
    const listeSport = await sportscontroller.getAllSports();
    res.render('sport', { sports: listeSport, messageOk: "Traitement OK."});
});

// ROUTE POST
router.post('/sports', async (req, res) => {
    sportscontroller.create(req, res);
    res.redirect('/sports');
});

router.post('/sport/:sportId/athlete', async (req, res) => {
    const action = await sportscontroller.createAthleteNewToSport(req, res);
    const sports = await sportscontroller.getAllSports();
    if(action) {
        res.render('sport', { sports: sports, messageOk: "Traitement OK." });
    } else {
        res.render('sport', { sports: sports, messageErreur: "Traitement échoué : veuillez réessayer."});
    }
});

router.post('/sports/:sportId/addAthletes', async(req, res) => {
    const action = await sportscontroller.createAthleteToSport(req, res);
    const sports = await sportscontroller.getAllSports();
    if(action) {
        res.render('sport', { sports: sports, messageOk: "Traitement OK." });
    } else {
        res.render('sport', { sports: sports, messageErreur: "Traitement échoué : tentative d'insertion d'un doublon."});
    }
});

module.exports = router;