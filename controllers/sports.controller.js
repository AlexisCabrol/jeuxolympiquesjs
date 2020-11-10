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

    /**
     * Méthode permettant d'avoir les athlètes en fonction d'un sport passé en paramètre.
     * @param {req} req 
     * @param {res} res 
     */
    async getAthleteFromSport(req, res){
        const sportId = req.params.sportId;
        return await this.sportsService.getAthletesBySport(sportId);
    }

    /**
     * Méthode permettant de créer un nouvel athlète directement depuis un sport.
     * @param {req} req 
     * @param {res} res 
     */
    async createAthleteNewToSport(req, res){
        const sportId = req.params.sportId;
        const athlete = await this.athletesService.creationAthlete(req);
        if(athlete){
            this.sportsService.addAthleteToSport(sportId, athlete);
        }
    }

    /**
     * Méthode permettant d'avoir un sport en fonction de son identifiant.
     * @param {req} req 
     * @param {res} res 
     */
    async getSportById(req, res){
        const sportId = req.params.sportId;
        const sport = await this.sportsService.getSportById(sportId);
        return sport;
    }

    /**
     * Méthode permettant d'ajouter une liaison entre un athlète existant et un sport existant.
     * @param {req} req 
     * @param {res} res 
     */
    async createAthleteToSport(req, res) {
        const athlete = await this.athletesService.chargerAthlete(req.body.athlete);
        this.sportsService.addAthleteToSport(req.params.sportId, athlete);
    }
}

module.exports = SportsController;