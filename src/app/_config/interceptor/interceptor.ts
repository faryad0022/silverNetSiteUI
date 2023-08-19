import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DomainName} from "../pathUtility/pathTool";

@Injectable({providedIn: 'root'})

    export class Interceptor implements HttpInterceptor{
        constructor(){}
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
           // myRequest: HttpRequest<any> = req;
           const token = localStorage.getItem('local');
           const myRequest = req.clone({
               url: DomainName + req.url,
               headers: req.headers.append('Authorization', 'Bearer '+ token),
           });
           return next.handle(myRequest);
        }
    }