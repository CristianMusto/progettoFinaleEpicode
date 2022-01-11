import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRes } from 'src/app/classes/auth/login-res';
import { AdminLog } from 'src/app/classes/login/admin-log';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  login(admin: AdminLog){
    return this.http.post<LoginRes>(environment.apiUrl+'api/auth/login/', admin);
  }

  isLogged(){
    return localStorage.getItem('accessToken') != null;
  }
  currentUser() {
    return localStorage.getItem('currentUser') || null;
  }
  userToken() {
    return localStorage.getItem('accessToken') || null;
  }

  logOut(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
  }
}
