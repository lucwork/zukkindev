import { ConfigurationService } from 'ionic-configuration-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {

  apiUrl: any;
  constructor(public http: HttpClient,
    private configurationService: ConfigurationService
  ) {
      let apiWeb = this.configurationService.getValue<any>("api-web");
      this.apiUrl = apiWeb.url + '/usuario-lista';
  }

  lista() {
    return this.http.get(
      this.apiUrl
    );
  }

  salvar(id, lista) {
    return this.http.post(
      this.apiUrl+"/"+id,lista
    )
  }

  salvarNovo(lista) {
    return this.http.post(
      this.apiUrl+"/",lista
    )
  }

  salvarAlteracao(lista) {
    return this.http.put(
      this.apiUrl+"/",lista
    )
  }

  excluir(lista) {
    return this.http.delete(
      this.apiUrl+"/"+lista.pagLisId
    );
  }

  adicionarProduto(listaId, produtoId, quantidade) {
      const url = this.apiUrl + '/' + 'produto';

      let params = {
          id: listaId,
          id_produto: produtoId,
          quantidade: quantidade
      };

      return this.http.post(url,params);
  }
}
