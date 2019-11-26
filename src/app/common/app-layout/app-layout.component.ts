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
  
  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
      if(window.scrollY>200){
        this.commonService.aboutusAnimation=true;
      }
      if(window.scrollY>300){
        this.commonService.servicesAnimation=true;
      }
      if(window.scrollY>800){
        this.commonService.industriesAnimation=true;
      }
      
      
        console.log("scrolling...");
    }
  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
