import { parse as parseYaml } from 'yaml';

export type FrontmatterData = Record<string, unknown>;

export function parseFrontmatter(markdown: string): { metadata: FrontmatterData; content: string } {
  const normalizedMarkdown = markdown.replace(/^\uFEFF/, '');

  if (!normalizedMarkdown.startsWith('---')) {
    return {
      metadata: {},
      content: normalizedMarkdown.trim(),
    };
  }

  const lines = normalizedMarkdown.split(/\r?\n/);

  if (lines[0]?.trim() !== '---') {
    return {
      metadata: {},
      content: normalizedMarkdown.trim(),
    };
  }

  let closingLineIndex = -1;

  for (let index = 1; index < lines.length; index += 1) {
    if (/^(---|\.{3})\s*$/.test(lines[index] ?? '')) {
      closingLineIndex = index;
      break;
    }
  }

  if (closingLineIndex === -1) {
    return {
      metadata: {},
      content: normalizedMarkdown.trim(),
    };
  }

  const frontmatterSource = lines.slice(1, closingLineIndex).join('\n');
  const contentSource = lines.slice(closingLineIndex + 1).join('\n');
  const parsedMetadata = parseYaml(frontmatterSource);

  return {
    metadata: parsedMetadata && typeof parsedMetadata === 'object' ? (parsedMetadata as FrontmatterData) : {},
    content: contentSource.trim(),
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
