import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
