import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensionerDetail } from 'src/app/pensioner-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url;
  constructor(private http:HttpClient){}
  Login(credentials:any){
    return this.http.post(this.url+":9090/authenticate",credentials);

  }


  loginUser(token:any,credentials:any)
  {
    localStorage.setItem('token',token);
    localStorage.setItem('uname',credentials.userName);
    return true;
  }

  loginUserName()
  {
    return localStorage.getItem('uname');
  }
  isLoggedIn()
  {
      let token=localStorage.getItem('token');
      if(token==undefined||token==''||token==null)
      {
        return false;
      }else{

        return true;
      }
  }
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }
  getToken()
  {
    return localStorage.getItem('token');
  }



}
