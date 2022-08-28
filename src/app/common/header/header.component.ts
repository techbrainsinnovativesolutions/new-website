import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { WINDOW } from '@ng-toolkit/universal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, public commonService:CommonService) { }
  openmenu :boolean;
  menuList=[
    {name:"About Us"},
    {name:"Services"},
    {name:"Industries"},
    {name:"Technology"},
    {name:"Team"},
    {name:"Contact us"}
  ]
  ngOnInit() {
  }
  openMenu() {
    this.openmenu = !this.openmenu;
  }

gotoContent(value , platform){

if(value=="About Us"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
  this.openMenu();
  }
  this.window.scrollTo({
    top: 250,
    behavior: 'smooth',
  });
}
if(value=="Services"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 700,
    behavior: 'smooth',
  });
}
  
  
if(value=="Industries"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 1380,
    behavior: 'smooth',
  })
}
if(value=="Technology"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2020,
    behavior: 'smooth',
  })
}
if(value=="Team"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2580,
    behavior: 'smooth',
  })
}
if(value=="Contact us"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2990,
    behavior: 'smooth',
  })
}
}
}
