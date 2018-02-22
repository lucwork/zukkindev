import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsuarioCadastroPage} from './usuario-cadastro';
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
    declarations: [
        UsuarioCadastroPage,
    ],
    imports: [
        IonicPageModule.forChild(UsuarioCadastroPage),
        TextMaskModule
    ],
})
export class UsuarioCadastroPageModule {
}
