import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { Country } from '../../interfaces/countries';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkWithHref,
     RouterLinkActive
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input()
  public countries:Country[]=[]
}
