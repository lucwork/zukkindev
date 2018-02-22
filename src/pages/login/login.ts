import { UsuarioCadastroPage } from './../usuario-cadastro/usuario-cadastro';
import { HomePage } from './../home/home';
import { FormBuilder, Validators } from '@angular/forms';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { ConfiguracaoService } from './../../app/core/shared/configuracao.service';
import { Configuracao } from './../../app/core/shared/configuracao';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
import { TemplateUtil } from './../../providers/util/template.util';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  modo: string;
  cidades;
  coords;
  usuario: any;
  local;
  username: string;
  loader;

  public loginForm = this.formBuilder.group({
    _username: ["", Validators.required],
    _password: ["", Validators.required]
  });

  constructor(
    public navCtrl: NavController, 
    public usuarioProvider: UsuarioProvider,
    public configuracao: Configuracao,
    public configuracaoService: ConfiguracaoService,
    private fb: Facebook,
    public formBuilder: FormBuilder,
    public toast: ToastController
    ,private templateUtil: TemplateUtil
    ,public loadingCtrl: LoadingController
  ) {
    this.configuracaoService.carregar();
    if ( this.configuracao.local ) {
      if ( this.configuracao.local.bairro_nome != null ) {
        this.local = this.configuracao.local.bairro_nome+" - "+this.configuracao.local.estado_uf;
      } else {
        this.local = this.configuracao.local.cidade_nome+" / "+this.configuracao.local.estado_uf;
      }
    }
    this.modo = this.configuracao.modo;
    this.usuario = this.configuracao.usuario;
    this.templateUtil.header = false;
    this.templateUtil.footer = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  
  ionViewDidLeave(){
    this.templateUtil.header = true;
    this.templateUtil.footer = true;
  }

  login() {
    var that = this;
    this.presentLoading('Aguarde...');
    this.usuarioProvider.postUsuarioLogin(
        this.loginForm.value, 
        s => {
          this.usuario = {
            email: s.data.username
          };
          that.loader.dismiss();
          that.home();
        },
        e => {
          let toast = this.toast.create({
            message: 'Login inválido!',
            duration: 5000
          });
          that.loader.dismissAll();
          toast.present();
        }
      );
  }

  loginFacebook() {
    var that = this;
    this.fb.login(['public_profile', 'email'])
    .then(function (res: FacebookLoginResponse) { 
        console.log('Logged into Facebook!', res);
        //this.usuario = res;
        that.fb.api('/me?fields=id,name,email', []).then(data => {
              // Create the user object
            if ( data.email ) {
                let usuario = {
                    nome: data.name,
                    facebook_id: data.id,
                    email: data.email
                }
                that.usuarioProvider.postUsuarioFacebook(usuario,
                    s => {
                        console.info('Login FB ok!');
                        that.home();
                    }
                );
                that.home();
            } else {
                this.navCtrl.push(UsuarioCadastroPage, {facebook_id: data.id, nome: data.name});
            }
          })
      })
    .catch(e => {
        this.navCtrl.push(UsuarioCadastroPage);
        let toast = this.toast.create({
            message: "Sem permissão para acessar seus dados do Facebook!",
            duration: 5000
        });
        toast.present();
        console.log('Error logging into Facebook', e)
    });
  };

  redefinirSenha() {
    if (!this.username) {
        let toast = this.toast.create({
            message: "Informe seu email!",
            duration: 5000
        });
        toast.present();
        return;
    }
    this.presentLoading('Aguarde...');
    this.usuarioProvider.redefinirSenha(this.username).subscribe(
        (r) => {
          let toast = null;
          if(r['result']) {
            toast = this.toast.create({
                message: "Enviamos um email para você!",
                duration: 5000
            });
          } else {
              toast = this.toast.create({
                  message: r['message'],
                  duration: 5000
              });
          }
          this.loader.dismiss();
          toast.present();
        }
    );
  }

  presentLoading(message: string) {
    this.loader = this.loadingCtrl.create({
        content: message
    });
    this.loader.present();
  }

  home() {
    this.navCtrl.push(HomePage);
  }

  cadastrar() {
    this.navCtrl.push(UsuarioCadastroPage);

  }

}
