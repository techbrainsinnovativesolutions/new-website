import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
