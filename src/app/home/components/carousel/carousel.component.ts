import { Component, AfterViewInit,OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // @ViewChild("myCarousel") myCarousel: NguCarousel<any>;
  
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  ngOnInit() {
    
  }
  constructor(private cdr: ChangeDetectorRef) {}
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

}
