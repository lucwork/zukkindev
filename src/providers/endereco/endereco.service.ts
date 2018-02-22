import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnderecoModel } from './endereco.model';
import { ConfigurationService } from 'ionic-configuration-service';

@Injectable()
export class EnderecoService {

    private apiUrl;

    constructor(
        private httpClient: HttpClient,
        private configurationService: ConfigurationService
    ) {
        let apiWeb = this.configurationService.getValue<any>("api-web");
        this.apiUrl = apiWeb.url + '/usuario-enderecos';
    }

    public pesquisarPeloCep(cep: string) {
        const apiWeb = this.configurationService.getValue<any>("api-web");
        const url = apiWeb.url + '/pesquisa-cep/' + cep;

        return this.httpClient.get(url);
    }

    public cadastrar(endereco: EnderecoModel) {
        return this.httpClient.post(this.apiUrl, endereco);
    }

    public listarTodos() {
        return this.httpClient.get(this.apiUrl);
    }

    public ativar(id) {
        const url = `${this.apiUrl}/ativar/${id}`;

        return this.httpClient.get(url);
    }

    public excluir(id) {
        const url = `${this.apiUrl}/${id}`;

        return this.httpClient.delete(url);
    }

    public alterarEstabelecimentoBase(enderecoId,estabelecimentoId) {
        const url = `${this.apiUrl}/atribuir-estabelecimento/${enderecoId}`;

        const body = {estabelecimento: estabelecimentoId};

        return this.httpClient.put(url,body);
    }
}
