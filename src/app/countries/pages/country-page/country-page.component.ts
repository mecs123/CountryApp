import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkWithHref,
     RouterLinkActive
  ],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {


  public country?: Country


  constructor(
    private activateRoute:ActivatedRoute,
    private router: Router,
    private countrieService: CountryService

  ){
  }

  ngOnInit(): void {
    debugger;
    this.activateRoute.params
    .pipe(
      switchMap(({ id })=>this.countrieService.searchByCountryAlphaCode(id))
    )
    .subscribe(countryResponse =>{
      if (!countryResponse) {
        return this.router.navigateByUrl('')
      }
      this.country = countryResponse;
      return
    })

  }






}
