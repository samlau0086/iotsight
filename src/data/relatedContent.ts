import { blogPosts } from './blog';
import { knowledgePages } from './knowledge';
import { productPages } from './products';
import { solutions } from './solutions';
import { BlogPost, ContentLink, KnowledgePage, ProductPage, SolutionPage } from '../types';

type ScoredLink = ContentLink & {
  score: number;
  order: number;
};

function normalizeRoute(route: string) {
  return String(route || '').trim().replace(/\/+$/, '');
}

function byScoreAndOrder(left: ScoredLink, right: ScoredLink) {
  return right.score - left.score || left.order - right.order || left.title.localeCompare(right.title);
}

function dedupeScoredLinks(links: ScoredLink[], max = 4): ContentLink[] {
  const deduped = new Map<string, ScoredLink>();

  for (const link of links.sort(byScoreAndOrder)) {
    const existing = deduped.get(link.href);
    if (!existing || byScoreAndOrder(link, existing) < 0) {
      deduped.set(link.href, link);
    }
  }

  return Array.from(deduped.values())
    .sort(byScoreAndOrder)
    .slice(0, max)
    .map(({ score: _score, order: _order, ...link }) => link);
}

function productHrefMatches(product: ProductPage, href: string) {
  const normalizedHref = normalizeRoute(href);
  return normalizedHref === normalizeRoute(product.route) || normalizedHref === normalizeRoute(`/products/${product.id}`);
}

function productToLink(product: ProductPage): ScoredLink {
  return {
    title: product.title,
    href: normalizeRoute(product.route) || `/products/${product.id}`,
    score: 0,
    order: product.order,
  };
}

function solutionToLink(solution: SolutionPage): ScoredLink {
  return {
    title: solution.title,
    href: normalizeRoute(solution.link) || `/solutions/${solution.id}`,
    score: 0,
    order: solution.order,
  };
}

function knowledgeToLink(page: KnowledgePage): ScoredLink {
  return {
    title: page.title,
    href: `/knowledge/${page.id}`,
    score: 0,
    order: page.order,
  };
}

function blogToLink(post: BlogPost & { order?: number }): ScoredLink {
  return {
    title: post.title,
    href: `/blog/${post.id}`,
    score: 0,
    order: post.order ?? 0,
  };
}

export function resolveInternalRouteTitle(href: string) {
  const normalizedHref = normalizeRoute(href);

  const product = productPages.find((item) => productHrefMatches(item, normalizedHref));
  if (product) return product.title;

  const solution = solutions.find((item) => normalizeRoute(item.link) === normalizedHref || normalizeRoute(`/solutions/${item.id}`) === normalizedHref);
  if (solution) return solution.title;

  const knowledge = knowledgePages.find((item) => normalizeRoute(`/knowledge/${item.id}`) === normalizedHref);
  if (knowledge) return knowledge.title;

  const blog = blogPosts.find((item) => normalizeRoute(`/blog/${item.id}`) === normalizedHref);
  if (blog) return blog.title;

  return null;
}

export function getRelatedLinksForProduct(product: ProductPage) {
  const relatedSolutions = dedupeScoredLinks(
    solutions
      .filter((solution) => solution.relatedProducts.some((link) => productHrefMatches(product, link.href)))
      .map((solution) => ({ ...solutionToLink(solution), score: 4 })),
  );

  const relatedKnowledge = dedupeScoredLinks(
    knowledgePages
      .filter((page) => page.relatedProducts.includes(product.id))
      .map((page) => ({ ...knowledgeToLink(page), score: 4 })),
  );

  const relatedBlog = dedupeScoredLinks(
    blogPosts
      .filter((post) => post.relatedProducts.includes(product.id))
      .map((post, index) => ({ ...blogToLink({ ...post, order: index }), score: 4 })),
  );

  return { relatedSolutions, relatedKnowledge, relatedBlog };
}

