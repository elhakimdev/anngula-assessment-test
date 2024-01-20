import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';

@Component({
  standalone: true,
  templateUrl: "./../pages/employee-list.html",
  imports: [
    CommonModule
  ]
})

export class EmployeeComponent {
  constructor(private service: EmployeeService){
    // console.log(this.service.employees)
  }
}