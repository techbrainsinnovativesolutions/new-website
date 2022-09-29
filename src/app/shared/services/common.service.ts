import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable ,throwError} from 'rxjs';
import { catchError ,retry,map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  aboutusAnimation:boolean;
  servicesAnimation:boolean;
  industriesAnimation:boolean;
  selectedMenuItem:string;
  constructor(private httpClient: HttpClient) { }

  getkeywords(){
    return this.httpClient.get<any[]>("assets/json/data.json").pipe(retry(1))
  }
}
