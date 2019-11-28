import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public commonService:CommonService) { }
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
gotoContent(value){
if(value=="About Us"){
  this.commonService.selectedMenuItem=value;
  window.scrollTo({
    top: 250,
    behavior: 'smooth',
  })
}
if(value=="Services"){
  window.scrollTo({
    top: 700,
    behavior: 'smooth',
  })
  this.commonService.selectedMenuItem=value;
}
if(value=="Industries"){
  this.commonService.selectedMenuItem=value;
  window.scrollTo({
    top: 1380,
    behavior: 'smooth',
  })
}
if(value=="Technology"){
  this.commonService.selectedMenuItem=value;
  window.scrollTo({
    top: 2020,
    behavior: 'smooth',
  })
}
if(value=="Team"){
  this.commonService.selectedMenuItem=value;
  window.scrollTo({
    top: 2580,
    behavior: 'smooth',
  })
}
if(value=="Contact us"){
  this.commonService.selectedMenuItem=value;
  window.scrollTo({
    top: 2990,
    behavior: 'smooth',
  })
}
}
}
