import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  customersList: AngularFireList<any>;
  customerById: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
    // Create customer
  addCustomer(customer:Customer) {
    this.customersList = this.db.list('/customers-list');
    if(customer){
      this.customersList.push({
        firstName: customer.name,
        description: customer.description,
        email: customer.email,
        mobileNumber: customer.mobileNumber,
        requirement:customer.requirement
      });
    }
    
  }
   // Fetch Single customer Object
   getCustomerById(id: string) {
    return this.db.object('customers-list/' + id);
     
  }
  // Fetch customers List
  getCustomerslist() {
    return this.db.list('customers-list');
  }
  // Update customer Object
  updateCustomer(customer: any) {
    this.customerById.update({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      mobileNumber: customer.mobileNumber,
    });
  }
  // Delete customerById Object
  deletecustomerById(id: string) {
    this.customerById = this.db.object('customers-list/' + id);
    this.customerById.remove();
  }
}
