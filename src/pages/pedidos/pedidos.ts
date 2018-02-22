import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Configuracao} from "../../app/core/shared/configuracao";
import {PedidoProvider} from "../../providers/pedido/pedido.provider";

/**
 * Generated class for the PedidosPage page.
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
    selector: 'page-pedidos',
    templateUrl: 'pedidos.html',
})
export class PedidosPage {

    public pedidos;
    public paginacao: Paginacao;
    public filtro = {
        status: null,
        pagina: 1
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public configuracao: Configuracao,
                private pedidoProvider: PedidoProvider,
                private loadingCtrl: LoadingController) {

        this.paginacao = new Paginacao();
        this.paginacao.pagesInRange = [];
    }

    ionViewDidLoad() {
        let params = {};
        this.carregarPedidos(params);
    }

    carregarPedidos(params) {
        this.pedidos = null;

        let loader = this.loadingCtrl.create({
            content: 'Carregando pedidos...'
        });
        loader.present();

        this.pedidoProvider.listarTodos(params).subscribe(
            (response:any) => {
                this.pedidos = response.data.map(pedido => {
                    pedido.varDetalhe = false;
                    pedido.verProdutos = false;

                    return pedido;
                });

                console.info('debug dos pedidos');
                console.log(this.pedidos);

                this.paginacao = response.meta;
                if ( this.paginacao.current == 0 ) {
                    this.pedidos = [];
                    this.paginacao = new Paginacao();
                }

                this.paginacao.previous = this.paginacao.current - 1;
                if (this.paginacao.previous < 1) {
                    this.paginacao.previous = 1;
                }
                loader.dismiss();
            },
            error => {
                console.error(error);
                loader.dismiss();
            }
        );
    }

    pagina(pagina) {
        let params = {
            pagina
        };

        if (this.filtro.status) {
            params['status'] = this.filtro.status;
        }

        this.carregarPedidos(params);
    }

    corDoStatus(pedido) {
        if (pedido.status.nome_normalizado.toLowerCase() === 'pago') {
            return 'btn green-button add-inactive';
        }
        else if (pedido.status.nome_normalizado.toLowerCase() === 'cancelado') {
            return 'btn btn-red--light';
        }
        else {
            return 'btn btn-yellow';
        }
    }

    executarFiltro(status) {
        this.filtro.status = status;

        console.info('executar filtro');
        console.log(this.filtro.status);

        let params = {};

        if (this.filtro.status) {
            params['status'] = this.filtro.status;
        }

        this.carregarPedidos(params);
    }
}
