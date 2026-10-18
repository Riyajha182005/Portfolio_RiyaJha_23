import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly data = PORTFOLIO_DATA;

  protected name = '';
  protected email = '';
  protected subject = '';
  protected message = '';

  protected readonly isSubmitting = signal(false);
  protected readonly isSuccess = signal(false);

  protected onSubmit(): void {
    if (!this.name || !this.email || !this.message) {
      return;
    }

    this.isSubmitting.set(true);

    // Simulate sending message
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSuccess.set(true);
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }, 1000);
  }

  protected resetStatus(): void {
    this.isSuccess.set(false);
  }
}
