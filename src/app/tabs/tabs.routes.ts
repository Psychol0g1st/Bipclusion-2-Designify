import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full',
  },
];
