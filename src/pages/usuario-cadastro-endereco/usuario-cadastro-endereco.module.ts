import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {UsuarioCadastroEnderecoPage} from './usuario-cadastro-endereco';

@NgModule({
    declarations: [
        UsuarioCadastroEnderecoPage,
    ],
    imports: [
        IonicPageModule.forChild(UsuarioCadastroEnderecoPage)
    ],
})
export class UsuarioCadastroEnderecoPageModule {
}
