import { TemplateUtil } from './../providers/util/template.util';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Platform, ModalController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Configuracao } from './core/shared/configuracao';
import { ConfiguracaoService } from './core/shared/configuracao.service';
import { HomePage } from '../pages/home/home';
import { UsuarioEditarPerfilPage } from './../pages/usuario-editar-perfil/usuario-editar-perfil';
import {LocalStorageService} from "./core/local-storage.service";
import {ConfigurationService} from "ionic-configuration-service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {

  @ViewChild('content') nav: NavController

  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private modalCtrl: ModalController,
    private configuracaoService: ConfiguracaoService,
    public templateUtil: TemplateUtil,
    public localStorage: LocalStorageService,
    private configurationService: ConfigurationService,
    public configuracao: Configuracao
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.configuracaoService.carregar();

    var current_version = this.configurationService.getValue<any>("current-version");
    var clear = this.configurationService.getValue<any>("clear-storage");//bool
    var savedAppVersion = localStorage.getItem("version");
    if ( clear ) {
        if (!savedAppVersion || savedAppVersion !== current_version ) {
            console.info('/*clear all local storage*/');
            localStorage.clear();
            this.configuracao.limparDados();
        }
    }
    localStorage.setItem("version", current_version);

    this.configuracao.alteracao.subscribe(
      (configuracao: Configuracao) => {
        const classe = this.configuracao.modo === 'comparacao'
          ? 'comparativo'
          : 'home';

          document.getElementById('target').className = classe;
      }
    );
  }

  ngOnDestroy() {
    this.configuracaoService.atualizar();
  }

  openPage (page) {
    console.info(page);
    let modal = this.modalCtrl.create(UsuarioEditarPerfilPage);
    modal.present();
  }
}

