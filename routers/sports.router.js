const express = require('express');
const router = express.Router();

// ROUTE GET
router.get('/sports', async (req, res) => {

});

router.get('/sports/:sportId', async (req, res) => {

});

router.get('/sports/:sportId/athletes', async (req, res) => {

});

// ROUTE POST
router.post('/sports', async (req, res) => {

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