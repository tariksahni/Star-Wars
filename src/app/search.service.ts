import {NgModule, Component, Injectable} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';



@Injectable()
export class SearchService {
  apiRoot: string = 'https://swapi.co/api/planets';

  constructor(private http: Http) {
  }

  search(term: string): Observable<Array<Object>> {
    let apiURL = `${this.apiRoot}?search=${term}`;
    console.log(apiURL);
    return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(items => {
          return new Array(
            items.name,
            items.population
          );
      });
    });
  }
}
