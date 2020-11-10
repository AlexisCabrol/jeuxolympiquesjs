const Sport = require("../models/sport");
const Athlete = require("../models/athlete");
const athlete = require("../models/athlete");

class SportsService {
    constructor() {}

    /**
     * 
     * @param {sport} sport l'objet json avec les données du nouveau sport
     *  Body JSON avec les informations du nouveau sport
     *  Insert le nouveau sport dans la base de données MongoDB
     */
    async create(sport){
        const newSport = new Sport({
            name: sport.name,
            athletes: []
        });

        await newSport.save();
        return newSport;
    }

    /**
     * Permet la récupération de tous les sports
     */
    async getAllSports(){
       const sports = await Sport.find({});
       return sports;
    }

    async getSportById(sportId){
        return await Sport.findById(sportId);
    }

    /**
     * Ajout d'un athlète dans un sport.
     * @param {sportId} sportId Identifiant du sport
     * @param {athlete} ahtlete Athlète visé
     * @return true si la liaison n'existe pas et donc crée, false dans l'autre cas.
     */
    async addAthleteToSport(sportId, athlete){
        const liaisonExisteDeja = await Sport.exists({ athletes: athlete._id});
        if(!liaisonExisteDeja) {
            // On ajoute l'athlète dans l'objet sport.
            const res = await Sport.findByIdAndUpdate(
                sportId,
                {$push: { athletes: athlete._id }},
                {new: true, useFindAndModify: false});
            
            // On ajoute également le sport dans l'athlète.
            const update = await Athlete.findByIdAndUpdate(
                athlete._id,
                {$push: { sports: sportId }},
                {new: true, useFindAndModify: false});
        }
        return !liaisonExisteDeja;
    }

    async getAthletesBySport(sportId){
        const listAthletes = await Sport.findById(sportId).populate("athletes");
        return listAthletes.athletes;
    }

    /**
     * Méthode permettant de supprimer un sport.
     * @param {id} id Identifiant du sport concerné.
     */
    async supprimerSport(id) {
        await Sport.findByIdAndRemove(id);
    }
}

module.exports = SportsService;