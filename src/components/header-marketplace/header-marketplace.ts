import {Component, Input} from '@angular/core';

import {MenuController, NavController} from 'ionic-angular';

import {Configuracao} from "../../app/core/shared/configuracao";
import {HomePage} from "../../pages/home/home";
import {CarrinhoPage} from "../../pages/carrinho/carrinho";
import {ListaPage} from "../../pages/lista/lista";
import {UsuarioEditarPerfilPage} from "../../pages/usuario-editar-perfil/usuario-editar-perfil";
import {LoginPage} from "../../pages/login/login";

/**
 * Generated class for the HeaderMarketplaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-header-marketplace',
    templateUrl: 'header-marketplace.html'
})
export class HeaderMarketplaceComponent {

    @Input() navCtrl: NavController;

    constructor(private menuCtrl: MenuController,
                public configuracao: Configuracao) {
    }

    openMenu() {
        this.menuCtrl.open();
    }

    paginaCadastro() {
        if (this.configuracao.usuario.token) {
            this.navCtrl.push(UsuarioEditarPerfilPage);
        } else {
            this.navCtrl.push(LoginPage);
        }
    }

    paginaLista() {
        this.navCtrl.push(ListaPage);
    }

    paginaCarrinho() {
        this.navCtrl.push(CarrinhoPage);
    }

    paginaHome() {
        this.navCtrl.push(HomePage);
    }
}
