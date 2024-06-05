import { Route } from '@angular/router';
import { BeratungListComponent } from './components/beratung/list/beratung-list.component';
import { BeratungDetailComponent } from './components/beratung/detail/beratung-detail.component';

export const PATHS = {
  events: 'events',
  beratungen: 'beratungen',
  anträge: 'anträge',
  uw: 'uw',
  pendenzen: 'pendenzen',
  
};

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'beratungen',
  },
  {
    path: 'beratungen',
    component: BeratungListComponent,
  },
  {
    path: 'beratungen/:id',
    component: BeratungDetailComponent,
  },
];
