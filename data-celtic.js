// Base de données unifiée du projet - Générée automatiquement
const projectData = {
    meta: {
        title: "Cartographie Interactive — Celtic Interconnector",
        subtitle: "Projet d’interconnexion électrique sous-marine entre la France et l'Irlande. Un chantier européen stratégique mais freiné par des défis maritimes, générant d'importantes interrogations sur le dérapage budgétaire, les retards calendaires et l'impact sur les consommateurs."
    },
    taxonomy: {
        categories: {
            "all": "Tous les acteurs",
            "opposants": "Opposants & Experts",
            "elus-opp": "Élus Opposés/Critiques",
            "elus-fav": "Élus Favorables/Prudents",
            "orgs": "Orgs & Collectifs",
            "porteurs": "Porteurs & Économie"
        },
        stances: {
            "all": "Toutes les positions",
            "opposed": "Opposé / Critique",
            "favorable": "Favorable / Soutien",
            "neutral": "Prudent / Ambigü"
        }
    },
    actors: [
        {
            name: "Malcolm Byrne",
            category: "elus-opp",
            stance: "opposed",
            role: "Fianna Fáil TD pour Wexford/Wicklow",
            position: "Critique / inquiet sur le manque de clarté du calendrier et l’impact possible sur les objectifs offshore.",
            evidence: "Il se dit « stunned » de ne pas obtenir de date d’achèvement et estime que le gouvernement doit être « realistic ».",
            certainty: "Haute"
        },
        {
            name: "Jennifer Whitmore",
            category: "elus-opp",
            stance: "opposed",
            role: "Social Democrats TD",
            position: "Inquiète / interrogative sur le retard et ses conséquences.",
            evidence: "Elle rappelle que l’interconnexion est nécessaire pour « export electricity, but also in the event that we need to import it ».",
            certainty: "Haute"
        },
        {
            name: "Roderic O’Gorman",
            category: "elus-fav",
            stance: "neutral",
            role: "Green Party TD for Dublin West",
            position: "Acteur parlementaire demandeur d’information ; position non explicitement opposée.",
            evidence: "Il reçoit une mise à jour du ministre Darragh O’Brien sur le projet.",
            certainty: "Moyenne"
        },
        {
            name: "Micheál Martin",
            category: "elus-fav",
            stance: "neutral",
            role: "Taoiseach",
            position: "Prudent / informé de difficultés techniques impactant le projet.",
            evidence: "Il indique avoir été informé par EirGrid et l’ambassade de France de « technical issues » susceptibles de retarder le projet.",
            certainty: "Haute"
        },
        {
            name: "Darragh O’Brien",
            category: "elus-fav",
            stance: "neutral",
            role: "Energy Minister",
            position: "Institutionnel / explicatif sur les difficultés structurelles.",
            evidence: "Il évoque un projet « significant and complex » dans un environnement maritime difficile, rapportant des progrès plus lents qu’attendu.",
            certainty: "Haute"
        },
        {
            name: "Timmy Dooley",
            category: "elus-fav",
            stance: "neutral",
            role: "Minister of State",
            position: "Destinataire d’une interpellation, position publique non définie fermement.",
            evidence: "Malcolm Byrne lui reproche de ne pas savoir quand le connecteur serait opérationnel.",
            certainty: "Faible"
        },
        {
            name: "Uplift",
            category: "orgs",
            stance: "neutral",
            role: "Mouvement citoyen irlandais",
            position: "Porte une campagne contre l’expansion des data centers ; non identifié comme opposant frontal au Celtic Interconnector.",
            evidence: "Le document précise qu’Uplift critique les impacts des data centers sur le système électrique mais pas directement le câble.",
            certainty: "Haute"
        },
        {
            name: "Don’t let Big Tech steal our light",
            category: "orgs",
            stance: "opposed",
            role: "Campagne citoyenne liée à Uplift",
            position: "Critique de la consommation électrique des multinationales du numérique ; demande de moratoire sur les data centers.",
            evidence: "La campagne vise un moratoire sur l’ouverture de sites et critique la pression sur le système électrique.",
            certainty: "Haute"
        },
        {
            name: "SECAD Partnership CLG",
            category: "orgs",
            stance: "favorable",
            role: "Administrateur / accompagnateur de fonds",
            position: "Gestion et accompagnement du Celtic Interconnector Community Benefit Fund.",
            evidence: "Contact d’aide pour les candidatures au fonds communautaire.",
            certainty: "Haute"
        },
        {
            name: "Community groups / not-for-profit organisations in east Cork",
            category: "orgs",
            stance: "favorable",
            role: "Acteurs locaux bénéficiaires",
            position: "Bénéficiaires du Community Benefit Fund.",
            evidence: "29 groupes et organisations reçoivent 838 987 € dans le cadre du fonds associé au projet.",
            certainty: "Haute"
        },
        {
            name: "EirGrid",
            category: "porteurs",
            stance: "favorable",
            role: "Gestionnaire public irlandais du réseau électrique",
            position: "Co-porteur du projet ; responsable côté irlandais ; finance 65 % du coût final.",
            evidence: "Confirme les retards liés à la fabrication et aux conditions marines ; gère les négociations de coûts additionnels.",
            certainty: "Haute"
        },
        {
            name: "RTE / Réseau de Transport d’Électricité",
            category: "porteurs",
            stance: "favorable",
            role: "Gestionnaire français du réseau de transport d’électricité",
            position: "Co-porteur côté français.",
            evidence: "Présente le projet comme une interconnexion stratégique renforçant la sécurité d’approvisionnement et la souveraineté.",
            certainty: "Haute"
        },
        {
            name: "Régis Boigegrain",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur général (division gestion infrastructures RTE)",
            position: "Porte-parole institutionnel de RTE.",
            evidence: "Déclare que le lancement de la phase française constitue une « decisive milestone ».",
            certainty: "Haute"
        },
        {
            name: "Rémi Courtial",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur du projet Celtic Interconnector pour RTE",
            position: "Défend le projet comme un acte de solidarité et de souveraineté européenne.",
            evidence: "Déclare : « Se soutenir entre pays européens reste un acte de souveraineté ».",
            certainty: "Haute"
        },
        {
            name: "Nexans",
            category: "porteurs",
            stance: "favorable",
            role: "Câblier / Industriel",
            position: "Responsable de l'ingénierie, fabrication et installation du système complet de câbles.",
            evidence: "Fabrication répartie entre Halden, Charleroi et Cortaillod.",
            certainty: "Haute"
        },
        {
            name: "Siemens Energy",
            category: "porteurs",
            stance: "favorable",
            role: "Entreprise industrielle énergie",
            position: "Responsable de la construction et des équipements de la station de conversion.",
            evidence: "Intervient sur la station d’Ar Merzher.",
            certainty: "Haute"
        },
        {
            name: "Alexandre Pinson",
            category: "porteurs",
            stance: "favorable",
            role: "Chef de projet Siemens Energy",
            position: "Responsable du déploiement de la station de conversion.",
            evidence: "Fier d’avoir achevé l’infrastructure de la station Ar Merzher avec des partenaires locaux.",
            certainty: "Haute"
        },
        {
            name: "NGE",
            category: "porteurs",
            stance: "favorable",
            role: "Groupe français de BTP",
            position: "Réalisation de la station de conversion d’Ar Merzher en partenariat avec Siemens.",
            evidence: "Présente le chantier comme un projet complexe au service de la transition écologique.",
            certainty: "Haute"
        },
        {
            name: "Stéphane Perez",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur général de NGE",
            position: "Porte-parole valorisant l'expertise française.",
            evidence: "Estime que le chantier illustre la capacité de NGE à coordonner des expertises.",
            certainty: "Haute"
        },
        {
            name: "Eiffage Énergie Systèmes",
            category: "porteurs",
            stance: "favorable",
            role: "Entreprise énergie / réseaux",
            position: "Opère les travaux de liaison terrestre côté français pour Nexans et RTE.",
            evidence: "Pose de câbles HVDC, tranchées, fourreaux.",
            certainty: "Haute"
        },
        {
            name: "Hervé Burel",
            category: "porteurs",
            stance: "favorable",
            role: "Chef de projet Eiffage Énergie Systèmes",
            position: "Responsable des travaux de réseau.",
            evidence: "Décrit les 21 premiers kilomètres construits par ses équipes.",
            certainty: "Haute"
        },
        {
            name: "Vincent Morice",
            category: "porteurs",
            stance: "favorable",
            role: "Chef de projet EES",
            position: "Responsable de la pose des câbles.",
            evidence: "Décrit la pose par tronçons de modules.",
            certainty: "Haute"
        },
        {
            name: "DLE Ouest",
            category: "porteurs",
            stance: "favorable",
            role: "Entreprise de travaux publics",
            position: "Réalisation d’un tronçon critique de liaison souterraine.",
            evidence: "Construit la seconde section de la liaison souterraine jusqu’à la station de conversion.",
            certainty: "Haute"
        },
        {
            name: "Eiffage Génie Civil / Eiffage Fondations",
            category: "porteurs",
            stance: "favorable",
            role: "Entreprises de génie civil",
            position: "Responsables des microtunnels et des infrastructures lourdes.",
            evidence: "Forage sous la LGV Paris-Brest et sous l’Élorn.",
            certainty: "Haute"
        },
        {
            name: "Van Oord",
            category: "porteurs",
            stance: "neutral",
            role: "Entreprise de travaux maritimes",
            position: "Opérateur des campagnes de câbles en pleine mer pour Nexans.",
            evidence: "Réalise des opérations de câbles dans la mer Celtique.",
            certainty: "Haute"
        },
        {
            name: "CIDAC / Celtic Interconnector Designated Activity Company",
            category: "porteurs",
            stance: "neutral",
            role: "Structure porteuse du projet",
            position: "Maîtrise d'ouvrage / entité légale centrale pour les opérations et les contrats de service.",
            evidence: "Associée aux opérations de réparation ou câblage.",
            certainty: "Haute"
        },
        {
            name: "Assystem",
            category: "porteurs",
            stance: "favorable",
            role: "Groupe d’ingénierie",
            position: "Assistance à maîtrise d’ouvrage.",
            evidence: "Contrat auprès de CIDAC pour accompagner conception et construction.",
            certainty: "Haute"
        },
        {
            name: "Commission européenne / Union européenne",
            category: "orgs",
            stance: "favorable",
            role: "Institution européenne",
            position: "Financeur de référence soutenant le projet.",
            evidence: "Le projet est reconnu d’intérêt commun avec une subvention majeure accordée.",
            certainty: "Haute"
        },
        {
            name: "CINEA",
            category: "orgs",
            stance: "favorable",
            role: "Agence exécutive européenne",
            position: "Apporte un soutien institutionnel et technique.",
            evidence: "Mentionnée comme agence européenne soutenant activement le projet.",
            certainty: "Haute"
        },
        {
            name: "Commission for Regulation of Utilities / CRU",
            category: "orgs",
            stance: "neutral",
            role: "Régulateur irlandais de l'énergie",
            position: "Autorité de régulation veillant à l'impact des coûts sur les charges de réseau.",
            evidence: "EirGrid devra obtenir son autorisation pour intégrer de nouvelles charges financières.",
            certainty: "Haute"
        },
        {
            name: "Alan McSweeney",
            category: "opposants",
            stance: "opposed",
            role: "Consultant spécialisé en coûts de projet",
            position: "Analyste financier très critique sur l'explosion prévisible du budget.",
            evidence: "Estime que le coût final pourrait atteindre 2,1 à 2,8 Md€.",
            certainty: "Haute"
        },
        {
            name: "Barry Hayes",
            category: "opposants",
            stance: "opposed",
            role: "Professeur associé en systèmes électriques (UCC)",
            position: "Juge le retard extrêmement défavorable aux consommateurs, bien qu'il reconnaisse l'utilité du câble.",
            evidence: "Déclare : « This is bad news for electricity consumers ».",
            certainty: "Haute"
        },
        {
            name: "Paul Cuffe",
            category: "opposants",
            stance: "opposed",
            role: "Professeur associé (UCD)",
            position: "Expert énergie très contrarié par la dérive du calendrier.",
            evidence: "Qualifie le retard de « frustrating ».",
            certainty: "Haute"
        },
        {
            name: "Paul Leahy",
            category: "opposants",
            stance: "opposed",
            role: "Maître de conférences (UCC)",
            position: "Expert éolien, inquiet du risque de déséquilibre entre offre et demande électrique.",
            evidence: "Alerte sur le resserrement du réseau notamment à cause de la croissance des data centers.",
            certainty: "Haute"
        }
    ],
    griefs: [
        {
            title: "⏱️ Retard du projet",
            text: "Point de vigilance structurant. La mise en service initiale est repoussée vers fin 2028 / Q4 2028, avec un fort risque de nouveau décalage lié aux conditions météorologiques et maritimes."
        },
        {
            title: "💶 Dérapage des coûts",
            text: "Point de vigilance structurant. Une explosion budgétaire est anticipée : le projet passerait d’environ 1,62 Md€ à plus de 2 Md€, voire jusqu'à 2,8 Md€ selon l'analyste Alan McSweeney."
        },
        {
            title: "📉 Impact pour les consommateurs irlandais",
            text: "Point de vigilance structurant. Les surcoûts colossaux risquent d'être directement intégrés aux charges de réseau par la CRU, impactant la facture des usagers finaux."
        },
        {
            title: "⚡ Sécurité d’approvisionnement irlandaise",
            text: "Point de vigilance structurant. La fragilité du réseau irlandais, très dépendant au gaz importé, rend les retards de l'interconnexion particulièrement critiques."
        },
        {
            title: "📈 Croissance de la demande électrique",
            text: "Point de vigilance structurant. La demande électrique irlandaise explose, portée massivement par la prolifération incontrôlée des méga data centers."
        },
        {
            title: "⚖️ Gouvernance territoriale bretonne",
            text: "Point de vigilance territorial. Certains passages documentaires estiment que la Bretagne accueille et finance une lourde infrastructure décidée selon des logiques parisiennes et européennes sans réel contrôle local."
        },
        {
            title: "🌐 Arbitrages de marché",
            text: "Point de vigilance économique. Les experts craignent que les flux d’électricité suivent les zones les plus rentables du marché européen, privant les territoires d'accueil de bénéfices locaux."
        },
        {
            title: "⚓ Contraintes environnementales et techniques",
            text: "Point de vigilance technique. Le fond marin hostile nécessite des techniques complexes (ensouillage, protection des câbles) tout en affrontant la problématique des espèces protégées et des emprises de chantier."
        }
    ],
    vigilance: [
        "<strong>Brouillard Financier :</strong> Des contradictions majeures subsistent dans les rapports sur le montant réel de la subvention européenne (variant de 530 à 800 M€ selon les sources), témoignant d'une communication financière instable.",
        "<strong>Explosion Budgétaire (EirGrid) :</strong> Les analyses indépendantes (A. McSweeney) évaluent la dérive financière du projet à potentiellement +1 Md€, ce qui pèsera mécaniquement sur la CRU et les usagers irlandais.",
        "<strong>Boucle des Data Centers :</strong> La nécessité de l'interconnexion (côté irlandais) est paradoxalement renforcée par la demande boulimique du secteur des data centers, dont les collectifs (Uplift) dénoncent violemment l'impact.",
        "<strong>Facteur Maritime Imprévisible :</strong> Le calendrier repose sur la viabilité des opérations complexes en Mer Celtique par Van Oord et Nexans ; or, la rudesse des fonds marins a déjà provoqué de lourds retards justifiant un report quasi systématique à fin 2028."
    ],
    sources: [
        "<strong>news.google.com :</strong> Agrégateur / reprise de presse. Source de nombreuses reprises d’articles du corpus.",
        "<strong>The Irish Times :</strong> Presse irlandaise. Article sur les coûts possibles liés aux retards.",
        "<strong>Irish Examiner :</strong> Presse irlandaise. Articles sur les retards, l’absence de clarté, les impacts prix et sécurité énergétique.",
        "<strong>Offshore Energy :</strong> Média spécialisé énergie offshore. Articles sur les étapes techniques : tirage, station, pose de câbles.",
        "<strong>La Tribune :</strong> Média économique français. Article sur l’ensouillage côté français et l’avancement du chantier.",
        "<strong>TF1 Info :</strong> Média national français. Reportage grand public sur le chantier de pose en mer et l’intérêt énergétique pour la Bretagne.",
        "<strong>Breizh-info.com :</strong> Média régional / politique breton. Article sur la station de conversion et la souveraineté énergétique européenne.",
        "<strong>Voiries et Réseaux :</strong> Média professionnel travaux / infrastructures. Article sur la station de conversion de La Martyre et le rôle de NGE.",
        "<strong>Silicon Republic :</strong> Média tech / innovation irlandais. Article sur l’étape franchie dans le projet et la station Ar Merzher.",
        "<strong>Afloat.ie :</strong> Média maritime irlandais. Notices maritimes sur les opérations de câbles, réparations, sécurité maritime.",
        "<strong>Mer et Marine :</strong> Média maritime français. Articles sur les navires câbliers et campagnes d’études en mer.",
        "<strong>Révolution Énergétique :</strong> Média énergie. Article sur le début de pose côté français et le coût du projet.",
        "<strong>ABP / Agence Bretagne Presse :</strong> Média breton. Article de 2019 sur la concertation et commentaires de lecteurs.",
        "<strong>Capital.fr :</strong> Média économique. Mention du contrat Assystem / CIDAC.",
        "<strong>Cork Chamber / EirGrid communication :</strong> Source institutionnelle / économique locale. Relais des financements communautaires accordés en East Cork."
    ]
};
