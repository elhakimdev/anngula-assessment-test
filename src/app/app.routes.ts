import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login';

export const routes: Routes = [
  { 
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
];
