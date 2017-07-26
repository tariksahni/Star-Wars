import { Injectable } from '@angular/core' ;
import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http' ;
import { Observable } from 'rxjs/Observable';
import { Router , ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
  private result: Object ;
  constructor(private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private myshared: SharedService,
    private loginservice: LoginService) {}

  ngOnInit() {

  }

  login = ( user ) => {
    const username = user.username;
    const password = user.password;
    let user_api, user_birth, count ;
    this.result = this.loginservice.login(username).subscribe( data => {
      user_api = data['username'] ;
      user_birth = data['dob'];
      count = data['count'];
      if ( count === 0 ) {
        alert('NO such user');
      }
      if ( count > 0 ) {
        if ( password === user_birth && username === user_api ) {
          console.log('Successful');
          this.myshared.setLoggedInStatus(true);
          this.myshared.setUserName(user_api);
          this.router.navigate(['/search']);
        }
        // tslint:disable-next-line:curly
        // tslint:disable-next-line:one-line
        else if ( password !== user_birth || username !== user_api){
          alert('CHECK Your Username and Passowrd');
        }
      }
    });
  }
}
