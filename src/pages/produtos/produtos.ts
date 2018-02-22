import { ProdutoService } from './../../providers/produto/produto.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content} from 'ionic-angular';
import { Configuracao } from './../../app/core/shared/configuracao';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class Paginacao {
  current: number;
  endPage:number;
  first:number;
  firstItemNumber: number;
  firstPageInRange: number;
  last: number;
  lastItemNumber:number;
  lastPageInRange:number;
  next: number;
  numItemsPerPage: number;
  pageCount:number;
  pageRange: number;
  pagesInRange: any;
  previous: number;
}

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
  styles: ['./produtos.scss']
})
export class ProdutosPage {

  @ViewChild(Content) content: Content;

  produtos = null;
  categorias = null;
  filtroCategoria = null;
  paginacao: Paginacao;
  parametros = {
    busca: {
      termo: null,
      categoria: null,
      categoria_pai: null,
        estabelecimento: []
    },
    total_por_pagina: 12,
    pagina: 1,
    nome: null,
    modo: ""
  };

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private produtoProvider: ProdutoService
    ,private configuracao: Configuracao
    ,private loadingCtrl: LoadingController
  )
  {
    this.produtos = [];
    this.paginacao = new Paginacao();
    this.paginacao.pagesInRange = [];
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ProdutosPage');
    let termo = this.navParams.get('termo') != undefined ? this.navParams.get('termo') : null;
    let categoria_pai = this.navParams.get('categoria_pai') != undefined ? this.navParams.get('categoria_pai'):null;
    let nome = this.navParams.get('nome')  != undefined ? this.navParams.get('nome'):null;
    this.parametros = {
      busca: {
        termo: termo,
        categoria: null,
        categoria_pai: categoria_pai,
          estabelecimento: []
      },
      total_por_pagina: 12,
      pagina: 1,
      nome: nome,
      modo: this.configuracao.modo
    };
    console.info(this.configuracao.estabelecimentos.length+ " estabelecimentos");
    this.produtos = [];
    this.busca(1);
  }

  busca(pagina) {
    console.info("pagina "+pagina);
    this.parametros.pagina = pagina;
    let that = this;
    let loader = this.loadingCtrl.create({
      content: 'Buscando produtos'
    });
    this.parametros.busca.estabelecimento = this.configuracao.estabelecimentos;
    if( this.filtroCategoria != null ) {
      this.parametros.busca.categoria = this.filtroCategoria.pag_cat_id;
    }
    loader.present();
    this.produtoProvider.lista(this.parametros).subscribe(
      (response) => {
          let body = response.body;
          that.produtos = body['data'];
          that.paginacao = body['meta'];
          if ( that.paginacao.current == 0 ) {
            that.produtos = [];
            that.paginacao = new Paginacao();
          }
          that.paginacao.previous = that.paginacao.current - 1;
          if (that.paginacao.previous < 1) {
            that.paginacao.previous = 1;
          }

          this.produtoProvider.listaCategorias(this.parametros).subscribe(
            (response2) => {
              that.categorias = response2.body;
            },
            (err) => {
              console.error(err);
            }
          );
          this.content.scrollToTop();
          loader.dismiss();
      },
      (error) => {
          console.error(error);
          loader.dismiss();
      }
    );
  }

  pagina(n) {
    this.busca(n);
    return false;

  }

  converteIndice(binary) {
    return parseInt(binary, 2);
  }
}
