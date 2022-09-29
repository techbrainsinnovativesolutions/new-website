import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core'
import { CommonService } from '../../shared/services/common.service';
import { WINDOW } from '@ng-toolkit/universal';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  // changeHeaderColor:boolean;
  showTopArrow:boolean;
  keywordsArray:any[]= [];
  keywords:any;
  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
      if(this.window.scrollY<100){
        this.commonService.aboutusAnimation=false;
        this.commonService.servicesAnimation=false;
        this.commonService.industriesAnimation=false;
        this.showTopArrow=false;
        this.commonService.selectedMenuItem="";
      }
      if(this.window.scrollY>500){
        this.showTopArrow=true;
        this.commonService.aboutusAnimation=true;
        this.commonService.selectedMenuItem="About Us";
      }
      if(this.window.scrollY>1200){
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
      if(this.window.scrollY>2579){
        this.commonService.selectedMenuItem="Team";
      }
      if(this.window.scrollY>2989){
        this.commonService.selectedMenuItem="Contact us";
      }
    }
  constructor(@Inject(WINDOW) private window: Window, public commonService:CommonService,private metaTagService: Meta) { }
  gotop(){
    this.commonService.selectedMenuItem="";
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
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

}
