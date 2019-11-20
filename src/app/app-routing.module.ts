import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';
import { APP_ROUTES } from './shared/routes/content-routes.module';

const routes: Routes = [
  {path:'', component:AppLayoutComponent, children:APP_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
