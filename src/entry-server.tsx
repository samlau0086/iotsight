import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from './App';
import { blogPosts } from './data/blog';
import { productPages } from './data/products';
import { knowledgePages } from './data/knowledge';
import { solutions } from './data/solutions';
import { aboutSiteCopy, contactSiteCopy, demoSiteCopy, gatewaySiteCopy } from './data/siteCopy';

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
    '/solutions',
    '/gateway',
    '/demo',
    '/about',
    '/contact',
    '/products',
    '/accessories',
    ...productPages.map(product => `/products/${product.id}`),
    '/knowledge',
    ...knowledgePages.map(page => `/knowledge/${page.id}`),
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

  const knowledgeMatch = url.match(/^\/knowledge\/([^/]+)$/);
  const knowledge = knowledgeMatch ? knowledgePages.find(item => item.id === knowledgeMatch[1]) : null;

  if (knowledge) {
    return {
      title: `${knowledge.title} | IoTEdges Knowledge Base`,
      description: knowledge.excerpt,
      type: 'article',
    };
  }

  if (url === '/knowledge') {
    return {
      title: 'Industrial IoT Knowledge Base | IoTEdges',
      description: 'Practical protocol and connectivity guides for Modbus, MQTT, RS485 and industrial IoT product selection.',
      type: 'website',
    };
  }

  if (url === '/products') {
    return {
      title: 'Industrial IoT Products | IoTEdges',
      description: 'Explore IoTEdges industrial IoT gateways, RTUs, remote relay controllers, Remote IO modules and dashboard software for Modbus, MQTT, Ethernet, WiFi and 4G applications.',
      type: 'website',
    };
  }

  if (url === '/about') {
    return {
      title: `${aboutSiteCopy.heroTitle} | IoTEdges`,
      description: aboutSiteCopy.heroDescription,
      type: 'website',
    };
  }

  if (url === '/contact') {
    return {
      title: `${contactSiteCopy.heroTitle} | IoTEdges`,
      description: contactSiteCopy.heroDescription,
      type: 'website',
    };
  }

  if (url === '/gateway') {
    return {
      title: `${gatewaySiteCopy.heroTitle} | IoTEdges`,
      description: gatewaySiteCopy.heroDescription,
      type: 'website',
    };
  }

  if (url === '/demo') {
    return {
      title: `${demoSiteCopy.heroTitle} | IoTEdges`,
      description: demoSiteCopy.heroDescription,
      type: 'website',
    };
  }

  if (url === '/accessories') {
    return {
      title: 'Industrial IoT Accessories for RTU, Gateway and Remote IO Projects | IoTEdges',
      description: 'Recommended project accessories for IoTEdges industrial IoT deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors and meters.',
      type: 'website',
    };
  }

  return {
    title: 'Industrial IoT Monitoring & Energy Management Platform | IoTEdges',
    description: 'IoTEdges provides industrial energy monitoring systems, Modbus to MQTT IoT gateways, and remote equipment monitoring solutions for factories, solar farms, and cold storage.',
    type: 'website',
  };
}
