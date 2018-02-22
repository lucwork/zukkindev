import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {ConfigurationService} from "ionic-configuration-service";
import {Alerta} from "./alerta.model";

@Injectable()
export class AlertaService {
    apiUrl;

    constructor(private httpClient: HttpClient,
                private configurationService: ConfigurationService) {
        let apiWeb = this.configurationService.getValue<any>("api-web");
        this.apiUrl = apiWeb.url + '/alerta';
    }

    cadastrar(alerta: Alerta) {
        return this.httpClient.post(this.apiUrl,alerta);
    }

    editar(alerta: Alerta) {
        return this.httpClient.put(this.apiUrl + `/${alerta.pagAleId}`,alerta);
    }

    pesquisarPeloProduto(produto) {
        return this.httpClient.get(this.apiUrl + `?pagProduto=${produto}`);
    }
}
