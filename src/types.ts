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
  specs: ProductSpec[];
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
