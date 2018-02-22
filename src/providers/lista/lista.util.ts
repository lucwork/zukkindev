import {Injectable} from "@angular/core";
import {LoadingController, ToastController} from "ionic-angular";

import {Configuracao} from "../../app/core/shared/configuracao";
import {ListaProvider} from "./lista";
import {LocalStorageService} from "../../app/core/local-storage.service";
import {ResumoProvider} from "../resumo/resumo";

@Injectable()
export class ListaUtil {

    constructor(public configuracao: Configuracao,
                public listaService: ListaProvider,
                public toastCtrl: ToastController,
                public localStorage: LocalStorageService,
                public loadingCtrl: LoadingController,
                private resumoProvider: ResumoProvider) {}

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    adicionarProduto(produtoId: number, quantidade: number, toastMsg: string) {
        let loader = this.loadingCtrl.create({
            content: 'atualizando lista...'
        });
        loader.present();

        return this.listaService.adicionarProduto(this.configuracao.lista.id,produtoId,quantidade).subscribe(
            (response) => {
                let index = this.configuracao.lista.produtos.findIndex((item) => item.id == produtoId);

                if (quantidade > 0) {
                    console.info('vai adicionar o produto na lista');
                    this.adicionarProdutoNaLista(index,produtoId,response['pag_lis_pro_quantidade']);
                } else {
                    console.info('vai remover o produto da lista');
                    this.removerProdutoDaLista(index);
                }

                this.presentToast(toastMsg);
            },
            (error) => {
                console.error(error);
                this.presentToast('Houve uma falha na requisição');

                return new Promise((resolve,reject) => reject(new Error(error)))
            },
            () => {
                this.configuracao.propagarAlteracaoNaLista();
                this.localStorage.atualizar(this.configuracao);
                loader.dismiss();
            }
        );
    }

    pesquisarProduto(produtoId): object|boolean {
        return this.configuracao.lista.produtos.find((item) => item.id == produtoId);
    }

    obterQuantidade(produtoId): number {
        let produto = this.pesquisarProduto(produtoId);
        return produto ? produto['quantidade'] : 0;
    }

    private adicionarProdutoNaLista(index,produtoId,quantidade) {
        if (index >= 0) {
            console.info('achou o index e vai modificar a quantidade');
            this.configuracao.lista.produtos[index]['quantidade'] = quantidade;
        } else {
            console.info('não encontrou o produto a vai adicionar na lista');
            this.configuracao.lista.produtos.push({id: produtoId, quantidade: quantidade});
        }
    }

    private removerProdutoDaLista(index) {
        if (index >= 0) {
            this.configuracao.lista.produtos.splice(index,1);
        }
    }

    public quantificarProdutosDisponiveisNoMercadoSelecionado() {
        let params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos,
            lista: this.configuracao.lista.id,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase
        };

        this.resumoProvider.get(params).subscribe(
            (response: Array<any>) => {
                let selecionado = response.find(item => item.estabelecimento.pag_est_id == this.configuracao.estabelecimentoBase);

                this.configuracao.lista.produtosDisponiveisNoMercado = [];
                if (selecionado) {
                    this.configuracao.lista.produtosDisponiveisNoMercado = selecionado.lista.filter(item => {
                        return this.configuracao.lista.produtos.find(produto => produto.id == item.produto.pag_pro_id);
                    });
                }
            },
            error => {
                console.error(error);
            }
        );
    }
}
