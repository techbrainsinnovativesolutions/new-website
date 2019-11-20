import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const APP_ROUTES: Routes = [
  {path:'', loadChildren: 'src/app/home/home.module#HomeModule' }
];


