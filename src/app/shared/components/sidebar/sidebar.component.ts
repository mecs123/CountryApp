import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkWithHref,
     RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
