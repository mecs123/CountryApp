import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countries';
import { error } from 'console';

@Injectable({providedIn: 'root'})
export class CountryService {

  private apiUrl: string='https://restcountries.com/v3.1'



  constructor(private httpClient: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    )
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
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
