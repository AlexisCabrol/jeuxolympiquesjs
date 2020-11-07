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
    }

    /**
     * Récupération d'une liste des athlètes.
     * @param {req} req la requête.
     * @param {res} res la résultat.
     */
    async getListeDesAthletes(req, res) {
        return await this.athletesService.getListeDesAthletes();
    }
}

module.exports = AthletesController;