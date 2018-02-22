import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {HomePage} from "../home/home";
import {PedidosPage} from "../pedidos/pedidos";

/**
 * Generated class for the ObrigadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-obrigado',
    templateUrl: 'obrigado.html',
})
export class ObrigadoPage {

    public id;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.id = navParams.get('id');
    }

    paginaHome(ev) {
        ev.preventDefault();
        this.navCtrl.push(HomePage);
    }

    paginaPedidos(ev) {
        ev.preventDefault();
        this.navCtrl.push(PedidosPage);
    }
}
