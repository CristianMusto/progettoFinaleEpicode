import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq: HttpRequest<any> = request;

    if (this.loginService.isLogged()) {

      authReq = request.clone({ 
        headers: request.headers
        .set("Authorization", 'Bearer ' + this.loginService.userToken())
        .set("X-TENANT-ID", 'fe_0521')
        .set('Content-Type', 'application/json')
       });

  }

    return next.handle(authReq);
  }
}
