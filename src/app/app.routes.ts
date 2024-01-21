import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login';
import { EmployeeComponent } from './features/employee/components/employee';
import { EmployeeCreateComponent } from './features/employee/components/employee.create';
import { EmployeeShowComponent } from './features/employee/components/employee.show';

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
      },
      {
        path: "create",
        component: EmployeeCreateComponent
      },
      {
        path: ":id/show",
        component: EmployeeShowComponent
      },
      {
        path: ":id/update",
        redirectTo: "employees"
      },
      {
        path: ":id/delete",
        redirectTo: "employees"
      }
    ]
  }
];
