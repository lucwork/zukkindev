import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FinalizarCompraPage} from './finalizar-compra';
import {ComponentsModule} from "../../components/components.module";
import {EstabelecimentoProvider} from "../../providers/estabelecimento/estabelecimento";

@NgModule({
    declarations: [
        FinalizarCompraPage,
    ],
    imports: [
        IonicPageModule.forChild(FinalizarCompraPage),
        ComponentsModule
    ],
    providers: [
        EstabelecimentoProvider
    ]
})
export class FinalizarCompraPageModule {
}
