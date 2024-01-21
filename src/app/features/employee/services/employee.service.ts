import { Injectable } from "@angular/core";
import { Employye } from "../model/employee";
// import { generateEmployee } from "../utils/generator";
import { _Raw_Employees } from "../mocks/employee.raw";
import { faker } from "@faker-js/faker";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  protected _employees: Employye[] = [];
  constructor(){
    this.loadEmployees();
  }
  protected loadEmployees() {
    this._employees = [..._Raw_Employees]
  }
  public create(request: Employye, callback: <
    Err, 
    Data extends Record<string, unknown>
    >(err: Err, done: Data) => void): void {

    const id: string = faker.string.uuid();
    const newEmp = {
      id: id,
      ...request
    }
    this._employees.push(newEmp);
    
    callback(undefined, {
      success: true,
      data: {
        ...newEmp
      } 
    })
  }
  public get employees() : Employye[] {
    return this._employees
  }
  
}