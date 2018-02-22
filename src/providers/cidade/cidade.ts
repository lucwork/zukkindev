import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from 'ionic-configuration-service';

/*
  Generated class for the CidadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CidadeProvider {

  apiUrl: any;
  constructor(public http: HttpClient,
    private configurationService: ConfigurationService) {
      let apiWeb = this.configurationService.getValue<any>("api-web");
      this.apiUrl = apiWeb.url+"/local/cidades";
  }

  getCidades() {
    //console.info(this.apiUrl + '/events');
    return this.http.get( this.apiUrl + '');
  }
}
