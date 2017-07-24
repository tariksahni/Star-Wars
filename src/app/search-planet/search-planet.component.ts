import { Injectable } from '@angular/core' ;
import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http' ;
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
// import {OrderByPipe} from '../app.orderBy'
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
  private loggedIn : string
  private timeOut : Boolean
  constructor(private myservice: SearchService,private myshared: SharedService, private http: Http) {}
  
  ngOnInit() { 
  this.timeOut = true ;
  this.myshared.getSaveBtnStatus().subscribe(data => this.isSuccess = data);
  this.myshared.getUserName().subscribe(data => this.loggedIn = data);
  this.searchField = new FormControl();
  var start = new Date().getTime();
  console.log(start);
  var counter = 0 ;
  var time ;
  console.log(this.timeOut);
  this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.myservice.search(term))
        .subscribe(value => {
          var end = new Date().getTime();
          counter++;
          time = end - start ;
          console.log(counter , time );
          if(this.loggedIn != 'Luke Skywalker'){
            if (counter < 15){
              if (time >= 60000){
                start = end ;
                counter = 0 ;
              }
            }    
            if(counter >=15 && time < 60000 ){
              console.log("aapka time ho gya bhai");
              this.timeOut = false ;
            }
          }
          this.results = value;
          console.log(this.results);
        }
        );     
  }
}



