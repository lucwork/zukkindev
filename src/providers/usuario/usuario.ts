import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Configuracao } from './../../app/core/shared/configuracao';
import { ConfigurationService } from 'ionic-configuration-service';
import { LocalStorageService } from './../../app/core/local-storage.service';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  apiUrl: string;
  constructor(
    public http: HttpClient,
    public configuracao: Configuracao,
    public configurationService: ConfigurationService,
    private localStorage: LocalStorageService
  )
  {
    let apiWeb = this.configurationService.getValue<any>("api-web");
    this.apiUrl = apiWeb.url+"/";
  }

  respLogin(data, sucesso) {
    this.configuracao.usuario.token = data.token;
    this.configuracao.usuario.nome = data.data.nome;
    this.configuracao.usuario.sobrenome = data.data.sobrenome;
    this.configuracao.usuario.dataNascimento = data.data.dataNascimento;
    this.configuracao.usuario.cpf = data.data.cpf;
    this.configuracao.usuario.sexo = data.data.sexo;
    this.configuracao.usuario.roles = data.data.roles;
    this.configuracao.usuario.celular = data.data.celular;
    this.configuracao.usuario.telefone = data.data.telefone;
    this.configuracao.usuario.email = data.data.email;
    this.configuracao.usuario.facebook_id = data.data.facebook_id;
    this.configuracao.modo = data.data.modo_de_visualizacao;
    this.configuracao.usuario.username = data.data.username;
    this.configuracao.lista = data.data.lista;
    this.configuracao.local = data.data.endereco;
    //se tem endereço
    if ( data.data.estabelecimentos ) {
        this.configuracao.estabelecimentos = data.data.estabelecimentos;
    }

    this.localStorage.atualizar(this.configuracao);
    this.configuracao.propagarAlteracao();

    sucesso(data);
  }

  atualizaUsuario(usuario)  {
    this.configuracao.usuario.nome = usuario.nome;
    this.configuracao.usuario.sobrenome = usuario.sobrenome;
    this.configuracao.usuario.dataNascimento = usuario.dataNascimento;
    this.configuracao.usuario.cpf = usuario.cpf;
    this.configuracao.usuario.sexo = usuario.sexo;
    this.configuracao.usuario.roles = usuario.roles;
    this.configuracao.usuario.celular = usuario.celular;
    this.configuracao.usuario.telefone = usuario.telefone;
    this.configuracao.usuario.email = usuario.email;
    this.localStorage.atualizar(this.configuracao);
  }

  postUsuarioFacebook(dados, sucesso) {
    this.http.post( this.apiUrl + 'usuario/facebook', dados)
    .subscribe(
      res => {
        this.respLogin(res, sucesso);
      }
    )
    ;
  }

  postUsuarioLogin(dados, sucesso, falha) {
    this.http.post( this.apiUrl + 'login_check', dados)
    .subscribe(
      res => {
        this.respLogin(res, sucesso);
      },
      err => {
        console.info(err);
        falha(err);
      }
    );
  }

  logout() {
    this.configuracao.limparDados();
    this.localStorage.atualizar(this.configuracao);
    this.configuracao.propagarAlteracao();
  }

  redefinirSenha(username) {
    return this.http.post (this.apiUrl+ 'usuario/reset-senha', { username: username});
  }

}
