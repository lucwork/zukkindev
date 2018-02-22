import { LocalStorageService } from './../../app/core/local-storage.service';
import { HomePage } from './../home/home';
import { Configuracao } from './../../app/core/shared/configuracao';
import { CidadeProvider } from './../../providers/cidade/cidade';
import { EstabelecimentoProvider } from './../../providers/estabelecimento/estabelecimento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TemplateUtil } from './../../providers/util/template.util';
import { ToastController } from 'ionic-angular';
import {mascara} from "../../providers/util/mascara.util";
/**
 * Generated class for the BemVindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bem-vindo',
  templateUrl: 'bem-vindo.html',
})
export class BemVindoPage {
  cidades :any;
  cidadeEscolhida;
  selectOptions: any;

    mascara = mascara;

  constructor(public navCtrl: NavController
        , public navParams: NavParams
        , private estabelecimento: EstabelecimentoProvider
        , private configuracao: Configuracao
        , private cidadeProvider: CidadeProvider
        , private localStorageService: LocalStorageService
        , private templateUtil: TemplateUtil
        , private loadingCtrl: LoadingController
        , public toastCtrl: ToastController
  ) {
    this.cidades = [];
    this.selectOptions = {
      title: 'Cidades',
      mode: 'md'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BemVindoPage');
    this.cidadeProvider.getCidades().subscribe(
      data => {
        console.info("cidades ok!");
        this.cidades = data;
      },
      error => {
        console.error(error);
      }
    );
    this.cidadeEscolhida = 'Digite sua cidade';
    this.templateUtil.header = false;
    this.templateUtil.footer = false;
  }

  ionViewDidLeave(){
    this.templateUtil.header = true;
    this.templateUtil.footer = true;
  }

  pesquisarCidade(cidade)
  {
    let local = 'cidade='+this.cidadeEscolhida.pag_cid_id;
    let tipolocal = 'em '+this.cidadeEscolhida.pag_cid_nome;
    this.pesquisar(tipolocal, local);
  }

  pesquisarCep(cep) {
    if ( cep == null || cep == '') {
        let toast = this.toastCtrl.create({
            message: 'Informe o CEP',
            duration: 5000
        });
        toast.present();
    } else {
        let local = 'cep=' + cep;
        let tipolocal = 'próximos de você';
        this.pesquisar(tipolocal, local);
    }
  }

  pesquisar(tipolocal, local)
  {
    console.info('pesquisar', tipolocal, local);
    let loader = this.loadingCtrl.create({
      content: 'Buscando estabelecimentos '+tipolocal
    });
    loader.present();
    this.estabelecimento.bemvindo(this.configuracao, local).subscribe(
      data => {
        this.configuracao.estabelecimentosComparacao = data['estabelecimentos']['comparacao'];
        this.configuracao.estabelecimentosMarketplace = data['estabelecimentos']['marketplace'];

        this.configuracao.modo = this.configuracao.estabelecimentosMarketplace.length?'marketplace':'comparacao';
        this.configuracao.local = data['local'];
        this.configuracao.propagarAlteracao();
        this.localStorageService.atualizar(this.configuracao);
        loader.dismiss();
        this.navCtrl.push(HomePage);
      },
      error => {
        console.error(error);
        this.configuracao.modo = 'marketplace';
        this.estabelecimento.bemvindo(this.configuracao, local).subscribe(
          data => {
            this.configuracao = data['estabelecimentos'];
            this.configuracao.local = data['local'];
            //this.configuracao.propagarAlteracao();
            this.localStorageService.atualizar(this.configuracao);
            loader.dismiss();
            this.navCtrl.push(HomePage);
          },
          error => {
            console.error(error);
            loader.dismiss();
            this.configuracao.modo = 'comparacao';
            let toast = this.toastCtrl.create({
              message: 'Não foi possível encontrar estabelecimentos.Tente uma cidade próxima',
              duration: 5000
            });
            toast.present();
          }
        );
      }
    );
  }

}
