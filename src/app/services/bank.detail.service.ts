import { BankDetail } from '../models/bankDetails';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { GlobalConfig } from '../config/gobal.config';

@Injectable()
export class BankDetailService {
  private baseUrl = '';
  private headers: any;

  constructor(private http: Http, globalConfig: GlobalConfig) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    this.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    this.headers.append('Access-Control-Allow-Credentials', true);
    this.baseUrl = globalConfig.apibaseAddress;
  }


  get(code: String): Observable<any> {

    return this.http
      .get(`${this.baseUrl}/bankdetail/${code}`, { headers: this.headers })
      .map((res: Response) => {        
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }
}
