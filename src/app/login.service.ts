import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  apiRoot = 'https://swapi.co/api/people/?search=';
  constructor( private http: Http ) { }

  login( term: string): Observable<Object> {
    const apiURL = `${this.apiRoot}${term}`;
    return this.http.get( apiURL ).map( data => {
      return {
          count: data.json().count , username: ( data.json().results[0].name ), dob: (data).json().results[0].birth_year
      }
    });
  }
}
