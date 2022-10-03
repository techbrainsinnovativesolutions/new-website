import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {PhpmailerService } from '../../../shared/services/phpmailer.service';
import { Meta } from '@angular/platform-browser';
import {CommonService } from '../../../shared/services/common.service';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  keywordsArray:any[]= [];
  keywords:any;
  customersList: AngularFireList<any>;
  customerById: AngularFireObject<any>;
  constructor(private mailService:PhpmailerService,
    private metaTagService: Meta,
    private db: AngularFireDatabase,
    public apiservice:CommonService) { }

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
  zoom: number=15;
  
  // initial center position for the map
  lat: number = 14.4129962;
  lng: number = 79.9327556;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 14.4129962,
		  lng: 79.9327556,
		  label: 'assets/images/logo.png',
		  draggable: false
	  }
  ]

  whatsup(){
    window.location.href="https://api.whatsapp.com/send?phone=919967519024&source=&data="
  }

  emailSender(){
    this.mailService.maildata('raviteja.m6666@gmail.com').subscribe(response=>{
      console.log(response);
    },error=>{
     console.log(error);
    });
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
