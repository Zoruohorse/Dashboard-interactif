// Base de données unifiée du projet - Générée automatiquement
const projectData = {
    meta: {
        title: "Cartographie Interactive — Interconnexion France–Espagne",
        subtitle: "Projet d’interconnexion électrique sous-marine et souterraine entre la France et l'Espagne via le Golfe de Gascogne. Soutenu par l'Union européenne, il affronte une vive opposition sur les impacts marins, la sécurité de la flotte et le respect du droit environnemental."
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
            role: "Gestionnaire français du réseau de transport d’électricité",
            position: "Porteur français du projet ; favorable.",
            evidence: "Défend un projet stratégique pour la transition énergétique, la sécurité d’approvisionnement et l’intégration des renouvelables.",
            certainty: "Haute"
        },
        {
            name: "Red Eléctrica",
            category: "porteurs",
            stance: "favorable",
            role: "Gestionnaire espagnol du réseau",
            position: "Co-porteur du projet ; favorable.",
            evidence: "Défend les bénéfices énergétiques, économiques et climatiques du projet.",
            certainty: "Haute"
        },
        {
            name: "Inelfe",
            category: "porteurs",
            stance: "favorable",
            role: "Coentreprise RTE / Red Eléctrica",
            position: "Maîtrise d’ouvrage transfrontalière.",
            evidence: "Porte le développement de l’interconnexion.",
            certainty: "Haute"
        },
        {
            name: "Union européenne / CINEA",
            category: "orgs",
            stance: "favorable",
            role: "Institution européenne et financeur",
            position: "Soutien institutionnel et financier.",
            evidence: "Considère le projet comme d’intérêt commun européen.",
            certainty: "Haute"
        },
        {
            name: "Banque européenne d’investissement (BEI)",
            category: "orgs",
            stance: "favorable",
            role: "Institution financière européenne",
            position: "Financeur majeur.",
            evidence: "Soutien financier de 1,6 Md€.",
            certainty: "Haute"
        },
        {
            name: "Prysmian PowerLink (PPL)",
            category: "porteurs",
            stance: "neutral",
            role: "Entreprise industrielle",
            position: "Prestataire technique.",
            evidence: "Pose des câbles sous-marins.",
            certainty: "Haute"
        },
        {
            name: "NKT",
            category: "porteurs",
            stance: "neutral",
            role: "Entreprise industrielle",
            position: "Prestataire technique.",
            evidence: "Pose des câbles sous-marins.",
            certainty: "Haute"
        },
        {
            name: "Van Laar",
            category: "porteurs",
            stance: "neutral",
            role: "Armateur néerlandais",
            position: "Prestataire contesté.",
            evidence: "Fourniture de navires de surveillance ; contesté par la CGT pour des questions de sécurité.",
            certainty: "Haute"
        },
        {
            name: "Marie Darzacq",
            category: "opposants",
            stance: "opposed",
            role: "Présidente de StopTHT40 et LAE",
            position: "Opposée au projet et à son tracé actuel ; critique les procédures environnementales et la concertation.",
            evidence: "« La justice sera le seul rempart qui pourra freiner les abus de pouvoir de l’État »",
            certainty: "Haute"
        },
        {
            name: "Lamya Essemlali",
            category: "opposants",
            stance: "opposed",
            role: "Présidente de Sea Shepherd France",
            position: "Critique du projet au nom de la protection du vivant.",
            evidence: "Le projet participe selon elle à une logique consistant à « sacrifier le vivant au nom de la lutte contre le réchauffement climatique ».",
            certainty: "Haute"
        },
        {
            name: "Paul Watson",
            category: "opposants",
            stance: "opposed",
            role: "Fondateur de Sea Shepherd",
            position: "Soutien aux opposants ; critique environnementale générale.",
            evidence: "Participation à une conférence organisée par StopTHT40 ; déclaration critique sur l’impact humain sur la planète.",
            certainty: "Haute"
        },
        {
            name: "Marc Mortelmans",
            category: "opposants",
            stance: "opposed",
            role: "Journaliste et conférencier",
            position: "Présent lors d’événements d’opposition.",
            evidence: "Cité aux côtés de Marie Darzacq lors d’une conférence d’opposition.",
            certainty: "Faible"
        },
        {
            name: "CGT (représentants au CSMM)",
            category: "orgs",
            stance: "opposed",
            role: "Représentants syndicaux",
            position: "Critique la sécurité maritime associée au chantier.",
            evidence: "Demande le retrait des navires de Van Laar et dénonce une flotte « totalement en dehors des règles de la sécurité maritime ».",
            certainty: "Haute"
        },
        {
            name: "Françoise Tahéri",
            category: "elus-fav",
            stance: "favorable",
            role: "Préfète des Landes",
            position: "Institutionnelle ; favorable à la poursuite du chantier sous contrôle environnemental.",
            evidence: "Défend une méthode de « transparence et de vigilance » et met en avant les contrôles réalisés.",
            certainty: "Haute"
        },
        {
            name: "Préfet des Landes",
            category: "elus-fav",
            stance: "neutral",
            role: "Représentant de l’État dans les Landes",
            position: "Position institutionnelle ; suivi du chantier.",
            evidence: "Préside le Comité de suivi environnemental et demande des contrôles complémentaires sur les mammifères marins.",
            certainty: "Haute"
        },
        {
            name: "Philippe Tabarot",
            category: "elus-fav",
            stance: "neutral",
            role: "Ministre chargé des Transports",
            position: "Seulement cité.",
            evidence: "Sollicité par la CGT dans le cadre du dossier maritime.",
            certainty: "Faible"
        },
        {
            name: "Sébastien Lecornu",
            category: "elus-fav",
            stance: "favorable",
            role: "Premier ministre (cité)",
            position: "Favorable à l’électrification et à la réduction de la dépendance aux énergies fossiles.",
            evidence: "Citation sur la dépendance aux énergies fossiles.",
            certainty: "Haute"
        },
        {
            name: "StopTHT40",
            category: "orgs",
            stance: "opposed",
            role: "Collectif citoyen",
            position: "Principal collectif citoyen opposé au projet.",
            evidence: "Le corpus le présente comme le principal collectif opposé au projet.",
            certainty: "Haute"
        },
        {
            name: "Landes Atlantique Environnement (LAE)",
            category: "orgs",
            stance: "opposed",
            role: "Association environnementale",
            position: "Contestation environnementale ; dépôt de plainte sur le nématode du pin.",
            evidence: "Critique ; demande enquêtes et traçabilité des opérations.",
            certainty: "Haute"
        },
        {
            name: "SEPANSO 40",
            category: "orgs",
            stance: "opposed",
            role: "Association environnementale",
            position: "Critique prudente.",
            evidence: "Co-signataire de plainte liée au nématode ; demande enquête indépendante.",
            certainty: "Moyenne"
        },
        {
            name: "Sea Shepherd France",
            category: "orgs",
            stance: "opposed",
            role: "ONG environnementale",
            position: "Soutien aux opposants locaux ; critique du projet et de ses impacts potentiels.",
            evidence: "Mobilisation au nom de la protection du vivant.",
            certainty: "Haute"
        },
        {
            name: "CGT",
            category: "orgs",
            stance: "opposed",
            role: "Syndicat",
            position: "Critique des conditions maritimes du chantier.",
            evidence: "Dénonce les navires utilisés sur le chantier.",
            certainty: "Haute"
        },
        {
            name: "FOMM, FSM, FNPD",
            category: "orgs",
            stance: "opposed",
            role: "Organisations syndicales maritimes",
            position: "Critiques sur la sécurité maritime.",
            evidence: "Associées à la démarche CGT.",
            certainty: "Haute"
        },
        {
            name: "Conseil supérieur de la marine marchande (CSMM)",
            category: "orgs",
            stance: "neutral",
            role: "Instance consultative",
            position: "Pas de position institutionnelle explicite.",
            evidence: "Saisi des questions de sécurité maritime.",
            certainty: "Faible"
        },
        {
            name: "Jérôme Rieu",
            category: "porteurs",
            stance: "favorable",
            role: "Délégué régional RTE",
            position: "Défense du projet et réponse aux critiques.",
            evidence: "Fonction mentionnée dans les personnes clés du portage du projet.",
            certainty: "Haute"
        },
        {
            name: "Emmanuel Gosset",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur de projet RTE",
            position: "Portage du projet.",
            evidence: "Fonction mentionnée dans les personnes clés du portage du projet.",
            certainty: "Haute"
        },
        {
            name: "Ludivine Mellier",
            category: "porteurs",
            stance: "favorable",
            role: "Directrice du programme interconnexions RTE",
            position: "Portage du projet.",
            evidence: "Fonction mentionnée dans les personnes clés du portage du projet.",
            certainty: "Haute"
        },
        {
            name: "Émilie Piette",
            category: "porteurs",
            stance: "neutral",
            role: "Présidente du directoire de RTE",
            position: "Actrice du portage RTE ; citée dans le dossier maritime.",
            evidence: "Mentionnée comme présidente du directoire de RTE citée par la CGT.",
            certainty: "Faible"
        },
        {
            name: "Ramon Granadino Goenechea",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur planification Red Eléctrica",
            position: "Portage côté Red Eléctrica.",
            evidence: "Fonction mentionnée dans les personnes clés du portage du projet.",
            certainty: "Haute"
        },
        {
            name: "Juan Prieto Monterrubio",
            category: "porteurs",
            stance: "favorable",
            role: "Directeur de projets Red Eléctrica",
            position: "Portage côté Red Eléctrica.",
            evidence: "Fonction mentionnée dans les personnes clés du portage du projet.",
            certainty: "Haute"
        },
        {
            name: "Xavier Piechaczyk",
            category: "porteurs",
            stance: "favorable",
            role: "Président du directoire de RTE",
            position: "Défend les bénéfices énergétiques de l’interconnexion.",
            evidence: "Mentionné comme défendant les bénéfices énergétiques de l’interconnexion.",
            certainty: "Haute"
        },
        {
            name: "Mr Chambily (RTE)",
            category: "porteurs",
            stance: "neutral",
            role: "Cité comme relevant de RTE",
            position: "Position sur le projet non établie.",
            evidence: "Le post du 14 juin cite « Mr Chambily (RTE) » et l’invite à une table ronde.",
            certainty: "Faible"
        },
        {
            name: "Mme Pajot (RTE)",
            category: "porteurs",
            stance: "neutral",
            role: "Cité comme relevant de RTE",
            position: "Position sur le projet non établie.",
            evidence: "Le post du 14 juin cite « Mme Pajot (RTE) » et l’invite à une table ronde.",
            certainty: "Faible"
        },
        {
            name: "Gilles Clavreul",
            category: "elus-fav",
            stance: "neutral",
            role: "Préfet des Landes (désigné par Vert)",
            position: "Aucune position explicite ; il n’a pas répondu aux questions de Vert.",
            evidence: "« Contacté, Gilles Clavreul, le préfet des Landes, n’a pas voulu répondre à nos questions. »",
            certainty: "Faible"
        },
        {
            name: "Conseil national de la protection de la nature (CNPN)",
            category: "orgs",
            stance: "opposed",
            role: "Instance d’expertise scientifique de l’État",
            position: "Avis défavorable au projet en 2022, au regard des impacts terrestres.",
            evidence: "Le rapport cite l’avis défavorable du 22 août 2022.",
            certainty: "Haute"
        },
        {
            name: "Ministère de la transition énergétique",
            category: "elus-fav",
            stance: "favorable",
            role: "Ministère",
            position: "Rôle administratif rapporté.",
            evidence: "Le projet est décrit comme « déclaré d’utilité publique » par ce ministère.",
            certainty: "Haute"
        },
        {
            name: "Ministère de la transition écologique",
            category: "elus-fav",
            stance: "neutral",
            role: "Ministère",
            position: "Rôle administratif rapporté.",
            evidence: "RTE rappelle qu’un « avis favorable conforme » a été émis ; le ministère indique ne pas pouvoir répondre dans l’immédiat.",
            certainty: "Moyenne"
        },
        {
            name: "Leyla Labescat",
            category: "opposants",
            stance: "opposed",
            role: "Secrétaire de l’association LAE",
            position: "Inquiète des effets potentiels sur la santé humaine et de l’absence d’étude signalée.",
            evidence: "« Aucune étude n’a été menée sur le sujet » ; « On ne veut pas être des cobayes. »",
            certainty: "Haute"
        },
        {
            name: "Conseil d’État",
            category: "orgs",
            stance: "neutral",
            role: "Juridiction administrative",
            position: "Saisie d’un recours contre les travaux.",
            evidence: "Le recours initié par Landes Aquitaine Environnement est indiqué comme porté devant le Conseil d’État.",
            certainty: "Faible"
        },
        {
            name: "François Bayrou",
            category: "elus-fav",
            stance: "neutral",
            role: "Personnalité politique",
            position: "Destinataire d’une lettre ouverte de 2024.",
            evidence: "La lettre ouverte demandant un moratoire lui a été adressée.",
            certainty: "Faible"
        },
        {
            name: "Monique Barbut",
            category: "elus-fav",
            stance: "neutral",
            role: "Ministre de la transition écologique (citée)",
            position: "Position sur le projet non établie ; elle est sollicitée par les militants.",
            evidence: "Les militants comptent sur elle pour accéder à leur demande de moratoire.",
            certainty: "Faible"
        },
        {
            name: "Mairie de Capbreton",
            category: "elus-fav",
            stance: "neutral",
            role: "Institution municipale",
            position: "Indique initialement qu’aucun élément ne permet de relier le décès de la baleine au chantier.",
            evidence: "La mairie explique que rien ne permet « de lier la mort de la baleine au chantier » de RTE.",
            certainty: "Haute"
        },
        {
            name: "Laboratoire Pélagis",
            category: "opposants",
            stance: "neutral",
            role: "Laboratoire scientifique",
            position: "Expertise scientifique ; aucune attribution causale du décès au chantier.",
            evidence: "Les premières observations tendent vers une forte probabilité d’infection.",
            certainty: "Haute"
        },
        {
            name: "Comité de suivi environnemental (CSE)",
            category: "orgs",
            stance: "neutral",
            role: "Instance de suivi des travaux",
            position: "Suivi institutionnel ; aucune position autonome sur le projet n’est rapportée.",
            evidence: "Cinquième réunion tenue le 5 juin 2026 sous la présidence du préfet des Landes.",
            certainty: "Haute"
        },
        {
            name: "DREAL",
            category: "orgs",
            stance: "neutral",
            role: "Service de l’État",
            position: "Supervision et contrôle environnementaux.",
            evidence: "Le rapport cite la DREAL parmi les services de l’État assurant la supervision.",
            certainty: "Haute"
        },
        {
            name: "DDTM",
            category: "orgs",
            stance: "neutral",
            role: "Service de l’État",
            position: "Supervision et contrôle environnementaux.",
            evidence: "Le rapport cite la DDTM parmi les services de l’État assurant la supervision.",
            certainty: "Haute"
        },
        {
            name: "OFB",
            category: "orgs",
            stance: "neutral",
            role: "Service de l’État",
            position: "Supervision et contrôle environnementaux.",
            evidence: "Le rapport cite l’OFB parmi les services de l’État assurant la supervision.",
            certainty: "Haute"
        },
        {
            name: "Écologue missionné par RTE",
            category: "opposants",
            stance: "neutral",
            role: "Écologue (non nommé)",
            position: "Rôle de suivi environnemental.",
            evidence: "Le rapport mentionne la surveillance de « l’écologue missionné par RTE ».",
            certainty: "Faible"
        },
        {
            name: "Chercheur spécialiste du suivi morphologique du canyon (anonyme)",
            category: "opposants",
            stance: "neutral",
            role: "Chercheur",
            position: "Apporte une expertise technique sur l’impossibilité de faire passer les câbles dans le canyon.",
            evidence: "Il évoque un canyon actif et la mouvance du fond, et a requis l’anonymat.",
            certainty: "Moyenne"
        }
    ],
    griefs: [
        {
            title: "🐋 Impacts mammifères marins",
            text: "Impacts potentiels sur les baleines, cétacés et échouages. Interrogation sur les effets des travaux en mer."
        },
        {
            title: "🌊 Protection de la biodiversité marine",
            text: "Protection de la biodiversité marine dans le secteur du Gouf de Capbreton. Secteur considéré comme particulièrement sensible."
        },
        {
            title: "⚖️ Respect du droit environnemental",
            text: "Respect du droit environnemental. Contestation de certaines autorisations ou études d’impact."
        },
        {
            title: "🗣️ Concertation et gouvernance",
            text: "Critiques de la concertation et de la gouvernance du projet. Accusation de ne pas examiner suffisamment les alternatives de tracé."
        },
        {
            title: "🌲 Question du nématode du pin",
            text: "Soupçons ou interrogations sur un lien indirect avec les travaux. Le document ne fournit aucune preuve établissant un lien avec RTE."
        },
        {
            title: "⚡ Champs électromagnétiques",
            text: "Risques sanitaires liés aux champs électromagnétiques. Évoqués par certaines associations."
        },
        {
            title: "⚓ Sécurité maritime",
            text: "Sécurité maritime, notamment concernant certains navires employés sur le chantier. Point notamment porté par la CGT et des organisations syndicales maritimes."
        },
        {
            title: "🌿 Développement énergétique au détriment du vivant",
            text: "Critique d’un projet présenté comme symbole d’une logique de développement énergétique au détriment du vivant. Argument environnemental relayé dans le corpus."
        }
    ],
    vigilance: [
        "<strong>Avis du CNPN ignoré :</strong> Le Conseil national de la protection de la nature (CNPN) a émis un avis défavorable au projet en 2022, créant une tension juridique exploitée par les associations environnementales.",
        "<strong>Accusations sans preuves directes :</strong> L'apparition de foyers du nématode du pin et l'échouage de mammifères marins (baleine) sont imputés par les opposants aux travaux de RTE, sans que les laboratoires (Pélagis) ou les autorités ne confirment de lien de causalité direct.",
        "<strong>Controverse sur la sécurité maritime :</strong> La CGT et les syndicats de la marine marchande alertent vivement sur l'utilisation par RTE de l'armateur Van Laar, accusé d'opérer avec une flotte dérogeant aux normes de sécurité maritime.",
        "<strong>Flou institutionnel et personnalités seulement citées :</strong> Plusieurs figures (Philippe Tabarot, François Bayrou, Monique Barbut, Gilles Clavreul) sont interpellées publiquement par les collectifs, mais leur positionnement officiel sur le dossier reste non défini ou ambigu."
    ],
    sources: [
        "<strong>Franceinfo :</strong> Information sur la baleine échouée." ,
        "<strong>ICI Gascogne :</strong> Couverture du chantier et des échouages." ,
        "<strong>France 3 Nouvelle-Aquitaine :</strong> Reportages environnementaux." ,
        "<strong>Sud Ouest :</strong> Source documentaire majeure sur le conflit local." ,
        "<strong>Mer et Marine :</strong> Suivi du chantier et enjeux maritimes." ,
        "<strong>Energies de la Mer :</strong> Suivi technique du projet." ,
        "<strong>La Relève et la Peste :</strong> Relais des critiques écologistes." ,
        "<strong>Objectif Aquitaine / La Tribune :</strong> Analyse stratégique des infrastructures." ,
        "<strong>L’Info Durable :</strong> Source secondaire." ,
        "<strong>La République des Pyrénées :</strong> Analyse des interconnexions européennes." ,
        "<strong>Vert :</strong> Média à l’origine d’une enquête de terrain sur le conflit local." 
    ]
};
