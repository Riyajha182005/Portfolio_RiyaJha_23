import { Component, signal, computed } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  gradient: string;
  tags: string[];
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly selectedCategory = signal<string>('All');

  protected readonly categories = ['All', 'UI Design', 'Web Apps', 'Mobile', 'Design System'];

  protected readonly items: GalleryItem[] = [
    {
      id: 1,
      title: 'Fintech Analytics Dashboard',
      category: 'Web Apps',
      description: 'Real-time financial telemetry with dark mode high-contrast metrics and interactive charts.',
      gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
      tags: ['Dashboard', 'Tailwind', 'Data Viz'],
    },
    {
      id: 2,
      title: 'Neomorphic Music Player',
      category: 'UI Design',
      description: 'Sleek acoustic interface with ambient glassmorphism and tactile dynamic controls.',
      gradient: 'from-purple-600 via-pink-600 to-rose-500',
      tags: ['Audio', 'Glassmorphism', 'Figma'],
    },
    {
      id: 3,
      title: 'Crypto Wallet Mobile App',
      category: 'Mobile',
      description: 'Decentralized asset manager with biometric authentication and gas tracker widgets.',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      tags: ['Mobile UI', 'Web3', 'Prototypes'],
    },
    {
      id: 4,
      title: 'Enterprise Design Token System',
      category: 'Design System',
      description: 'Cross-platform design token framework unifying typography, spacing, and semantic color scales.',
      gradient: 'from-amber-500 via-orange-600 to-red-600',
      tags: ['SCSS', 'Tokens', 'Components'],
    },
    {
      id: 5,
      title: 'AI Prompt Studio Interface',
      category: 'Web Apps',
      description: 'Interactive playground for prompt tuning, multimodal streaming tokens, and model switching.',
      gradient: 'from-violet-600 via-purple-700 to-indigo-800',
      tags: ['AI UI', 'Streaming', 'Angular'],
    },
    {
      id: 6,
      title: 'Eco Living Smart Home Controller',
      category: 'Mobile',
      description: 'Sustainable smart home energy monitoring mobile layout with automated thermal regulation.',
      gradient: 'from-teal-500 via-green-600 to-emerald-700',
      tags: ['IoT', 'Clean Energy', 'Mobile'],
    },
  ];

  protected readonly filteredItems = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') {
      return this.items;
    }
    return this.items.filter((item) => item.category === cat);
  });

  protected setCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
