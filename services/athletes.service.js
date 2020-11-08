const Athletes = require('../models/athlete');

class AthletesService {

    /**
     * Création d'un athlète.
     * @param {req} paramètre de la requête. 
     */
    async creationAthlete(req) {
        const paramAthelete = req.body;
        const athlete = new Athletes({
            firstName: paramAthelete.firstName,
            lastName: paramAthelete.lastName,
            gender: paramAthelete.gender,
            country: paramAthelete.country,
        });
        await athlete.save();
        return athlete;
    }

    /**
     * Récupération d'une liste des athlètes.
     * @return la liste des athlètes en base.
     */
    async getListeDesAthletes() {
        const athletes = await Athletes.find({});
        return athletes;
    }

    /**
     * Permet la récupération des sports pour un athlète qui a l'identifiant passé en paramètre.
     * @param {id} id 
     */
    async voirSportParAthlete(id) {
        const listeSportsPourAtlhete = await wAthletes.findById(id).populate('sports');
        return listeSportsPourAtlhete;
    }
}

module.exports = AthletesService;