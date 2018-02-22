import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Configuracao } from './shared/configuracao';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private configuracao: Configuracao){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.configuracao.usuario.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.configuracao.usuario.token
                }
            });
        }

        return next.handle(request);
    }
}