import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries: Country[]=[];
  constructor(private countryService: CountryService){

  }

  searchByCountry(dato: string){
    this.countryService.searchCountry(dato).subscribe(data =>{
      this.countries = data;
    })
  }

}
