import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'public/register' },
  { path: 'public', loadChildren: './components/public/public.module#PublicModule' },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


