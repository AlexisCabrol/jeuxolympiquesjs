const sportsService = require('../services/sports.service');
const AthletesService = require('../services/athletes.service');

class SportsController {
    constructor(){
        this.sportsService = new sportsService();
        this.athletesService = new AthletesService();
    }

    /**
     * 
     * @param {req} req la requête
     * @param {res} res le resultat
     * Appel du service pour l'ajout en BDD du sport et redirection vers
     * la page centrale
     */
    async create(req, res){
        const sport = req.body;
        await this.sportsService.create(sport);
    }

    /**
     * 
     * @param {req} req la requête
     * @param {res} res le resultat
     * Récupération de tout les sports et affichage de la page centrale
     */
    async getAllSports(req, res){
        return await this.sportsService.getAllSports();
    }

    async getAthleteFromSport(req, res){
        const sportId = req.params.sportId;
        return await this.sportsService.getAthletesBySport(sportId);
    }

    async createAthleteToSport(req, res){
        const sportId = req.params.sportId;
        const athlete = await this.athletesService.creationAthlete(req);
        if(athlete){
            this.sportsService.addAthleteToSport(sportId, athlete);
        }
    }

    async getSportById(req, res){
        const sportId = req.params.sportId;
        const sport = await this.sportsService.getSportById(sportId);
        return sport;
    }
}

module.exports = SportsController;