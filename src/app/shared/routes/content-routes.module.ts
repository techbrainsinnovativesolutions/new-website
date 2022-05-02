import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const APP_ROUTES: Routes = [
  {path:'', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) }
];


