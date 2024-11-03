import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent
],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[]=[];
  constructor(private countryService: CountryService){

  }


  searchByCapital(term: string) {

    this.countryService.searchCapital(term)
    .subscribe(dataCountries => {
      this.countries = dataCountries
    })
  }




}
