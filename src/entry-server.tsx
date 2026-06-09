import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from './App';
import { blogPosts } from './data/blog';
import { productPages } from './data/products';
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
    '/products',
    ...productPages.map(product => `/products/${product.id}`),
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
      title: `${post.title} | IoTEdges Blog`,
      description: post.excerpt,
      imageUrl: post.imageUrl,
      type: 'article',
    };
  }

  const productMatch = url.match(/^\/products\/([^/]+)$/);
  const product = productMatch ? productPages.find(item => item.id === productMatch[1]) : null;

  if (product) {
    return {
      title: `${product.title} | IoTEdges Products`,
      description: product.excerpt,
      type: 'product',
    };
  }

  const solutionMatch = url.match(/^\/solutions\/([^/]+)$/);
  const solution = solutionMatch ? solutions.find(item => item.id === solutionMatch[1]) : null;

  if (solution) {
    return {
      title: `${solution.title} | IoTEdges Solutions`,
      description: solution.description,
      imageUrl: solution.image,
      type: 'article',
    };
  }

  if (url === '/blog') {
    return {
      title: 'Industrial IoT Blog | IoTEdges',
      description: 'Insights, guides, and trends on factory energy monitoring, remote equipment tracking, and industrial networking.',
      type: 'website',
    };
  }

  if (url === '/products') {
    return {
      title: 'Industrial IoT Products | IoTEdges',
      description: 'Explore IoTEdges industrial IoT gateways, RTUs and Remote IO modules with validation-aware product drafts for Modbus, MQTT, Ethernet and RS485 applications.',
      type: 'website',
    };
  }

  return {
    title: 'Industrial IoT Monitoring & Energy Management Platform | IoTEdges',
    description: 'IoTEdges provides industrial energy monitoring systems, Modbus to MQTT IoT gateways, and remote equipment monitoring solutions for factories, solar farms, and cold storage.',
    type: 'website',
  };
}
