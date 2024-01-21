import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employee.service";
import { ActivatedRoute } from '@angular/router';
import { Employye } from "../model/employee";

@Component({
  standalone: true,
  templateUrl: "./../pages/employee-show.html"
})
export class EmployeeShowComponent implements OnInit{
  public employee!: Employye;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService
  ){

  }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.loadEmployee(param["id"])
    })
      
  }
  public loadEmployee(id: string){
    this.service.show(id).subscribe((employee) => {
      this.employee = employee
    })
  }

  formatedDateTime(isoDateTimeString: Date | string) {
    const isoDate = new Date(isoDateTimeString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC',
    };
    return new Intl.DateTimeFormat('en-US', options).format(isoDate);
  }
}