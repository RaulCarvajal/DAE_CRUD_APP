import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { CrudService } from "./crud.service";

@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
