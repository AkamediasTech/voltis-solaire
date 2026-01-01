import type { SiteConfig } from "../types";
import { createSiteConfig } from "./_base";

/**
 * Configuration for France Solaire website
 */
const franceSolaireConfig: SiteConfig = createSiteConfig({
  siteId: "france-solaire",

  deployment: {
    siteUrl: "https://groupe-france-solaire.fr",
    basePath: "/",
  },

  branding: {
    logo: "", // Will be set after creating assets structure
    // logoComponent: "InitialsLogo", // Utilise le logo avec initiales
    logoComponent: "GFSTextLogo",
    companyName: "France Solaire",
    colors: {
      primary: {
        DEFAULT: "#0066CC",
        dark: "#004C99",
        light: "#3385D6",
      },
      secondary: {
        DEFAULT: "#FF9900",
        dark: "#CC7A00",
        light: "#FFB333",
      },
      accent: "#00CC66",
      neutral: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        950: "#030712",
      },
    },
  },

  analytics: {
    // gtmId: "GTM-XXXXXXX", // Replace with actual GTM ID
    gtmId: "GTM-M9WT7W4V",
    tracking: {
      enabled: true,
      endpoints: {
        pageView: "https://france-solaire.n8n.cloud/webhook/pv",
        lead: "https://france-solaire.n8n.cloud/webhook/lead",
        event: "https://france-solaire.n8n.cloud/webhook/event",
      },
      debug: false, // Set to true to enable console logs in development
    },
  },

  api: {
    // webhookUrl: "https://n8n.example.com/webhook/france-solaire", // Replace with actual n8n webhook
    webhookUrl:
      "https://techaka.app.n8n.cloud/webhook/09432390-e800-435f-8fc4-556500f618cf",
    timeout: 30000,
  },

  content: {
    hero: {
      title:
        // 'Produisez votre propre électricité <span class="text-edf-orange">verte</span>',
        'Installez vos panneaux solaires <span class="text-edf-orange">Nouvelle génération</span>',
      subtitle: "4.8/5 sur Trustpilot",
      description:
        "Réduisez jusqu'à <span class=\"font-bold text-white\">70%</span> de vos factures d'énergie grâce à l'autoconsommation. Profitez des aides de l'État en 2026.",
      ctaText: "Obtenir mon devis gratuit",
      ctaLink: "#simulator",
    },

    featuresSection: {
      badge: "Vos Avantages",
      title: "Pourquoi passer à l'",
      titleHighlight: "autoconsommation ?",
      subtitle:
        "Une solution rentable, écologique et durable pour votre habitation.",
      features: [
        {
          id: "reduce-bills",
          iconName: "losses-color" as const,
          iconSize: "w-12 h-12",
          title: "Réduisez vos factures",
          description:
            "Jusqu'à 60% d'économies sur votre facture d'électricité en consommant votre propre production.",
        },
        {
          id: "increase-value",
          // iconName: "trending-up" as const,
          iconName: "house-price-up-color" as const,
          iconSize: "w-12 h-12",
          title: "Valorisez votre bien",
          description:
            "Une maison équipée de panneaux solaires se revend plus cher et plus vite (Valeur verte).",
        },
        {
          id: "green-energy",
          iconName: "green-energy-color" as const,
          iconSize: "w-12 h-12",
          title: "Énergie Verte",
          description:
            "Participez à la transition énergétique en produisant une énergie propre et locale.",
        },
        {
          id: "warranty",
          iconName: "shield-check" as const,
          iconSize: "w-12 h-12",
          title: "Garantie Sérénité",
          description:
            "Bénéficiez d'équipements premium et d'une installation professionnelle certifiée. Garantie performance 25 ans.",
        },
      ],
    },

    // faq: {
    //   badge: "FAQ",
    //   title: "Tout savoir sur le solaire",
    //   ctaText: "Contacter un expert",
    //   items: [
    //     {
    //       id: 1,
    //       question: "Combien coûte une installation solaire ?",
    //       answer:
    //         "Le prix varie selon la taille de votre installation et vos besoins énergétiques. Comptez entre 8 000€ et 15 000€ pour une maison individuelle. Nous proposons des solutions de financement adaptées.",
    //     },
    //     {
    //       id: 2,
    //       question: "Quelle est la durée de vie des panneaux solaires ?",
    //       answer:
    //         "Les panneaux solaires ont une durée de vie de plus de 30 ans. Nous garantissons les nôtres pendant 25 ans avec un rendement minimal de 80%.",
    //     },
    //     {
    //       id: 3,
    //       question: "Puis-je bénéficier d'aides financières ?",
    //       answer:
    //         "Oui, plusieurs aides sont disponibles : prime à l'autoconsommation, TVA réduite à 10%, obligation d'achat de l'électricité par EDF. Nous vous accompagnons dans toutes vos démarches.",
    //     },
    //     {
    //       id: 4,
    //       question: "Combien de temps dure l'installation ?",
    //       answer:
    //         "L'installation complète prend généralement 1 à 2 jours. Le délai total du projet (étude, démarches administratives, pose) est d'environ 2 à 3 mois.",
    //     },
    //     {
    //       id: 5,
    //       question: "Que se passe-t-il les jours sans soleil ?",
    //       answer:
    //         "Votre installation produit de l'électricité même par temps nuageux, bien que le rendement soit réduit. Vous restez connecté au réseau électrique pour les périodes de faible production.",
    //     },
    //   ],
    // },

    faq: {
      badge: "FAQ",
      title: "Tout savoir sur le solaire",
      // ctaText: "Contacter un expert",
      items: [
        {
          id: 1,
          question: "Que devient l'électricité non consommée ?",
          answer:
            "Elle peut être injectée sur le réseau et revendue à un fournisseur d'énergie, ou stockée dans une batterie si votre installation en est équipée.",
        },
        {
          id: 2,
          question:
            "Les panneaux produisent-ils lorsqu'il n'y a pas de soleil ?",
          answer:
            "Ils produisent moins par temps couvert, mais continuent de fonctionner grâce à la lumière diffuse. La production est simplement réduite.",
        },
        {
          id: 3,
          question:
            "Mon logement est-il compatible avec des panneaux photovoltaïques ?",
          answer:
            "La majorité des maisons le sont. L'orientation, l'inclinaison du toit et l'absence d'ombre sont analysées lors d'une étude personnalisée.",
        },
        {
          id: 4,
          question: "Faut-il un grand toit pour installer des panneaux ?",
          answer:
            "Non. Les panneaux nouvelle génération permettent une production élevée même sur une surface limitée.",
        },
        {
          id: 5,
          question: "Une autorisation est-elle nécessaire ?",
          answer:
            "Une déclaration préalable de travaux peut être requise. Elle est généralement prise en charge par l'installateur.",
        },
        {
          id: 6,
          question:
            "Les panneaux photovoltaïques nécessitent-ils de l'entretien ?",
          answer:
            "Très peu. Un nettoyage occasionnel suffit pour maintenir de bonnes performances.",
        },
        {
          id: 7,
          question: "Quelle est la durée de vie des panneaux ?",
          answer:
            "Les panneaux ont une durée de vie moyenne de 30 ans, avec des garanties de performance pouvant aller jusqu'à 25 ans.",
        },
        {
          id: 8,
          question: "Que se passe-t-il en cas de panne ?",
          answer:
            "Les équipements sont couverts par des garanties fabricant et l'installation est réalisée par des professionnels certifiés.",
        },
        {
          id: 9,
          question: "Les panneaux photovoltaïques sont-ils écologiques ?",
          answer:
            "Oui. Ils produisent une énergie renouvelable, locale et sans émission de CO₂ pendant leur fonctionnement.",
        },
        {
          id: 10,
          question: "Les panneaux augmentent-ils la valeur de mon logement ?",
          answer:
            "Oui. Une maison équipée de panneaux photovoltaïques est souvent mieux classée au DPE et plus attractive à la revente.",
        },
      ],
    },

    // callToAction: {
    //   badge: "OFFRE EXCLUSIVE",
    //   title:
    //     'Passez au solaire en toute confiance : demandez votre <span class="text-edf-blue">bilan solaire offert</span>',
    //   subtitle:
    //     "Une visite à domicile offerte, sans engagement, avec un conseiller de votre région pour :",
    //   items: [
    //     "évaluer votre potentiel solaire et vos besoins,",
    //     "vérifier votre éligibilité + les aides disponibles,",
    //     "comprendre l'autoconsommation,",
    //     "recevoir une proposition personnalisée.",
    //   ],
    //   ctaText: "Je demande mon bilan gratuit",
    //   ctaLink: "#simulator",
    //   scrollToTop: true,
    // },

    testimonials: [
      {
        name: "Famille Barthélémy",
        role: "Propriétaires",
        company: "Maison à Montauban (82)",
        content:
          "Nous hésitions depuis longtemps, mais l'accompagnement de France Solaire nous a convaincus. En 8 mois, notre facture a baissé de 60%. On regrette de ne pas l'avoir fait plus tôt !",
        rating: 5,
        image: "/testimonials/t4.png",
        quote:
          "« En 8 mois, notre facture a baissé de 60%. On regrette de ne pas l'avoir fait plus tôt ! »",
        author: "Montauban (82) - Famille Barthélémy",
      },
      {
        name: "Michel Delacroix",
        role: "Retraité",
        company: "Maison à Villeurbanne (69)",
        content:
          "Équipe très compétente et à l'écoute. Le suivi du projet était impeccable du début à la fin. Un investissement que je recommande à tous.",
        rating: 5,
        image: "/testimonials/t2.png",
        quote:
          "« Équipe très compétente et à l'écoute. Le suivi du projet était impeccable. »",
        author: "Villeurbanne (69) - Michel D.",
      },
      {
        name: "Philippe Rouanet",
        role: "Propriétaire",
        company: "Maison à Saint-Herblain (44)",
        content:
          "Installation solaire installée depuis 6 mois, je réalise déjà de belles économies. Le service client est réactif et vraiment professionnel.",
        rating: 5,
        image: "/testimonials/t3.png",
        quote:
          "« Depuis 6 mois, je réalise déjà de belles économies. Service client au top ! »",
        author: "Saint-Herblain (44) - Philippe R.",
      },
    ],

    processSteps: [
      {
        number: "01",
        title: "Nous analysons votre situation",
        description:
          "Un conseiller France Solaire vous aide à identifier la puissance photovoltaïque adaptée à votre consommation et calcule votre potentiel d'économies.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      },
      {
        number: "02",
        title: "Étude de faisabilité gratuite",
        description:
          "Nos experts évaluent votre toiture, l'ensoleillement et définissent la meilleure configuration. Zéro engagement, zéro frais.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      },
      {
        number: "03",
        title: "Installation professionnelle",
        description:
          "Installation réalisée par des techniciens certifiés RGE. Respect des normes, finitions impeccables, chantier propre.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      },
      {
        number: "04",
        title: "Suivi et garanties",
        description:
          "Garantie matériel 25 ans, assistance technique illimitée, application de monitoring incluse.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    // stepsSection: {
    //   title:
    //     'Du diagnostic à la mise en service : <br> <span class="text-edf-blue">nos experts s\'occupent de tout </span>',
    //   steps: [
    //     {
    //       icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-edf-orange"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    //       title: "Une étude gratuite",
    //       description:
    //         "pour une installation sur-mesure par notre Conseiller Solaire à votre domicile",
    //     },
    //     {
    //       icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-edf-orange"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>',
    //       title: "Une validation technique",
    //       description:
    //         "par nos experts pour confirmer la proposition du Conseiller Solaire. Elle se déroule à distance ou sur place",
    //     },
    //     {
    //       icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-edf-orange"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>',
    //       title: "Démarches administratives prises en charge",
    //       description: "pour vous simplifier la vie<sup>(4)</sup>",
    //     },
    //   ],
    // },

    customerJourney: [
      {
        id: "01",
        title: "Conseil personnalisé offert",
        description:
          "Un expert vous accompagne pour définir la solution solaire la plus rentable et la mieux adaptée.",
      },
      {
        id: "02",
        title: "Obtention du devis",
        description:
          "Un devis complet et lisible. Aucun paiement avant l'installation : vous réglez une fois le chantier finalisé.",
      },
      {
        id: "03",
        title: "Accompagnement administratif complet",
        description:
          "Déclarations, urbanisme, aides et primes : nous gérons tout de A à Z.",
      },
      {
        id: "04",
        title: "Installation clé en main",
        description:
          "Installation soignée par des professionnels certifiés, avec une planification rapide après validation.",
      },
    ],

    product: {
      badge: "Notre technologie",
      mainTitle: "Montez en puissance et",
      highlightText: "optimisez vos économies",
      description: [
        "Groupe France Solaire vous équipe de panneaux photovoltaïques nouvelle génération, à la pointe de l'innovation.",
        "Reprenez la main sur votre facture d'électricité et réalisez jusqu'à 70 % d'économies d'énergie par an<sup>(1)</sup>. Produisez et consommez votre propre énergie, toute l'année.",
        "Avec nos nouveaux panneaux solaires 500Wc, vous générez davantage d'électricité verte à surface équivalente. Leur technologie avancée garantit de meilleures performances, y compris lorsque l'ensoleillement est faible.",
      ],
      ctaText: "Réaliser mon bilan solaire gratuit",
      //   image:
      //     "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
      image: "/tmp/sp-on-roof-2.jpg",
      imageAlt: "Panneaux solaires",
      features: [
        {
          icon: "weather",
          title: "Une production optimisée, quelle que soit la météo.",
          description:
            "Même sous un ciel couvert, en automne ou en hiver, nos panneaux captent davantage d'énergie. Vous produisez ainsi votre propre électricité plus régulièrement, tout au long de l'année.",
        },
        {
          icon: "sun",
          title: "Une production stable, même en été",
          description:
            "Grâce à une meilleure tolérance à la chaleur, notre technologie assure un rendement plus régulier que les solutions traditionnelles.",
        },
        {
          icon: "battery",
          title: "Durables par conception, rassurants au quotidien",
          description:
            "Des panneaux conçus pour durer, une performance au rendez-vous, et une garantie à vie<sup>(2)</sup> pour plus de sérénité.",
        },
      ],
    },

    footer: {
      companyName: "SOLUTIONS SOLAIRES",
      description:
        "Nous accompagnons les particuliers et les professionnels dans leur transition énergétique grâce à des solutions solaires performantes et durables.",
      sections: [
        {
          title: "Nos solutions",
          links: [
            { label: "Panneaux photovoltaïques", href: "#simulator" },
            { label: "Autoconsommation", href: "#simulator" },
            { label: "Batterie de stockage", href: "#simulator" },
            { label: "Borne de recharge", href: "#simulator" },
          ],
        },
        {
          title: "À propos",
          links: [
            { label: "Qui sommes-nous ?", href: "#Products" },
            // { label: "Nos réalisations", href: "#" },
            { label: "Avis clients", href: "#testimonials" },
            // { label: "Recrutement", href: "#" },
          ],
        },
      ],
      // contactPhone: "tel:0809404005",
      contactPhoneDisplay: "0 809 404 005",
      contactSchedule:
        "Service & appel gratuits.<br/>Du lundi au vendredi de 9h à 19h.",
      socialLinks: [
        // { platform: "facebook", url: "#" },
        // { platform: "instagram", url: "#" },
        // { platform: "twitter", url: "#" },
        // { platform: "linkedin", url: "#" },
      ],
      copyright: `© ${new Date().getFullYear()} Groupe France Solaire - Tous droits réservés.`,
      legalLinks: [
        { label: "Mentions légales", href: "/mentions-legales" },
        {
          label: "Politique de confidentialité",
          href: "/politique-de-confidentialite",
        },
        { label: "Cookies", href: "#" },
      ],
    },

    legal: {
      introText:
        "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Groupe France Solaire l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
      siteUrl: "https://groupe-france-solaire.fr",
      company: {
        name: "Groupe France Solaire",
        address: "4 Av. Laurent Cély, 92600 Asnières-sur-Seine",
        rcs: "BOBIGNY sous le numéro Bobigny B 891 384 810",
        tva: "FR48891384810",
        status: "Société par actions simplifiée unipersonnelle (SASU)",
        capital: "1000 euros",
        email: "dpo@groupe-france-solaire.fr",
      },
      hosting: {
        name: "Hostinger",
        address:
          "61 Lordou Vironos Street 17 Lumiel Building, 4th floor 18. Larnaca, CY 6023, Cyprus",
        website: "https://www.hostinger.fr/contact",
      },
      personalDataText:
        "Conformément aux dispositions légales et réglementaires applicables en matière de données personnelles, vous disposez d'un droit à la limitation du traitement de vos données, d'un droit d'opposition, d'accès, de portabilité, de rectification et de suppression de vos données. Pour connaître et exercer vos droits, veuillez consulter notre politique de confidentialité.",
      intellectualPropertyText:
        "La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de la société Groupe France Solaire. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de la société Groupe France Solaire est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle. Il en est de même des bases de données figurant sur ce site internet, qui sont protégées par les dispositions de la loi du 1er juillet 1998 portant transposition dans le Code de la propriété intellectuelle de la directive européenne du 11 mars 1996 relative à la protection juridique des bases de données, et dont la société Groupe France Solaire est producteur. Groupe France Solaire est également titulaire des droits sur les marques, logos ainsi que sur la charte graphique et les visuels valorisés. Toute reproduction totale ou partielle du logo, de la charte graphique et autres visuels sans le consentement de Groupe France Solaire constitue une contrefaçon pénalement sanctionnée.",
      contactText:
        "Pour toute demande d'information ou signalement quant au contenu du site, nous vous invitons à nous contacter par courrier postal à : Groupe France Solaire – situé au 4 Av. Laurent Cély, 92600 Asnières-sur-Seine.",
    },

    privacyPolicy: {
      intro:
        "Groupe France Solaire accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe de la manière dont nous collectons, utilisons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).",
      sections: [
        {
          number: "1",
          title: "Identité du responsable de traitement",
          content: `Le responsable du traitement de vos données personnelles est :

<strong>Groupe France Solaire</strong>
Adresse : 4 Av. Laurent Cély, 92600 Asnières-sur-Seine
RCS : BOBIGNY sous le numéro Bobigny B 891 384 810
N° de TVA intracommunautaire : FR48891384810
Email du Délégué à la Protection des Données : <a href="mailto:dpo@groupe-france-solaire.fr" class="text-edf-blue hover:underline">dpo@groupe-france-solaire.fr</a>`,
        },
        {
          number: "2",
          title: "Données collectées",
          content: `Nous collectons différentes catégories de données personnelles dans le cadre de nos services :

<strong>Données d'identification :</strong> nom, prénom, adresse postale, numéro de téléphone, adresse email
<strong>Données relatives à votre projet :</strong> type de logement, consommation énergétique, informations sur votre installation actuelle
<strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite
<strong>Données de géolocalisation :</strong> uniquement si vous acceptez le partage de votre localisation pour adapter nos services`,
        },
        {
          number: "3",
          title: "Finalités du traitement",
          content: `Vos données personnelles sont collectées et traitées pour les finalités suivantes :

• Traitement de vos demandes de devis et de contact
• Gestion de votre relation client et de vos projets d'installation
• Envoi d'informations commerciales et newsletters (avec votre consentement)
• Amélioration de nos services et personnalisation de votre expérience
• Respect de nos obligations légales et réglementaires
• Prévention de la fraude et sécurisation de nos systèmes`,
        },
        {
          number: "4",
          title: "Base légale du traitement",
          content: `Le traitement de vos données personnelles repose sur les bases légales suivantes :

• <strong>Exécution d'un contrat :</strong> pour le traitement de vos demandes et la gestion de votre projet
• <strong>Consentement :</strong> pour l'envoi de communications marketing
• <strong>Intérêt légitime :</strong> pour l'amélioration de nos services et la sécurisation de notre site
• <strong>Obligation légale :</strong> pour le respect de nos obligations fiscales et comptables`,
        },
        {
          number: "5",
          title: "Destinataires des données",
          content: `Vos données personnelles peuvent être partagées avec :

• Nos équipes internes (commerciaux, techniciens, service client)
• Nos partenaires installateurs et fournisseurs d'équipements
• Nos prestataires techniques (hébergement, maintenance du site web)
• Les organismes publics dans le cadre du traitement des aides et primes énergétiques
• Nos sous-traitants intervenant dans le cadre de la gestion administrative

Tous nos partenaires sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données.`,
        },
        {
          number: "6",
          title: "Durée de conservation",
          content: `Vos données personnelles sont conservées pendant les durées suivantes :

• <strong>Données clients :</strong> pendant toute la durée de la relation contractuelle et jusqu'à 10 ans après la fin du contrat (obligations comptables et fiscales)
• <strong>Données prospects :</strong> 3 ans à compter du dernier contact
• <strong>Données de navigation :</strong> 13 mois maximum
• <strong>Consentement marketing :</strong> 3 ans, renouvelable

À l'issue de ces délais, vos données seront supprimées ou anonymisées.`,
        },
        {
          number: "7",
          title: "Vos droits",
          content: `Conformément au RGPD, vous disposez des droits suivants :

• <strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie
• <strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes
• <strong>Droit à l'effacement :</strong> demander la suppression de vos données dans certains cas
• <strong>Droit à la limitation :</strong> limiter le traitement de vos données dans certaines situations
• <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes
• <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré
• <strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement

Pour exercer vos droits, contactez notre Délégué à la Protection des Données : <a href="mailto:dpo@groupe-france-solaire.fr" class="text-edf-blue hover:underline">dpo@groupe-france-solaire.fr</a>`,
        },
        {
          number: "8",
          title: "Sécurité des données",
          content: `Groupe France Solaire met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles :

• Cryptage SSL/TLS pour les transmissions de données
• Accès restreint aux données personnelles (authentification forte)
• Sauvegarde régulière des données
• Mise à jour régulière de nos systèmes de sécurité
• Formation de nos équipes à la protection des données
• Audits de sécurité réguliers

En cas de violation de données susceptible de présenter un risque pour vos droits et libertés, nous vous en informerons dans les meilleurs délais conformément à la réglementation.`,
        },
        {
          number: "9",
          title: "Cookies et technologies similaires",
          content: `Notre site utilise des cookies et technologies similaires pour :

• Assurer le fonctionnement technique du site
• Analyser l'audience et améliorer nos services (Google Analytics)
• Personnaliser votre expérience de navigation
• Diffuser des publicités ciblées (si vous y consentez)

Vous pouvez paramétrer vos préférences en matière de cookies via le bandeau de consentement affiché lors de votre première visite. Vous pouvez également configurer votre navigateur pour refuser les cookies.

Pour en savoir plus, consultez notre politique de cookies.`,
        },
        {
          number: "10",
          title: "Transfert de données hors UE",
          content: `Vos données personnelles sont hébergées au sein de l'Union Européenne.

Dans certains cas exceptionnels, vos données peuvent être transférées vers des pays hors UE, notamment pour l'utilisation de certains outils tiers (Google Analytics, services cloud). Ces transferts sont encadrés par les garanties appropriées prévues par le RGPD (clauses contractuelles types, décision d'adéquation).`,
        },
        {
          number: "11",
          title: "Profilage et décisions automatisées",
          content: `Groupe France Solaire n'utilise pas de prise de décision entièrement automatisée ayant des effets juridiques ou vous affectant de manière significative.

Nous pouvons utiliser des outils d'analyse pour personnaliser nos offres et communications, mais ces analyses ne donnent jamais lieu à des décisions automatisées sans intervention humaine.`,
        },
        {
          number: "12",
          title: "Modification de la politique de confidentialité",
          content: `Groupe France Solaire se réserve le droit de modifier cette politique de confidentialité à tout moment pour refléter les évolutions législatives, réglementaires ou de nos pratiques.

Toute modification substantielle vous sera notifiée par email ou via un bandeau d'information sur notre site. Nous vous invitons à consulter régulièrement cette page pour prendre connaissance de la version la plus récente.

Date de dernière mise à jour : ${new Date().toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}`,
        },
        {
          number: "13",
          title: "Réclamation auprès de la CNIL",
          content: `Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :

<strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong>
Adresse : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
Téléphone : 01 53 73 22 22
Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" class="text-edf-blue hover:underline">www.cnil.fr</a>`,
        },
        {
          number: "14",
          title: "Contact",
          content: `Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos droits, vous pouvez nous contacter :

<strong>Par email :</strong> <a href="mailto:dpo@groupe-france-solaire.fr" class="text-edf-blue hover:underline">dpo@groupe-france-solaire.fr</a>
<strong>Par courrier :</strong> Groupe France Solaire – Délégué à la Protection des Données
4 Av. Laurent Cély, 92600 Asnières-sur-Seine

Nous nous engageons à vous répondre dans un délai maximum d'un mois à compter de la réception de votre demande.`,
        },
      ],
    },
  },
});

export default franceSolaireConfig;
