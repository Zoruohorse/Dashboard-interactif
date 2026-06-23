// Base de données unifiée du projet - Générée automatiquement
const projectData = {
    meta: {
        title: "Cartographie Interactive — Ligne THT Amiens – Petit-Caux",
        subtitle: "Projet de nouvelle ligne électrique 400 kV porté par RTE pour relier l'EPR2 de Penly et les parcs éoliens au réseau national. Le tracé suscite une forte opposition locale, notamment face à la traversée de la forêt d'Eu et aux impacts agricoles et paysagers."
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
            name: "Stop THT 76-80",
            category: "orgs",
            stance: "opposed",
            role: "Association / collectif citoyen",
            position: "Principal mouvement opposé au projet ; organise les mobilisations et envisage des recours juridiques.",
            evidence: "Centralise la contestation locale contre les impacts environnementaux et paysagers.",
            certainty: "Haute"
        },
        {
            name: "Associations nationales de défense de l’environnement",
            category: "orgs",
            stance: "opposed",
            role: "Réseau associatif",
            position: "Soutien annoncé à Stop THT 76-80, bien qu'aucune organisation nationale ne soit nommément identifiée.",
            evidence: "Apportent une légitimité nationale à la lutte locale.",
            certainty: "Moyenne"
        },
        {
            name: "Sylvain Finet",
            category: "opposants",
            stance: "opposed",
            role: "Président de Stop THT 76-80",
            position: "Conteste la justification énergétique du projet, ses impacts environnementaux et annonce des recours juridiques.",
            evidence: "Figure de proue de l'opposition associative.",
            certainty: "Haute"
        },
        {
            name: "Francine Adam",
            category: "opposants",
            stance: "opposed",
            role: "Riveraine de Touffreville-sur-Eu",
            position: "Opposée au passage de la ligne près de son habitation, dénonce la perte de valeur immobilière et l’abattage d’arbres.",
            evidence: "Témoignage direct sur la dégradation du cadre de vie.",
            certainty: "Haute"
        },
        {
            name: "José Adam",
            category: "opposants",
            stance: "opposed",
            role: "Riverain de Touffreville-sur-Eu",
            position: "Opposé au projet, refuse la ligne de manière ferme.",
            evidence: "Témoignage d'opposition locale directe.",
            certainty: "Haute"
        },
        {
            name: "Mathieu Massy",
            category: "opposants",
            stance: "opposed",
            role: "Agriculteur",
            position: "Opposé au projet sur son exploitation ; refuse les implantations de pylônes sur ses terres.",
            evidence: "Représente la fronde des exploitants directement impactés.",
            certainty: "Haute"
        },
        {
            name: "Reynald Massy",
            category: "opposants",
            stance: "opposed",
            role: "Éleveur",
            position: "Craint les impacts sur l’élevage et la suppression d’un bosquet protecteur.",
            evidence: "Inquiétudes liées au bien-être animal et à l'écosystème local.",
            certainty: "Haute"
        },
        {
            name: "Christine Rodier",
            category: "elus-opp",
            stance: "opposed",
            role: "Maire de Millebosc",
            position: "Opposée au tracé traversant la forêt d’Eu et critique fermement la destruction forestière induite.",
            evidence: "Opposition municipale officielle justifiée par la défense du patrimoine naturel.",
            certainty: "Haute"
        },
        {
            name: "Rollon Mouchel-Blaisot",
            category: "elus-fav",
            stance: "favorable",
            role: "Préfet de la Somme",
            position: "Position institutionnelle ; reconnaît les nuisances mais défend le projet comme une nécessité nationale.",
            evidence: "Assume le portage de l'intérêt supérieur de l'État.",
            certainty: "Haute"
        },
        {
            name: "Emmanuel Moulard",
            category: "elus-fav",
            stance: "neutral",
            role: "Secrétaire général de la préfecture de la Somme",
            position: "Présente les dispositifs d’accompagnement et d’indemnisation.",
            evidence: "Gère le volet administratif et compensatoire du dossier.",
            certainty: "Haute"
        },
        {
            name: "Maire de Touffreville-sur-Eu",
            category: "elus-fav",
            stance: "neutral",
            role: "Édile local",
            position: "Cité lors de visites de RTE, sans position tranchée publiquement exprimée dans le corpus.",
            evidence: "Présence institutionnelle sans prise de position explicite.",
            certainty: "Faible"
        },
        {
            name: "FDSEA 80",
            category: "orgs",
            stance: "neutral",
            role: "Syndicat agricole (Somme)",
            position: "Défend les agriculteurs concernés ; exige une meilleure indemnisation sans s'opposer frontalement au principe de la ligne.",
            evidence: "Pression syndicale ciblée sur les compensations financières.",
            certainty: "Haute"
        },
        {
            name: "FDSEA Seine-Maritime",
            category: "orgs",
            stance: "neutral",
            role: "Syndicat agricole (Seine-Maritime)",
            position: "Impliqué activement dans les négociations avec RTE sur les compensations liées aux servitudes.",
            evidence: "Défense des intérêts fonciers des exploitants.",
            certainty: "Haute"
        },
        {
            name: "JA 80",
            category: "orgs",
            stance: "neutral",
            role: "Jeunes Agriculteurs (Somme)",
            position: "Contestent vivement les barèmes de compensations proposés pour la perte de valeur des terres.",
            evidence: "Alerte sur la pérennité économique des jeunes exploitations.",
            certainty: "Haute"
        },
        {
            name: "FNSEA 76",
            category: "orgs",
            stance: "neutral",
            role: "Syndicat agricole majoritaire",
            position: "Revendique une bien meilleure prise en compte des préjudices d'exploitation.",
            evidence: "Relais institutionnel de la grogne des propriétaires terriens.",
            certainty: "Haute"
        },
        {
            name: "Chambre d’agriculture de la Somme",
            category: "orgs",
            stance: "neutral",
            role: "Institution consulaire",
            position: "Partie prenante des discussions officielles et garant de la défense des intérêts agricoles.",
            evidence: "Cadre de négociation institutionnelle.",
            certainty: "Haute"
        },
        {
            name: "Propriétaires ruraux / PPR",
            category: "orgs",
            stance: "neutral",
            role: "Organisation foncière",
            position: "Représente les intérêts des propriétaires terriens dans les négociations sur les servitudes et la perte de chance économique.",
            evidence: "Défense de la valeur du capital foncier.",
            certainty: "Haute"
        },
        {
            name: "CGB 80",
            category: "orgs",
            stance: "neutral",
            role: "Syndicat betteravier",
            position: "Intervient sur les impacts logistiques lourds (engins agricoles) et les contraintes d’exploitation créées par les pylônes.",
            evidence: "Point de vigilance technique et logistique agricole.",
            certainty: "Haute"
        },
        {
            name: "RTE",
            category: "porteurs",
            stance: "favorable",
            role: "Gestionnaire du réseau de transport",
            position: "Porteur principal, défend le projet comme indispensable à la transition énergétique et au raccordement (EPR2, éolien).",
            evidence: "Maître d'ouvrage défendant l'utilité publique de la ligne.",
            certainty: "Haute"
        },
        {
            name: "Enedis",
            category: "porteurs",
            stance: "neutral",
            role: "Gestionnaire du réseau de distribution",
            position: "Co-porteur technique de certaines infrastructures de distribution associées au projet global.",
            evidence: "Partenaire technique du réseau.",
            certainty: "Haute"
        },
        {
            name: "EDF",
            category: "porteurs",
            stance: "favorable",
            role: "Groupe énergétique",
            position: "Maison mère de RTE et opérateur des réacteurs (EPR2 Penly), bénéficiaire indirect de l'infrastructure.",
            evidence: "Lien structurel avec les besoins de raccordement nucléaire.",
            certainty: "Haute"
        },
        {
            name: "Préfecture de la Somme",
            category: "orgs",
            stance: "neutral",
            role: "Représentation de l'État",
            position: "Assure le pilotage administratif et encadre le volet indemnitaire du dossier.",
            evidence: "Instance de régulation et de validation des DUP.",
            certainty: "Haute"
        },
        {
            name: "Préfecture de Seine-Maritime",
            category: "orgs",
            stance: "neutral",
            role: "Représentation de l'État",
            position: "Pilote les procédures administratives liées à l'implantation du projet sur son département.",
            evidence: "Cadrage légal et administratif.",
            certainty: "Haute"
        },
        {
            name: "Autorité environnementale",
            category: "orgs",
            stance: "neutral",
            role: "Instance de contrôle",
            position: "Chargée d’émettre un avis environnemental indépendant sur les destructions et mesures compensatoires.",
            evidence: "Acteur clé dans l'évaluation des impacts sur la Forêt d'Eu.",
            certainty: "Haute"
        },
        {
            name: "Commission indépendante d’indemnisation",
            category: "orgs",
            stance: "neutral",
            role: "Instance d'évaluation",
            position: "Chargée d’évaluer objectivement les préjudices fonciers et agricoles liés à l'implantation des pylônes.",
            evidence: "Arbitre des tensions financières entre RTE et les syndicats.",
            certainty: "Haute"
        },
        {
            name: "CNDP",
            category: "orgs",
            stance: "neutral",
            role: "Commission nationale du débat public",
            position: "Garante de l'organisation et de la transparence de la concertation publique préalable.",
            evidence: "Encadre le recueil des avis citoyens.",
            certainty: "Haute"
        },
        {
            name: "Commission d’enquête publique",
            category: "orgs",
            stance: "neutral",
            role: "Instance de consultation",
            position: "Chargée de recueillir formellement les avis du public et d'émettre un rapport de synthèse.",
            evidence: "Validation juridique et démocratique de l'étude d'impact.",
            certainty: "Haute"
        },
        {
            name: "Cyril Wagner",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur adjoint ingénierie RTE Hauts-de-France",
            position: "Défend le caractère absolument indispensable du projet face à l'obsolescence du réseau ou aux nouveaux besoins.",
            evidence: "Porte-parole technique rassurant sur l'utilité du projet.",
            certainty: "Haute"
        },
        {
            name: "Eiffage",
            category: "porteurs",
            stance: "neutral",
            role: "Groupe de travaux publics",
            position: "Entreprise mentionnée par des opposants dans le cadre des chantiers préparatoires ou travaux associés.",
            evidence: "Cité comme sous-traitant opérationnel.",
            certainty: "Faible"
        }
    ],
    griefs: [
        {
            title: "🌲 Déforestation et biodiversité",
            text: "Crainte majeure liée à la destruction annoncée de plusieurs hectares de la Forêt d’Eu (coupe d’arbres centenaires) et à l'atteinte globale aux espaces naturels protégés."
        },
        {
            title: "🦅 Menace sur le Busard cendré",
            text: "Espèce protégée régulièrement citée dans les inquiétudes environnementales ; la gravité de cet impact est toutefois contestée par les études de RTE."
        },
        {
            title: "🏗️ Artificialisation et paysage",
            text: "Rejet de l'implantation de pylônes de très grande hauteur (400 kV) venant balafrer des secteurs ruraux et forestiers préservés."
        },
        {
            title: "🏡 Dégradation du cadre de vie",
            text: "Alerte des riverains sur les nuisances visuelles, la trop grande proximité des habitations et la pollution électromagnétique redoutée."
        },
        {
            title: "📉 Dévalorisation immobilière",
            text: "Crainte prégnante chez les propriétaires riverains (comme Francine Adam) d'une décote sévère de la valeur de leurs biens immobiliers."
        },
        {
            title: "🚜 Lourds impacts agricoles",
            text: "Dénonciation par les syndicats des contraintes de circulation pour les engins (CGB), de la perte de productivité et des atteintes directes aux exploitations familiales."
        },
        {
            title: "💶 Insuffisance des indemnisations",
            text: "Contestation forte des barèmes proposés par RTE, jugés dérisoires face à la perte de chance économique et foncière (PPR, FDSEA)."
        },
        {
            title: "⚡ Justification énergétique contestée",
            text: "Certains opposants estiment que les besoins avancés par RTE (sécurisation, EPR2) ne sont pas solidement démontrés ou qu'ils justifient d'autres alternatives (enfouissement)."
        },
        {
            title: "🗣️ Déficit de concertation",
            text: "Le collectif Stop THT 76-80 critique vivement un processus de décision biaisé où les tracés alternatifs n'ont pas été sincèrement étudiés."
        },
        {
            title: "⚖️ Sentiment de sacrifice territorial",
            text: "Les opposants dénoncent un projet où les territoires ruraux traversés (Somme, Seine-Maritime) subissent toutes les nuisances au nom d'un intérêt national centralisé sans retombées locales."
        }
    ],
    vigilance: [
        "<strong>Tensions sur l'indemnisation agricole :</strong> Le front agricole ne s'oppose pas systématiquement au projet par idéologie, mais livre une bataille acharnée sur les protocoles d'indemnisation. Une rupture des négociations avec la FDSEA ou les JA pourrait radicaliser ce pan de l'opposition.",
        "<strong>Symbole de la Forêt d'Eu :</strong> L'abattage d'arbres matures en zone forestière (Forêt d'Eu) cristallise l'émotion locale et municipale (Mairie de Millebosc) et offre un terrain fertile pour un éventuel recours basé sur la destruction d'espèces protégées (Busard cendré).",
        "<strong>Gouvernance imposée (EPR2) :</strong> Le rattachement du projet aux besoins de sécurisation de l'EPR2 de Penly et des parcs éoliens l'inscrit dans une urgence d'État (loi d'accélération). Les opposants dénoncent un passage en force qui limite de fait l'impact de l'enquête publique.",
        "<strong>Revendication d'enfouissement :</strong> Comme dans d'autres dossiers THT récents, la fracture porte moins sur la nécessité de transporter l'électricité que sur le refus obstiné de RTE d'envisager des solutions d'enfouissement, systématiquement rejetées pour des raisons de coût et de délai."
    ],
    sources: [
        "<strong>ICI Normandie / Radio France :</strong> Média public régional ; information générale et recueil de témoignages d'opposants et d'élus.",
        "<strong>Le Parisien :</strong> Quotidien national ; reportage terrain mettant en lumière la contestation des riverains.",
        "<strong>Actu.fr :</strong> Réseau de médias locaux ; relais des témoignages de riverains et des actions du collectif Stop THT.",
        "<strong>Courrier Picard :</strong> Quotidien régional ; couverture approfondie des enjeux syndicaux et de la grogne agricole.",
        "<strong>Action Agricole Picarde :</strong> Presse professionnelle ; suivi technique des négociations sur les servitudes et indemnisations.",
        "<strong>RTE France :</strong> Source institutionnelle ; présentation officielle du projet, du tracé et des justifications techniques.",
        "<strong>CNDP source :</strong> Source institutionnelle ; documents et bilans liés à la phase de concertation publique.",
        "<strong>Google News & Curebot :</strong> Agrégateurs documentaires utilisés pour compiler et croiser la revue de presse locale et nationale."
    ]
};
