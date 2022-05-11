import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3';

  get httpParams(): HttpParams {

    return new HttpParams()
          .set('fields', 'flags,capital,name,population,ccn3');
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string, tipo: string = 'name' ): Observable<Country[]> {

    const url = `${ this.apiUrl }/${ tipo }/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } ).pipe(
      tap( console.log )
    );

  }

  getPaisPorAlpha( id: string ): Observable<Country> {

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url ).pipe(
      map( paises => paises[0])
    );

  }

}
