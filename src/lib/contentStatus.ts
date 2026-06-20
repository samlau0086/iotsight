export const EDITORIAL_PUBLIC_STATUS = 'Published';

export const editorialStatuses = ['Draft', 'Review', 'Published'] as const;
export type EditorialStatus = (typeof editorialStatuses)[number];

export const productStatuses = ['Draft', 'Preview', 'Available for project inquiry', 'Published'] as const;
export type ProductStatus = (typeof productStatuses)[number];

function isAllowedStatus<T extends readonly string[]>(value: string, allowed: T): value is T[number] {
  return allowed.includes(value as T[number]);
}

export function resolveEditorialStatus(value: unknown): EditorialStatus {
  const normalized = typeof value === 'string' ? value.trim() : '';
  return isAllowedStatus(normalized, editorialStatuses) ? normalized : EDITORIAL_PUBLIC_STATUS;
}

export function resolveProductStatus(value: unknown): ProductStatus {
  const normalized = typeof value === 'string' ? value.trim() : '';
  return isAllowedStatus(normalized, productStatuses) ? normalized : EDITORIAL_PUBLIC_STATUS;
}

export function isPublicEditorialStatus(status: string) {
  return resolveEditorialStatus(status) === EDITORIAL_PUBLIC_STATUS;
}

export function isPublicProductStatus(status: string) {
  return resolveProductStatus(status) !== 'Draft';
}
