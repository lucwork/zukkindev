import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProdutoDetalhePage} from './produto-detalhe';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        ProdutoDetalhePage,
    ],
    imports: [
        IonicPageModule.forChild(ProdutoDetalhePage),
        ComponentsModule
    ],
})
export class ProdutoDetalhePageModule {
}
