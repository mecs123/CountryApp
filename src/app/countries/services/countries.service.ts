import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries';
import { CacheInterface } from '../interfaces/cache.store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryService {

  private apiUrl: string='https://restcountries.com/v3.1'

  public caheStore: CacheInterface = {
    byCapital: {term:'', countries:[]},
    byCountries: {term:'', countries:[]},
    byRegion: {region:'', countries:[]}
  }

  constructor(private httpClient: HttpClient) { }

  private getCountriesRequest(url: string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.caheStore.byCapital = {term, countries})
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>this.caheStore.byCountries ={term, countries})
    )
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.caheStore.byRegion = {region, countries})
    )
  }

  searchByCountryAlphaCode(term: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }





}
