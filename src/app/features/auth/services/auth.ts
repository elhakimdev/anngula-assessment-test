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
export interface ResultData {
  success: boolean,
  data?: {
    email: string
  }
}
export const _jwtSecret = "P4ssw2rd_s3cr3t" as const;

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

  private validate(password: string, callback: (result?: boolean) => void) : void {
    compare(password, this.credentials.password, (error, res) => {
      if(error){
        throw new Error("Error during validate given credentials")
      }
      callback(res);
    })
  }

  public login(options: LoginOptions, callback: <
      Err, 
      Data extends Record<string, unknown>
    >(err?: Err, data?: Data extends Record<string, unknown> ? ResultData : Data) => void): void {
    // console.log(this.credentials);

    // validate email
    if(this.credentials.email !== options.payload.email){
      callback(new Error("The given email wasn't found"), {
        success: false
      });
    }

    // validate password
    this.validate(options.payload.password, (res) => {
      if(!res){
        callback(new Error("The given credentials didnt match"), {
          success: !res,
        });
      }

      this.credentials.state.isLoggedIn = res as boolean;
      
      callback(undefined, {
        success: res!,
        data: {
          email: this.credentials.email,
        }
      })
    })
  }

  public logout(options: LoginOptions, callback: <
    Err, 
    Data extends Record<string, unknown>
  >(err?: Err, data?: Data extends Record<string, unknown> ? ResultData : Data) => void): void {
  // console.log(this.credentials);

    console.log(this.credentials);
    
    if(this.credentials.email !== options.payload.email) {
      // throw new Error("Error while logging out these user")
      callback(new Error("Error while logging out these user"), {
        success: false
      })
    }

    this.credentials.email = "";
    this.credentials.password = "";
    this.credentials.state.isLoggedIn = false;

    if(callback){
      callback(null, {
        success: true,
        data: {
          email: ""
        }
      })
    }
    
  }
}