import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core'
import { CommonService } from '../../shared/services/common.service';
import { WINDOW } from '@ng-toolkit/universal';
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
      if(this.window.scrollY<100){
        this.commonService.aboutusAnimation=false;
        this.commonService.servicesAnimation=false;
        this.commonService.industriesAnimation=false;
        this.showTopArrow=false;
        this.commonService.selectedMenuItem="";
      }
      if(this.window.scrollY>200){
        this.showTopArrow=true;
        this.commonService.aboutusAnimation=true;
        this.commonService.selectedMenuItem="About Us";
      }
      if(this.window.scrollY>500){
        this.commonService.servicesAnimation=true;
        this.commonService.selectedMenuItem="Services";
      }
      if(this.window.scrollY>1100){
        this.commonService.industriesAnimation=true;
        this.commonService.selectedMenuItem="Industries";
      }
      if(this.window.scrollY>2010){
        this.commonService.selectedMenuItem="Technology";
      }
      if(this.window.scrollY>2580){
        this.commonService.selectedMenuItem="Team";
      }
      if(this.window.scrollY>2990){
        this.commonService.selectedMenuItem="Contact us";
      }
      
      
        console.log("scrolling...");
    }
  constructor(@Inject(WINDOW) private window: Window, public commonService:CommonService) { }
  gotop(){
    this.commonService.selectedMenuItem="";
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  ngOnInit() {
  }

}
