import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {CommonService } from './shared/services/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TechBrains Innovative Solutions';
  date = new Date();
  keywordsArray:any[]= [];
  keywords:any;
  constructor(
    private metaTagService: Meta,private apiservice:CommonService
  ) { }

  ngOnInit() {
    this.apiservice.getkeywords().subscribe(data=>{
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
