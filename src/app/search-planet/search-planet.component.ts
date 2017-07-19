import { Injectable } from '@angular/core' ;
import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http' ;
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import {SearchService} from '../search.service';
import {SharedService} from '../shared.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-search-planet',
  templateUrl: './search-planet.component.html',
  styleUrls: ['./search-planet.component.css']
})



export class SearchPlanetComponent implements OnInit {
  form;
  private loading: boolean = false;
  private results: Observable<Array<String>>;
  public searchField : FormControl
  private isSuccess : Boolean
  constructor(private myservice: SearchService,private myshared: SharedService, private http: Http) {

  }
  
  ngOnInit() { 

     this.myshared.getSaveBtnStatus().subscribe(
        data => {
          console.log(data);
          this.isSuccess = data
        }
      );
      console.log(this.isSuccess);
    this.searchField = new FormControl();
    console.log(this.searchField);
    this.results = this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(_ => this.loading = false)
        .switchMap(term => this.myservice.search(term))
        .do(_ => this.loading = false)
  }

  doSearch(term: string) {
    this.myservice.search(term)
    
  }
}



