import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { Customer } from '../../../shared/models/customer'; 
import { ToastrService } from 'ngx-toastr';
import { Meta } from '@angular/platform-browser';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.scss']
})
export class CustomerslistComponent implements OnInit {
  p: number = 1;
  Customer: Customer[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  constructor(   private metaTagService: Meta,
    private db: AngularFireDatabase,
    public firebaseApi: FirebaseService,
    public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.dataState();
    let s = this.firebaseApi.getCustomerslist(); 
    s.snapshotChanges().subscribe(data => {
      this.Customer = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Customer.push(a as Customer);
      })
    })
  }
  dataState() {     
    this.firebaseApi.getCustomerslist().valueChanges().subscribe(data => {
      
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }
  deleteStudent(student) {
    if (window.confirm('Are sure you want to delete this student ?')) { 
      this.firebaseApi.deletecustomerById(student.$key)
      this.toastr.success(student.firstName + ' successfully deleted!');
    }
  }
}
