import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from './App';
import { blogPosts } from './data/blog';
import { solutions } from './data/solutions';

export function render(url: string) {
  return renderToString(
    <React.StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <AppLayout />
      </MemoryRouter>
    </React.StrictMode>
  );
}

export function getPrerenderRoutes() {
  return [
    '/',
    '/factory-energy',
    '/solutions',
    '/gateway',
    '/demo',
    '/about',
    '/contact',
    '/blog',
    ...blogPosts.map(post => `/blog/${post.id}`),
    ...solutions.map(solution => `/solutions/${solution.id}`),
  ];
}

export function getSeoMeta(url: string) {
  const blogMatch = url.match(/^\/blog\/([^/]+)$/);
  const post = blogMatch ? blogPosts.find(item => item.id === blogMatch[1]) : null;

  if (post) {
    return {
      title: `${post.title} | IoTSight Blog`,
      description: post.excerpt,
      imageUrl: post.imageUrl,
      type: 'article',
    };
  }

  const solutionMatch = url.match(/^\/solutions\/([^/]+)$/);
  const solution = solutionMatch ? solutions.find(item => item.id === solutionMatch[1]) : null;

  if (solution) {
    return {
      title: `${solution.title} | IoTSight Solutions`,
      description: solution.description,
      imageUrl: solution.image,
      type: 'article',
    };
  }

  if (url === '/blog') {
    return {
      title: 'Industrial IoT Blog | IoTSight',
      description: 'Insights, guides, and trends on factory energy monitoring, remote equipment tracking, and industrial networking.',
      type: 'website',
    };
  }

  return {
    title: 'Industrial IoT Monitoring & Energy Management Platform | IoTSight',
    description: 'IoTSight provides industrial energy monitoring systems, Modbus to MQTT IoT gateways, and remote equipment monitoring solutions for factories, solar farms, and cold storage.',
    type: 'website',
  };
}