export function getRelatedLinksForKnowledge(page: KnowledgePage) {
  const pageRoute = normalizeRoute(`/knowledge/${page.id}`);
  const productIds = new Set(page.relatedProducts);

  const relatedSolutions = dedupeScoredLinks(
    solutions
      .map((solution) => {
        let score = 0;

        if (solution.relatedResources.some((link) => normalizeRoute(link.href) === pageRoute)) {
          score += 4;
        }

        const sharedProducts = solution.relatedProducts.filter((link) =>
          productPages.some((product) => productIds.has(product.id) && productHrefMatches(product, link.href)),
        ).length;
        score += sharedProducts;

        return score > 0 ? { ...solutionToLink(solution), score } : null;
      })
      .filter((item): item is ScoredLink => Boolean(item)),
  );

  const relatedBlog = dedupeScoredLinks(
    blogPosts
      .map((post, index) => {
        let score = 0;

        if (post.relatedResources.some((href) => normalizeRoute(href) === pageRoute)) {
          score += 4;
        }

        const sharedProducts = post.relatedProducts.filter((productId) => productIds.has(productId)).length;
        score += sharedProducts;

        return score > 0 ? { ...blogToLink({ ...post, order: index }), score } : null;
      })
      .filter((item): item is ScoredLink => Boolean(item)),
  );

  return { relatedSolutions, relatedBlog };
}

export function getRelatedLinksForSolution(solution: SolutionPage) {
  const solutionRoute = normalizeRoute(solution.link) || normalizeRoute(`/solutions/${solution.id}`);
  const solutionProductIds = new Set(
    productPages
      .filter((product) => solution.relatedProducts.some((link) => productHrefMatches(product, link.href)))
      .map((product) => product.id),
  );

  const relatedKnowledge = dedupeScoredLinks(
    knowledgePages
      .map((page) => {
        let score = 0;
        const sharedProducts = page.relatedProducts.filter((productId) => solutionProductIds.has(productId)).length;
        score += sharedProducts;

        if (solution.relatedResources.some((link) => normalizeRoute(link.href) === normalizeRoute(`/knowledge/${page.id}`))) {
          score += 4;
        }

        return score > 0 ? { ...knowledgeToLink(page), score } : null;
      })
      .filter((item): item is ScoredLink => Boolean(item)),
  );

  const relatedBlog = dedupeScoredLinks(
    blogPosts
      .map((post, index) => {
        let score = 0;

        if (post.relatedResources.some((href) => normalizeRoute(href) === solutionRoute)) {
          score += 4;
        }

        const sharedProducts = post.relatedProducts.filter((productId) => solutionProductIds.has(productId)).length;
        score += sharedProducts;

        return score > 0 ? { ...blogToLink({ ...post, order: index }), score } : null;
      })
      .filter((item): item is ScoredLink => Boolean(item)),
  );

  return { relatedKnowledge, relatedBlog };
}

export function getRelatedLinksForBlog(post: BlogPost) {
  const postProductIds = new Set(post.relatedProducts);
  const directResourceRoutes = new Set(post.relatedResources.map(normalizeRoute));

  const relatedSolutions = dedupeScoredLinks(
    solutions
      .map((solution) => {
        let score = 0;
        const solutionRoute = normalizeRoute(solution.link) || normalizeRoute(`/solutions/${solution.id}`);

        if (directResourceRoutes.has(solutionRoute)) {
          score += 4;
        }

        const sharedProducts = solution.relatedProducts.filter((link) =>
          productPages.some((product) => postProductIds.has(product.id) && productHrefMatches(product, link.href)),
        ).length;
        score += sharedProducts;

        return score > 0 ? { ...solutionToLink(solution), score } : null;
      })
      .filter((item): item is ScoredLink => Boolean(item)),
  );

  const relatedKnowledge = dedupeScoredLinks(
    knowledgePages
      .map((page) => {
        let score = 0;

        if (directResourceRoutes.has(normalizeRoute(`/knowledge/${page.id}`))) {
          score += 4;
        }

        const sharedProducts = page.relatedProducts.filter((productId) => postProductIds.has(productId)).length;
        score += sharedProducts;

        return score > 0 ? { ...knowledgeToLink(page), score } : null;
      })
      .filter((item): item is ScoredLink => Boolean(item)),
  );

  return { relatedSolutions, relatedKnowledge };
}
