import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Configuracao} from './../../app/core/shared/configuracao';
import {ResumoProvider} from './../../providers/resumo/resumo';
import {Slides} from 'ionic-angular';

/**
 * Generated class for the ComparacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-comparacao',
    templateUrl: 'comparacao.html',
})
export class ComparacaoPage {

    @ViewChild(Slides) slides: Slides;

    resumo = null;
    mais_barato = {
        total: 0
    };
    atual = null;
    exibeEnderecoAtual: boolean = false;
    exibeLista: boolean = false;
    lista = null;

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , private configuracao: Configuracao
        , private resumoProvider: ResumoProvider
        , private loadingCtrl: LoadingController) {
        this.busca();
    }

    busca() {
        let loader = this.loadingCtrl.create({
            content: 'Comparando estabelecimentos'
        });
        loader.present();
        let that = this;
        this.lista = this.configuracao.lista;
        let params = {
            lista: this.lista.id
            , estabelecimentos: this.configuracao.estabelecimentos
            , modo: this.configuracao.modo
        }
        this.resumo = null;
        this.resumoProvider.getOrdenado(params, function (r) {
            that.resumo = r;
            that.mais_barato = r[0];
            that.atual = r[0];
            loader.dismissAll();
        }, function (e) {
            loader.dismissAll();
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ComparacaoPage');
    }

    anterior(ev) {
        ev.preventDefault();
        this.exibeEnderecoAtual = false;
        this.exibeLista = false;
        this.slides.slidePrev(500);
    }

    proximo(ev) {
        ev.preventDefault();
        this.exibeEnderecoAtual = false;
        this.exibeLista = false;
        this.slides.slideNext(500);
    }

    verEnderecoAtual() {
        this.exibeEnderecoAtual = true;
    }

    atualizarAtual() {
        const index = this.slides.getActiveIndex();
        this.atual = this.resumo[index];
        console.log(this.atual);

        this.exibeLista = !this.exibeLista;
    }
}
