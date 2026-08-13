import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Schiaccia Pensieri · Pizzeria a Soci, Bibbiena' },
  { path: 'menu', component: MenuComponent, title: 'Menu · Schiaccia Pensieri' },
  { path: 'chi-siamo', component: AboutComponent, title: 'Chi siamo · Schiaccia Pensieri' },
  { path: 'contatti', component: ContactComponent, title: 'Contatti · Schiaccia Pensieri' },
  { path: '**', component: NotFoundComponent, title: 'Pagina non trovata · Schiaccia Pensieri' },
];
