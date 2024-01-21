import { Injectable } from "@angular/core";
import { Employye } from "../model/employee";
// import { generateEmployee } from "../utils/generator";
import { _Raw_Employees } from "../mocks/employee.raw";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  protected _employees: Employye[] = [];
  constructor(){
    // this._employees = [...generateEmployee(100)] avoid using thsii util cause browser hang
    this.loadEmployees();
  }
  protected loadEmployees() {
    this._employees = [..._Raw_Employees]
    // console.log(this._employees);
  }
  public get employees() : Employye[] {
    return this._employees
  }
  
}