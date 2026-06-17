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
