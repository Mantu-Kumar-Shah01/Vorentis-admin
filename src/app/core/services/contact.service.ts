import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) {}

  getMessages(){

    return this.http.get(
      `${this.apiUrl}/admin/contact-messages`
    );

  }

}