import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-technology-expertise',
  templateUrl: './technology-expertise.component.html',
  styleUrls: ['./technology-expertise.component.scss']
})
export class TechnologyExpertiseComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  ngOnInit() {
  }
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 4, all: 0 },
    slide: 1,
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3,4,5];
  technologyList =[
    {
      photoPath:'assets/images/html.png',
      name:'RaviTeja',
      designation:'Founder & CEO',
      description:'Raviteja has 5 years Experienced in Information and Technologies,His expertise and interests are in the areas of design and development of scalable applications ,knowledge engineering, data integrations and Artificial Intelligence',
    },
    {
      photoPath:'assets/images/CSS3.png',
      name:'Narayana',
      designation:'Chief Operating Officer',
      description:'Narayana has 5 years Experienced in Information and Technologies,His expertise and interests are in the areas of design and development of scalable applications ,knowledge engineering, data integrations and Artificial Intelligence'
    },
    {
      photoPath:'assets/images/javascript-.png',
      name:'Lakshmi',
      designation:'Lead Developer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/images/node-js.png',
      name:'Srikanth',
      designation:'Chief Marketing Officer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/images/mongodb.png',
      name:'MongoDB',
      designation:'Chief Technology Officer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    }
    
    
  ]
  whatsup(){
    window.location.href="https://api.whatsapp.com/send?phone=918618309754&source=&data="
  }
}
