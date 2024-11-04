import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountryService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public regions: Region[]=['Africa','Americas','Asia','Europe','Oceania']
  public selectedRegion? : Region



  public countries: Country[]=[];
  constructor(private countryService: CountryService){

  }
  ngOnInit(): void {
    this.countries = this.countryService.caheStore.byRegion.countries
    this.selectedRegion = this.countryService.caheStore.byRegion.region
  }


  searchByRegion(region: Region) {

    this.selectedRegion = region
    this.countryService.searchRegion(region)
    .subscribe(dataRegion => {
      this.countries = dataRegion
    })
  }
}
