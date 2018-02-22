import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

import {ProdutoDetalhePage} from "../../pages/produto-detalhe/produto-detalhe";
import {Configuracao} from "../../app/core/shared/configuracao";

/**
 * Generated class for the ProdutoBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-produto-box',
    templateUrl: 'produto-box.html'
})
export class ProdutoBoxComponent {

    @Input() public produto;

    @Input() public navCtrl: NavController;

    constructor(public configuracao: Configuracao) {}

    paginaProduto(produto) {
        this.navCtrl.push(ProdutoDetalhePage,{id: produto.pag_pro_id});
    }
}
