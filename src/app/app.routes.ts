import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Gallery } from './pages/gallery/gallery';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home | Portfolio' },
  { path: 'experience', component: Experience, title: 'Experience | Portfolio' },
  { path: 'gallery', component: Gallery, title: 'Gallery | Portfolio' },
  { path: 'projects', component: Projects, title: 'Projects | Portfolio' },
  { path: 'contact', component: Contact, title: 'Contact | Portfolio' },
  { path: '**', redirectTo: 'home' },
];
