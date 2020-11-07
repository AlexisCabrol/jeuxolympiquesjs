const Sport = require("../models/sport");

class SportsService {
    constructor() {}

    /**
     * 
     * @param {*} sport 
     *  Body JSON avec les informations du nouveau sport
     *  Insert le nouveau sport dans la base de données MongoDB
     */
    async create(sport){
        const newSport = new Sport({
            name: sport.name,
            athletes: sport.athletes
        });

        await newSport.save();
        return newSport;
    }

    /**
     * Permet la récupération de tous les sports
     */
    async getAllSports(){
        return await Sport.find({});
    }
}

module.exports = SportsService;