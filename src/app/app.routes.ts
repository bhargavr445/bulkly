import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home').then(c => c.Home) },
    { path: 'about-us', loadComponent: () => import('./about-us/about-us').then(c => c.AboutUs) },
    { path: 'info/:sectionId', loadComponent: () => import('./info/info').then(c => c.Info) },
    { path: 'contact', loadComponent: () => import('./contact/contact').then(c => c.Contact) }
];
