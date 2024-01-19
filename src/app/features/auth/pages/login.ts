import { Component, OnInit, ViewChild } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule,
  FormBuilder,
  Validators, } from "@angular/forms";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule, TextBoxComponent } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { CommonModule } from '@angular/common';
@Component({
  templateUrl: "../components/login.html",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonsModule, InputsModule, FloatingLabelModule, LabelModule, CommonModule]
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })
  };
  ngOnInit(): void {
    // console.log("init", this.loginForm)
  };
  handleClick(){
    console.log(this.loginForm.getRawValue());
    // TO Do: implement login
  }
}