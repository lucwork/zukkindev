import {Component, Input} from '@angular/core';
import {MenuController} from "ionic-angular";
import {Configuracao} from "../../app/core/shared/configuracao";
import { NavController } from 'ionic-angular';
import { ProdutosPage } from './../../pages/produtos/produtos';
import {UsuarioEditarPerfilPage} from "../../pages/usuario-editar-perfil/usuario-editar-perfil";
import {PedidosPage} from "../../pages/pedidos/pedidos";

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {

    @Input() public navCtrl: NavController;

    constructor(
        private menuCtrl: MenuController,
        public configuracao: Configuracao
    ) {}

    closeMenu() {
        this.menuCtrl.close();
    }

    categoria(categoria, nome) {
        this.navCtrl.push(ProdutosPage, {categoria_pai: categoria, nome: nome});
        this.menuCtrl.close();
    }

    minhaConta() {
        this.navCtrl.push(UsuarioEditarPerfilPage);
        this.menuCtrl.close();
    }

    meusPedidos() {
        this.navCtrl.push(PedidosPage);
        this.menuCtrl.close();
    }
}
