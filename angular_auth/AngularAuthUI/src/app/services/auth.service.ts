import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:5198/api/User/"
  private baseUrl1:string = "http://localhost:5198/api/Query/"

  constructor(private http : HttpClient, private router: Router) { }

  signUp(userObj:any){
    return this.http.post<any>(this.baseUrl+'register',userObj)
  }

  add(queryObj:any){
    return this.http.post<any>(this.baseUrl1+'ask',queryObj)
  }
  

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])

  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }

}
