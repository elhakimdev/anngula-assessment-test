import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employee.service";

@Component({
  standalone: true,
  templateUrl: "./../pages/employee-show.html"
})
export class EmployeeShowComponent implements OnInit{
  constructor(private service: EmployeeService){

  }
  ngOnInit(): void {
      
  }
  public onSubmitHandler(e: Event){

  }
}