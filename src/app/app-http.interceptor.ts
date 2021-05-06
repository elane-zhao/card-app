import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from 'rxjs/operators';
import { LoaderService } from "./loader.service";
 
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {
    }
    // set value of the isLoading BehaviorSubject in the http interceptor
    // to add a loading effect when communicating with API
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.isLoading.next(true);
        return next.handle(req).pipe(
            finalize(() => this.loaderService.isLoading.next(false)));

    }
}