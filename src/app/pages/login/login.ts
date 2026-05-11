import {
  Component
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',

  standalone:true,

  imports:[
    FormsModule
  ],

  templateUrl:'./login.html',

  styleUrls:['./login.css']
})

export class LoginComponent {

  email = '';

  password = '';

  constructor(

    private authService:AuthService,

    private router:Router

  ){}

  login(){

    const data = {

      email:this.email,

      password:this.password

    };

    this.authService
    .login(data)
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        localStorage.setItem(
          'token',
          res.data.token
        );

        localStorage.setItem(
          'user',
          JSON.stringify(res.data)
        );

        this.router.navigateByUrl('/dashboard');

      },

      error:(err:any)=>{

        console.log(err);

      }

    });

  }

}