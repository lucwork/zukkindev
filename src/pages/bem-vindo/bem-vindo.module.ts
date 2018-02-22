import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BemVindoPage} from './bem-vindo';
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
    declarations: [
        BemVindoPage,
    ],
    imports: [
        IonicPageModule.forChild(BemVindoPage),
        TextMaskModule
    ],
})
export class BemVindoPageModule {
}
