import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly skills = [
    { name: 'Angular', level: 'Advanced', category: 'Frontend' },
    { name: 'TypeScript', level: 'Advanced', category: 'Language' },
    { name: 'Tailwind CSS', level: 'Expert', category: 'Styling' },
    { name: 'SCSS / Sass', level: 'Expert', category: 'Styling' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'RxJS & Signals', level: 'Advanced', category: 'State' },
    { name: 'REST APIs', level: 'Advanced', category: 'Integration' },
    { name: 'Git & CI/CD', level: 'Intermediate', category: 'DevOps' },
  ];

  protected readonly stats = [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Completed Projects', value: '25+' },
    { label: 'Satisfied Clients', value: '18+' },
    { label: 'Code Quality Score', value: '99%' },
  ];
}
