// Éléments isolés à ajouter à la base de données du Dashboard
const deltaProjectData = {
    actors: [
        { 
            name: "Hervé Plisson", 
            category: "opposants", 
            stance: "opposed", 
            role: "Habitant, tête de liste (Bouc-Bel-Air pour tous)", 
            position: "Dénonce la chaleur perdue, les nuisances et le déséquilibre face à la puissance étatique/industrielle.", 
            evidence: "À ce prix-là, Digital Realty se frotte les mains", 
            certainty: "Haute" 
        },
        { 
            name: "Antoine Devillet", 
            category: "opposants", 
            stance: "opposed", 
            role: "Membre (Le Nuage était sous nos pieds)", 
            position: "Alerte sur la consommation de 117 000 habitants et le Cloud Act américain.", 
            evidence: "C'est la consommation moyenne de 117 000 habitants, huit fois plus que la population de Bouc-Bel-Air", 
            certainty: "Haute" 
        },
        { 
            name: "Stéphane Coppey", 
            category: "orgs", 
            stance: "opposed", 
            role: "Porte-parole (FNE13)", 
            position: "Réclame un observatoire indépendant et dénonce l'accaparement de 80 MGW.", 
            evidence: "On parle d’une puissance de 80 MGW pré-réservée que l’industriel préempte", 
            certainty: "Haute" 
        },
        { 
            name: "Sébastien Barles", 
            category: "elus-opp", 
            stance: "opposed", 
            role: "Élu métropolitain", 
            position: "Critique le financement d'infrastructures publiques pour le privé et la contradiction climatique.", 
            evidence: "Cela contrecarre notre trajectoire climat, nous pousse vers le nucléaire et l’énergie fossile.", 
            certainty: "Haute" 
        },
        { 
            name: "Mathieu Piétri (Mairie)", 
            category: "elus-fav", 
            stance: "favorable", 
            role: "Maire de Bouc-Bel-Air", 
            position: "Avis favorable résigné face à la solidité du dossier, monnayé contre des compensations locales.", 
            evidence: "Aucun argument solide pour s'opposer au permis de construire", 
            certainty: "Haute" 
        },
        { 
            name: "Emmanuel Macron", 
            category: "elus-fav", 
            stance: "favorable", 
            role: "Président de la République", 
            position: "Favorable au déploiement massif grâce au PINM et au nucléaire pour la course à l'IA.", 
            evidence: "Grâce à nos centrales nucléaires, nous avons la capacité d’ouvrir des data centers", 
            certainty: "Haute" 
        },
        { 
            name: "Le Nuage était sous nos pieds", 
            category: "orgs", 
            stance: "opposed", 
            role: "Collectif associatif", 
            position: "Vulgarise les impacts physiques d'Internet, demande un moratoire et une convention citoyenne.", 
            evidence: "N/A", 
            certainty: "Haute" 
        },
        { 
            name: "FNE13", 
            category: "orgs", 
            stance: "opposed", 
            role: "Fédération environnementale", 
            position: "S'oppose aux ogres énergétiques et pointe les risques cumulés avec la déchetterie.", 
            evidence: "N/A", 
            certainty: "Haute" 
        },
        { 
            name: "Bouc-Bel-Air Environnement (BBAE)", 
            category: "orgs", 
            stance: "neutral", 
            role: "Association environnementale locale", 
            position: "Avis favorable avec réserves, s'oppose à la ligne radicale de FNE13 et relativise la consommation électrique.", 
            evidence: "La pénurie électrique de la France n’existe pas", 
            certainty: "Haute" 
        },
        { 
            name: "Digital Realty", 
            category: "porteurs", 
            stance: "favorable", 
            role: "Porteur du projet (Multinationale)", 
            position: "Promet 700M€ d'investissement, 25 emplois et l'éco-conception pour répondre à la demande IA.", 
            evidence: "N/A", 
            certainty: "Haute" 
        },
        { 
            name: "Fabrice Coquio", 
            category: "porteurs", 
            stance: "favorable", 
            role: "Directeur France Digital Realty", 
            position: "Affirme l'absolue nécessité de répondre à la croissance des datas et respecte les normes légales de rejet de chaleur.", 
            evidence: "Il y a un rejet de la chaleur [...] mais en aucun cas une notion de surconcentration", 
            certainty: "Haute" 
        },
        { 
            name: "RTE", 
            category: "porteurs", 
            stance: "neutral", 
            role: "Gestionnaire Réseau Transport Électricité", 
            position: "Doit amener la puissance à la ZAC, note la concurrence entre le privé et la transition énergétique portuaire.", 
            evidence: "Les data centers commençaient à entrer en concurrence avec d’autres projets locaux", 
            certainty: "Haute" 
        }
    ],
    griefs: [
        { title: "⚡ Conflit d'usage énergétique", text: "La puissance requise par MRS6 (estimée à une ville de 117 000 habitants) accapare l'électricité de la région et menace l'électrification d'autres secteurs vitaux (comme les navires à quai dans le port de Marseille)." },
        { title: "🔥 Cumul des nuisances locales", text: "Les riverains redoutent les îlots de chaleur générés par la ventilation, associés aux risques industriels (gaz fluorés, inflammation des cuves de fioul) dans une zone déjà saturée par la nouvelle déchetterie." },
        { title: "🇺🇸 Souveraineté et Cloud Act", text: "Le recours à une multinationale américaine pose un risque pour la sécurité des données européennes en raison des lois extraterritoriales américaines de réquisition." }
    ],
    vigilance: [
        "<strong>Scission associative</strong> : Opposition frontale entre FNE13 (opposé) et sa composante locale BBAE (favorable).",
        "<strong>Bataille des chiffres</strong> : L'enquête publique contient des données de consommation électrique très fluctuantes (245 GWh contre 679 GWh par an).",
        "<strong>Contournement démocratique</strong> : L'outil gouvernemental PINM (Projet d'Intérêt National Majeur) accélère les procédures et renforce le sentiment d'impuissance des acteurs locaux."
    ],
    sources: [
        "<strong>Rapport Bouc-Bel-Air 24-06-2026</strong> : Compilation de presse et communiqués (La Provence, France Bleu, France Info, etc.) sur la clôture de l'enquête publique et le vote du conseil municipal."
    ]
};
