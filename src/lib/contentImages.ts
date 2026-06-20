export const DEFAULT_PRODUCT_IMAGE_URL = '/uploads/placeholders/product-cover.svg';
export const DEFAULT_SOLUTION_IMAGE_URL = '/uploads/placeholders/solution-cover.svg';
export const DEFAULT_BLOG_IMAGE_URL = '/uploads/placeholders/blog-cover.svg';
export const DEFAULT_KNOWLEDGE_IMAGE_URL = '/uploads/placeholders/knowledge-cover.svg';

function normalizeImageUrl(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : '';
}

export function resolveProductImageUrl(imageUrl: unknown) {
  return normalizeImageUrl(imageUrl) || DEFAULT_PRODUCT_IMAGE_URL;
}

export function resolveSolutionImageUrl(imageUrl: unknown) {
  return normalizeImageUrl(imageUrl) || DEFAULT_SOLUTION_IMAGE_URL;
}

export function resolveBlogImageUrl(imageUrl: unknown) {
  return normalizeImageUrl(imageUrl) || DEFAULT_BLOG_IMAGE_URL;
}

export function resolveKnowledgeImageUrl(imageUrl: unknown) {
  return normalizeImageUrl(imageUrl) || DEFAULT_KNOWLEDGE_IMAGE_URL;
}
