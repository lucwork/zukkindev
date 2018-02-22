import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Configuracao } from './shared/configuracao';
import { ConfiguracaoService } from './shared/configuracao.service';
import { TokenInterceptor } from './token.interceptor';
import { LocalStorageService } from './local-storage.service';

@NgModule({
    providers: [
        Configuracao,
        ConfiguracaoService,
        LocalStorageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {}