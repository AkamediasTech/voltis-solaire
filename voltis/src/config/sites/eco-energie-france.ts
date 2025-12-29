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
    logo: "", // Will be set after creating assets
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
    hero: {
      title: "Votre transition énergétique commence ici",
      subtitle: "4.9/5 - Plus de 2000 clients satisfaits",
      description:
        'Devenez producteur de votre propre énergie verte et économisez jusqu\'à <span class="font-bold text-white">80%</span> sur vos factures. Installation rapide et garantie décennale.',
      ctaText: "Je démarre mon projet",
      ctaLink: "#simulator",
    },

    featuresSection: {
      badge: "Nos Avantages",
      title: "Pourquoi choisir",
      titleHighlight: "Eco Energie France ?",
      subtitle: "L'excellence au service de votre indépendance énergétique.",
      features: [
        {
          id: "zero-investment",
          iconName: "piggy-bank" as const,
          title: "Zéro investissement initial",
          description:
            "Profitez de nos solutions de financement sur mesure avec possibilité de crédit à taux préférentiel.",
        },
        {
          id: "roi-rapid",
          iconName: "percentage" as const,
          title: "Retour sur investissement rapide",
          description:
            "Rentabilisez votre installation en 7 à 10 ans grâce aux économies réalisées et aux aides publiques.",
        },
        {
          id: "eco-certified",
          iconName: "house-value" as const,
          title: "Certification écologique",
          description:
            "Nos installations sont certifiées RGE et respectent les normes environnementales les plus strictes.",
        },
        {
          id: "support-premium",
          iconName: "shield-check" as const,
          title: "Accompagnement Premium",
          description:
            "Bénéficiez d'un accompagnement personnalisé de A à Z et d'un service client disponible 6j/7.",
        },
      ],
    },

    features: [
      {
        title: "Zéro investissement initial",
        description:
          "Profitez de nos solutions de financement sur mesure avec possibilité de crédit à taux préférentiel.",
        icon: "piggy-bank",
      },
      {
        title: "Installation en 48h",
        description:
          "De la signature du contrat à la mise en service, nos équipes certifiées interviennent rapidement.",
        icon: "house",
      },
      {
        title: "Garantie décennale",
        description:
          "Une couverture complète de 10 ans sur l'installation et la main d'œuvre pour votre tranquillité.",
        icon: "shield",
      },
      {
        title: "Made in Europe",
        description:
          "Panneaux et onduleurs de fabrication européenne pour une qualité et durabilité optimales.",
        icon: "france-map",
      },
    ],

    faq: {
      badge: "FAQ",
      title: "Questions fréquentes",
      ctaText: "Contacter un expert",
      items: [
        {
          id: 1,
          question:
            "Quel est le coût moyen d'une installation photovoltaïque ?",
          answer:
            "Le coût dépend de la puissance installée et de vos besoins. Comptez entre 9 000€ et 18 000€ pour une installation résidentielle complète. Nos conseillers vous proposent un devis personnalisé gratuit avec simulation de rentabilité.",
        },
        {
          id: 2,
          question:
            "Combien de temps faut-il pour rentabiliser mon installation ?",
          answer:
            "En moyenne, une installation solaire est rentabilisée en 7 à 12 ans selon votre région et votre consommation. Avec les aides de l'État et la revente du surplus, vous commencez à économiser dès la première année.",
        },
        {
          id: 3,
          question: "Quelles sont les aides disponibles en 2025 ?",
          answer:
            "Vous pouvez bénéficier de la prime à l'autoconsommation (jusqu'à 1 500€), de la TVA réduite à 10%, et du tarif d'achat garanti par EDF OA. Notre équipe vous accompagne dans toutes vos démarches administratives.",
        },
        {
          id: 4,
          question: "Mon toit est-il adapté aux panneaux solaires ?",
          answer:
            "La plupart des toits sont adaptés ! Nous réalisons une étude technique gratuite pour vérifier l'orientation, l'inclinaison, l'ombrage et la solidité de votre toiture. Même avec une orientation Est-Ouest, l'installation reste rentable.",
        },
        {
          id: 5,
          question: "Que devient l'électricité non consommée ?",
          answer:
            "L'électricité produite mais non consommée est automatiquement revendue à EDF à un tarif garanti pendant 20 ans. Vous pouvez également opter pour une batterie de stockage pour une autonomie maximale.",
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
      badge: "Notre technologie",
      mainTitle: "Montez en puissance et",
      highlightText: "optimisez vos économies",
      description: [
        "Groupe France Solaire vous équipe de panneaux photovoltaïques nouvelle génération, à la pointe de l'innovation.",
        "Reprenez la main sur votre facture d'électricité et réalisez jusqu'à 60 % d'économies d'énergie par an<sup>(1)</sup>. Produisez et consommez votre propre énergie, toute l'année.",
        "Avec nos nouveaux panneaux solaires 500Wc, vous générez davantage d'électricité verte à surface équivalente. Leur technologie avancée garantit de meilleures performances, y compris lorsque l'ensoleillement est faible.",
      ],
      ctaText: "Réaliser mon bilan solaire gratuit",
      //   image:
      //     "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
      image: "/tmp/sp-on-roof-2.png",
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
        title: "Conseil personnalisé offert",
        description:
          "Un expert vous accompagne pour définir la solution solaire la plus rentable et la mieux adaptée.",
      },
      {
        number: "02",
        icon: "send",
        title: "Offre transparente",
        description:
          "Un devis complet et lisible. Aucun paiement avant l'installation : vous réglez une fois le chantier finalisé.",
      },
      {
        number: "03",
        icon: "file-check",
        title: "Accompagnement administratif complet",
        description:
          "Déclarations, urbanisme, aides et primes : nous gérons tout de A à Z.",
      },
      {
        number: "04",
        icon: "wrench",
        title: "Installation clé en main",
        description:
          "Installation soignée par des professionnels certifiés, avec une planification rapide après validation.",
      },
    ],

    smartMonitoring: {
      badge: "Pilotage intelligent",
      mainTitle:
        'Maîtrisez votre production <span class="text-primary">jour après jour</span>',
      blocks: {
        productionTracking: {
          title:
            'Suivi intelligent de votre production solaire <br/><span class="font-medium">en temps réel</span>',
          description:
            "Visualisez en direct les performances de votre installation photovoltaïque grâce à notre système de monitoring avancé. Accédez à tout moment à :",
          features: [
            "Votre production instantanée en kW",
            "Vos courbes de production journalières et mensuelles",
            "L'historique complet de votre installation",
          ],
          footerText:
            "Un tableau de bord intuitif qui vous permet de vérifier le bon fonctionnement de vos panneaux et de mesurer précisément l'électricité que vous produisez, jour après jour.",
          image: "/placeholder.webp",
          imageAlt: "Suivi de production solaire - Placeholder",
        },
        consumptionTracking: {
          title:
            'Pilotage intelligent de votre consommation <br/><span class="font-medium">depuis votre smartphone</span>',
          description:
            "Suivez et analysez votre consommation électrique en temps réel grâce à l'application mobile. Accédez à :",
          features: [
            "Votre consommation instantanée par appareil",
            "Des recommandations personnalisées pour réduire votre facture",
            "L'historique détaillé de vos usages énergétiques",
          ],
          footerText:
            "Identifiez les postes de consommation élevés et ajustez vos habitudes pour maximiser vos économies d'énergie.",
          image: "/placeholder.webp",
          imageAlt: "Suivi de consommation - Placeholder",
        },
      },
      ctaText: "Je demande mon Bilan gratuit",
    },

    footer: {
      companyName: "SOLUTIONS SOLAIRES",
      description:
        "Nous accompagnons les particuliers et les professionnels dans leur transition énergétique grâce à des solutions solaires performantes et durables.",
      sections: [
        {
          title: "Nos solutions",
          links: [
            { label: "Panneaux photovoltaïques", href: "#" },
            { label: "Autoconsommation", href: "#" },
            { label: "Batterie de stockage", href: "#" },
            { label: "Borne de recharge", href: "#" },
          ],
        },
        {
          title: "À propos",
          links: [
            { label: "Qui sommes-nous ?", href: "#" },
            { label: "Nos réalisations", href: "#" },
            { label: "Avis clients", href: "#" },
            { label: "Recrutement", href: "#" },
          ],
        },
      ],
      contactPhone: "tel:0809404005",
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
        { label: "Mentions légales", href: "#" },
        { label: "Politique de confidentialité", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  },
});

export default ecoEnergieFranceConfig;
