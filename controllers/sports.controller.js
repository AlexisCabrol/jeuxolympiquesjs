const sportsService = require('../services/sports.service');

class SportsController {
    constructor(){
        this.sportsService = sportsService;
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

        const newSport = await this.sportsService.create(sport);
        res.redirect('/sports');
    }

    /**
     * 
     * @param {req} req la requête
     * @param {res} res le resultat
     * Récupération de tout les sports et affichage de la page centrale
     */
    async getAllSports(req, res){
        const sports = await this.sportsService.getAllSports();
        res.render('/sports', { sports });
    }
}

module.exports = SportsController;