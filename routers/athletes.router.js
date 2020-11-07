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

router.get('/athletes/:athletesId', async (req, res) => {

});

router.get('/athletes/:athleteId/sports', async (req, res) => {

});

router.get('/countries/:country/athletes', async (req, res) => {

});

// ROUTE POST
router.post('/athletes', async (req, res) => {
    athletesController.creationAthlete(req, res);
    res.redirect('/athletes');
});

// ROUTE PUT
router.put('/athletes/:athleteId', async (req, res) => {

});

// ROUTE DELETE
router.delete('/athletes/:athleteId', async (req, res) => {

});

module.exports = router;