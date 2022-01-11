import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLog } from 'src/app/classes/login/admin-log';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: AdminLog = new AdminLog();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.admin).subscribe(data => {
      localStorage.setItem('accessToken',data.accessToken);
      localStorage.setItem('currentUser',JSON.stringify(data.id));
      this.router.navigate(['table']);
    })
  }

}
