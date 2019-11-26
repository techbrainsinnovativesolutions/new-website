import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
