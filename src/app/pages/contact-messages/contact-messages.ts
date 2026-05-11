import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact-messages',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './contact-messages.html',
  styleUrls: ['./contact-messages.css']
})
export class ContactMessagesComponent implements OnInit {

  messages:any[] = [];

  constructor(
    private contactService:ContactService
  ){}

  ngOnInit(): void {

    this.getMessages();

  }

  getMessages(){

  

  this.contactService
  .getMessages()
  .subscribe({

    next:(res:any)=>{

      console.log(res);

      this.messages = Array.isArray(res.data)
        ? res.data
        : [];

      console.log(this.messages);

    },

    error:(err:any)=>{
      console.log(err);
    }

  });


  }

}