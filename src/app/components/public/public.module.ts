import { NgModule } from "@angular/core";

import { routes } from './public.routes'
import { RouterModule } from '@angular/router'

import { LandingComponent } from './landing/landing.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { Auth } from './../../services/auth.service'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,

    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports: []
})
export class PublicModule { }