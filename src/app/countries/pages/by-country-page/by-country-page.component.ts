import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { LoadingSpinerComponent } from '../../../shared/components/loading-spiner/loading-spiner.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent,
    LoadingSpinerComponent
  ],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[]=[];
   public initialValue: string = ' '
   public isLoading: boolean = false
  constructor(private countryService: CountryService){

  }
  ngOnInit(): void {
    this.countries = this.countryService.caheStore.byCountries.countries
    this.initialValue = this.countryService.caheStore.byCountries.term
  }

  searchByCountry(dato: string){
    this.countryService.searchCountry(dato).subscribe(data =>{
      this.countries = data;
    })
  }

}
