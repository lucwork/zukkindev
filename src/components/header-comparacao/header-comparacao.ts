import { Component, Input } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { Configuracao } from './../../app/core/shared/configuracao';
import { UsuarioCadastroPage } from './../../pages/usuario-cadastro/usuario-cadastro';
import {LoginPage} from "../../pages/login/login";
import {HomePage} from "../../pages/home/home";
import {ListaPage} from "../../pages/lista/lista";
import { EstabelecimentoSelecionarPage } from './../../pages/estabelecimento-selecionar/estabelecimento-selecionar';
import { ComparacaoPage } from './../../pages/comparacao/comparacao';

/**
 * Generated class for the HeaderComparacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header-comparacao',
  templateUrl: 'header-comparacao.html'
})
export class HeaderComparacaoComponent {

  @Input() navCtrl: NavController;
  logado: boolean;

  constructor(
    private menuCtrl: MenuController,
    public configuracao: Configuracao
  ) {
    this.configuracao.alteracao.subscribe(configuracao => {
      this.logado = this.configuracao.usuario.token != "";
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

  paginaCadastro() {
    this.navCtrl.push(UsuarioCadastroPage);
  }

  paginaLogin() {
      this.navCtrl.push(LoginPage);
  }

  paginaHome() {
      this.navCtrl.push(HomePage);
  }

  modalLista() {
    this.navCtrl.push(ListaPage);
    return false;
  }

  estabelecimentos() {
    console.info("estabelecimentos!");
    this.navCtrl.push(EstabelecimentoSelecionarPage);
  }

  comparacao() {
    this.navCtrl.push(ComparacaoPage);
  }
}
