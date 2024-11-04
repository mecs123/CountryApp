import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LoadingSpinerComponent } from "../../../shared/components/loading-spiner/loading-spiner.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent,
    LoadingSpinerComponent
],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit  {

 public countries: Country[]=[];
 public isLoading: boolean = false
 public initialValue: string = ' '


  constructor(private countryService: CountryService){

  }
  ngOnInit(): void {
    this.countries = this.countryService.caheStore.byCapital.countries
    this.initialValue = this.countryService.caheStore.byCapital.term
  }


  searchByCapital(term: string) {
    this.isLoading = true
    this.countryService.searchCapital(term)
    .subscribe(dataCountries => {
      this.countries = dataCountries
      this.isLoading = false
    })
  }




}
