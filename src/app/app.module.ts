import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {NgPipesModule} from 'ngx-pipes';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup} from '@angular/forms';
import {SearchService} from './search.service';
import {SharedService} from './shared.service';
import {LoginService} from './login.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchPlanetComponent } from './search-planet/search-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPlanetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgPipesModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent

      },
      {
        path: 'search',
        component: SearchPlanetComponent
      }
    ])
  ],
  providers: [SearchService, SharedService, LoginService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
