import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { ContactMessagesComponent } from './pages/contact-messages/contact-messages';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [

    {
        path:'',
        component:LoginComponent
    },

  {
    path:'dashboard',
    component:DashboardComponent
}

];