import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage.service';
import { Configuracao } from './configuracao';

@Injectable()
export class ConfiguracaoService {

    constructor(
        private localStorage: LocalStorageService,
        private configuracao: Configuracao
    ) {}

    carregar() {
        if (this.configuracao.usuario.token) {
            // TODO implementar a consulta no banco de dados
        }
        else {
            let objeto = this.localStorage.carregar();
            if (objeto == null) {
                objeto = Configuracao;
            }
            this.atribuirValores(objeto);
        }
    }

    private atribuirValores(objeto) {
        console.log(objeto);
        if (!objeto) {
            return;
        }

        if (objeto.estabelecimentoBase) {
            this.configuracao.estabelecimentoBase = objeto.estabelecimentoBase;
        }

        if (objeto.modo) {
            this.configuracao.modo = objeto.modo;
        }

        if (objeto.usuario) {
            this.configuracao.usuario = objeto.usuario;
        }

        if (objeto.local) {
            this.configuracao.local = objeto.local;
        }

        if (objeto.estabelecimentosComparacao) {
            this.configuracao.estabelecimentosComparacao = objeto.estabelecimentosComparacao;
        }

        if (objeto.estabelecimentosMarketplace) {
            this.configuracao.estabelecimentosMarketplace = objeto.estabelecimentosMarketplace;
        }

        if (objeto.lista) {
            this.configuracao.lista = objeto.lista;
        }
    }

    atualizar() {

    }
}
