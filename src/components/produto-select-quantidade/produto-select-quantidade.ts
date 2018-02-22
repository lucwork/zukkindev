import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";

import {Configuracao} from "../../app/core/shared/configuracao";
import {ListaUtil} from "../../providers/lista/lista.util";
import {LoginPage} from "../../pages/login/login";

/**
 * Generated class for the ProdutoSelectQuantidadeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-produto-select-quantidade',
    templateUrl: 'produto-select-quantidade.html'
})
export class ProdutoSelectQuantidadeComponent implements OnInit {

    @Input() public produto;
    @Input() public navCtrl: NavController;

    public quantidade = 0;

    constructor(public configuracao: Configuracao,
                public listaUtil: ListaUtil) {
    }

    ngOnInit() {
        this.configuracao.alteracaoNaLista.subscribe(
            () => {
                let produto = this.listaUtil.pesquisarProduto(this.produto.pag_pro_id);

                this.quantidade = produto ? produto['quantidade'] : 0;
            }
        );

    }

    adicionar() {
        if (!this.configuracao.usuario.token) {
            this.navCtrl.push(LoginPage);
            return false;
        }

        const toastMsg = this.quantidade > 0
            ? 'Produto adicionado com sucesso'
            : 'Produto removido com sucesso'
        ;
        this.listaUtil.adicionarProduto(this.produto.pag_pro_id,this.quantidade,toastMsg);
    }

    valores() {
        let valores = [];

        for (let i = 0; i <= 50; i++) {
            valores.push(i);
        }

        return valores;
    }
}
