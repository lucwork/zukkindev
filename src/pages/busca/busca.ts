import { ProdutosPage } from './../produtos/produtos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TemplateUtil } from './../../providers/util/template.util';
/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private templateUtil: TemplateUtil) {
  }

  ionViewDidLoad() {
    this.templateUtil.header = false;
    this.templateUtil.footer = false;
  }

  ionViewDidLeave() {
    this.templateUtil.header = true;
    this.templateUtil.footer = true;
  }

  voltar() {
    this.navCtrl.pop();
    return false;
  }

  buscar (termo) {
    console.info("BUSCAR "+termo);
    this.navCtrl.push(ProdutosPage, {termo: termo});
  }
}
