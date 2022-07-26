import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { LoginService } from './login.service';
import {catchError, finalize, retry} from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginservice:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.loginservice.getToken()}`

      }
    });
    console.log("inside interceptor")
    return next.handle(request)
                .pipe(retry(1),

                catchError((error:HttpErrorResponse)=>
                {
                  alert("error code: "+error.status+"\n"+`HTTP Error: ${request.url}`);
                  return throwError(console.error);

                })


   )
  }
}
