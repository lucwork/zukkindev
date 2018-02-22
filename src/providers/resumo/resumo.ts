import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { ConfigurationService } from 'ionic-configuration-service';
import {Configuracao} from "../../app/core/shared/configuracao";
import {HttpUtil} from "../util/http.util";

import 'rxjs/add/operator/map';

/*
  Generated class for the ResumoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResumoProvider {

  private apiUrl;

  constructor(
    private httpClient: HttpClient,
    private env: ConfigurationService,
    private httpUtil: HttpUtil,
    private configuracao: Configuracao
  ) {
    let apiWeb = this.env.getValue<any>("api-web");
    this.apiUrl = apiWeb.url + '/resumo';
  }


  get(params)
  {
      params.estabelecimentos = Array.isArray(params.estabelecimentos) ? params.estabelecimentos.slice(0, 100) : params.estabelecimentos;
      return this.httpClient.get(this.apiUrl + '?' + this.httpUtil.objectToQueryString(params));
  }

  getOrdenado(params, sucesso, falha)
  {
      let mais_barato = {
        total : 0
      };
      let resp = [];
      this.get(params).subscribe((response: Array<any>) => {
          let m = -1;
          if (response) {
              let resp_validos = [];
              let v = 0;
              for(let i=0; i < response.length; i++) {
                  if ( response[i].total ) {
                      resp_validos.push(response[i]);
                      if (response[i].total <= mais_barato.total || mais_barato.total == 0) {
                          mais_barato = response[i];
                          m = v;
                      }
                      v++;
                  }
              }
              let resumo = resp_validos;
              if ( m > -1 ) {
                  resumo.splice(m, 1);
                  resp.push(mais_barato);
              }
              resp = resp.concat(resumo);
              sucesso(resp);
          }
      }, (error) => {
          falha(error);
      });
  }
}
