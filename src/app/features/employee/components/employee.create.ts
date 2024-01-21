import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employee.service";

@Component({
  standalone: true,
  templateUrl: "./../pages/employee-create.html"
})
export class EmployeeCreateComponent implements OnInit{
  constructor(private service: EmployeeService){

  }
  ngOnInit(): void {
      
  }
  public onSubmitHandler(e: Event){

  }
}