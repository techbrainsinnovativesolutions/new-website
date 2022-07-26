import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})

export class PhpmailerService {
 
  constructor(private http: HttpClient) { }

  public maildata(formdata): Observable<any> {
    const  url = 'assets/phpmailer/phpmailer.php';
    return this.http.post<any>(url, formdata ,{ 'headers': headers });
  }
}
