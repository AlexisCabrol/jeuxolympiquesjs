const AthletesService = require('../services/athletes.service');
const Athlete = require('../models/athlete');

class AthletesController {

    /**
     * Constructeur.
     */
    constructor() {
        this.athletesService = new AthletesService();
    }

    /**
     * Création d'un athlète.
     * @param {req} req la requête.
     * @param {res} res le résultat.
     */
    async creationAthlete(req, res) {
        await this.athletesService.creationAthlete(req);
        res.redirect('/api/sports');
    }

    /**
     * Récupération d'une liste des athlètes.
     * @param {req} req la requête.
     * @param {res} res la résultat.
     */
    async getListeDesAthletes(req, res) {
        const athletes = await this.athletesService.getListeDesAthletes();
        res.render('athletes', { athletes });
    }
}

module.exports = AthletesController;