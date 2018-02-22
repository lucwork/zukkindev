import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, Slides, ToastController} from 'ionic-angular';

import {ResumoProvider} from "../../providers/resumo/resumo";
import {Configuracao} from "../../app/core/shared/configuracao";
import {LocalStorageService} from "../../app/core/local-storage.service";
import {EnderecoService} from "../../providers/endereco/endereco.service";

/**
 * Generated class for the EstabelecimentoMarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-estabelecimento-marketplace',
    templateUrl: 'estabelecimento-marketplace.html',
})
export class EstabelecimentoMarketplacePage {

    @ViewChild(Slides) slides: Slides;

    public selecionado;
    public resumo = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public configuracao: Configuracao,
                private resumoProvider: ResumoProvider,
                private loadingCtrl: LoadingController,
                private localStorage: LocalStorageService,
                private enderecoService: EnderecoService,
                private toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: 'Carregando estabelecimentos...'
        });
        loader.present();

        let params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos,
            lista: this.configuracao.lista.id,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase
        };

        this.resumoProvider.get(params).subscribe(
            (response: Array<any>) => {
                this.resumo = response.filter(item => item.estabelecimento.pag_est_id != this.configuracao.estabelecimentoBase);
                this.selecionado = response.find(item => item.estabelecimento.pag_est_id == this.configuracao.estabelecimentoBase);
                console.log(this.selecionado);

                loader.dismiss();
            },
            error => {
                loader.dismiss();
                console.error(error);
            }
        );
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    anterior(ev) {
        ev.preventDefault();
        this.slides.slidePrev(500);
    }

    proximo(ev) {
        ev.preventDefault();
        this.slides.slideNext(500);
    }

    voltar(ev) {
        ev.preventDefault();
        this.navCtrl.pop();
    }

    alterarEstabelecimento(estabelecimento) {
        let loader = this.loadingCtrl.create({
            content: 'Alterando o estabelecimento...'
        });
        loader.present();

        this.enderecoService.alterarEstabelecimentoBase(this.configuracao.local.id,estabelecimento.pag_est_id).subscribe(
            response => {
                this.configuracao.estabelecimentos = response['estabelecimentos'];

                this.localStorage.atualizar(this.configuracao);
                this.configuracao.propagarAlteracao();

                loader.dismiss();
                this.presentToast('Estabelecimento alterado com sucesso');

                this.navCtrl.pop();
            },
            error => {
                console.error(error);
                loader.dismiss();
                this.presentToast('Não foi possível alterar o estabelecimento');
            }
        );
    }
}
