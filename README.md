# Jeux Olympiques JS

Pour installer le projet sur votre environnement, veuillez respecter ces étapes :<br>
- Il faut créer un fichier .env à la racine du projet puis renseigner une valeur qui a pour clé DB_URL. 
- Exécuter les commandes ci-dessous :
        
        npm install
        npm start

Félicitation, Jeux Olympiques JS est maintenant à l'écoute sur votre PC.<br><br>

# Les endpoints 
Nous avons fait le choix d'utiliser Handlebars ce qui a pour conséquence de ne pas pouvoir exploiter les endpoints avec le verbe DELETE pour la suppresion.<br>
Tous les endpoints présentés sont exploitables.
<br><br>
## API Sports
- Lister les sports : GET - /api/sports 
- Affiche la page de création pour un nouveau sport : GET - /api/sports/new
- Consulter les athlètes d'un sport : GET - /api/sports/:sportId/athletes
- Affiche la page d'ajout d'un athlète à un sport : GET - /api/sports/:sportId/addAthlete
- Supprime un sport : GET - /api/sports/supprimer/:sportId
- Créer un sport : POST - /api/sports
- Créer un athlète puis le rattache à un sport : POST - /api/sports/:sportId/athlete
- Rattache un athlète existant à un sport : POST - /api/sports/:sportId/addAthlete

## API Athlètes
- Lister les athlètes : GET - /api/athletes
- Affiche la page de création pour un nouvel athlète : GET - /api/athletes/new
- Affiche les sports pour l'athlète sélectionné : GET - /api/:athleteId/sports
- Supprime un athlète : GET - /api/athletes/supprimer/:athleteId
- Supprime un athlète d'un sport - GET : /api/athletes/:athleteId/sport/:sportId
- Créer un athlète : POST - /api/athletes
