import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from "@angular/forms";
import { GridModule } from "@progress/kendo-angular-grid";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { Employye } from '../model/employee';
import { process } from "@progress/kendo-data-query";
import { Router, RouterLink } from '@angular/router';
import { AuthService } from "../../auth/services/auth";
@Component({
  standalone: true,
  templateUrl: "./../pages/employee-list.html",
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    RouterLink,
  ]
})
export class EmployeeComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective | undefined;
  public gridData: Employye[] = [];
  public gridView: Employye[] = [];
  constructor(
    private auth: AuthService,
    private service: EmployeeService, 
    private router: Router
  ){
    this.gridData = [...this.service.employees]
  }
  ngOnInit(): void {
      this.gridView = this.gridData;
  }
  public onFilterHandler(value: Event): void{
    const inputValue = value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: "and",
        filters: [
          {
            field: "username",
            operator: "contains",
            value: inputValue
          },
          {
            field: "email",
            operator: "contains",
            value: inputValue
          },
          {
            field: "birthday",
            operator: "contains",
            value: inputValue
          },
          {
            field: "basicSalary",
            operator: "contains",
            value: inputValue
          },
          {
            field: "status",
            operator: "contains",
            value: inputValue
          },
          {
            field: "group",
            operator: "contains",
            value: inputValue
          },
        ]
      }
    }).data;

    this.dataBinding!.skip = 0;
  }

  public onAddNewEployeeHandler(e: Event){
    e.preventDefault();
    e.stopImmediatePropagation();
    this.router.navigateByUrl("/employees/create");
  }

  public onLogOutHandler(e: Event) {
    e.preventDefault();
    const cred = JSON.parse(localStorage.getItem("_data") as string) as {
      email: string, 
      password: string
    };
    // console.log(cred);
    const credentials = {
      ...cred
    }

    // console.log(cred);

    this.auth.logout({
      payload: {...credentials}
    }, (err, data) => {
      console.log(err)
    })
  }
}