import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './components/auth/auth.module'
import { AppComponent } from './app.component'



const routes: Routes = [
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
