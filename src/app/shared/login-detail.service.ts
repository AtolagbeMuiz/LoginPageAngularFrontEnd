import { Injectable } from '@angular/core';

import {LoginDetail} from './login-detail.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {

  readonly APIUrl ="https://localhost:44390/api/Login/Login";
  
    constructor(private http:HttpClient) { }
  
    formData:LoginDetail = new LoginDetail();
   
    Login(){
      return this.http.post(this.APIUrl, this.formData );
    }
}
