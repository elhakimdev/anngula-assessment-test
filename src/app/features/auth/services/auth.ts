import { Injectable } from "@angular/core";
import {compare, hash} from "bcryptjs";
import { error } from "console";

export interface LoginRequest {
  email: string,
  password: string
}
export interface LoginOptions {
  payload: LoginRequest
}
export interface Credentials {
  email: string,
  password: string,
  state: {
    isLoggedIn: boolean
  }
}

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private credentials: Credentials = {
    email: "",
    password: "",
    state: {
      isLoggedIn: false
    }
  }

  constructor(){
    this.bootstrapService();
  }

  private bootstrapService(){ 
    const initPassword: string = "P4ssw2rd_s3cr3t";
    this.initializeCredentials(initPassword);
  }

  private initializeCredentials(data: string){
    hash(data, 10, (err, res) => {
      if(err){
        console.log(err);
      }
      this.credentials.email = "superadmin@example.com";
      this.credentials.password = res;
      this.credentials.state.isLoggedIn = false;
    })
  }

  login(options: LoginOptions, callback: <Err, Data>(err?: Err, data?: Data) => void): void {
    console.log(this.credentials);

    if(this.credentials.email !== options.payload.email){
      callback(new Error("The given email is not valid email"));
    }

    this.validate(options.payload.password, (res) => {
      // console.log("password" + res)
      callback(undefined, {
        success: res
      })
    })
  }

  private validate(password: string, callback: (result?: boolean) => void) : void {
    compare(password, this.credentials.password, (error, res) => {
      if(error){
        throw new Error("Error during validate given credentials")
      }
      callback(res);
    })
  }
}