import { Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { ContacPagesComponent } from './shared/pages/contac-pages/contac-pages.component';




export const routes: Routes = [
 // {
 //   path:'', component:HomePagesComponent
 // },
  {
    path:'about', component:AboutPageComponent
  },
  {
    path:'contac', component:ContacPagesComponent
  },
  {
    path:'countries',
    loadChildren:()=>import('./countries/countries.module').then(m=> m.CountriesModule)
  },
  {
    path:'**',
    redirectTo:'countries'
  }

];
