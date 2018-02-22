import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';

import {UsuarioCadastroEnderecoPage} from '../usuario-cadastro-endereco/usuario-cadastro-endereco';

import {LocalStorageService} from '../../app/core/local-storage.service';
import {Configuracao} from '../../app/core/shared/configuracao';
import {UsuarioService} from '../../app/usuario/shared/usuario.service';
import {UsuarioModel} from '../../providers/usuario/usuario.model';
import {DataUtil} from '../../providers/util/data.util';
import {mascara} from "../../providers/util/mascara.util";

/**
 * Generated class for the UsuarioCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-usuario-cadastro',
    templateUrl: 'usuario-cadastro.html',
})
export class UsuarioCadastroPage {

    usuario: UsuarioModel;
    data: DataUtil;
    mascara = mascara;

    loader;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                private usuarioService: UsuarioService,
                private configuracao: Configuracao,
                private localStorage: LocalStorageService,
                public loadingCtrl: LoadingController) {
        this.data = new DataUtil();
        this.usuario = new UsuarioModel();
        if ( navParams.get('nome')) {
            this.usuario.nome = navParams.get('nome');
        }
        if (navParams.get('facebook_id')) {
            this.usuario.facebook_id = navParams.get('facebook_id');
        }
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 8000,
            cssClass: "toast-dialog"
        });
        toast.present();
    }

    presentLoading(message: string) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    }

    public cadastrar() {

        if (!this.data.maiorDeIdade()) {
            this.presentToast('Para se cadastrar é necessário ter no mínimo 18 anos.');
            return false;
        }

        if (this.usuario.cpf) {
            this.usuario.cpf = this.usuario.cpf.replace(/[^0-9]/g,'');
        }
        if (this.usuario.telefone) {
            this.usuario.telefone = this.usuario.telefone.replace(/[^0-9]/g, '');
        }
        if (this.usuario.celular) {
            this.usuario.celular = this.usuario.celular.replace(/[^0-9]/g,'');
        }

        this.usuario.dataNascimento = this.data.getDataDeNascimento();
        if (!this.usuario.isValid()) {
            this.presentToast('Informe todos os campos obrigatórios do formulário.');
            return false;
        }

        this.presentLoading('Realizando o cadastro...');
        let that = this;
        this.usuarioService.cadastrar(this.usuario).subscribe(
            (response) => {
                if ( response['token'] ) {
                    this.configuracao.usuario = that.usuario;
                    this.configuracao.usuario.token = response['token'];
                    this.configuracao.modo = response['data']['modo_de_visualizacao'];
                    this.configuracao.lista = response['data']['lista'];

                    this.configuracao.local = null;

                    this.localStorage.atualizar(this.configuracao);
                    this.configuracao.propagarAlteracao();

                    this.navCtrl.push(UsuarioCadastroEnderecoPage);
                } else {
                    this.presentToast( response['erros'].join("\x0A") );
                }
                this.loader.dismiss();
            },
            (error) => {
                this.loader.dismiss();
                this.presentToast('Não foi possível efetuar o cadastro.');

            }
        );
    }

    dias() {
        let dias = [];
        for (let i = 1; i <= 31; i++) {
            dias.push(i);
        }

        return dias;
    }

    meses() {
        return [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
    }

    anos() {
        const anoAtual = new Date().getFullYear();
        let anos = [];
        for (let i = 0; i < 100; i++) {
            anos.push(anoAtual - i);
        }

        return anos;
    }

    voltar() {
        this.navCtrl.popToRoot();
    }
}
