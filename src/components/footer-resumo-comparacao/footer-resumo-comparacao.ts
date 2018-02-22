import {Component, ViewChild, OnInit} from '@angular/core';

import {NavController, Slides} from 'ionic-angular';
import {ComparacaoPage} from "../../pages/comparacao/comparacao";
import {Configuracao} from "../../app/core/shared/configuracao";
import {ResumoProvider} from "../../providers/resumo/resumo";
import {LocalStorageService} from "../../app/core/local-storage.service";

/**
 * Generated class for the FooterResumoComparacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-footer-resumo-comparacao',
    templateUrl: 'footer-resumo-comparacao.html'
})
export class FooterResumoComparacaoComponent implements OnInit {

    @ViewChild(Slides) slides: Slides;

    public exibirLoading = false;

    lista = null;

    constructor(private navCtrl: NavController,
                private configuracao: Configuracao,
                private localStorage: LocalStorageService,
                private resumoProvider: ResumoProvider) {
        this.lista = this.configuracao.lista;
    }

    ngOnInit() {
        //this.configuracao.alteracao.subscribe((configuracao) => this.carregarResumo());
        this.configuracao.alteracaoNaLista.subscribe((configuracao) => this.carregarResumo());
    }

    private carregarResumo() {
        if ( !this.configuracao.buscaResumo ) {
            return;
        }
        console.info("BUSCA RESUMO ...");
        this.exibirLoading = true;

        let params = {
            lista: this.configuracao.lista.id,
            estabelecimentos: this.configuracao.estabelecimentos,
            modo: this.configuracao.modo,
        };

        this.resumoProvider.get(params).subscribe(
            (response: any) => {
                if ( response ) {
                    this.configuracao.resumoComparacao = response.filter(item => item.lista.length > 0);
                    this.localStorage.atualizar(this.configuracao);
                    //this.configuracao.propagarAlteracao();
                }
                this.configuracao.buscaResumo = false;
                this.exibirLoading = false;
            },
            error => {
                console.error(error);
                this.exibirLoading = false;
            }
        );
    }

    anterior(ev) {
        ev.preventDefault();
        this.slides.slidePrev(500);
    }

    proximo(ev) {
        ev.preventDefault();
        this.slides.slideNext(500);
    }

    comparacao() {
        this.navCtrl.push(ComparacaoPage)
    }
}
