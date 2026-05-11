import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],

  templateUrl: './dashboard.html',

  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {

  isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

  messages: any[] = [];

  totalMessages = 0;

  newMessages = 0;

  adminName = '';

  constructor(

    private contactService: ContactService,

    private router: Router,

    private cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {

    const user = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    this.adminName = user?.name || 'Admin';

    this.getMessages();

  }

  getMessages(): void {

    this.contactService
      .getMessages()
      .subscribe({

        next: (res: any) => {

          console.log(res);

          // SUPPORT BOTH:
          // { data: [] }
          // OR direct []

          this.messages = res?.data || res || [];

          this.totalMessages = this.messages.length;

          this.newMessages = this.messages.length;

          this.cdr.detectChanges();

        },

        error: (err: any) => {

          console.log(err);

        }

      });

  }

  logout(): void {

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    this.router.navigateByUrl('/');

  }

}