export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  relatedProducts: string[];
  relatedResources: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecGroup {
  title: string;
  specs: ProductSpec[];
}

export interface ProductSelectionGuide {
  chooseWhen: string[];
  notFitWhen: string[];
  compareLinks: Array<{
    href: string;
    label: string;
  }>;
}

export interface ProductBomGroup {
  title: string;
  items: string[];
}

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export interface ProductPage {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  category: string;
  model: string;
  status: string;
  primaryKeyword: string;
  route: string;
  order: number;
  specGroups: ProductSpecGroup[];
  specs: ProductSpec[];
  selectionGuide?: ProductSelectionGuide;
  bomGroups: ProductBomGroup[];
  preSalesFaq: ProductFaqItem[];
}

export interface KnowledgePage {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  primaryKeyword: string;
  relatedProducts: string[];
  order: number;
}

export interface ContentLink {
  title: string;
  href: string;
}

export interface SolutionPage {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  architectureImage?: string;
  recommendedProductType: string;
  recommendedUplink: string;
  deploymentEnvironment: string;
  detailedContent: string[];
  hardware: string[];
  software: string[];
  relatedProducts: ContentLink[];
  relatedResources: ContentLink[];
  iconKey: string;
  link: string;
  order: number;
}

export interface AccessoryOverviewCard {
  title: string;
  text: string;
  iconKey: string;
}

export interface AccessoryGroup {
  title: string;
  description: string;
  iconKey: string;
  items: string[];
}

export interface AccessorySelectionGuide {
  title: string;
  href: string;
  summary: string;
}

export interface AccessoryProductMapRow {
  product: string;
  href: string;
  accessories: string;
}

export interface AccessoryProjectKit {
  title: string;
  iconKey: string;
  contents: string[];
}

export interface AccessoryPage {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  content: string;
  overviewCards: AccessoryOverviewCard[];
  groups: AccessoryGroup[];
  selectionGuides: AccessorySelectionGuide[];
  productAccessoryMap: AccessoryProductMapRow[];
  projectKits: AccessoryProjectKit[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SiteStat {
  value: string;
  label: string;
}

export interface SiteFeaturePill {
  text: string;
}

export interface SiteIconCard {
  title: string;
  text: string;
  iconKey: string;
}

export interface SiteProblemCard {
  title: string;
  description: string;
  iconKey: string;
}

export interface SiteSolutionStep {
  title: string;
  iconKey: string;
}

export interface SiteCopyHomePage {
  id: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;
  stats: SiteStat[];
  trustEyebrow: string;
  trustPills: SiteFeaturePill[];
  problemsTitle: string;
  problemsDescription: string;
  problemCards: SiteProblemCard[];
  solutionTitle: string;
  solutionDescription: string;
  solutionSteps: SiteSolutionStep[];
  productsTitle: string;
  productsDescription: string;
  productsBrowseLabel: string;
  productsBrowseHref: string;
  bottomCtaTitle: string;
  bottomCtaDescription: string;
  bottomPrimaryCtaLabel: string;
  bottomPrimaryCtaHref: string;
  bottomSecondaryCtaLabel: string;
  bottomSecondaryCtaHref: string;
}

export interface SiteBulletItem {
  text: string;
}

export interface SitePartnerReason {
  title: string;
  description: string;
}

export interface SiteCopyAboutPage {
  id: string;
  heroTitle: string;
  heroDescription: string;
  missionTitle: string;
  missionParagraphs: string[];
  missionBullets: SiteBulletItem[];
  imageUrl: string;
  imageOverlayTitle: string;
  imageOverlayDescription: string;
  stats: SiteStat[];
  reasonsTitle: string;
  reasons: SitePartnerReason[];
  partnerTitle: string;
  partnerDescription: string;
  partnerCtaLabel: string;
  partnerCtaHref: string;
}

export interface SiteContactInfoItem {
  title: string;
  value: string;
  iconKey: string;
}

export interface SiteFaqItem {
  question: string;
  answer: string;
}

export interface SiteCopyContactPage {
  id: string;
  heroTitle: string;
  heroDescription: string;
  heroImageUrl: string;
  introTitle: string;
  introDescription: string;
  contactInfo: SiteContactInfoItem[];
  faqTitle: string;
  faqs: SiteFaqItem[];
}

export interface SiteGatewayModelCard {
  title: string;
  model: string;
  href: string;
  ctaLabel: string;
  iconKey: string;
  text: string;
}

export interface SiteGatewayPrincipleCard {
  title: string;
  text: string;
  iconKey: string;
}

export interface SiteCopyGatewayPage {
  id: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  gatewayModels: SiteGatewayModelCard[];
  principleCards: SiteGatewayPrincipleCard[];
  bottomCtaTitle: string;
  bottomCtaDescription: string;
  bottomCtaLabel: string;
  bottomCtaHref: string;
}

export interface SiteDemoCapabilityItem {
  title: string;
  description: string;
}

export interface SiteCopyDemoPage {
  id: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  heroCtaAnalyticsLabel: string;
  overviewLabel: string;
  overviewStatus: string;
  overviewDescription: string;
  overviewBadges: string[];
  bottomLeftTitle: string;
  bottomLeftParagraphs: string[];
  bottomRightTitle: string;
  bottomRightItems: SiteDemoCapabilityItem[];
}
