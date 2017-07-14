import { Injectable } from '@angular/core' ;
import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http' ;
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  constructor(private http: Http,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
  }

  login = (user) =>{
    var username = user.username;
    var password = user.password;
    var user_api , user_birth ;
    var url = 'https://swapi.co/api/people/?search='+username;
    this.http.get(url).subscribe(data => { 
      var count = data.json().count;
      if( count == 0 )alert("NO such user");
      if( count > 0 ){
        user_api= (data.json().results[0].name);
        user_birth = (data).json().results[0].birth_year;
        if( password == user_birth && username == user_api ) {
         console.log("Successful");
         this.router.navigate(['/search']);
        }  
        else if( password != user_birth || username != user_api) alert("CHECK Your Username and Passowrd");
      }
    })
  }
}
