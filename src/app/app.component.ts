import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { ContacPagesComponent } from './shared/pages/contac-pages/contac-pages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AboutPageComponent,
    HomePagesComponent,
    SidebarComponent,
    ContacPagesComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';
}
