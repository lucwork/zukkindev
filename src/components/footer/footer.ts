import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ConfiguracaoService} from '../../app/core/shared/configuracao.service';
import {Configuracao} from '../../app/core/shared/configuracao';

import {LoginPage} from "../../pages/login/login";
import {UsuarioProvider} from './../../providers/usuario/usuario';
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-footer',
    templateUrl: 'footer.html'
})
export class FooterComponent {
    @Input() public navCtrl: NavController;

    public accordionInstitucional = false;
    public accordionProdutos = false;
    public accordionAjudaESuporte = false;
    public accordionSobre = false;

    constructor(public configuracao: Configuracao,
                public configuracaoService: ConfiguracaoService,
                private usuarioProvider: UsuarioProvider,
                private iab: InAppBrowser) {
    }

    logout() {
        this.usuarioProvider.logout();
        this.navCtrl.popToRoot();
    }

    toogleAccordion(accordion) {
        if (accordion === 'institucional') {
            this.accordionInstitucional = !this.accordionInstitucional;
        }
        if (accordion === 'produtos') {
            this.accordionProdutos = !this.accordionProdutos;
        }
        if (accordion === 'ajudaESuporte') {
            this.accordionAjudaESuporte = !this.accordionAjudaESuporte;
        }
        if (accordion === 'sobre') {
            this.accordionSobre = !this.accordionSobre;
        }
    }

    paginaLogin() {
        this.navCtrl.push(LoginPage);
    }

    abrirLinkExterno(url) {
        this.iab.create(url);
    }
}

