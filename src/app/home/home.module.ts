import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { SampleComponent } from './components/sample/sample.component';
@NgModule({
  declarations: [DashboardComponent, CarouselComponent, AboutUsComponent, ServicesComponent, IndustriesComponent, SampleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NguCarouselModule
  ]
})
export class HomeModule { }
