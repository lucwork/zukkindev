import {ListaProvider} from './../../providers/lista/lista';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {Configuracao} from "../../app/core/shared/configuracao";
import {LocalStorageService} from "../../app/core/local-storage.service";

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-lista',
    templateUrl: 'lista.html',
})
export class ListaPage {

    listas = null;
    lista = {
        pag_lis_nome: ""
    };
    listaAtiva = null;
    novoNome: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public listaProvider: ListaProvider,
                private alertCtrl: AlertController,
                private loadingCtrl: LoadingController,
                public configuracao: Configuracao,
                public localStorageService: LocalStorageService) {
    }

    ionViewDidLoad() {
        this.carregaLista();
    }

    carregaLista() {
        let that = this;
        this.listaProvider.lista().subscribe(
            (response) => {
                console.info(response);
                that.listas = response;
                for (let i = 0; i < that.listas.length; i++) {
                    if (that.listas[i]['pag_lis_status']) {
                        that.listaAtiva = that.listas[i];
                        console.info("ativa ", that.listaAtiva);
                        break;
                    }
                }
            }
        );
        this.lista = {
            pag_lis_nome: ""
        };
    }

    editar(lista) {
        this.listas.map(function (i) {
            i.editando = false
        });
        lista.editando = true;
    }

    gravarAlteracao(lista) {
        let that = this;
        this.listas = [];
        let loader = this.loadingCtrl.create({
            content: 'Carregando'
        });
        loader.present();
        this.listaProvider.salvarAlteracao({
            pagLisId: lista.pag_lis_id,
            pagLisNome: lista.pag_lis_nome,
            pagLisStatus: (lista.pag_lis_status) ? 1 : 0
        }).subscribe(
            (response) => {
                that.carregaLista();
                loader.dismiss();
            }
        );
    }

    gravarNovo() {
        let that = this;
        this.listas = [];
        let loader = this.loadingCtrl.create({
            content: 'Carregando'
        });
        loader.present();
        this.listaProvider.salvarNovo({pagLisNome: this.lista.pag_lis_nome}).subscribe(
            (response) => {
                console.info("ok!");
                that.carregaLista();
                loader.dismiss();
            }
        );
    }

    // TODO refatorar esse trecho
    ativar(lista) {
        let loader = this.loadingCtrl.create({
            content: 'Carregando'
        });
        loader.present();
        let that = this;
        this.listaProvider.salvarAlteracao({
            pagLisId: lista.pag_lis_id, pagLisNome: lista.pag_lis_nome, pagLisStatus: 1
        }).subscribe(
            (response) => {
                this.configuracao.lista = {
                    id: lista.pag_lis_id,
                    nome: lista.pag_lis_nome,
                    produtos: lista.pag_lista_produtos.map(listaProduto => {
                        return {
                            id: listaProduto.pag_produto.pag_pro_id,
                            quantidade: listaProduto.pag_lis_pro_quantidade
                        }
                    }),
                    produtosDisponiveisNoMercado: []
                };
                this.localStorageService.atualizar(this.configuracao);
                this.configuracao.propagarAlteracao();

                this.listaProvider.salvarAlteracao({
                    pagLisId: that.listaAtiva.pag_lis_id
                    , pagLisNome: that.listaAtiva.pag_lis_nome
                    , pagLisStatus: 0
                }).subscribe(
                    (response) => {
                        loader.dismiss();
                        that.navCtrl.pop();
                    }
                );
            }
        );
    }

    remover(lista) {
        let that = this;
        let alert = this.alertCtrl.create({
            title: 'Certeza?',
            message: 'Deseja realmente excluir?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        let loader = this.loadingCtrl.create({
                            content: 'Carregando'
                        });
                        loader.present();
                        this.listaProvider.excluir({
                            pagLisId: lista.pag_lis_id
                        }).subscribe(
                            (response) => {
                                that.carregaLista();
                                loader.dismiss();
                            }
                        );
                    }
                }
            ]
        });
        alert.present();
    }

    closeModal() {
        this.navCtrl.pop();
        return false;
    }
}
