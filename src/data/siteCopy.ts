import {
  SiteBulletItem,
  SiteContactInfoItem,
  SiteCopyAboutPage,
  SiteCopyContactPage,
  SiteCopyDemoPage,
  SiteCopyGatewayPage,
  SiteCopyHomePage,
  SiteFaqItem,
  SiteDemoCapabilityItem,
  SiteGatewayModelCard,
  SiteGatewayPrincipleCard,
  SitePartnerReason,
} from '../types';
import { parseFrontmatter, readString } from '../lib/frontmatter';

const markdownModules = import.meta.glob('../content/site-copy/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function readStats(value: unknown): SiteCopyHomePage['stats'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const statValue = readString(entry.value);
      const label = readString(entry.label);
      return statValue && label ? { value: statValue, label } : null;
    })
    .filter((item): item is SiteCopyHomePage['stats'][number] => Boolean(item));
}

function readFeaturePills(value: unknown): SiteCopyHomePage['trustPills'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const text = readString(entry.text);
      return text ? { text } : null;
    })
    .filter((item): item is SiteCopyHomePage['trustPills'][number] => Boolean(item));
}

function readBulletItems(value: unknown): SiteBulletItem[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const text = readString(entry.text);
      return text ? { text } : null;
    })
    .filter((item): item is SiteBulletItem => Boolean(item));
}

function readPartnerReasons(value: unknown): SitePartnerReason[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const description = readString(entry.description);
      return title && description ? { title, description } : null;
    })
    .filter((item): item is SitePartnerReason => Boolean(item));
}

function readContactInfoItems(value: unknown): SiteContactInfoItem[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const valueText = readString(entry.value);
      const iconKey = readString(entry.iconKey, 'mail');
      return title && valueText ? { title, value: valueText, iconKey } : null;
    })
    .filter((item): item is SiteContactInfoItem => Boolean(item));
}

function readFaqItems(value: unknown): SiteFaqItem[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const question = readString(entry.question);
      const answer = readString(entry.answer);
      return question && answer ? { question, answer } : null;
    })
    .filter((item): item is SiteFaqItem => Boolean(item));
}

function readGatewayModelCards(value: unknown): SiteGatewayModelCard[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const model = readString(entry.model);
      const href = readString(entry.href);
      const ctaLabel = readString(entry.ctaLabel);
      const iconKey = readString(entry.iconKey, 'server');
      const text = readString(entry.text);
      return title && model && href && ctaLabel && text ? { title, model, href, ctaLabel, iconKey, text } : null;
    })
    .filter((item): item is SiteGatewayModelCard => Boolean(item));
}

function readGatewayPrincipleCards(value: unknown): SiteGatewayPrincipleCard[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const text = readString(entry.text);
      const iconKey = readString(entry.iconKey, 'network');
      return title && text ? { title, text, iconKey } : null;
    })
    .filter((item): item is SiteGatewayPrincipleCard => Boolean(item));
}

function readDemoCapabilityItems(value: unknown): SiteDemoCapabilityItem[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const description = readString(entry.description);
      return title && description ? { title, description } : null;
    })
    .filter((item): item is SiteDemoCapabilityItem => Boolean(item));
}

function readProblemCards(value: unknown): SiteCopyHomePage['problemCards'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const description = readString(entry.description);
      const iconKey = readString(entry.iconKey, 'activity');
      return title && description ? { title, description, iconKey } : null;
    })
    .filter((item): item is SiteCopyHomePage['problemCards'][number] => Boolean(item));
}

function readSolutionSteps(value: unknown): SiteCopyHomePage['solutionSteps'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const iconKey = readString(entry.iconKey, 'activity');
      return title ? { title, iconKey } : null;
    })
    .filter((item): item is SiteCopyHomePage['solutionSteps'][number] => Boolean(item));
}

