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
    gtmId: "GTM-XXXXXXX", // Replace with actual GTM ID
  },

  api: {
    webhookUrl: "https://n8n.example.com/webhook/france-solaire", // Replace with actual n8n webhook
    timeout: 30000,
  },

  content: {
    hero: {
      title:
        'Produisez votre propre électricité <span class="text-edf-orange">verte</span>',
      subtitle: "4.8/5 sur Trustpilot",
      description:
        "Réduisez jusqu'à <span class=\"font-bold text-white\">60%</span> de vos factures d'énergie grâce à l'autoconsommation. Profitez des aides de l'État en 2026.",
      ctaText: "Obtenir mon devis gratuit",
      ctaLink: "#simulator",
    },

    features: [
      {
        title: "Installation clé en main",
        description:
          "De l'étude personnalisée à la mise en service, nous gérons votre projet de A à Z.",
        icon: "house",
      },
      {
        title: "Garantie 25 ans",
        description:
          "Panneaux solaires garantis 25 ans, onduleur garanti 10 ans minimum.",
        icon: "shield",
      },
      {
        title: "Économies immédiates",
        description:
          "Réduisez votre facture d'électricité dès le premier mois d'installation.",
        icon: "piggy-bank",
      },
      {
        title: "Fabrication française",
        description:
          "Privilégiez des équipements fabriqués en France pour une qualité optimale.",
        icon: "france-map",
      },
    ],

    faq: {
      badge: "FAQ",
      title: "Tout savoir sur le solaire",
      ctaText: "Contacter un expert",
      items: [
        {
          id: 1,
          question: "Combien coûte une installation solaire ?",
          answer:
            "Le prix varie selon la taille de votre installation et vos besoins énergétiques. Comptez entre 8 000€ et 15 000€ pour une maison individuelle. Nous proposons des solutions de financement adaptées.",
        },
        {
          id: 2,
          question: "Quelle est la durée de vie des panneaux solaires ?",
          answer:
            "Les panneaux solaires ont une durée de vie de plus de 30 ans. Nous garantissons les nôtres pendant 25 ans avec un rendement minimal de 80%.",
        },
        {
          id: 3,
          question: "Puis-je bénéficier d'aides financières ?",
          answer:
            "Oui, plusieurs aides sont disponibles : prime à l'autoconsommation, TVA réduite à 10%, obligation d'achat de l'électricité par EDF. Nous vous accompagnons dans toutes vos démarches.",
        },
        {
          id: 4,
          question: "Combien de temps dure l'installation ?",
          answer:
            "L'installation complète prend généralement 1 à 2 jours. Le délai total du projet (étude, démarches administratives, pose) est d'environ 2 à 3 mois.",
        },
        {
          id: 5,
          question: "Que se passe-t-il les jours sans soleil ?",
          answer:
            "Votre installation produit de l'électricité même par temps nuageux, bien que le rendement soit réduit. Vous restez connecté au réseau électrique pour les périodes de faible production.",
        },
      ],
    },
    callToAction: {
      badge: "OFFRE EXCLUSIVE",
      title:
        'Passez au solaire en toute confiance : demandez votre <span class="text-edf-blue">bilan solaire offert</span>',
      subtitle:
        "Une visite à domicile offerte, sans engagement, avec un conseiller de votre région pour :",
      items: [
        "évaluer votre potentiel solaire et vos besoins,",
        "vérifier votre éligibilité + les aides disponibles,",
        "comprendre l'autoconsommation,",
        "recevoir une proposition personnalisée.",
      ],
      ctaText: "Je demande mon bilan gratuit",
      ctaLink: "#simulator",
      scrollToTop: true,
    },
    testimonials: [
      {
        name: "Marie Dupont",
        role: "Propriétaire",
        company: "Maison à Toulouse",
        content:
          "Installation rapide et professionnelle. Ma facture d'électricité a diminué de 65% dès le premier mois. Je recommande France Solaire sans hésiter !",
        rating: 5,
        image: "/testimonials/t4.png",
        quote:
          "« Installation rapide et professionnelle. Ma facture a diminué de 65% dès le premier mois. »",
        author: "Toulouse - Marie Dupont",
      },
      {
        name: "Jean Martin",
        role: "Propriétaire",
        company: "Maison à Lyon",
        content:
          "Équipe très compétente et à l'écoute. Le suivi du projet était impeccable. Très satisfait de mon investissement.",
        rating: 5,
        image: "/testimonials/t2.png",
        quote:
          "« Équipe très compétente et à l'écoute. Le suivi du projet était impeccable. »",
        author: "Lyon - Jean Martin",
      },
      {
        name: "Sophie Bernard",
        role: "Propriétaire",
        company: "Maison à Nantes",
        content:
          "Installation solaire installée depuis 6 mois, je réalise déjà de belles économies. Le service client est réactif et professionnel.",
        rating: 5,
        image: "/testimonials/t3.png",
        quote:
          "« Depuis 6 mois, je réalise déjà de belles économies. Le service client est réactif. »",
        author: "Nantes - Sophie Bernard",
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

    customerJourney: [
      {
        id: "01",
        title: "Étude Solaire",
        description:
          "Analyse satellite de votre toiture et calcul de productivité.",
      },
      {
        id: "02",
        title: "Conception",
        description:
          "Ingénierie du système et démarches administratives incluses.",
      },
      {
        id: "03",
        title: "Installation",
        description: "Pose technique et raccordement au réseau en 48h chrono.",
      },
      {
        id: "04",
        title: "Activation",
        description: "Mise en service et début de votre autoconsommation.",
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
      image: "/temp/sp-on-roof.jpg",
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

export default franceSolaireConfig;
