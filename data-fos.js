// Base de données unifiée du projet - Générée automatiquement
const projectData = {
    meta: {
        title: "Cartographie Interactive — Ligne THT Fos-Jonquières",
        subtitle: "Projet de ligne aérienne 400 kV porté par RTE entre Jonquières-Saint-Vincent et Fos-sur-Mer. Le dossier cristallise un conflit majeur entre l'urgence de décarbonation industrielle de Fos et la préservation d'écosystèmes et de terres agricoles uniques (Camargue, Crau, Terre d'Argence)."
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
            name: "RTE",
            category: "porteurs",
            stance: "favorable",
            role: "Porteur technique du projet",
            position: "Défend la solution aérienne pour ses délais, coûts et capacité de puissance électrique.",
            evidence: "Maître d'ouvrage et défenseur exclusif du tracé aérien.",
            certainty: "Haute"
        },
        {
            name: "Patrick de Carolis",
            category: "elus-opp",
            stance: "opposed",
            role: "Maire d'Arles",
            position: "Opposé au tracé aérien ; demande un réexamen des besoins et l'étude sérieuse des alternatives.",
            evidence: "Déclarations publiques d'opposition au fuseau impactant sa commune.",
            certainty: "Haute"
        },
        {
            name: "Collectif THT 13/30",
            category: "orgs",
            stance: "opposed",
            role: "Coalition interdépartementale",
            position: "Coalition centrale opposée au projet aérien, prône l'enfouissement systématique ou l'ensouillement.",
            evidence: "Organisation structurante de la fronde citoyenne et associative.",
            certainty: "Haute"
        },
        {
            name: "Renaud Muselier",
            category: "elus-fav",
            stance: "neutral",
            role: "Président de la Région Sud",
            position: "Appelle à une solution partagée et évoque l'option des mini-réacteurs SMR pour l'autonomie.",
            evidence: "Prise de position modérée cherchant un compromis technologique.",
            certainty: "Moyenne"
        },
        {
            name: "Jean-Luc Moya",
            category: "opposants",
            stance: "opposed",
            role: "Porte-parole du collectif THT 13/30",
            position: "Très investi contre l'aérien et défenseur de la biodiversité locale.",
            evidence: "Prises de parole publiques au nom de l'ensemble du collectif.",
            certainty: "Haute"
        },
        {
            name: "Cédric Bernardi",
            category: "opposants",
            stance: "opposed",
            role: "Riziculteur (ASTCC)",
            position: "S'oppose à l'emprise sur ses terres et à la dégradation du paysage agricole.",
            evidence: "Mobilisation syndicale et foncière directe.",
            certainty: "Haute"
        },
        {
            name: "Séverine Dellanegra",
            category: "elus-opp",
            stance: "opposed",
            role: "Maire de Saint-Martin-de-Crau",
            position: "Opposée à la DUP, souligne l'impact désastreux sur la biodiversité de la Crau.",
            evidence: "Rejet institutionnel formel du projet par la mairie.",
            certainty: "Haute"
        },
        {
            name: "Emmanuel Taché",
            category: "elus-opp",
            stance: "opposed",
            role: "Député RN",
            position: "S'oppose au projet et alerte sur le risque de création d'une ZAD.",
            evidence: "Intervention législative et relais d'alertes sécuritaires.",
            certainty: "Haute"
        },
        {
            name: "France Chimie Méditerranée",
            category: "porteurs",
            stance: "favorable",
            role: "Syndicat professionnel",
            position: "Soutient la ligne pour sécuriser la décarbonation industrielle de Fos-sur-Mer.",
            evidence: "Défense des intérêts électriques de la ZIP de Fos.",
            certainty: "Haute"
        },
        {
            name: "Jean-Laurent Lucchesi",
            category: "opposants",
            stance: "opposed",
            role: "Biologiste (Vigueirat Nature, FNE13)",
            position: "Figure centrale côté biodiversité : avifaune, Camargue, couloirs migratoires, alternative sous-marine.",
            evidence: "Apport d'expertise technique et environnementale au collectif.",
            certainty: "Haute"
        },
        {
            name: "Guillaume Meiffre",
            category: "opposants",
            stance: "opposed",
            role: "Oléiculteur / Coprésident ASTCC",
            position: "Évoque une résistance plus dure et une possible ZAD si le projet avance en force.",
            evidence: "Menace de durcissement des actions sur le terrain.",
            certainty: "Haute"
        },
        {
            name: "Carole Guintoli",
            category: "opposants",
            stance: "opposed",
            role: "Rizicultrice bio en Camargue",
            position: "Associée aux prises de position contre le projet aérien au nom des terres agricoles.",
            evidence: "Membre active de l'association de sauvegarde des terres.",
            certainty: "Haute"
        },
        {
            name: "Cyril Marès",
            category: "opposants",
            stance: "opposed",
            role: "Président de la COPA 30 et AOC Costières de Nîmes",
            position: "Porte une opposition agricole et viticole ; appelle à une union agriculteurs/écologistes/élus.",
            evidence: "Stratégie de convergence des luttes locales.",
            certainty: "Haute"
        },
        {
            name: "Sébastien Mabile",
            category: "opposants",
            stance: "opposed",
            role: "Avocat en droit de l'environnement",
            position: "Structure la bataille juridique et les futurs recours administratifs contre le projet aérien.",
            evidence: "Cofondateur de la stratégie juridique du collectif THT 13/30.",
            certainty: "Haute"
        },
        {
            name: "Luc Perrin",
            category: "opposants",
            stance: "opposed",
            role: "Président de l'ASTA",
            position: "Défend l'enfouissement et alerte sur les impacts oiseaux et territoires gardois (Terre d'Argence).",
            evidence: "Représentant majeur de la contestation gardoise.",
            certainty: "Haute"
        },
        {
            name: "Michel Perronet",
            category: "opposants",
            stance: "opposed",
            role: "Ingénieur retraité",
            position: "Appui technique des opposants ; contribue à consolider l'alternative enfouie / ensouillée.",
            evidence: "Fournit les contre-expertises techniques face à RTE.",
            certainty: "Haute"
        },
        {
            name: "Clément Lajoux",
            category: "opposants",
            stance: "opposed",
            role: "Porte-parole COPA 13",
            position: "Rappelle que les agriculteurs ne refusent pas la décarbonation, mais uniquement les pylônes.",
            evidence: "Soutien syndical agricole clair à l'enfouissement.",
            certainty: "Haute"
        },
        {
            name: "Romain, Anne et François Collard",
            category: "opposants",
            stance: "opposed",
            role: "Vignerons (Domaine Mourgues du Grès)",
            position: "Refusent que les terres viticoles soient sacrifiées et alertent sur les impacts agrotouristiques.",
            evidence: "Mobilisation de la filière viticole des Costières de Nîmes.",
            certainty: "Haute"
        },
        {
            name: "Rémy Benson",
            category: "opposants",
            stance: "opposed",
            role: "Éleveur (Coordination rurale)",
            position: "Défend la transmission des exploitations sans les contraintes de pylônes.",
            evidence: "Implication syndicale pour la préservation du foin de Crau.",
            certainty: "Haute"
        },
        {
            name: "Daniel Carlotti",
            category: "opposants",
            stance: "opposed",
            role: "Riziculteur",
            position: "Concerné par l'implantation potentielle de pylônes, défend l'existence d'alternatives.",
            evidence: "Opposition foncière directe.",
            certainty: "Haute"
        },
        {
            name: "Isabelle Gex",
            category: "opposants",
            stance: "opposed",
            role: "Membre Collectif THT 13/30",
            position: "Répond à l'argument du coût soulevé par RTE en mettant en avant la volonté politique de l'État.",
            evidence: "Déconstruction publique des arguments budgétaires.",
            certainty: "Haute"
        },
        {
            name: "Laura Baudino",
            category: "opposants",
            stance: "opposed",
            role: "Directrice de crèche / Arlésienne",
            position: "Défend le patrimoine culturel, les paysages et l'emploi face à la ligne THT.",
            evidence: "Mobilisation symbolique et culturelle forte (costume traditionnel).",
            certainty: "Haute"
        },
        {
            name: "François Cavallo",
            category: "opposants",
            stance: "opposed",
            role: "Expert NACICCA / FNE13",
            position: "Porte l'argumentaire avifaune avec les comptages d'oiseaux et espèces protégées.",
            evidence: "Production de données naturalistes de terrain.",
            certainty: "Haute"
        },
        {
            name: "Jean-Claude Cheinet",
            category: "opposants",
            stance: "neutral",
            role: "Ancien élu / acteur local",
            position: "Ne rejette pas la décarbonation mais critique les zones d'ombre, l'État et le manque d'infrastructures.",
            evidence: "Critique constructive sur le déficit global d'aménagement.",
            certainty: "Moyenne"
        },
        {
            name: "Daniel Moutet",
            category: "opposants",
            stance: "neutral",
            role: "Président ADPLGF",
            position: "Critique le débat global Fos-Berre et le risque de dilution des sujets (hydrogène, THT, etc.).",
            evidence: "Dénonce la méthodologie de concertation globale.",
            certainty: "Haute"
        },
        {
            name: "Marie-Hélène Fabre",
            category: "opposants",
            stance: "opposed",
            role: "Responsable ACEN",
            position: "Critique le contournement autoroutier d'Arles et envisage une action juridique sur la concertation.",
            evidence: "Rapprochement des luttes d'infrastructures locales.",
            certainty: "Moyenne"
        },
        {
            name: "Cyril Girard",
            category: "opposants",
            stance: "opposed",
            role: "Élu municipal d'opposition (Arles)",
            position: "Critique les grands projets d'infrastructures, notamment le contournement d'Arles et la THT.",
            evidence: "Opposition politique aux projets d'aménagement massifs.",
            certainty: "Haute"
        },
        {
            name: "Richard Hardouin",
            category: "orgs",
            stance: "opposed",
            role: "Président de FNE13",
            position: "Figure structurante de la fédération environnementale, très impliquée dans le dossier THT.",
            evidence: "Engagement direct de l'ONG dans la lutte.",
            certainty: "Haute"
        },
        {
            name: "Stéphane Coppey",
            category: "opposants",
            stance: "opposed",
            role: "Délégué juridique FNE13",
            position: "Acteur des actions contentieuses et environnementales contre RTE.",
            evidence: "Expertise contentieuse contre les documents d'urbanisme.",
            certainty: "Haute"
        },
        {
            name: "Isabelle Charnoz",
            category: "elus-opp",
            stance: "opposed",
            role: "Adjointe à Saint-Martin-de-Crau",
            position: "Engagée dans la protection de l'environnement et associée à la mobilisation anti-THT.",
            evidence: "Soutien municipal actif à l'opposition.",
            certainty: "Haute"
        },
        {
            name: "Juan Martinez",
            category: "elus-opp",
            stance: "opposed",
            role: "Maire de Bellegarde, Pdt CC Terre d'Argence",
            position: "Refuse que la Terre d'Argence, la Camargue et la Crau soient balafrées.",
            evidence: "Opposition frontale du bloc institutionnel gardois.",
            certainty: "Haute"
        },
        {
            name: "Bertrand Mazel",
            category: "elus-opp",
            stance: "opposed",
            role: "Adjoint au maire d'Arles",
            position: "Relaie la proposition de Michel Barnier comme tiers facilitateur neutre.",
            evidence: "Tentative de médiation politique de haut niveau.",
            certainty: "Haute"
        },
        {
            name: "Carole Delga",
            category: "elus-opp",
            stance: "opposed",
            role: "Présidente de la Région Occitanie",
            position: "Soutien régional contre le projet aérien tel que validé par l'État.",
            evidence: "Opposition de la région voisine impactée.",
            certainty: "Haute"
        },
        {
            name: "Nicolas Koukas",
            category: "elus-opp",
            stance: "neutral",
            role: "Élu d'opposition PCF (Arles)",
            position: "Favorable à l'enfouissement technique, mais critique surtout la gouvernance municipale actuelle.",
            evidence: "Critique politique de l'exécutif arlésien.",
            certainty: "Moyenne"
        },
        {
            name: "René Raimondi",
            category: "elus-fav",
            stance: "favorable",
            role: "Maire de Fos-sur-Mer",
            position: "Favorable à la réindustrialisation de Fos ; critique le débat jugé à charge par les opposants.",
            evidence: "Défenseur des intérêts de la ZIP et de l'industrie.",
            certainty: "Haute"
        },
        {
            name: "Georges-François Leclerc",
            category: "elus-fav",
            stance: "favorable",
            role: "Préfet de région PACA",
            position: "Cadre le débat public et la décision ; perçu par certains opposants comme pro-aérien.",
            evidence: "Représentation de l'autorité décisionnelle étatique.",
            certainty: "Haute"
        },
        {
            name: "Christophe Mirmand",
            category: "elus-fav",
            stance: "neutral",
            role: "Ancien préfet de région",
            position: "À l'origine de la saisine de la CNDP et de l'organisation du débat global Fos-Berre.",
            evidence: "Auteur de l'architecture initiale du débat public.",
            certainty: "Haute"
        },
        {
            name: "Jérôme Bonet",
            category: "elus-fav",
            stance: "neutral",
            role: "Préfet du Gard",
            position: "Acteur décisionnaire sur le volet gardois du tracé (Jonquières / Bellegarde).",
            evidence: "Autorité de tutelle départementale associée.",
            certainty: "Haute"
        },
        {
            name: "Jacques Witkowski",
            category: "elus-fav",
            stance: "neutral",
            role: "Nouveau préfet de région PACA",
            position: "Hérite du dossier administratif et des arbitrages sur la DUP.",
            evidence: "Garant de la continuité de l'État sur le dossier.",
            certainty: "Haute"
        },
        {
            name: "Gilles Odone",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur délégué RTE Méditerranée",
            position: "Défend l'urgence des besoins électriques et l'impossibilité de tenir les délais avec un enfouissement.",
            evidence: "Porte-parole principal de RTE sur les contraintes calendaires.",
            certainty: "Haute"
        },
        {
            name: "Vincent Fletin & Arthur Audouard",
            category: "porteurs",
            stance: "favorable",
            role: "Experts nationaux RTE",
            position: "Portent l'argumentaire technique de RTE en réunion publique sur le 400 kV.",
            evidence: "Expertise technique déployée face aux collectifs.",
            certainty: "Haute"
        },
        {
            name: "Emmanuel Macron",
            category: "elus-fav",
            stance: "favorable",
            role: "Président de la République",
            position: "Soutient la ligne, jugée nécessaire pour donner de la visibilité aux industriels.",
            evidence: "Cadrage politique national en faveur de l'accélération.",
            certainty: "Haute"
        },
        {
            name: "État / gouvernement",
            category: "elus-fav",
            stance: "favorable",
            role: "Appareil d'État",
            position: "Engage l'instruction de la DUP et cadre les arbitrages de réindustrialisation.",
            evidence: "Garant de l'objectif souverain de décarbonation.",
            certainty: "Haute"
        },
        {
            name: "Provence Fabrique des Possibles",
            category: "porteurs",
            stance: "favorable",
            role: "Collectif industriel",
            position: "Soutient la ligne comme condition sine qua non des investissements sur Fos-Berre.",
            evidence: "Lobbying industriel régional pro-infrastructure.",
            certainty: "Haute"
        },
        {
            name: "Jean-Luc Chauvin",
            category: "porteurs",
            stance: "favorable",
            role: "Président de la CCI Aix-Marseille",
            position: "Défend la ligne au nom de la souveraineté et de la sécurité d'approvisionnement.",
            evidence: "Représentation du monde patronal régional.",
            certainty: "Haute"
        },
        {
            name: "Grand Port Maritime de Marseille-Fos",
            category: "porteurs",
            stance: "favorable",
            role: "Maître d'ouvrage portuaire",
            position: "Acteur central de la ZIP, aménageur foncier nécessitant une forte puissance électrique.",
            evidence: "Bénéficiaire final essentiel de l'alimentation électrique.",
            certainty: "Haute"
        },
        {
            name: "Rémi Costantino",
            category: "porteurs",
            stance: "favorable",
            role: "DGA du GPMM",
            position: "Défend le desserrement foncier et la recherche de fonciers disponibles pour l'industrie.",
            evidence: "Prises de parole sur la gestion des espaces industriels.",
            certainty: "Haute"
        },
        {
            name: "Régis Passerieux",
            category: "elus-fav",
            stance: "neutral",
            role: "Commissaire à la transition",
            position: "Coordonne la transition industrielle, écologique et énergétique de Fos-Berre.",
            evidence: "Acteur de liaison entre l'État et le territoire.",
            certainty: "Haute"
        },
        {
            name: "NGE / Jean Bernadet",
            category: "porteurs",
            stance: "favorable",
            role: "Groupe de BTP / Président",
            position: "Soutient fortement la ligne et estime paradoxalement que l'enfouissement causerait davantage de dégâts.",
            evidence: "Avis technique d'un acteur majeur des travaux publics.",
            certainty: "Haute"
        },
        {
            name: "Marc Petit",
            category: "opposants",
            stance: "neutral",
            role: "Professeur CentraleSupélec",
            position: "Auteur de la tierce expertise. Valide l'alternative enfouie du collectif tout en reconnaissant les avantages techniques RTE.",
            evidence: "Rapport d'expertise indépendante versé au débat.",
            certainty: "Haute"
        },
        {
            name: "FNE13",
            category: "orgs",
            stance: "opposed",
            role: "Fédération environnementale",
            position: "Pilier du Collectif THT 13/30, apporte le relais juridique et d'expertise environnementale.",
            evidence: "Porteur d'actions contentieuses et de contre-études.",
            certainty: "Haute"
        },
        {
            name: "Sauvegarde terres Camargue-Crau",
            category: "orgs",
            stance: "opposed",
            role: "Association agricole",
            position: "Fondée par les exploitants impactés, mot d'ordre strict : zéro pylône.",
            evidence: "Fronde foncière de la profession agricole locale.",
            certainty: "Haute"
        },
        {
            name: "ASTA",
            category: "orgs",
            stance: "opposed",
            role: "Association gardoise",
            position: "Structure l'opposition côté Gard (Beaucaire / Bellegarde) et Terre d'Argence.",
            evidence: "Mobilisation citoyenne du côté Occitanie.",
            certainty: "Haute"
        },
        {
            name: "Acteurs de la Biodiversité (LPO, Tour du Valat, CEN PACA, WWF)",
            category: "orgs",
            stance: "opposed",
            role: "Réseau scientifique et ONG",
            position: "Alertent massivement sur les oiseaux migrateurs (Aigle de Bonelli, Ganga cata) et l'impact sur les zones humides.",
            evidence: "Production d'inventaires naturalistes critiques.",
            certainty: "Haute"
        },
        {
            name: "Syndicats Agricoles (COPA 13, COPA 30, FDSEA, CR)",
            category: "orgs",
            stance: "opposed",
            role: "Organisations professionnelles",
            position: "S'opposent unanimement au tracé aérien détruisant les paysages (AOC Costières) et les filières (Foin de Crau, Riz).",
            evidence: "Communiqués inter-syndicaux et blocages annoncés.",
            certainty: "Haute"
        },
        {
            name: "Industriels de Fos (GravitHy, Carbon, H2V, ArcelorMittal)",
            category: "porteurs",
            stance: "favorable",
            role: "Bénéficiaires industriels",
            position: "Justifient la ligne THT par leurs immenses besoins électriques liés aux process de décarbonation et d'hydrogène.",
            evidence: "Plans d'investissements conditionnés à l'énergie.",
            certainty: "Haute"
        },
        {
            name: "CNDP & Présidence du débat public",
            category: "orgs",
            stance: "neutral",
            role: "Instances de concertation",
            position: "Organisent le débat global Fos-Berre, rappelant que l'exercice est consultatif et non référendaire.",
            evidence: "Cadrage de la méthodologie de participation du public.",
            certainty: "Haute"
        }
    ],
    griefs: [
        {
            title: "🦅 Impact majeur sur la biodiversité",
            text: "Crainte documentée (Tour du Valat, LPO, CEN) de destruction d'habitats et de couloirs migratoires vitaux pour l'avifaune (Aigle de Bonelli, Ganga cata) sur les espaces protégés de Camargue et de Crau."
        },
        {
            title: "🌾 Sacrifice des terres agricoles",
            text: "Fronde unanime des syndicats (COPA, FDSEA) et AOC face à la perte foncière, paysagère et économique induite par les pylônes (Foin de Crau, Riz de Camargue, Vignes des Costières)."
        },
        {
            title: "⚡ Refus systématique de l'enfouissement",
            text: "Le collectif dénonce la posture de RTE qui rejette l'option enfouie/sous-marine sous prétexte de surcoûts et de délais (argument démonté par la tierce expertise de M. Petit)."
        },
        {
            title: "⚖️ Gouvernance et passage en force",
            text: "Les élus et riverains dénoncent une DUP expéditive pilotée par l'État, ignorant l'opposition territoriale sous couvert d'urgence industrielle nationale."
        },
        {
            title: "🏭 Effets cumulés sur Fos-Berre",
            text: "Inquiétude face à la méthode de concertation globale noyant le projet THT au milieu d'autres méga-projets (GravitHy, H2V), brouillant l'évaluation environnementale."
        }
    ],
    vigilance: [
        "<strong>Menace de radicalisation (ZAD) :</strong> Plusieurs acteurs agricoles (G. Meiffre) et élus (E. Taché) alertent publiquement sur le risque de création d'une ZAD si le passage en force de l'État se confirme, illustrant l'impasse du dialogue local.",
        "<strong>Front institutionnel inédit :</strong> Le dossier réunit une alliance rare entre monde agricole (syndicats de tous bords), écologistes (FNE, LPO) et élus locaux (Arles, St-Martin, Gard, Région Occitanie) contre RTE et l'État.",
        "<strong>Le paradoxe de la décarbonation :</strong> La THT met en lumière la contradiction entre la volonté nationale de décarboner l'industrie lourde (Fos) et les destructions écologiques directes (Camargue/Crau) que nécessitent ces nouvelles infrastructures électriques.",
        "<strong>Recours juridiques européens :</strong> La stratégie des opposants (Me Mabile, FNE13) vise ouvertement une saisine des instances internationales (Conventions de Berne et Ramsar) s'appuyant sur les propres notes d'alerte de la DREAL."
    ],
    sources: [
        "<strong>La Provence :</strong> Source locale majeure sur Arles, Camargue, élus, associations et projets industriels.",
        "<strong>Objectif Gard :</strong> Source très présente sur Terre d'Argence, Beaucaire, et la contestation gardoise.",
        "<strong>La Marseillaise :</strong> Source axée sur la réindustrialisation, les débats sociaux de Fos-Berre et les critiques locales.",
        "<strong>France 3 / Franceinfo :</strong> Relais national-régional sur la biodiversité, la mobilisation agricole et les oppositions.",
        "<strong>FNE13.fr :</strong> Source militante détaillant la tierce expertise, les recours juridiques et l'argumentaire biodiversité.",
        "<strong>Marsactu :</strong> Média d'investigation critique sur RTE, les espèces protégées et les controverses de gouvernance.",
        "<strong>Tourduvalat.org :</strong> Référence scientifique centrale sur la préservation des zones humides, tourbières et oiseaux de Camargue."
    ]
};