function createHomeSiteCopy(markdown: string): SiteCopyHomePage {
  const { metadata } = parseFrontmatter(markdown);

  return {
    id: readString(metadata.id, 'homepage'),
    heroEyebrow: readString(metadata.heroEyebrow, 'Next-Gen Industrial Monitoring'),
    heroTitle: readString(metadata.heroTitle, 'Industrial IoT for Factories, Energy & Remote Assets'),
    heroHighlight: readString(metadata.heroHighlight, 'Factories'),
    heroDescription: readString(
      metadata.heroDescription,
      'Monitor energy usage, machines, solar farms, and remote equipment in real time with industrial gateways, AI-powered dashboards, and smart alerts.',
    ),
    heroPrimaryCtaLabel: readString(metadata.heroPrimaryCtaLabel, 'View Live Demo'),
    heroPrimaryCtaHref: readString(metadata.heroPrimaryCtaHref, '/demo'),
    heroSecondaryCtaLabel: readString(metadata.heroSecondaryCtaLabel, 'View Products'),
    heroSecondaryCtaHref: readString(metadata.heroSecondaryCtaHref, '/products'),
    stats: readStats(metadata.stats),
    trustEyebrow: readString(metadata.trustEyebrow, 'Enterprise Grade'),
    trustPills: readFeaturePills(metadata.trustPills),
    problemsTitle: readString(metadata.problemsTitle, 'Manufacturing Problems We Solve'),
    problemsDescription: readString(metadata.problemsDescription, 'Lack of visibility leads to unnecessary costs and machine downtime.'),
    problemCards: readProblemCards(metadata.problemCards),
    solutionTitle: readString(metadata.solutionTitle, 'The Complete Monitoring Solution'),
    solutionDescription: readString(metadata.solutionDescription, 'Everything you need from hardware data collection to AI-driven insights.'),
    solutionSteps: readSolutionSteps(metadata.solutionSteps),
    productsTitle: readString(metadata.productsTitle, 'Core Hardware & Software'),
    productsDescription: readString(
      metadata.productsDescription,
      'Industrial gateways, RTUs, Remote IO modules, remote relay controllers, access controllers, and AI dashboard software.',
    ),
    productsBrowseLabel: readString(metadata.productsBrowseLabel, 'View all products'),
    productsBrowseHref: readString(metadata.productsBrowseHref, '/products'),
    bottomCtaTitle: readString(metadata.bottomCtaTitle, 'Make industrial energy and equipment visible from anywhere.'),
    bottomCtaDescription: readString(
      metadata.bottomCtaDescription,
      'Tell us your monitoring project. Get a customized solution proposal within 24 hours.',
    ),
    bottomPrimaryCtaLabel: readString(metadata.bottomPrimaryCtaLabel, 'Request Quote'),
    bottomPrimaryCtaHref: readString(metadata.bottomPrimaryCtaHref, '/contact'),
    bottomSecondaryCtaLabel: readString(metadata.bottomSecondaryCtaLabel, 'View Dashboard Preview'),
    bottomSecondaryCtaHref: readString(metadata.bottomSecondaryCtaHref, '/demo'),
  };
}

