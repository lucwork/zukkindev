import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Configuracao} from "../../app/core/shared/configuracao";
import {EstabelecimentoProvider} from "../../providers/estabelecimento/estabelecimento";
import {ResumoProvider} from "../../providers/resumo/resumo";
import {ListaUtil} from "../../providers/lista/lista.util";
import {FinalizarCompraPage} from "../finalizar-compra/finalizar-compra";

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class Categoria {

    constructor (
        public icone: string
        ,public slug: string
        ,public quantidade: number
        ,public titulo: string
    ){
    }
}

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

    lista = null;
    estabelecimentos = null;
    estabelecimento666;
    selectOptions: any;
    resumo;
    filtro_categorias: Categoria[];
    categoria_filtrada: Categoria;
    exibirLoading:boolean;

    constructor(
        public navCtrl: NavController
        ,public navParams: NavParams
        ,public configuracao: Configuracao
        ,public estabelecimentoProvider : EstabelecimentoProvider
        ,public loadingCtrl: LoadingController
        ,public resumoProvider: ResumoProvider
        ,public listaUtil: ListaUtil
    )
    {
        this.exibirLoading = false;
        this.filtro_categorias = [
            new Categoria('sprites-all-dp-cart',null, 0, 'Todos os produtos'),
            new Categoria('sprites-frios-cart','frios-e-laticinios', 0, 'Frios'),
            new Categoria('sprites-bebida-cart','bebidas', 0, 'Bebidas'),
            new Categoria('sprites-clean-cart','limpeza', 0, 'Limpeza'),
            new Categoria('sprites-horti','hortifruti', 0, 'Hortifruti'),
            new Categoria('sprites-matin','matinais-e-sobremesas', 0, 'Matinais e Sobremesas'),
        ];
        this.selectOptions = {
            title: 'Estabelecimentos',
            mode: 'md'
        };
        this.configuracao.alteracaoNaLista.subscribe(configuracao => {
            this.lista = this.configuracao.lista;
            this.carregaDados();
        });
    }

    ionViewDidLoad() { }

    fechar() {
        this.navCtrl.pop();
    }

    mudaEstabelecimento() {
        console.info(this.estabelecimento666);
    }

    populaCategorias(items) {
        for ( let j=0; j < this.filtro_categorias.length; j++) {
            this.filtro_categorias[j].quantidade = 0;
        }
        for(let i=0; i < items.length; i++) {
            let slug = items[i].produto.pag_pro_categoria_slug;
            console.info(slug);
            this.filtro_categorias[0].quantidade++;//todas
            for ( let j=0; j < this.filtro_categorias.length; j++) {
                if (this.filtro_categorias[j].slug == slug) {
                    this.filtro_categorias[j].quantidade++;
                    break;
                }
            }

        }
    }

    exibeProduto(produto) {
        if ( this.categoria_filtrada == null || this.categoria_filtrada.slug == null ){
            return true;
        }
        return (produto.pag_pro_categoria_slug == this.categoria_filtrada.slug)
    }

    filtro(categoria) {
        this.categoria_filtrada = categoria;
    }

    remover(produto) {
        const toastMsg = 'Produto removido com sucesso';
        this.listaUtil.adicionarProduto(produto.pag_pro_id,0,toastMsg);
        this.configuracao.propagarAlteracaoNaLista();
    }

    carregaDados() {
        this.exibirLoading = true;
        let estabs = this.configuracao.estabelecimentos;
        this.categoria_filtrada = this.filtro_categorias[0];
        this.estabelecimentoProvider.lista({
            modo: this.configuracao.modo,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase,
            estabelecimentos: estabs,
            lista: this.configuracao.lista.id
        }).subscribe(
            (r) => {
                this.estabelecimentos = r;
                this.estabelecimento666 = r[0];
                this.lista =  this.configuracao.lista;
                this.populaCategorias(this.estabelecimento666.lista);
                this.exibirLoading = false;
            },
            (e) => {
                console.error(e);
            }
        );
    }

    paginaFinalizarCompra(ev) {
        ev.preventDefault();

        this.navCtrl.push(FinalizarCompraPage);
    }
}
