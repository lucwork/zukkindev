import { NgModule } from '@angular/core';

import { UsuarioService } from './shared/usuario.service';

@NgModule({
    providers: [
        UsuarioService
    ]
})
export class UsuarioModule {}