function createAboutSiteCopy(markdown: string): SiteCopyAboutPage {
  const { metadata } = parseFrontmatter(markdown);

  return {
    id: readString(metadata.id, 'aboutpage'),
    heroTitle: readString(metadata.heroTitle, 'We Build Remote Equipment Monitoring Solutions'),
    heroDescription: readString(
      metadata.heroDescription,
      'IoTEdges provides industrial-grade edge hardware, Modbus MQTT gateways, and cloud platforms to make legacy industrial equipment visible, measurable, and manageable remotely.',
    ),
    missionTitle: readString(metadata.missionTitle, 'Our Mission in Industrial IoT'),
    missionParagraphs: Array.isArray(metadata.missionParagraphs)
      ? metadata.missionParagraphs.map((item) => readString(item)).filter(Boolean)
      : [],
    missionBullets: readBulletItems(metadata.missionBullets),
    imageUrl: readString(metadata.imageUrl, '/uploads/about/about-industrial-iot.svg'),
    imageOverlayTitle: readString(metadata.imageOverlayTitle, 'Driven by Engineering'),
    imageOverlayDescription: readString(metadata.imageOverlayDescription, 'Building hardware that survives the workshop floor.'),
    stats: readStats(metadata.stats),
    reasonsTitle: readString(metadata.reasonsTitle, 'Why Choose IoTEdges as your IoT Partner?'),
    reasons: readPartnerReasons(metadata.reasons),
    partnerTitle: readString(metadata.partnerTitle, 'Partner with an Industrial IoT Manufacturer'),
    partnerDescription: readString(
      metadata.partnerDescription,
      "Are you a system integrator, EPC contractor, or software team looking to integrate reliable, scalable hardware into your operational stack? Let's work together to build the future of industry.",
    ),
    partnerCtaLabel: readString(metadata.partnerCtaLabel, 'Become a Partner'),
    partnerCtaHref: readString(metadata.partnerCtaHref, '/contact'),
  };
}

function createContactSiteCopy(markdown: string): SiteCopyContactPage {
  const { metadata } = parseFrontmatter(markdown);

  return {
    id: readString(metadata.id, 'contactpage'),
    heroTitle: readString(metadata.heroTitle, 'Request a Quote'),
    heroDescription: readString(
      metadata.heroDescription,
      'Partner with us to build your next-generation industrial IoT infrastructure.',
    ),
    heroImageUrl: readString(metadata.heroImageUrl, '/uploads/contact/contact-industrial-iot.svg'),
    introTitle: readString(metadata.introTitle, 'Get a Quote for Your Industrial IoT Project'),
    introDescription: readString(
      metadata.introDescription,
      'Tell us about your factory energy monitoring system or remote equipment tracking requirements. Our engineering team usually responds with a technical proposal within 24 hours.',
    ),
    contactInfo: readContactInfoItems(metadata.contactInfo),
    faqTitle: readString(metadata.faqTitle, 'Frequently Asked Questions'),
    faqs: readFaqItems(metadata.faqs),
  };
}

function createGatewaySiteCopy(markdown: string): SiteCopyGatewayPage {
  const { metadata } = parseFrontmatter(markdown);

  return {
    id: readString(metadata.id, 'gatewaypage'),
    eyebrow: readString(metadata.eyebrow, 'IoTEdges Gateway Family'),
    heroTitle: readString(metadata.heroTitle, 'Industrial IoT Gateways'),
    heroDescription: readString(
      metadata.heroDescription,
      'Start from practical Ethernet, WiFi and cellular gateway models, then match the uplink, field protocol and dashboard requirements to the project.',
    ),
    gatewayModels: readGatewayModelCards(metadata.gatewayModels),
    principleCards: readGatewayPrincipleCards(metadata.principleCards),
    bottomCtaTitle: readString(metadata.bottomCtaTitle, 'Need a gateway for a specific site?'),
    bottomCtaDescription: readString(
      metadata.bottomCtaDescription,
      'Tell us your field devices, protocol, uplink method, and deployment environment. We will map your project to the right gateway or RTU path.',
    ),
    bottomCtaLabel: readString(metadata.bottomCtaLabel, 'Request Gateway Quote'),
    bottomCtaHref: readString(metadata.bottomCtaHref, '/contact'),
  };
}

