const Athletes = require('../models/athlete');
const Sport = require('../models/sport');

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
        athletes.forEach(athlete => {
            athlete.gender = athlete.gender === 'M' ? 'Homme' : 'Femme';
        });
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

    /**
     * Méthode permettant de supprimer un sport d'un athlète.
     * @param {sportId} sportId identifiant du sport.
     * @param {athleteId} athleteId identifiant de l'athlète.
     */
    async supprimerSportDunAthlete(sportId, athleteId) {
        await Athletes.update({ _id: athleteId}, { $pullAll: { sports: [sportId] } } );
        await Sport.update({ _id: sportId}, { $pullAll: { athletes: [athleteId] } } );
    }
}

module.exports = AthletesService;