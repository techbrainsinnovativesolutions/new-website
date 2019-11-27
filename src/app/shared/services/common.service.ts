import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  aboutusAnimation:boolean;
  servicesAnimation:boolean;
  industriesAnimation:boolean;
  selectedMenuItem:string;
  constructor() { }
}
