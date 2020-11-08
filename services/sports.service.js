const Sport = require("../models/sport");

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

    async addAthleteToSport(sportId, ahtlete){
        const res = await Sport.findByIdAndUpdate(
            sportId,
            {$push: { athletes: ahtlete._id }},
            {new: true, useFindAndModify: false}
        )
        return res;
    };

    async getAthletesBySport(sportId){
        const listAthletes = await Sport.findById(sportId).populate("athletes");
        return listAthletes.athletes;
    }
}

module.exports = SportsService;