import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TechBrains Innovative Solutions';
  date = new Date();
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Techbrains Innovative Solutions, Techbrains, Techbrains Innovative ,Inovotive,Software services, software developent,Application development,IOT Devices development' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Techbrains Innovative Solutions Team' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }
}
