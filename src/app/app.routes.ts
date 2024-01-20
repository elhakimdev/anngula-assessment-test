import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login';
import { EmployeeComponent } from './features/employee/components/employee';

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
  {
    path: "employees",
    children: [
      {
        path: "",
        component: EmployeeComponent
      }
    ]
  }
];
