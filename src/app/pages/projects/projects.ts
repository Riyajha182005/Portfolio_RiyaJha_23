import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly data = PORTFOLIO_DATA;
}
