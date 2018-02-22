import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {ConfigurationService} from "ionic-configuration-service";
import {HttpUtil} from "../util/http.util";

@Injectable()
export class PedidoProvider {
    apiUrl;

    constructor(private httpClient: HttpClient,
                private configurationService: ConfigurationService,
                private httpUtil: HttpUtil) {

        let apiWeb = this.configurationService.getValue<any>("api-web");
        this.apiUrl = apiWeb.url + '/pedido';
    }

    cadastrar(pedido) {
        return this.httpClient.post(this.apiUrl,pedido);
    }

    listarTodos(params) {
        let url = this.apiUrl + '?' + this.httpUtil.objectToQueryString(params);
        return this.httpClient.get(url);
    }
}
