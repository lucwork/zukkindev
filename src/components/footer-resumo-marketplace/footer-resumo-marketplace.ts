import {Component, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";

import {EstabelecimentoMarketplacePage} from "../../pages/estabelecimento-marketplace/estabelecimento-marketplace";
import {Configuracao} from "../../app/core/shared/configuracao";
import {ResumoProvider} from "../../providers/resumo/resumo";
import {EstabelecimentoProvider} from "../../providers/estabelecimento/estabelecimento";


/**
 * Generated class for the FooterResumoMarketplaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-footer-resumo-marketplace',
    templateUrl: 'footer-resumo-marketplace.html'
})
export class FooterResumoMarketplaceComponent implements OnInit {

    public selecionado;
    public estabelecimento;

    constructor(public navCtrl: NavController,
                public configuracao: Configuracao,
                private resumoProvider: ResumoProvider,
                private estabelecimentoProvider: EstabelecimentoProvider) {
    }

    ngOnInit() {
        this.configuracao.alteracaoNaLista.subscribe(() => this.carregarResumo());
        this.configuracao.alteracao.subscribe(() => {
            this.carregarResumo();
            this.carregarEstabelecimentoBase()
        });
    }

    mudarEstabelecimento(ev) {
        ev.preventDefault();
        this.navCtrl.push(EstabelecimentoMarketplacePage);
    }

    private carregarResumo() {
        let params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos,
            lista: this.configuracao.lista.id,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase
        };

        this.resumoProvider.get(params).subscribe(
            (response: Array<any>) => {
                this.selecionado = response.find(item => item.estabelecimento.pag_est_id == this.configuracao.estabelecimentoBase);

                this.configuracao.lista.produtosDisponiveisNoMercado = [];
                if (this.selecionado) {
                    this.configuracao.lista.produtosDisponiveisNoMercado = this.selecionado.lista.filter(item => {
                        return this.configuracao.lista.produtos.find(produto => produto.id == item.produto.pag_pro_id);
                    });
                }
            },
            error => {
                console.error(error);
            }
        );
    }

    private carregarEstabelecimentoBase() {
        this.estabelecimentoProvider.pesquisarPeloId(this.configuracao.estabelecimentoBase).subscribe(
            response => this.estabelecimento = response,
            error => console.error(error)
        );
    }
}
