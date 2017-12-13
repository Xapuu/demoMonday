import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Auth } from './services/auth.service'

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component'

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ErrorInterceptor } from './interceptors/res-err.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    Auth,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
