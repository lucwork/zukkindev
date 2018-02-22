import {Component, Input} from '@angular/core';

import {NavController, ToastController} from "ionic-angular";
import {ProdutosPage} from "../../pages/produtos/produtos";

/**
 * Generated class for the ProdutoAgrupamentoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-produto-agrupamento',
    templateUrl: 'produto-agrupamento.html',
    styles: ['./app-produto-agrupamento.scss']
})
export class ProdutoAgrupamentoComponent {

    @Input() public imagem: string;
    @Input() public titulo: string;
    @Input() public slug: string;
    @Input() public produtos: Array<any>;
    @Input() public categoria;

    @Input() public navCtrl: NavController;

    constructor(
        private toastCtrl: ToastController
    ) {}

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    exibirTodos(ev) {
        ev.preventDefault();

        if (!this.categoria || !this.categoria.pag_cat_id) {
            this.presentToast('link indisponível no momento!');
        }

        this.navCtrl.push(ProdutosPage, {
            categoria_pai: this.categoria.pag_cat_id,
            nome: this.categoria.pag_cat_nome
        });
    }
}
