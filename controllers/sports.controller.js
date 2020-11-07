const sportsService = require('../services/sports.service');

class SportsController {
    constructor(){
        this.sportsService = new sportsService();
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
}

module.exports = SportsController;