import { Component } from '@angular/core';

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences: WorkExperience[] = [
    {
      role: 'Senior Frontend Engineer',
      company: 'TechSphere Innovations',
      period: '2023 - Present',
      description: 'Lead engineer for flagship enterprise SaaS portal built using modern Angular and state management architecture.',
      achievements: [
        'Architected reusable component design system reducing UI development turnaround by 35%.',
        'Optimized core web vitals, achieving 98+ Lighthouse scores across major client dashboards.',
        'Mentored junior engineers and conducted weekly code reviews for frontend standards.',
      ],
      skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'CI/CD'],
    },
    {
      role: 'Frontend Software Developer',
      company: 'Digital Wave Studios',
      period: '2021 - 2023',
      description: 'Engineered high-traffic e-commerce and client-facing web applications with responsive and accessible designs.',
      achievements: [
        'Integrated RESTful APIs and real-time WebSocket communication for live notifications.',
        'Migrated legacy UI codebase to modular standalone components and SCSS design tokens.',
        'Collaborated with product designers to create pixel-perfect user journeys.',
      ],
      skills: ['Angular', 'SCSS', 'JavaScript', 'REST APIs', 'Git'],
    },
    {
      role: 'Junior Web Developer',
      company: 'Apex Code Labs',
      period: '2020 - 2021',
      description: 'Built interactive customer portals, marketing landing pages, and internal reporting tools.',
      achievements: [
        'Developed dynamic forms with client-side validation and internationalization.',
        'Assisted in unit and integration test coverage with Jasmine and Vitest.',
      ],
      skills: ['HTML5', 'SCSS', 'Angular', 'TypeScript'],
    },
  ];

  protected readonly education = [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of Technology',
      year: '2016 - 2020',
      details: 'Graduated with Honors. Specialized in Software Architecture and Human-Computer Interaction.',
    },
    {
      degree: 'Angular Certified Developer',
      institution: 'Frontend Masters & Angular Training',
      year: '2022',
      details: 'Advanced architecture, performance optimization, and reactive programming certification.',
    },
  ];
}
