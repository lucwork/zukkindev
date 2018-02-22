import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from 'ionic-configuration-service';
import {AvaliacaoModel} from "./avaliacao.model";

@Injectable()
export class AvaliacaoService {

    private apiUrl;

    constructor(
        private httpClient: HttpClient,
        private configurationService: ConfigurationService
    ) {
        let apiWeb = this.configurationService.getValue<any>("api-web");
        this.apiUrl = apiWeb.url + '/avaliacoes';
    }

    public cadastrar(avaliacao: AvaliacaoModel) {
        return this.httpClient.post(this.apiUrl, avaliacao);
    }
}
