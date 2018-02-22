import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsuarioEstabelecimentoProvider } from './../../providers/usuario-estabelecimento/usuario-estabelecimento';
import {Configuracao} from "../../app/core/shared/configuracao";
import {LocalStorageService} from "../../app/core/local-storage.service";
/**
 * Generated class for the EstabelecimentoSelecionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento-selecionar',
  templateUrl: 'estabelecimento-selecionar.html',
})
export class EstabelecimentoSelecionarPage {

  filtro = {
    raio : 0
    ,busca: ""
  };
  estabelecimentos = null;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public configuracao: Configuracao
    , public usuarioEstabelecimento: UsuarioEstabelecimentoProvider,
    public localStorage: LocalStorageService) {
    this.filtro.raio = 5;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoSelecionarPage');
    let that = this;
    this.usuarioEstabelecimento.get().subscribe(
      (response) => {
        console.info(response);
        that.estabelecimentos = response;
      }
    );
  }

  toogleSelecionado(estabelecimento) {
    let that = this;
    this.usuarioEstabelecimento.toogleSelecionado(estabelecimento.pag_est_id).subscribe(
      (response) => {
        if (estabelecimento.pag_usu_end_est_selecionado == 1) {
          estabelecimento.pag_usu_end_est_selecionado = 0;
        } else {
          estabelecimento.pag_usu_end_est_selecionado = 1;
        }
        let e = [];
        for (let est of that.estabelecimentos) {
            if(est.pag_usu_end_est_selecionado) {
                e.push(est.pag_est_id);
            }
        }

        if (this.configuracao.modo === 'marketplace') {
            that.configuracao.estabelecimentosMarketplace = e;
        } else {
            that.configuracao.estabelecimentosComparacao = e;
        }

        console.log(e);
      }
    );

  }

  fechar() {
      this.localStorage.atualizar(this.configuracao);
    this.configuracao.propagarAlteracao();
    this.navCtrl.pop();
    return false;
  }
}
