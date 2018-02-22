import { Injectable } from '@angular/core';
import { Configuracao } from './shared/configuracao';

@Injectable()
export class LocalStorageService {

    atualizar(configuracao: Configuracao) {
        let valores = {
            modo: configuracao.modo,
            estabelecimentosComparacao: configuracao.estabelecimentosComparacao,
            estabelecimentosMarketplace: configuracao.estabelecimentosMarketplace,
            estabelecimentoBase: configuracao.estabelecimentoBase,
            usuario: configuracao.usuario,
            local: configuracao.local,
            resumoComparacao: configuracao.resumoComparacao,
            buscaResumo: configuracao.buscaResumo,
            lista: configuracao.lista
        };

        localStorage.setItem('configuracao',JSON.stringify(valores));
    }

    carregar() {
        let valores = localStorage.getItem('configuracao');
        return JSON.parse(valores);
    }
}
