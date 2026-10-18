import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'CloudPulse Monitoring Suite',
      subtitle: 'Real-time Distributed Infrastructure Telemetry',
      description: 'A mission-critical dashboard for monitoring microservices, distributed logs, and latency spikes across multiple cloud providers.',
      features: [
        'Live streaming WebSocket telemetry data with Sub-100ms updates',
        'Customizable drag-and-drop dashboard widgets',
        'Automated anomaly detection alerts and incident triaging',
      ],
      technologies: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Chart.js'],
      liveUrl: 'https://example.com/cloudpulse',
      githubUrl: 'https://github.com/example/cloudpulse',
      featured: true,
    },
    {
      id: 2,
      title: 'DevCollab Workspace',
      subtitle: 'Synchronous Code & Canvas Collaboration Platform',
      description: 'Browser-based real-time collaborative workspace allowing remote engineering teams to pair program and sketch system architectures together.',
      features: [
        'Operational Transformation & CRDT-powered synchronous text editing',
        'Integrated WebRTC voice & video conferencing',
        'Markdown documentation export with version history',
      ],
      technologies: ['Angular', 'WebRTC', 'SCSS', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://example.com/devcollab',
      githubUrl: 'https://github.com/example/devcollab',
      featured: true,
    },
    {
      id: 3,
      title: 'Aura Commerce Engine',
      subtitle: 'Headless E-Commerce Storefront',
      description: 'Next-gen storefront with ultra-fast page transitions, accessible cart management, and seamless multi-currency checkout integration.',
      features: [
        'Instantaneous client-side navigation and route prefetching',
        'Comprehensive accessibility compliance (WCAG 2.1 AA)',
        'Stripe and PayPal multi-currency gateway integration',
      ],
      technologies: ['Angular', 'Tailwind CSS', 'Stripe API', 'TypeScript'],
      liveUrl: 'https://example.com/aurastore',
      githubUrl: 'https://github.com/example/aurastore',
      featured: false,
    },
    {
      id: 4,
      title: 'TaskFlow Kanban CLI & Web',
      subtitle: 'Developer-First Productivity System',
      description: 'Keyboard-driven project management board with deep GitHub Issues integration and offline-first IndexedDB persistence.',
      features: [
        'Full offline mode with background sync upon reconnection',
        'Vim-style navigation shortcuts for power users',
        'Bidirectional sync with GitHub and GitLab issues',
      ],
      technologies: ['Angular', 'Tailwind CSS', 'IndexedDB', 'TypeScript'],
      liveUrl: 'https://example.com/taskflow',
      githubUrl: 'https://github.com/example/taskflow',
      featured: false,
    },
  ];
}
