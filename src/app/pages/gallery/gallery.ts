import { Component, HostListener, computed, signal } from '@angular/core';
import { InternshipGalleryItem, PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly data = PORTFOLIO_DATA;

  protected readonly categories: ('All' | 'Internships' | 'Events')[] = [
    'All',
    'Internships',
    'Events',
  ];

  protected readonly selectedCategory = signal<'All' | 'Internships' | 'Events'>('All');

  protected readonly selectedLightboxItem = signal<InternshipGalleryItem | null>(null);

  protected readonly filteredItems = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') {
      return this.data.internshipGallery;
    }
    return this.data.internshipGallery.filter((item) => item.category === cat);
  });

  protected setCategory(category: 'All' | 'Internships' | 'Events'): void {
    this.selectedCategory.set(category);
  }

  protected openLightbox(item: InternshipGalleryItem): void {
    this.selectedLightboxItem.set(item);
  }

  protected closeLightbox(): void {
    this.selectedLightboxItem.set(null);
  }

  protected prevItem(): void {
    const current = this.selectedLightboxItem();
    if (!current) return;
    const items = this.filteredItems();
    const currentIndex = items.findIndex((i) => i.id === current.id);
    if (currentIndex > 0) {
      this.selectedLightboxItem.set(items[currentIndex - 1]);
    } else {
      this.selectedLightboxItem.set(items[items.length - 1]);
    }
  }

  protected nextItem(): void {
    const current = this.selectedLightboxItem();
    if (!current) return;
    const items = this.filteredItems();
    const currentIndex = items.findIndex((i) => i.id === current.id);
    if (currentIndex < items.length - 1) {
      this.selectedLightboxItem.set(items[currentIndex + 1]);
    } else {
      this.selectedLightboxItem.set(items[0]);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.selectedLightboxItem()) {
      this.closeLightbox();
    }
  }

  @HostListener('document:keydown.arrowright')
  protected onArrowRight(): void {
    if (this.selectedLightboxItem()) {
      this.nextItem();
    }
  }

  @HostListener('document:keydown.arrowleft')
  protected onArrowLeft(): void {
    if (this.selectedLightboxItem()) {
      this.prevItem();
    }
  }
}
