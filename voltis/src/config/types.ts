/**
 * Configuration types for multi-site architecture
 */

export interface ColorShade {
  DEFAULT: string;
  dark?: string;
  light?: string;
}

export interface NeutralColors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950?: string;
}

export interface BrandingColors {
  primary: ColorShade;
  secondary: ColorShade;
  accent: string;
  neutral: NeutralColors;
}

export interface BrandingConfig {
  logo: string | ImageMetadata;
  companyName: string;
  colors: BrandingColors;
}

export interface DeploymentConfig {
  siteUrl: string;
  basePath: string;
}

export interface ApiConfig {
  webhookUrl: string; // n8n webhook endpoint
  timeout?: number;
}

export interface TrackingEndpoints {
  pageView: string;
  lead: string;
  event: string;
}

export interface TrackingConfig {
  enabled: boolean;
  endpoints: TrackingEndpoints;
  debug?: boolean;
}

export interface AnalyticsConfig {
  gtmId?: string;
  googleAnalyticsId?: string;
  tracking?: TrackingConfig;
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  backgroundImage?: string | ImageMetadata;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: string | ImageMetadata;
  rating?: number;
  image?: string;
  quote?: string;
  author?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export interface StepWithIcon {
  title: string;
  description: string;
  icon: string;
}

export interface CustomerJourneyStep {
  id: string;
  title: string;
  description: string;
}

export interface StepsConfig {
  title?: string;
  subtitle?: string;
  steps: StepWithIcon[];
}

export interface CustomerJourneyStep {
  id: string;
  title: string;
  description: string;
}

export interface SmartMonitoringBlock {
  title: string;
  description: string;
  features?: string[];
  footerText?: string;
  image: string;
  imageAlt: string;
}

export interface SmartMonitoringConfig {
  badge?: string;
  mainTitle: string;
  blocks: {
    productionTracking?: SmartMonitoringBlock;
    consumptionTracking?: SmartMonitoringBlock;
  };
  ctaText?: string;
}

export interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterConfig {
  companyName?: string;
  description?: string;
  sections?: FooterSection[];
  contactPhone?: string;
  contactPhoneDisplay?: string;
  contactSchedule?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
  copyright: string;
  legalLinks?: Array<{ label: string; href: string }>;
}

export interface ContentConfig {
  hero: HeroContent;
  features?: Feature[];
  featuresSection?: any; // Defined in FeaturesV2.astro component
  faq?: any; // Defined in FaqSection.astro component
  testimonials?: Testimonial[];
  processSteps?: ProcessStep[];
  stepsSection?: StepsConfig;
  customerJourney?: CustomerJourneyStep[];
  processV2Steps?: Step[];
  smartMonitoring?: SmartMonitoringConfig;
  footer?: FooterConfig;
  labels?: any; // Defined in OurLabels.astro component
  callToAction?: any; // Defined in CallToActionSection.astro component
  legal?: LegalConfig;
  // Sections can be extended per site as needed
  [key: string]: any;
}

export interface LegalConfig {
  introText: string;
  siteUrl: string;
  company: {
    name: string;
    address: string;
    rcs: string;
    tva: string;
    status: string;
    capital: string;
    email: string;
  };
  hosting: {
    name: string;
    address: string;
    website: string;
  };
  personalDataText: string;
  intellectualPropertyText: string;
  contactText: string;
}

export interface SiteConfig {
  siteId: string;
  deployment: DeploymentConfig;
  branding: BrandingConfig;
  analytics: AnalyticsConfig;
  api: ApiConfig;
  content: ContentConfig;
}

// Type for ImageMetadata from Astro
export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}
