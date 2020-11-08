const express = require('express');
const router = express.Router();

//On instancie notre controller
const SportsController = require('../controllers/sports.controller');
const sportscontroller = new SportsController();

// ROUTE GET
router.get('/sports', async (req, res) => {
    const sports = await sportscontroller.getAllSports();
    res.render('sport', { sports: sports });
});

router.get('/sports/:sportId', async (req, res) => {

});

router.get('/sports/:sportId/athletes', async (req, res) => {

});

router.get('/sports/add', async(req, res) => {
    res.render('sports-add');
})

// ROUTE POST
router.post('/sports', async (req, res) => {
    sportscontroller.create(req, res);
    res.redirect('/sports');
});

router.post('/sports/:sportId/athletes/:athletesId', async (req, res) => {

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