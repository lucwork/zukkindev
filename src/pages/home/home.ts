import {Component} from '@angular/core';
import {NavController, Platform, ToastController} from 'ionic-angular';
import {Facebook} from '@ionic-native/facebook';
import {FormBuilder, Validators} from '@angular/forms';

import {Configuracao} from '../../app/core/shared/configuracao';
import {UsuarioProvider} from '../../providers/usuario/usuario';
import {CidadeProvider} from '../../providers/cidade/cidade';

import {ConfiguracaoService} from '../../app/core/shared/configuracao.service';
import {ProdutoService} from "../../providers/produto/produto.service";
import {BemVindoPage} from "../bem-vindo/bem-vindo";
import {UsuarioCadastroPage} from "../usuario-cadastro/usuario-cadastro";
import {UsuarioEditarPerfilPage} from "../usuario-editar-perfil/usuario-editar-perfil";
import {UsuarioCadastroEnderecoPage} from "../usuario-cadastro-endereco/usuario-cadastro-endereco";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {MeusEnderecosPage} from "../meus-enderecos/meus-enderecos";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    modo: string;
    cidades;
    coords;
    usuario: any;
    local;
    produtoAgrupamento = [];
    ofertasDaSemana;
    loadingProdutos: boolean = true;

    public loginForm = this.formBuilder.group({
        _username: ["", Validators.required],
        _password: ["", Validators.required]
    });

    constructor(
        public navCtrl: NavController,
        public cidadeService: CidadeProvider,
        public usuarioProvider: UsuarioProvider,
        public configuracao: Configuracao,
        public configuracaoService: ConfiguracaoService,
        private fb: Facebook,
        public formBuilder: FormBuilder,
        //private geolocation: Geolocation,
        private platform: Platform,
        private toastCtrl: ToastController,
        private produtoService: ProdutoService,
        private iab: InAppBrowser
    ) {
        this.configuracaoService.carregar();
        if (this.configuracao.local) {
            if (this.configuracao.local.bairro_nome != null) {
                this.local = this.configuracao.local.bairro_nome + " - " + this.configuracao.local.estado_uf;
            } else {
                this.local = this.configuracao.local.cidade_nome + " / " + this.configuracao.local.estado_uf;
            }
        }
        this.modo = this.configuracao.modo;
        this.usuario = this.configuracao.usuario;
    }

    ionViewWillEnter() {
        console.info('HOME ionViewWillEnter');
        if (!this.configuracao.local && !this.configuracao.logado) {
            console.info('HOME BemVindo');
            this.navCtrl.push(BemVindoPage);
            return false;
        }

        if ( this.configuracao.logado ) {
            if ( this.configuracao.dadosFaltando ) {
                console.info('HOME UsuarioEditarPerfilPage');
                this.navCtrl.push(UsuarioEditarPerfilPage);
                return false;
            }

            if ( !this.configuracao.local ) {
                console.info('HOME UsuarioCadastroEnderecoPage');
                this.navCtrl.push(UsuarioCadastroEnderecoPage);
                return false;
            }

            if ( !this.configuracao.temEstabelecimentos ){
                console.info('HOME N TEM estabelecimentos');
                this.navCtrl.push(MeusEnderecosPage, {'alerta':true});
                return false;
            }
        }
    }

    ionViewDidLoad() {
        this.configuracao.alteracao.subscribe(configuracao => {
            this.modo = configuracao.modo;
            this.usuario = configuracao.usuario;
            this.requestProdutosAgrupamento();
        });
    }

    private requestProdutosAgrupamento() {
        if (!this.configuracao.local) {
            return false;
        }

        this.loadingProdutos = true;
        this.ofertasDaSemana = null;
        this.produtoAgrupamento = [];

        this.produtoService.getAgrupamento().subscribe(
            (response) => {
                this.separarAgrupamento(response);
                this.loadingProdutos = false;
            },
            (error) => {
                console.error(error);
                this.presentToast('não foi possível carregar os produtos');
                this.loadingProdutos = false;
            }
        );
    }

    private separarAgrupamento(grupos) {

        for (let grupo of grupos) {
            if (grupo.pag_pro_gru_nome == 'Ofertas da Semana') {
                this.ofertasDaSemana = grupo;
            } else {
                this.produtoAgrupamento.push(grupo);
            }
        }
    }

  logout() {
    this.usuarioProvider.logout();
    return this.fb.logout();
  }

    linkIndisponivel() {
        this.presentToast('link indisponível no momento!');
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    abrirLinkExterno(url) {
        this.iab.create(url);
    }
}
