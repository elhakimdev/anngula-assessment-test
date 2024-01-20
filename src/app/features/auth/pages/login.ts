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
import { AuthService, ResultData, _jwtSecret } from '../services/auth';
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
    private authService: AuthService,
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
    }, (err, result) => {
      if(err){
        throw err
      }
      // TO Do handle on successfull login data !
      // create an jwt and store inside localstorage !
      // we can't do jwt token genration here (because in case, we runing an angular framework in web context), so for simpler, use the local storage and combine with encyption to store the user session
      const {success, data} = result as ResultData;
      console.log(success, data);
      const _toBeStored = JSON.stringify({
        email: data?.email,
        isLoggedIn: true,
      })
      localStorage.setItem("_data", JSON.stringify(_toBeStored));
    })
  }
}