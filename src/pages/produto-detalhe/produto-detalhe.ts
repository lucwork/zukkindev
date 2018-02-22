import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';

import {ProdutoService} from "../../providers/produto/produto.service";
import {Configuracao} from "../../app/core/shared/configuracao";
import {AvaliacaoModel} from "../../providers/avaliacao/avaliacao.model";
import {AvaliacaoService} from "../../providers/avaliacao/avaliacao.service";
import {LocalStorageService} from "../../app/core/local-storage.service";

/**
 * Generated class for the ProdutoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-produto-detalhe',
    templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {

    public semelhantes;
    public produto;
    public precos;
    public avaliacao: AvaliacaoModel = new AvaliacaoModel();

    public accordionOpiniaoConsumidores = false;
    public avaliacaoRequisicao = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public produtoService: ProdutoService,
                public loadingCtrl: LoadingController,
                public configuracao: Configuracao,
                public avaliacaoService: AvaliacaoService,
                public toastCtrl: ToastController,
                public localStorageService: LocalStorageService) {
    }

    ionViewDidLoad() {
        const id = this.navParams.get('id');

        let loader = this.createLoading('Carragando as informações do produto');
        loader.present();

        this.produtoService.detalhe(id).subscribe(
            (response) => {
                this.produto = response;
                loader.dismiss();

                this.carregarPrecoPorEstabelecmento();
                this.produtosSemelhantes();
            },
            (error) => {
                console.error(error);
                loader.dismiss();
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

    createLoading(message: string) {
        return this.loadingCtrl.create({
            content: message
        });
    }

    private carregarPrecoPorEstabelecmento() {
        this.produtoService.precoPorEstabelecimento(this.produto.pag_pro_id).subscribe(
            response => this.precos = response,
            error => console.error(error)
        );
    }

    private produtosSemelhantes() {
        if (!this.produto.pag_produto_categoria || !this.produto.pag_produto_categoria.pag_cat_id) {
            this.semelhantes = [];
            return false;
        }

        this.produtoService.listarSemelhantes(this.produto).subscribe(
            response => {
                this.semelhantes = response.body['data'].filter(item => item.pag_pro_id != this.produto.pag_pro_id);
            },
            error => console.error(error)
        );
    }

    public enviarAvaliacao(ev) {
        ev.preventDefault();

        this.avaliacao.pagProduto = this.produto.pag_pro_id;

        if (!this.avaliacao.isValid()) {
            this.presentToast('Preencha todos os campos da avaliaçoã');
            return false;
        }

        this.avaliacaoRequisicao = true;

        this.avaliacaoService.cadastrar(this.avaliacao).subscribe(
            (response: string) => {
                let msg = response ? response : 'Avaliação cadastrada com sucesso';
                this.presentToast(msg);

                this.avaliacaoRequisicao = false
            },
            error => {
                console.error(error);
                this.presentToast('Não foi possível cadastrar a avaliação');

                this.avaliacaoRequisicao = false
            }
        );
    }

    public linkIndisponivel() {
        this.presentToast('Link indisponível no momento');
    }

    public calcularDesconto(precoPromocao, precoNormal) {
        let result = (precoNormal - precoPromocao) * 100 / precoNormal;
        return Math.ceil(result);
    }

    public mudarEstabelecimentoBase(estabelecimento) {

        this.configuracao.estabelecimentoBase = estabelecimento.pag_est_id;
        this.localStorageService.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();

        this.navCtrl.viewDidLoad;
    }
}
