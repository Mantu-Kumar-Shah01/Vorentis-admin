import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:5000/api/v1';

  constructor(
    private http:HttpClient
  ) {}

  login(data:any){

    return this.http.post(
      `${this.apiUrl}/user/auth/login`,
      data
    );

  }

}