function createDemoSiteCopy(markdown: string): SiteCopyDemoPage {
  const { metadata } = parseFrontmatter(markdown);

  return {
    id: readString(metadata.id, 'demopage'),
    eyebrow: readString(metadata.eyebrow, 'AI IoT Dashboard Preview'),
    heroTitle: readString(metadata.heroTitle, 'AI Industrial Operations Dashboard'),
    heroDescription: readString(
      metadata.heroDescription,
      'A read-only preview of an industrial IoT operations platform for devices, telemetry, SCADA views, workflow automation, remote control, and AI-assisted troubleshooting.',
    ),
    heroCtaLabel: readString(metadata.heroCtaLabel, 'Request Dashboard Consultation'),
    heroCtaHref: readString(metadata.heroCtaHref, '/contact'),
    heroCtaAnalyticsLabel: readString(metadata.heroCtaAnalyticsLabel, 'Request AI Dashboard Consultation'),
    overviewLabel: readString(metadata.overviewLabel, 'Overview'),
    overviewStatus: readString(metadata.overviewStatus, 'Live telemetry'),
    overviewDescription: readString(
      metadata.overviewDescription,
      'IoTEdges Demo Site / Pump, factory, energy, access and environmental assets',
    ),
    overviewBadges: Array.isArray(metadata.overviewBadges)
      ? metadata.overviewBadges.map((item) => readString(item)).filter(Boolean)
      : [],
    bottomLeftTitle: readString(metadata.bottomLeftTitle, 'AI IoT Dashboard for Industrial Operations'),
    bottomLeftParagraphs: Array.isArray(metadata.bottomLeftParagraphs)
      ? metadata.bottomLeftParagraphs.map((item) => readString(item)).filter(Boolean)
      : [],
    bottomRightTitle: readString(metadata.bottomRightTitle, 'Platform Architecture and Capabilities'),
    bottomRightItems: readDemoCapabilityItems(metadata.bottomRightItems),
  };
}

const fallbackHomeCopy: SiteCopyHomePage = {
  id: 'homepage',
  heroEyebrow: 'Next-Gen Industrial Monitoring',
  heroTitle: 'Industrial IoT for Factories, Energy & Remote Assets',
  heroHighlight: 'Factories',
  heroDescription:
    'Monitor energy usage, machines, solar farms, and remote equipment in real time with industrial gateways, AI-powered dashboards, and smart alerts.',
  heroPrimaryCtaLabel: 'View Live Demo',
  heroPrimaryCtaHref: '/demo',
  heroSecondaryCtaLabel: 'View Products',
  heroSecondaryCtaHref: '/products',
  stats: [],
  trustEyebrow: 'Enterprise Grade',
  trustPills: [],
  problemsTitle: 'Manufacturing Problems We Solve',
  problemsDescription: 'Lack of visibility leads to unnecessary costs and machine downtime.',
  problemCards: [],
  solutionTitle: 'The Complete Monitoring Solution',
  solutionDescription: 'Everything you need from hardware data collection to AI-driven insights.',
  solutionSteps: [],
  productsTitle: 'Core Hardware & Software',
  productsDescription:
    'Industrial gateways, RTUs, Remote IO modules, remote relay controllers, access controllers, and AI dashboard software.',
  productsBrowseLabel: 'View all products',
  productsBrowseHref: '/products',
  bottomCtaTitle: 'Make industrial energy and equipment visible from anywhere.',
  bottomCtaDescription: 'Tell us your monitoring project. Get a customized solution proposal within 24 hours.',
  bottomPrimaryCtaLabel: 'Request Quote',
  bottomPrimaryCtaHref: '/contact',
  bottomSecondaryCtaLabel: 'View Dashboard Preview',
  bottomSecondaryCtaHref: '/demo',
};

const homeMarkdown = markdownModules['../content/site-copy/homepage.md'] || Object.values(markdownModules)[0];
const aboutMarkdown = markdownModules['../content/site-copy/aboutpage.md'];
const contactMarkdown = markdownModules['../content/site-copy/contactpage.md'];
const gatewayMarkdown = markdownModules['../content/site-copy/gatewaypage.md'];
const demoMarkdown = markdownModules['../content/site-copy/demopage.md'];

export const homeSiteCopy = homeMarkdown ? createHomeSiteCopy(homeMarkdown) : fallbackHomeCopy;

