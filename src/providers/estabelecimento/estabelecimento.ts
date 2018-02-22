import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ConfigurationService} from 'ionic-configuration-service';
import {HttpUtil} from "../util/http.util";


@Injectable()
export class EstabelecimentoProvider {

    apiUrl: any;

    constructor(public http: HttpClient,
                private httpUtil: HttpUtil,
                private configurationService: ConfigurationService) {
        let apiWeb = this.configurationService.getValue<any>("api-web");
        this.apiUrl = apiWeb.url;
    }

    bemvindo(configuracao, local) {
        return this.http.get(
            this.apiUrl + '/bem-vindo/pesquisar-estabelecimentos?modo=' + configuracao.modo + '&' + local
        );
    }

    lista(params) {
        console.info('lista');
        return this.http.get(
            this.apiUrl + '/resumo?' + this.httpUtil.objectToQueryString(params)
        )
    }

    consultarFrete(id_estabelecimento, cep) {
        let params = {
            id_estabelecimento,
            cep
        };

        return this.http.get(
            this.apiUrl + '/estabelecimento-frete?' + this.httpUtil.objectToQueryString(params)
        )
    }

    pesquisarPeloId(id) {
        return this.http.get(this.apiUrl + '/estabelecimento/' + id)
    }
}
