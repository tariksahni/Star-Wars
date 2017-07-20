import { Injectable } from '@angular/core' ;
import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http' ;
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
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
  private results : Array<Object>;
  public searchField : FormControl
  private isSuccess : Boolean
  constructor(private myservice: SearchService,private myshared: SharedService, private http: Http) {

  }
  
  ngOnInit() { 

  this.myshared.getSaveBtnStatus().subscribe(data => this.isSuccess = data);
  this.searchField = new FormControl();
  this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.myservice.search(term))
        .subscribe(value => {
          this.results = value;
          console.log(this.results);
        }
        );
        
  }
}



