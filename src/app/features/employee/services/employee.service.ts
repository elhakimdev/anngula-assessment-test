import { Injectable } from "@angular/core";
import { Employye } from "../model/employee";
import { generateEmployee } from "../utils/generator";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  protected _employees: Employye[] = [];
  constructor(){
    this._employees = [...generateEmployee(100)]
  }
  
  public get employees() : Employye[] {
    return this._employees
  }
  
}