import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { ConfigurationService } from 'ionic-configuration-service';
import {Configuracao} from "../../app/core/shared/configuracao";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class ProdutoService {

    private apiUrl;

    constructor(
        private httpClient: HttpClient,
        private env: ConfigurationService,
        private httpUtil: HttpUtil,
        private configuracao: Configuracao
    ) {
        let apiWeb = this.env.getValue<any>("api-web");
        this.apiUrl = apiWeb.url + '/produto';
    }

    getAgrupamento() {

        const params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos.slice(0, 100)
        };

        const apiWeb = this.env.getValue<any>("api-web");
        const url = apiWeb.url + '/produtos-agrupamento';

        return this.httpClient.get(url + '?' + this.httpUtil.objectToQueryString(params));
    }

    lista (params)
    {
        params.busca.estabelecimento = params.busca.estabelecimento.slice(0, 100);
        return this.httpClient.get(this.apiUrl + '?' + this.httpUtil.objectToQueryString(params), {observe: 'response'});
    }

    listaCategorias (params)
    {
        let p2 = {};
        if ( params.busca ) {
            p2 = {
                filtro : '{"termo":"'+params.busca.termo+'", "categoria":"'+params.busca.categoria_pai+'"}'
                , estabelecimentos: params.busca.estabelecimento.slice(0, 100)
            };
        };
        return this.httpClient.get(this.apiUrl + '/categorias?' + this.httpUtil.objectToQueryString(p2), {observe: 'response'});
    }

    detalhe(id) {
        let estabelecimentos = [];

        if (this.configuracao.modo === 'marketplace') {
            this.configuracao.estabelecimentoBase
                ? estabelecimentos.push(this.configuracao.estabelecimentoBase)
                : estabelecimentos.push(10367);
        } else {
            estabelecimentos = this.configuracao.estabelecimentos;
        }

        const params = {
            id: id,
            estabelecimento: estabelecimentos
        };

        const url = this.apiUrl + '/detalhe';
        return this.httpClient.get(url + `?modo=${this.configuracao.modo}&filtro=${JSON.stringify(params)}`);
    }

    precoPorEstabelecimento(id) {
        const filtro = {
            id: id,
            estabelecimento: this.configuracao.estabelecimentos
        };

        const url = this.apiUrl + '/estabelecimentos';

        return this.httpClient.get(url + `?modo=${this.configuracao.modo}&filtro=` + JSON.stringify(filtro));
    }

    listarSemelhantes(produto) {
        let estabelecimentos = [];

        if (this.configuracao.modo === 'marketplace') {
            this.configuracao.estabelecimentoBase
                ? estabelecimentos.push(this.configuracao.estabelecimentoBase)
                : estabelecimentos.push(10367);
        } else {
            estabelecimentos = this.configuracao.estabelecimentos;
        }

        const params = {
            busca: {
                categoria: produto.pag_produto_categoria.pag_cat_id,
                estabelecimento: estabelecimentos
            },
            total_por_pagina: 6,
            pagina: 1,
            modo: this.configuracao.modo
        };

        return this.lista(params);
    }
}