export const aboutSiteCopy: SiteCopyAboutPage = aboutMarkdown
  ? createAboutSiteCopy(aboutMarkdown)
  : {
      id: 'aboutpage',
      heroTitle: 'We Build Remote Equipment Monitoring Solutions',
      heroDescription:
        'IoTEdges provides industrial-grade edge hardware, Modbus MQTT gateways, and cloud platforms to make legacy industrial equipment visible, measurable, and manageable remotely.',
      missionTitle: 'Our Mission in Industrial IoT',
      missionParagraphs: [],
      missionBullets: [],
      imageUrl: '/uploads/about/about-industrial-iot.svg',
      imageOverlayTitle: 'Driven by Engineering',
      imageOverlayDescription: 'Building hardware that survives the workshop floor.',
      stats: [],
      reasonsTitle: 'Why Choose IoTEdges as your IoT Partner?',
      reasons: [],
      partnerTitle: 'Partner with an Industrial IoT Manufacturer',
      partnerDescription:
        "Are you a system integrator, EPC contractor, or software team looking to integrate reliable, scalable hardware into your operational stack? Let's work together to build the future of industry.",
      partnerCtaLabel: 'Become a Partner',
      partnerCtaHref: '/contact',
    };

export const contactSiteCopy: SiteCopyContactPage = contactMarkdown
  ? createContactSiteCopy(contactMarkdown)
  : {
      id: 'contactpage',
      heroTitle: 'Request a Quote',
      heroDescription: 'Partner with us to build your next-generation industrial IoT infrastructure.',
      heroImageUrl: '/uploads/contact/contact-industrial-iot.svg',
      introTitle: 'Get a Quote for Your Industrial IoT Project',
      introDescription:
        'Tell us about your factory energy monitoring system or remote equipment tracking requirements. Our engineering team usually responds with a technical proposal within 24 hours.',
      contactInfo: [],
      faqTitle: 'Frequently Asked Questions',
      faqs: [],
    };

export const gatewaySiteCopy: SiteCopyGatewayPage = gatewayMarkdown
  ? createGatewaySiteCopy(gatewayMarkdown)
  : {
      id: 'gatewaypage',
      eyebrow: 'IoTEdges Gateway Family',
      heroTitle: 'Industrial IoT Gateways',
      heroDescription:
        'Start from practical Ethernet, WiFi and cellular gateway models, then match the uplink, field protocol and dashboard requirements to the project.',
      gatewayModels: [],
      principleCards: [],
      bottomCtaTitle: 'Need a gateway for a specific site?',
      bottomCtaDescription:
        'Tell us your field devices, protocol, uplink method, and deployment environment. We will map your project to the right gateway or RTU path.',
      bottomCtaLabel: 'Request Gateway Quote',
      bottomCtaHref: '/contact',
    };

export const demoSiteCopy: SiteCopyDemoPage = demoMarkdown
  ? createDemoSiteCopy(demoMarkdown)
  : {
      id: 'demopage',
      eyebrow: 'AI IoT Dashboard Preview',
      heroTitle: 'AI Industrial Operations Dashboard',
      heroDescription:
        'A read-only preview of an industrial IoT operations platform for devices, telemetry, SCADA views, workflow automation, remote control, and AI-assisted troubleshooting.',
      heroCtaLabel: 'Request Dashboard Consultation',
      heroCtaHref: '/contact',
      heroCtaAnalyticsLabel: 'Request AI Dashboard Consultation',
      overviewLabel: 'Overview',
      overviewStatus: 'Live telemetry',
      overviewDescription: 'IoTEdges Demo Site / Pump, factory, energy, access and environmental assets',
      overviewBadges: [],
      bottomLeftTitle: 'AI IoT Dashboard for Industrial Operations',
      bottomLeftParagraphs: [],
      bottomRightTitle: 'Platform Architecture and Capabilities',
      bottomRightItems: [],
    };
