import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly data = PORTFOLIO_DATA;

  protected readonly stats = [
    { label: 'Academic CGPA', value: '9.24' },
    { label: 'Internships & Research', value: '3' },
    { label: 'Featured AI Projects', value: '3+' },
    { label: 'Core Technical Skills', value: '20+' },
  ];
}
