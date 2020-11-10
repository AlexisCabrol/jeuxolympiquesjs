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
     * Permet la récupération d'un athlète grâce a l'identifiant passé en paramètre.
     * @param {id} id 
     */
    async chargerAthlete(id) {
        const listeSportsPourAtlhete = await Athletes.findById(id).populate("sports");
        return listeSportsPourAtlhete;
    }

    /**
     * Méthode permettant de supprimer un athlète.
     * @param {id} id Identifiant de l'athlète concerné.
     */
    async supprimerAthlete(id) {
        await Athletes.findByIdAndRemove(id);
    }
}

module.exports = AthletesService;