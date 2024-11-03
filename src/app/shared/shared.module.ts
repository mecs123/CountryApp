import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContacPagesComponent } from './pages/contac-pages/contac-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutPageComponent,
    HomePagesComponent,
    SidebarComponent,
    ContacPagesComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
