import matter from 'gray-matter';

export type FrontmatterData = Record<string, unknown>;

export function parseFrontmatter(markdown: string): { metadata: FrontmatterData; content: string } {
  const normalizedMarkdown = markdown.replace(/^\uFEFF/, '');
  const parsed = matter(normalizedMarkdown);

  return {
    metadata: (parsed.data || {}) as FrontmatterData,
    content: String(parsed.content || '').trim(),
  };
}

export function readString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

export function readOptionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

export function readNumber(value: unknown, fallback = 0): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

export function readStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}
