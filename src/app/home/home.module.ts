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
import { TechnologyExpertiseComponent } from './components/technology-expertise/technology-expertise.component';
import { TeamComponent } from './components/team/team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AgmCoreModule } from '@agm/core';
;
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerslistComponent } from './components/customerslist/customerslist.component';
@NgModule({
  declarations: [DashboardComponent, CarouselComponent, AboutUsComponent, ServicesComponent, IndustriesComponent, SampleComponent, TechnologyExpertiseComponent, TeamComponent, ContactUsComponent, CustomerslistComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NguCarouselModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFdcs2Hh_Eg2jgjpFZ1jK8EQTxiYKuh00'
    })
  ]
})
export class HomeModule { }
