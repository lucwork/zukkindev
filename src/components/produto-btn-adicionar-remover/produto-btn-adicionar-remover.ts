import {Component, Input, OnInit} from '@angular/core';

import {Configuracao} from "../../app/core/shared/configuracao";
import {LoginPage} from "../../pages/login/login";
import {ListaUtil} from "../../providers/lista/lista.util";

/**
 * Generated class for the ProdutoBtnAdicionarRemoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-produto-btn-adicionar-remover',
    templateUrl: 'produto-btn-adicionar-remover.html'
})
export class ProdutoBtnAdicionarRemoverComponent implements OnInit {

    @Input() public produto;
    @Input() public navCtrl;
    @Input() public fullWidth = false;

    produtoAdicionado;

    constructor(public configuracao: Configuracao,
                public listaUtil: ListaUtil) {
    }

    ngOnInit() {
        this.configuracao.alteracaoNaLista.subscribe(
            () => this.produtoAdicionado = this.listaUtil.pesquisarProduto(this.produto.pag_pro_id) ? true : false
        );
    }

    adicionar() {
        if (!this.configuracao.usuario.token) {
            this.navCtrl.push(LoginPage);
            return false;
        }

        const toastMsg = 'Produto adicionado com sucesso';
        this.listaUtil.adicionarProduto(this.produto.pag_pro_id,1, toastMsg);
    }

    remover() {
        const toastMsg = 'Produto removido com sucesso';
        this.listaUtil.adicionarProduto(this.produto.pag_pro_id,0,toastMsg);
    }
}
