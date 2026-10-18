import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly data = PORTFOLIO_DATA;
}
