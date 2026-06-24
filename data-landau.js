// Éléments isolés à ajouter à la base de données du Dashboard
const deltaProjectData = {
    actors: [
        { 
            name: "Michel", 
            category: "opposants", 
            stance: "opposed", 
            role: "Habitant de Dietwiller", 
            position: "Opposé à la prédation énergétique et foncière.", 
            evidence: "C'est une prédation de terres agricoles et d'énergie. C'est anti-démocratique, une gabegie énorme !", 
            certainty: "Haute" 
        },
        { 
            name: "Philippe", 
            category: "opposants", 
            stance: "opposed", 
            role: "Habitant de Hombourg", 
            position: "Critique sur le manque d'outils citoyens.", 
            evidence: "Vous dites que la population doit se manifester. Concrètement, on fait comment ?", 
            certainty: "Haute" 
        },
        { 
            name: "Cécile Germain-Ecuer", 
            category: "elus-opp", 
            stance: "opposed", 
            role: "Conseillère régionale Grand Est", 
            position: "Opposée, demande la suspension du projet.", 
            evidence: "Je m’interroge sur cette stratégie. (...) comment les habitants sont-ils pris en considération ?", 
            certainty: "Haute" 
        },
        { 
            name: "Thierry Engasser", 
            category: "elus-opp", 
            stance: "opposed", 
            role: "Maire de Hombourg", 
            position: "Opposé, projet déconnecté du territoire.", 
            evidence: "Microsoft est déconnecté. Ça ne va pas servir l’activité locale, ça ne s’inscrit pas dans la logique du territoire.", 
            certainty: "Haute" 
        },
        { 
            name: "Léonie Hebert", 
            category: "elus-opp", 
            stance: "opposed", 
            role: "Cheffe de file Mulhouse en commun", 
            position: "Critique vis-à-vis du projet.", 
            evidence: "N/A", 
            certainty: "Moyenne" 
        },
        { 
            name: "Fabian Jordan", 
            category: "elus-fav", 
            stance: "favorable", 
            role: "Président de M2A", 
            position: "Favorable, garant de l'acceptabilité.", 
            evidence: "Nous sommes les représentants des habitants, pas de Microsoft.", 
            certainty: "Haute" 
        },
        { 
            name: "Laurent Riche", 
            category: "elus-fav", 
            stance: "favorable", 
            role: "Vice-président de M2A", 
            position: "Favorable, mise sur l'énergie décarbonée.", 
            evidence: "L'énergie consommée par le centre de données sera décarbonée et neutre du point de vue climatique.", 
            certainty: "Haute" 
        },
        { 
            name: "Carole Talleux", 
            category: "elus-fav", 
            stance: "favorable", 
            role: "Maire de Petit-Landau", 
            position: "Favorable/Prudente, opportunité de diversification.", 
            evidence: "Dans le paysage local, très centré sur la chimie, nous avons toujours eu la volonté d’accueillir quelque chose de différent.", 
            certainty: "Haute" 
        },
        { 
            name: "Olivier Becht", 
            category: "elus-fav", 
            stance: "favorable", 
            role: "Député", 
            position: "Initiateur politique du projet en Alsace.", 
            evidence: "Je leur dis : “Attendez, arrêtez tout, on va essayer de vous trouver quelque chose en France”.", 
            certainty: "Haute" 
        },
        { 
            name: "Collectif IA pas moyen", 
            category: "orgs", 
            stance: "opposed", 
            role: "Collectif citoyen", 
            position: "Opposé au data center, demande un moratoire.", 
            evidence: "Notre maison brûle, Microsoft et M2A attisent le feu !", 
            certainty: "Haute" 
        },
        { 
            name: "Alsace Nature", 
            category: "orgs", 
            stance: "opposed", 
            role: "Association environnementale", 
            position: "Alerte sur les impacts : chaleur, bruit, énergie.", 
            evidence: "Il faut qu’il y ait une masse d’habitants qui disent non.", 
            certainty: "Haute" 
        },
        { 
            name: "Alter Alsace Énergies", 
            category: "orgs", 
            stance: "opposed", 
            role: "Association environnementale", 
            position: "Dénonce la colonisation numérique et la gabegie énergétique.", 
            evidence: "Nous risquons de dérouler le tapis rouge à une entreprise états-unienne [...] qui va nous mettre dans une situation de colonisés.", 
            certainty: "Haute" 
        },
        { 
            name: "Confédération paysanne", 
            category: "orgs", 
            stance: "opposed", 
            role: "Syndicat agricole", 
            position: "S'oppose à l'artificialisation de 36 hectares.", 
            evidence: "Il y a plein d'innovations qui sont possibles pour ramener de l'emploi sur le territoire.", 
            certainty: "Haute" 
        },
        { 
            name: "MRAe Grand Est", 
            category: "orgs", 
            stance: "neutral", 
            role: "Autorité environnementale", 
            position: "Avis sévère sur les lacunes du dossier.", 
            evidence: "Souffre d’un manque d’approfondissement des analyses.", 
            certainty: "Haute" 
        },
        { 
            name: "Mouvement écologiste indépendant", 
            category: "orgs", 
            stance: "opposed", 
            role: "Parti / Association", 
            position: "Opposé à l'urbanisation des bords du Rhin.", 
            evidence: "Ce que nous disons, c’est qu’il faut arrêter cette urbanisation linéaire.", 
            certainty: "Haute" 
        },
        { 
            name: "Microsoft", 
            category: "porteurs", 
            stance: "favorable", 
            role: "Porteur du projet", 
            position: "Défend l'implantation de l'IA générative et la création d'emplois.", 
            evidence: "Les data centers sont des infrastructures essentielles qui prennent de plus en plus de place dans notre vie.", 
            certainty: "Haute" 
        },
        { 
            name: "RTE", 
            category: "porteurs", 
            stance: "neutral", 
            role: "Gestionnaire réseau électrique", 
            position: "Aménage le raccordement industriel.", 
            evidence: "Nous prenons en compte la demande de Microsoft.", 
            certainty: "Haute" 
        },
        { 
            name: "SMO", 
            category: "porteurs", 
            stance: "favorable", 
            role: "Syndicat mixte gestionnaire", 
            position: "Cède les 36 hectares de foncier.", 
            evidence: "N/A", 
            certainty: "Haute" 
        }
    ],
    griefs: [
        { title: "⚡ Surconsommation énergétique & Monopolisation", text: "Le data center consommera jusqu'à 80 % de la consommation électrique actuelle des ménages du Haut-Rhin (1 500 à 1 750 GWh), accaparant virtuellement l'hydroélectricité locale décarbonée." },
        { title: "🌾 Artificialisation des Terres", text: "Consommation irréversible de 36 à 40 hectares de terres agricoles fertiles, dont une dizaine d'hectares cultivés en agriculture biologique le long du Grand Canal d'Alsace." },
        { title: "🌡️ Dôme de chaleur & Nuisances sanitaires", text: "Craintes sérieuses concernant la dissipation de chaleur (+2 à 3 °C localement), le bruit continu des serveurs, et la pollution aux NOx liée au fonctionnement test ou dégradé des 111 groupes électrogènes de secours." }
    ],
    vigilance: [
        "<strong>Évolution réglementaire sur le secret des affaires</strong> : Le blocage européen sur les données environnementales des sites risque de limiter considérablement l'accès citoyen et associatif à l'information réelle sur la pollution et la consommation, en tension avec la convention d'Aarhus.",
        "<strong>Phasage asymétrique</strong> : Incohérence relevée entre la cession intégrale du foncier (36 ha) et la promesse de Microsoft qui ne s'engage avec certitude que sur le premier bâtiment à ce stade, soulevant le risque d'une immobilisation foncière disproportionnée."
    ],
    sources: [
        "<strong>Rapport Petit-Landau 24-06-2026.docx</strong> : Recueil d'articles de presse (DNA, France 3, Rue89 Strasbourg, ChannelNews...) et communiqués locaux couvrant l'enquête publique."
    ]
};
