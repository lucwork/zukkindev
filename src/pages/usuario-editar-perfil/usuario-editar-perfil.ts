import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Configuracao} from "../../app/core/shared/configuracao";
import {DataUtil} from "../../providers/util/data.util";
import {UsuarioService} from "../../app/usuario/shared/usuario.service";
import {UsuarioModel} from "../../providers/usuario/usuario.model";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {mascara} from "../../providers/util/mascara.util";

/**
 * Generated class for the UsuarioEditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-editar-perfil',
  templateUrl: 'usuario-editar-perfil.html',
})
export class UsuarioEditarPerfilPage {

  usuario : UsuarioModel;
  loader;
  temCpf = true;
  temDataNascimento = true;
  data: DataUtil;

  mascara = mascara;

  constructor(
      public navCtrl: NavController
      , public navParams: NavParams
      , public configuracao: Configuracao
      , public toastCtrl: ToastController
      , public loadingCtrl: LoadingController
      , public usuarioService: UsuarioService
      , public usuarioProvider: UsuarioProvider
  ) {
    this.usuario = configuracao.usuario;
    this.temCpf = this.configuracao.usuario.cpf != '' && this.configuracao.usuario.cpf != null;
    this.temDataNascimento = this.configuracao.usuario.dataNascimento != '' && this.configuracao.usuario.dataNascimento != null;
    this.usuario.plainPassword = null;
    this.data = new DataUtil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioEditarPerfilPage');
    console.info(this.usuario);
  }

  private presentToast(message: string) {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 5000
      });
      toast.present();
  }

  presentLoading(message: string) {
      this.loader = this.loadingCtrl.create({
          content: message
      });
      this.loader.present();
  }

  atualizar() {
      let u = new UsuarioModel();
      u.nome = this.usuario.nome;
      u.sobrenome = this.usuario.sobrenome;
      //u.dataNascimento = this.usuario.dataNascimento;
      u.sexo = this.usuario.sexo;
      //u.email = this.usuario.email;

      u.celular = this.usuario.celular;
      if ( u.sexo == null ) {
          this.presentToast('Informe o sexo.');
          return false;
      }
      if (this.usuario.cpf) {
          u.cpf = this.usuario.cpf.replace(/[^0-9]/g,'');
      } else {
          this.presentToast('Informe o CPF.');
          return false;
      }
      if (this.usuario.telefone) {
          u.telefone = this.usuario.telefone.replace(/[^0-9]/g,'');
      }
      if (!this.temDataNascimento) {
          u.dataNascimento = this.data.getDataDeNascimento();
          this.usuario.dataNascimento = u.dataNascimento;
          if (u.dataNascimento == null) {
              this.presentToast('Informe sua data de nascimento.');
              return false;
          }
          if (!this.data.maiorDeIdade()) {
              this.presentToast('Para se cadastrar é necessário ter no mínimo 18 anos.');
              return false;
          }
      }
      if (this.usuario.celular) {
          u.celular = this.usuario.celular.replace(/[^0-9]/g,'');
      } else {
          this.presentToast('Informe o celular.');
          return false;
      }
      if (!u.validEdit()) {
          this.presentToast('Informe todos os campos obrigatórios do formulário.');
          return false;
      }

      let that = this;
      this.presentLoading('Atualizando...');
      this.usuarioService.atualizar(u).subscribe(
          (response) => {
              if ( that.usuario.plainPassword != null && that.usuario.plainPassword != "") {
                that.usuarioService.atualizarSenha(that.usuario.plainPassword).subscribe(
                    (respSenha) => {
                        this.presentToast('Senha atualizada!');
                        that.usuarioProvider.atualizaUsuario(this.usuario);
                        that.loader.dismiss();
                        this.voltar();
                    }, (errorS) => {
                        this.presentToast('Erro ao atualizar senha!');
                        that.loader.dismiss();
                    }
                );
              } else {
                  that.loader.dismiss();
                  that.usuarioProvider.atualizaUsuario(that.usuario);
                  this.presentToast('Ok!Dados atualizados!');
                  this.voltar();
              }
          },
          (error) => {
              that.loader.dismiss();
              console.info(error);
              this.presentToast('Não foi possível atualizar o cadastro.');
          }
      );
  }

  voltar() {
      this.navCtrl.pop();
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
}
