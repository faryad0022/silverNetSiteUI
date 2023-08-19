import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap, throwError } from "rxjs";
import { DomainName } from "../pathUtility/pathTool";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AuthService } from "src/app/_core/_services/auth.service";

@Injectable({ providedIn: 'root' })

export class Interceptor implements HttpInterceptor {
    constructor(
        private alertService: ToastrService,
        private router: Router,
        private authService:AuthService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // myRequest: HttpRequest<any> = req;
        const token = localStorage.getItem('local');
        const myRequest = req.clone({
            url: DomainName + req.url,
            headers: req.headers.append('Authorization', 'Bearer ' + token),
        });
        return next.handle(myRequest).pipe(
            catchError((error) => {
                if ((error as HttpErrorResponse).status === 401) {
                    this.alertService.error('You dont have access permission', 'Error #401');
                    this.authService.logOut();
                }
                if ((error as HttpErrorResponse).status === 404) {
                    this.alertService.warning('Not Found', 'Error #404');
                }
                if ((error as HttpErrorResponse).status === 400) {
                    this.alertService.error('Bad Request', 'Error #400');
                }
                return of(error);
            })
        );
    }

}
