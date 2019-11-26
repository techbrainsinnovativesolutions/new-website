import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menuList=[
    {name:"About Us"},
    {name:"Services"},
    {name:"Industries"},
    {name:"Technology"},
    {name:"People"},
    {name:"Contact us"}
  ]
  ngOnInit() {
  }
gotoContent(value){
if(value=="About Us"){
  
  window.scrollTo({
    top: 250,
    behavior: 'smooth',
  })
}
if(value=="Services"){
  window.scrollTo({
    top: 600,
    behavior: 'smooth',
  })
}
if(value=="Industries"){
  window.scrollTo({
    top: 1300,
    behavior: 'smooth',
  })
}
}
}
