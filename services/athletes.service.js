const Athletes = require('../models/athlete');

class AthletesService {

    /**
     * Création d'un athlète.
     * @param {req} paramètre de la requête. 
     */
    async creationAthlete(req) {
        const paramAthelete = req.body;
        const athlete = new Athlete({
            firstName: paramAthelete.firstName,
            lastName: paramAthelete.lastName,
            gender: paramAthelete.gender,
            country: paramAthelete.country,
        });
        await athlete.save();
    }

    /**
     * Récupération d'une liste des athlètes.
     * @return la liste des athlètes en base.
     */
    async getListeDesAthletes() {
        const athletes = await Athletes.find({});
        return athletes;
    }
}

module.exports = AthletesService;