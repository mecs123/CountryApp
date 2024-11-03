import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountryService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {


  public countries: Country[]=[];
  constructor(private countryService: CountryService){

  }


  searchByRegion(term: string) {
    this.countryService.searchRegion(term)
    .subscribe(dataRegion => {
      this.countries = dataRegion
    })
  }
}
