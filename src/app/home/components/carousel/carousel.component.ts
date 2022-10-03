import { Component, AfterViewInit,OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Meta } from '@angular/platform-browser';
import {CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // @ViewChild("myCarousel") myCarousel: NguCarousel<any>;
  keywordsArray:any[]= [];
  keywords:any;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  ngOnInit() {
    this.commonService.getkeywords().subscribe(data=>{
      data['software_company'].forEach(element => {
       this.keywordsArray.push(element.Keyword);
      });
      this.keywords = this.keywordsArray.toString();
      this.metaTagService.addTags([
       { name: 'keywords', content: this.keywords },
       { name: 'robots', content: 'index, follow' },
       { name: 'author', content: 'Techbrains Innovative Solutions pvt ltd' },
       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     ]);
     });
  }
  constructor(private cdr: ChangeDetectorRef,private metaTagService: Meta,public commonService:CommonService) {}
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 1, all: 0 },
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

  getWatsup(){
    window.open('https://api.whatsapp.com/send?phone=918618309754&source=&data=', "_blank");
  }
}
