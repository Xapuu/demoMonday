import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AuthRouting } from './auth-routing.module'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http'

import { AutorizationService } from './../services/authentication.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        AuthRouting,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule],
    providers: [AutorizationService],
    exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
