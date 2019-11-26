import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'
import { CommonService } from '../../shared/services/common.service';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  // changeHeaderColor:boolean;
  showTopArrow:boolean;
  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
      if(window.scrollY<100){
        this.commonService.aboutusAnimation=false;
        this.commonService.servicesAnimation=false;
        this.commonService.industriesAnimation=false;
        this.showTopArrow=false;
      }
      if(window.scrollY>200){
        this.showTopArrow=true;
        this.commonService.aboutusAnimation=true;
      }
      if(window.scrollY>500){
        this.commonService.servicesAnimation=true;
      }
      if(window.scrollY>1100){
        this.commonService.industriesAnimation=true;
      }
      
      
        console.log("scrolling...");
    }
  constructor(public commonService:CommonService) { }
  gotop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  ngOnInit() {
  }

}
