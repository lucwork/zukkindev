import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Configuracao } from './../../app/core/shared/configuracao';
import { ConfigurationService } from 'ionic-configuration-service';
import { LocalStorageService } from './../../app/core/local-storage.service';

/*
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioEstabelecimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioEstabelecimentoProvider {

  apiUrl: string;
  constructor(
    public http: HttpClient,
    public configuracao: Configuracao,
    public configurationService: ConfigurationService,
    private localStorage: LocalStorageService
  )
  {
    let apiWeb = this.configurationService.getValue<any>("api-web");
    this.apiUrl = apiWeb.url+"/usuario-estabelecimentos";
  }

  get() {
      return this.http.get(this.apiUrl);
  }

  toogleSelecionado(id_estabelecimento) {
    return this.http.post(this.apiUrl+"/"+id_estabelecimento, {});
  }
}
