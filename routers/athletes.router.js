const express = require('express');
const router = express.Router();

const AthletesController = require('../controllers/athletes.controller');
const athletesController = new AthletesController();

// ROUTE GET
router.get('/athletes', async (req, res) => {
    const listeAthletes = await athletesController.getListeDesAthletes();
    res.render('athlete', { listeAthletes: listeAthletes});
});

router.get('/athletes/new', async(req, res) => {
    res.render('nouvel-athlete');
});

router.get('/athletes/:athleteId/sports', async (req, res) => {
    const listeSports = await athletesController.voirSportParAthlete(req, res);
    res.render('liste-sport-par-athlete', { listeSports: listeSports});
});

router.get('/athletes/supprimer/:athleteId', async (req, res) => {
    await athletesController.supprimerAthlete(req, res);
    const listeAthletes = await athletesController.getListeDesAthletes();
    res.render('athlete', { listeAthletes: listeAthletes, messageOk: "Traitement OK."});
});

router.get('/athletes/:athleteId/sport/:sportId', async (req, res) => {
    await athletesController.supprimerSportDunAthlete(req, res);
    const sport = await sportscontroller.getSportById(req, res);
    const listeAthletes = await sportscontroller.getAthleteFromSport(req, res);
    res.render('athlete-from-sport', { sport: sport, listeAthletes: listeAthletes,  messageOk: "Traitement OK."});
});

// ROUTE POST
router.post('/athletes', async (req, res) => {
    athletesController.creationAthlete(req, res);
    res.redirect('/athletes');
});

module.exports = router;