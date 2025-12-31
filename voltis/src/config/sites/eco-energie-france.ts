import type { SiteConfig } from "../types";
import { createSiteConfig } from "./_base";

/**
 * Configuration for Eco Energie France website
 */
const ecoEnergieFranceConfig: SiteConfig = createSiteConfig({
  siteId: "eco-energie-france",

  deployment: {
    siteUrl: "https://eco-energie-france.fr",
    basePath: "/",
  },

  branding: {
    logo: "", // when using image
    // logo: "/enr-logo-2.png",
    // logoComponent: "InitialsLogo", // when using LogoComponents .astro or .tsx
    logoComponent: "EnrLogo",
    companyName: "Eco Energie France",
    colors: {
      primary: {
        DEFAULT: "#10B981",
        dark: "#059669",
        light: "#34D399",
      },
      secondary: {
        DEFAULT: "#F59E0B",
        dark: "#D97706",
        light: "#FBBF24",
      },
      accent: "#8B5CF6",
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
    gtmId: "GTM-ECOENER", // Replace with actual GTM ID
    tracking: {
      enabled: true,
      endpoints: {
        pageView: "https://eco-energie-france.n8n.cloud/webhook/pv",
        lead: "https://eco-energie-france.n8n.cloud/webhook/lead",
        event: "https://eco-energie-france.n8n.cloud/webhook/event",
      },
      debug: false, // Set to true to enable console logs in development
    },
  },

  api: {
    webhookUrl: "https://n8n.example.com/webhook/eco-energie-france",
    timeout: 30000,
  },

  content: {
    header: {
      logo: {
        type: "text" as const,
        initials: "EEF",
        companyLine1: "Eco Energie",
        companyLine2: "France",
        showBadge: true,
      },
      cta: {
        textMobile: "Devis Gratuit",
        textDesktop: "Obtenir mon Devis Gratuit",
        scrollToTop: true,
      },
      sticky: true,
      shadow: "md" as const,
      backgroundColor: "white",
    },

    hero: {
      title: "Votre transition énergétique commence ici",
      subtitle: "4.9/5 - Plus de 2000 clients satisfaits",
      description:
        'Devenez producteur de votre propre énergie verte et économisez jusqu\'à <span class="font-bold text-white">80%</span> sur vos factures. Installation rapide et garantie décennale.',
      ctaText: "Je démarre mon projet",
      ctaLink: "#simulator",
    },

    heroSplit: {
      badge: "Offre 2026",
      headline: "Une pompe à chaleur",
      headlineHighlight: "Nouvelle génération",
      description:
        "Réduisez jusqu’à 70 % vos factures de chauffage et profitez des aides d’état pour financer votre installation. ",
      benefits: [
        { text: "Jusqu'à 11 500€ d'aides" },
        { text: "Installation garantie par artisans RGE" },
        { text: "25% de plus-value sur votre bien" },
      ],
      review: {
        // avatars: [
        //   "https://randomuser.me/api/portraits/men/31.jpg",
        //   "https://randomuser.me/api/portraits/men/32.jpg",
        //   "https://randomuser.me/api/portraits/men/33.jpg",
        // ],
        // rating: "4.9/5",
        // count: "basé sur 1,204 avis",
        googleReview: {
          companyName: "Eco Energie France",
          rating: 4.6,
          reviewCount: 324,
          // profileImage: "/path/to/logo.png", // Optionnel
          profileImage: "/pac.webp",
        },
      },
    },

    featuresSection: {
      badge: "Nos Avantages",
      title: "Pourquoi choisir",
      titleHighlight: "Eco Energie France ?",
      subtitle:
        "L'excellence au service de votre confort thermique et de vos économies.",
      features: [
        {
          id: "government-aid",
          iconName: "courthouse-color" as const,
          iconSize: "w-12 h-12",
          title: "Jusqu'à 11 500€ d'aides de l'État",
          description:
            "Bénéficiez de MaPrimeRénov' et de la prime CEE pour réduire considérablement le coût de votre pompe à chaleur.",
        },
        {
          id: "roi-rapid",
          iconName: "losses-color" as const,
          iconSize: "w-12 h-12",
          title: "Jusqu'à 70% d'économies sur vos factures",
          description:
            "Réduisez drastiquement vos dépenses énergétiques grâce à un système de chauffage ultra-performant et écologique.",
        },
        {
          id: "eco-certified",
          iconName: "verified-blue" as const,
          iconSize: "w-12 h-12",
          title: "Installation certifiée RGE QualiPAC",
          description:
            "Nos techniciens sont certifiés RGE QualiPAC, garantie indispensable pour bénéficier des aides de l'État.",
        },
        {
          id: "support-premium",
          iconName: "shield-check" as const,
          iconSize: "w-12 h-12",
          title: "Garantie constructeur 7 ans",
          description:
            "Profitez d'une garantie étendue sur votre équipement et d'un service après-vente réactif disponible 6j/7.",
        },
      ],
    },

    labels: {
      badge: "Nos certifications",
      title: "Une expertise certifiée",
      subtitle:
        "Faites confiance à des professionnels reconnus par les plus hautes instances du secteur.",
      labels: [
        {
          title: "QualiPac",
          description:
            "Certification obligatoire pour bénéficier des aides de l'État et garantir une installation conforme.",
          image: "/qualipac-logo-transparent.png",
          imageAlt: "Label QualiSol - Reconnu Garant de l'Environnement",
        },
        {
          title: "Qualit'EnR",
          description:
            "Expertise reconnue dans l'installation de panneaux photovoltaïques.",
          image: "/QualitEnR-logo-transparent.png",
          imageAlt: "RGE Quali PV",
        },
      ],
    },

    strengths: {
      badge: "L'excellence à votre service",
      title:
        "Une couverture nationale,<br/><span class='text-edf-blue'>un service de proximité</span>",
      subtitle:
        "Des installations haute performance qui tiennent leurs promesses d'économies.",
      strengths: [
        {
          icon: "france-map",
          title: "Partout en France",
          subtitle: "Couverture nationale",
          description:
            "Que vous soyez en ville ou à la campagne, nos équipes RGE QualiPAC interviennent dans toute la France.",
        },
        {
          icon: "local",
          title: "Équipe Locale",
          subtitle: "Un contact près de chez vous",
          description:
            "De l'étude gratuite au SAV, une équipe locale dédiée vous accompagne tout au long de votre projet.",
        },
        {
          icon: "guarantee",
          title: "Aides Sécurisées",
          subtitle: "Installation éligible garantie",
          description:
            "Installation certifiée RGE QualiPAC garantissant votre éligibilité aux aides MaPrimeRénov' et CEE.",
        },
      ],
    },

    faq: {
      badge: "FAQ",
      title: "Questions fréquentes",
      ctaText: "Contacter un expert",
      items: [
        {
          id: 1,
          question: "Qu'est-ce qu'une pompe à chaleur ?",
          answer:
            "Une pompe à chaleur capte les calories présentes dans l'air, l'eau ou le sol pour chauffer votre logement de manière économique et écologique.",
        },
        {
          id: 2,
          question: "Une PAC est-elle adaptée à mon logement ?",
          answer:
            "La majorité des maisons sont compatibles. Une étude personnalisée permet de vérifier l'isolation, le système de chauffage existant et les besoins du foyer.",
        },
        {
          id: 3,
          question: "Quelle est la différence entre PAC air/air et air/eau ?",
          answer:
            "La PAC air/air diffuse de l'air chaud, tandis que la PAC air/eau alimente un réseau de chauffage (radiateurs ou plancher chauffant).",
        },
        {
          id: 4,
          question: "Est-ce que la PAC fonctionne en hiver ?",
          answer:
            "Oui. Les PAC modernes restent performantes même par températures basses.",
        },
        {
          id: 5,
          question: "Quelles économies puis-je réaliser ?",
          answer:
            "Une PAC permet de réduire jusqu'à 60 à 70 % la facture de chauffage selon le logement et l'usage.",
        },
        {
          id: 6,
          question: "Quelles aides financières sont disponibles ?",
          answer:
            "Vous pouvez bénéficier de MaPrimeRénov', des CEE, d'une TVA réduite et parfois d'aides locales.",
        },
        {
          id: 7,
          question: "Combien coûte une pompe à chaleur ?",
          answer:
            "Le coût dépend du type de PAC et de la configuration du logement, mais les aides réduisent fortement l'investissement.",
        },
        {
          id: 8,
          question: "L'installation est-elle longue ?",
          answer: "En général, l'installation dure de 1 à 3 jours.",
        },
        {
          id: 9,
          question: "La PAC nécessite-t-elle beaucoup d'entretien ?",
          answer:
            "Un entretien annuel est recommandé pour garantir performance et longévité.",
        },
        {
          id: 10,
          question: "Quelle est la durée de vie d'une PAC ?",
          answer:
            "Une pompe à chaleur a une durée de vie moyenne de 15 à 20 ans.",
        },
      ],
    },

    callToAction: {
      badge: "DÉMARREZ VOTRE PROJET",
      title:
        'Votre transition énergétique commence ici : <span class="text-edf-blue">étude personnalisée gratuite</span>',
      subtitle: "Un expert certifié se déplace gratuitement chez vous pour :",
      items: [
        "analyser votre consommation et votre toiture,",
        "calculer vos économies potentielles,",
        "identifier toutes les aides financières disponibles,",
        "vous remettre un devis détaillé sans engagement.",
      ],
      ctaText: "Je lance mon projet solaire",
      ctaLink: "#simulator",
      scrollToTop: true,
    },

    testimonials: [
      {
        name: "Pierre Leroy",
        role: "Chef d'entreprise",
        company: "Lille",
        content:
          "Installation impeccable sur mon entrepôt. L'équipe d'Eco Energie France est professionnelle et réactive. Je recommande vivement pour les projets professionnels et particuliers.",
        rating: 5,
        image: "/testimonials/pierre.jpg",
        quote:
          "« Installation impeccable sur mon entrepôt. L'équipe est professionnelle et réactive. »",
        author: "Lille - Pierre Leroy",
      },
      {
        name: "Claire Moreau",
        role: "Propriétaire",
        company: "Bordeaux",
        content:
          "En 8 mois, j'ai déjà amorti 20% de mon investissement ! Le suivi post-installation est excellent. Je reçois chaque mois un rapport détaillé de ma production.",
        rating: 5,
        image: "/testimonials/claire.jpg",
        quote:
          "« En 8 mois, j'ai déjà amorti 20% de mon investissement ! Le suivi est excellent. »",
        author: "Bordeaux - Claire Moreau",
      },
      {
        name: "Thomas Dubois",
        role: "Propriétaire",
        company: "Marseille",
        content:
          "Du premier contact au raccordement EDF, tout s'est déroulé parfaitement. Les démarches administratives ont été gérées par leurs soins. Zéro stress !",
        rating: 5,
        image: "/testimonials/thomas.jpg",
        quote:
          "« Du premier contact au raccordement EDF, tout s'est déroulé parfaitement. Zéro stress ! »",
        author: "Marseille - Thomas Dubois",
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

    stepsSection: {
      title:
        'Du diagnostic à la mise en service : <br> <span class="text-edf-blue">nos experts s\'occupent de tout </span>',
      steps: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-edf-orange"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
          title: "Une étude gratuite",
          description:
            "pour une installation sur-mesure par notre Conseiller Solaire à votre domicile",
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-edf-orange"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>',
          title: "Une validation technique",
          description:
            "par nos experts pour confirmer la proposition du Conseiller Solaire. Elle se déroule à distance ou sur place",
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-edf-orange"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>',
          title: "Démarches administratives prises en charge",
          description: "pour vous simplifier la vie<sup>(4)</sup>",
        },
      ],
    },

    product: {
      badge: "Notre Technologie PAC",
      mainTitle: "Une pompe à chaleur",
      highlightText: "ultra-performante et silencieuse",
      description: [
        "Eco Energie France vous équipe avec des pompes à chaleur air-eau de dernière génération, certifiées RGE QualiPAC.",
        "Divisez votre facture de chauffage par 3 et profitez d'un confort optimal toute l'année. Avec un COP jusqu'à 5, votre PAC produit 5 kWh de chaleur pour seulement 1 kWh d'électricité consommée.",
        "Nos pompes à chaleur Inverter s'adaptent en temps réel à vos besoins, garantissant performance maximale et nuisances sonores minimales (aussi silencieuses qu'un lave-vaisselle).",
      ],
      ctaText: "Obtenir mon devis gratuit",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Pompe à chaleur air-eau",
      features: [
        {
          icon: "snowflake",
          title: "Efficace même par grand froid",
          description:
            "Nos PAC fonctionnent jusqu'à -25°C extérieur. La technologie Enhanced Vapor Injection garantit des performances optimales, même en plein hiver.",
        },
        {
          icon: "sun",
          title: "Confort été comme hiver",
          description:
            "Mode réversible disponible : chauffage en hiver, rafraîchissement en été. Une seule installation pour un confort 4 saisons.",
        },
        {
          // icon: "battery",
          icon: "link",
          title: "Garantie 7 ans & durabilité",
          description:
            "Équipements garantis 7 ans pièces et main d'œuvre. Durée de vie moyenne de 20 ans avec un entretien régulier assuré par nos équipes.",
        },
      ],
    },

    customerJourney: [
      {
        id: "01",
        title: "Conseil personnalisé offert",
        description:
          "Un expert vous accompagne pour définir la solution solaire la plus rentable et la mieux adaptée.",
      },
      {
        id: "02",
        title: "Offre transparente",
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

    processV2Steps: [
      {
        number: "01",
        icon: "clipboard",
        title: "Étude thermique gratuite",
        description:
          "Un expert certifié QualiPAC analyse votre logement, vos besoins en chauffage et dimensionne la pompe à chaleur idéale.",
      },
      {
        number: "02",
        icon: "send",
        title: "Proposition personnalisée sans engagement",
        description:
          "Un devis sur-mesure avec simulation d'économies et détail des aides. Aucun acompte demandé avant la fin des travaux.",
      },
      {
        number: "03",
        icon: "file-check",
        title: "Accompagnement administratif complet",
        description:
          "Notre service dédié constitue vos dossiers MaPrimeRénov' et CEE, gère les déclarations et obtient toutes les autorisations.",
      },
      {
        number: "04",
        icon: "wrench",
        title: "Installation complète de A à Z",
        description:
          "Dépose de l'ancien système si besoin, pose de la PAC, raccordements, mise en route et formation. Garantie décennale incluse.",
      },
    ],

    smartMonitoring: {
      badge: "Pilotage intelligent",
      mainTitle:
        'Maîtrisez votre consommation  et <br> <span class="text-edf-blue"> maximisez vos économies</span>',
      // 'Optimisez les performances de votre pompe à chaleur <span class="text-edf-blue">en temps réel</span>',
      blocks: {
        productionTracking: {
          title:
            'Suivez les performances de votre PAC <br/><span class="font-medium">en temps réel</span>',
          description:
            "Visualisez instantanément l'efficacité de votre pompe à chaleur grâce à notre tableau de bord connecté. Accédez à tout moment à :",
          features: [
            "Votre COP (Coefficient de Performance) en direct",
            "Vos économies réalisées par jour, semaine et mois",
            "L'historique détaillé de votre consommation énergétique",
          ],
          footerText:
            "Un tableau de bord intuitif qui vous permet de vérifier le bon fonctionnement de votre PAC et de mesurer précisément vos économies d'énergie, jour après jour.",
          image: "/pac.webp",
          imageAlt: "Suivi de production solaire - PAC",
        },
        consumptionTracking: {
          title:
            'Pilotez votre chauffage <span class="font-medium">depuis votre smartphone</span>',
          description:
            " Ajustez votre confort thermique où que vous soyez grâce à l'application mobile. Profitez de :",
          features: [
            "Réglage de la température pièce par pièce",
            "Programmation hebdomadaire personnalisée",
            "Conseils personnalisés pour optimiser vos réglages",
            // "Adaptation automatique selon la météo extérieure",
            // "Détection de présence et ajustement de température",
            // "Mode éco-intelligent activé pendant vos heures creuses",
          ],
          footerText:
            "Économisez jusqu'à 70% sur votre facture de chauffage en suivant nos recommandations basées sur votre usage réel.",
          // "Plus besoin d'y penser : votre pompe à chaleur anticipe vos besoins et optimise sa consommation sans effort de votre part.",
          image: "/placeholder.webp",
          imageAlt: "Suivi de consommation - Placeholder",
        },
      },
      ctaText: "Je demande mon Bilan gratuit",
    },

    legal: {
      introText:
        "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Eco Energie France l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
      siteUrl: "https://eco-energie-france.fr",
      company: {
        name: "Eco Energie France",
        address: "4 Av. Laurent Cély, 92600 Asnières-sur-Seine",
        rcs: "BOBIGNY sous le numéro Bobigny B 891 384 810",
        tva: "FR48891384810",
        status: "Société par actions simplifiée unipersonnelle (SASU)",
        capital: "1000 euros",
        email: "dpo@eco-energie-france.fr",
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
        "La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de la société Eco Energie France. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de la société Eco Energie France est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle. Il en est de même des bases de données figurant sur ce site internet, qui sont protégées par les dispositions de la loi du 1er juillet 1998 portant transposition dans le Code de la propriété intellectuelle de la directive européenne du 11 mars 1996 relative à la protection juridique des bases de données, et dont la société Eco Energie France est producteur. Eco Energie France est également titulaire des droits sur les marques, logos ainsi que sur la charte graphique et les visuels valorisés. Toute reproduction totale ou partielle du logo, de la charte graphique et autres visuels sans le consentement de Eco Energie France constitue une contrefaçon pénalement sanctionnée.",
      contactText:
        "Pour toute demande d'information ou signalement quant au contenu du site, nous vous invitons à nous contacter par courrier postal à : Eco Energie France – situé au 4 Av. Laurent Cély, 92600 Asnières-sur-Seine.",
    },

    privacyPolicy: {
      intro:
        "Eco Energie France accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe de la manière dont nous collectons, utilisons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).",
      sections: [
        {
          number: "1",
          title: "Identité du responsable de traitement",
          content: `Le responsable du traitement de vos données personnelles est :

<strong>Eco Energie France</strong>
Adresse : 4 Av. Laurent Cély, 92600 Asnières-sur-Seine
RCS : BOBIGNY sous le numéro Bobigny B 891 384 810
N° de TVA intracommunautaire : FR48891384810
Email du Délégué à la Protection des Données : <a href="mailto:dpo@eco-energie-france.fr" class="text-edf-blue hover:underline">dpo@eco-energie-france.fr</a>`,
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

Pour exercer vos droits, contactez notre Délégué à la Protection des Données : <a href="mailto:dpo@eco-energie-france.fr" class="text-edf-blue hover:underline">dpo@eco-energie-france.fr</a>`,
        },
        {
          number: "8",
          title: "Sécurité des données",
          content: `Eco Energie France met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles :

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
          content: `Eco Energie France n'utilise pas de prise de décision entièrement automatisée ayant des effets juridiques ou vous affectant de manière significative.

Nous pouvons utiliser des outils d'analyse pour personnaliser nos offres et communications, mais ces analyses ne donnent jamais lieu à des décisions automatisées sans intervention humaine.`,
        },
        {
          number: "12",
          title: "Modification de la politique de confidentialité",
          content: `Eco Energie France se réserve le droit de modifier cette politique de confidentialité à tout moment pour refléter les évolutions législatives, réglementaires ou de nos pratiques.

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

<strong>Par email :</strong> <a href="mailto:dpo@eco-energie-france.fr" class="text-edf-blue hover:underline">dpo@eco-energie-france.fr</a>
<strong>Par courrier :</strong> Eco Energie France – Délégué à la Protection des Données
4 Av. Laurent Cély, 92600 Asnières-sur-Seine

Nous nous engageons à vous répondre dans un délai maximum d'un mois à compter de la réception de votre demande.`,
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
            { label: "Pompes à chaleur", href: "#simulator" },
            { label: "Autoconsommation", href: "#simulator" },
            // { label: "Batterie de stockage", href: "#" },
            // { label: "Borne de recharge", href: "#" },
          ],
        },
        {
          title: "À propos",
          links: [
            { label: "Qui sommes-nous ?", href: "#Products" },
            { label: "Nos réalisations", href: "#" },
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
        { platform: "facebook", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" },
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
  },
});

export default ecoEnergieFranceConfig;
