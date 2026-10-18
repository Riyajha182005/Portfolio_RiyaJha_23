import { Component, signal, computed } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  badge: string;
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

  protected readonly categories = ['All', 'AI & Agents', 'Workflows', 'Computer Vision', 'Enterprise'];

  protected readonly items: GalleryItem[] = [
    {
      id: 1,
      title: 'Automated Telegram Scholarship Alert Bot',
      category: 'Workflows',
      badge: 'n8n & LLM Orchestration',
      description: 'System workflow integrating webhook listeners, parsing educational grants, and publishing instant notifications.',
      tags: ['n8n', 'Python', 'Telegram API', 'LLMs'],
    },
    {
      id: 2,
      title: 'Multi-Agent RAG & Calculator Flow',
      category: 'AI & Agents',
      badge: 'LangGraph & FAISS Architecture',
      description: 'LangGraph workflow combining mathematical reasoning agents with vector database similarity search.',
      tags: ['LangGraph', 'FAISS', 'Claude', 'Vector Search'],
    },
    {
      id: 3,
      title: 'Real-time Object Masking & Cloak',
      category: 'Computer Vision',
      badge: 'OpenCV Processing',
      description: 'Color detection and dynamic background subtraction pipeline executing at 60 FPS in real-time camera streams.',
      tags: ['OpenCV', 'Python', 'Computer Vision'],
    },
    {
      id: 4,
      title: 'Defense Power MOSFET Reliability Telemetry',
      category: 'Enterprise',
      badge: 'DRDO - SSPL Research',
      description: 'Accelerated stress condition analysis, failure-rate models, and semiconductor device degradation tracking.',
      tags: ['Predictive Maintenance', 'Semiconductors', 'Python'],
    },
    {
      id: 5,
      title: 'Pneumax Vendor Business Portal Modules',
      category: 'Enterprise',
      badge: 'Enterprise Architecture',
      description: 'Vendor lifecycle management UI with warranty tracking, status remarks, and secure document workflows.',
      tags: ['.NET Core', 'Vendor Portals', 'Testing'],
    },
    {
      id: 6,
      title: 'Prompt Engineering & LLM Optimization Matrix',
      category: 'AI & Agents',
      badge: 'IGDTUW Gen AI Research',
      description: 'Systematic prompt tuning benchmarks, few-shot prompt libraries, and output evaluation pipelines.',
      tags: ['Prompt Engineering', 'LLM Tuning', 'Evaluation'],
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
