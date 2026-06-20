import { SolutionPage, ContentLink } from '../types';
import { parseFrontmatter, readNumber, readOptionalString, readString, readStringArray } from '../lib/frontmatter';
import { defaultSolutionIcon, solutionIconsByKey } from './solutionIcons';
import { resolveSolutionImageUrl } from '../lib/contentImages';
import { isPublicEditorialStatus, resolveEditorialStatus } from '../lib/contentStatus';

const markdownModules = import.meta.glob('../content/solutions/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function readContentLinks(value: unknown): ContentLink[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null;
      }

      const title = readString((item as Record<string, unknown>).title);
      const href = readString((item as Record<string, unknown>).href);

      if (!title || !href) {
        return null;
      }

      return { title, href };
    })
    .filter((item): item is ContentLink => Boolean(item));
}

function createSolutionPage(path: string, markdown: string): SolutionPage {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'solution-page';
  const id = readString(metadata.id, fallbackId);
  const iconKey = readString(metadata.iconKey, 'zap');
  const link = readString(metadata.link, `/solutions/${id}`);

  return {
    id,
    title: readString(metadata.title, 'Untitled Solution'),
    description: readString(metadata.description),
    content,
    status: resolveEditorialStatus(metadata.status),
    image: resolveSolutionImageUrl(readString(metadata.image)),
    architectureImage: readOptionalString(metadata.architectureImage),
    recommendedProductType: readString(metadata.recommendedProductType),
    recommendedUplink: readString(metadata.recommendedUplink),
    deploymentEnvironment: readString(metadata.deploymentEnvironment),
    detailedContent: readStringArray(metadata.detailedContent),
    hardware: readStringArray(metadata.hardware),
    software: readStringArray(metadata.software),
    relatedProducts: readContentLinks(metadata.relatedProducts),
    relatedResources: readContentLinks(metadata.relatedResources),
    iconKey: solutionIconsByKey[iconKey] ? iconKey : 'zap',
    link,
    order: readNumber(metadata.order),
  };
}

export const solutions: SolutionPage[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createSolutionPage(path, markdown))
  .filter((solution) => isPublicEditorialStatus(solution.status))
  .sort((a, b) => a.order - b.order);

export function getSolutionIcon(iconKey: string) {
  return solutionIconsByKey[iconKey] || defaultSolutionIcon;
}
