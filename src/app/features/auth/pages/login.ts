import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AuthService } from '../services/auth';
@Component({
  templateUrl: "../components/login.html",
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    ButtonsModule, 
    InputsModule, 
    FloatingLabelModule, 
    LabelModule, 
    CommonModule
  ]
})

export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })
  };
  ngOnInit(): void {
  };
  handleClick(){
    this.authService.login({
      payload: this.loginForm.getRawValue()
    }, (err, data) => {
      if(err){
        throw err
      }
      // TO Do handle on successfull login data !
      // create an jwt and store inside localstorage !
      console.log(data?.success);
    })
  }
}