import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {LoginComponent} from './business/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/newHome'
  },
  {
    path: 'newHome',
    loadChildren: './business/home/home.module#HomeModule'
  },
  {
    path: '**',
    loadChildren: './components/model/error/error.module#ErrorModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
