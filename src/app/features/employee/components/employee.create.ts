import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employee.service";
import { 
  FormControl, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule,
  FormBuilder,
  Validators, } from "@angular/forms";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { Employye } from "../model/employee";
@Component({
  standalone: true,
  templateUrl: "./../pages/employee-create.html",
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    ButtonsModule, 
    InputsModule, 
    FloatingLabelModule, 
    LabelModule, 
    DateInputsModule,
    DropDownsModule,
    CommonModule
  ]
})
export class EmployeeCreateComponent implements OnInit{
  public createForm!: FormGroup;
  public statuses: string[] = [
    "active",
    "inactive"
  ];
  public groups: string[] = [
    "Finance",
    "Human Resources",
    "Information Technology",
    "Marketing",
    "Operations",
    "Research and Development",
    "Customer Service",
    "Sales",
    "Administration",
    "Legal",
    "Quality Assurance",
    "Manufacturing",
    "Logistics",
    "Supply Chain",
    "Facilities Management",
    "Product Development",
    "Public Relations",
    "Health and Safety",
    "Education and Training",
    "Project Management",
  ];
  constructor(
    private service: EmployeeService, 
    private formBuilder: FormBuilder,
    private router: Router
    ){
      this.createForm = this.formBuilder.group<Employye>({
        username: new FormControl("", [Validators.required]) as unknown as string,
        firstName: new FormControl("", [Validators.required]) as unknown as string,
        lastName: new FormControl("", [Validators.required]) as unknown as string,
        email: new FormControl("", [Validators.required, Validators.email]) as unknown as string,
        birthDate: new FormControl("", [Validators.required, this.dateTimeValidator]) as unknown as string,
        basicSalary: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]+$')]) as unknown as number,
        status: new FormControl("", [Validators.required]) as unknown as string,
        group: new FormControl("", [Validators.required]) as unknown as string,
        description: new FormControl("", [Validators.required]) as unknown as string
      })
  }
  ngOnInit(): void {
      
  }
  public onSubmitHandler(e: Event){
    e.preventDefault();

    this.createForm.markAllAsTouched();

    this.service.create(this.createForm.getRawValue(), (err, res) =>{
      console.log(res);
      this.router.navigateByUrl("employees");
    })
  }
  public onCancelHandler(e: Event){
    // e.preventDefault();

    // this.createForm.markAllAsTouched();

    // this.service.create(this.createForm.getRawValue(), (err, res) =>{
    //   console.log(res);
    //   this.router.navigateByUrl("employees");
    // })
  }
  dateTimeValidator(control: { value: string | number | Date; }) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      return { futureDate: true };
    }

    return null;
  }
}