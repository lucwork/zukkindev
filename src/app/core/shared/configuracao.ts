import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {UsuarioModel} from "../../../providers/usuario/usuario.model";

@Injectable()
export class Configuracao {

    modo: string = 'comparacao';
    estabelecimentosComparacao: Array<any> = [];
    estabelecimentosMarketplace: Array<any> = [];
    estabelecimentoBase: string;
    local;
    lista = {
        id: '',
        nome: '',
        produtos: [],
        produtosDisponiveisNoMercado: []
    };
    resumoComparacao = [];
    buscaResumo = true;

    usuario = new UsuarioModel;

    get estabelecimentos() {
        if (this.modo === 'marketplace') {
            return this.estabelecimentosMarketplace;
        }

        return this.estabelecimentosComparacao;
    }

    set estabelecimentos(estabelecimentos) {
        this.estabelecimentosMarketplace = estabelecimentos['marketplace']
            ? estabelecimentos['marketplace']
            : []
        ;

        this.estabelecimentosComparacao = estabelecimentos['comparacao']
            ? estabelecimentos['comparacao']
            : []
        ;

        this.estabelecimentoBase = estabelecimentos['base']
            ? estabelecimentos['base']
            : null
        ;
    }

    get logado() {
        return this.usuario.token != "" && this.usuario.token != null;
    }

    get dadosFaltando(): boolean {
        if (!this.logado) {
            return false;
        }
        if (
            this.usuario.nome == '' || this.usuario.nome == null ||
            this.usuario.sobrenome == '' || this.usuario.sobrenome == null ||
            this.usuario.cpf == '' || this.usuario.cpf == null ||
            this.usuario.sexo == '' || this.usuario.sexo == null
        ) {
            console.log('faltam dados do usuario');
            return true;
        }
        return false;
    }

    get temEstabelecimentos(): boolean {
        return this.estabelecimentosComparacao.length > 0 || this.estabelecimentosMarketplace.length > 0;
    }

    private origem = new BehaviorSubject(this);
    alteracao = this.origem.asObservable();


    /**
     * Dispara um evento para atualizar os outros componentes
     * Exemplo: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/#Unrelated-Components-Sharing-Data-with-a-Service
     */
    propagarAlteracao() {
        console.info('propagarAlteracao');
        this.buscaResumo = true;
        this.origem.next(this);
    }

    private origemLista = new BehaviorSubject(this);
    alteracaoNaLista = this.origemLista.asObservable();

    propagarAlteracaoNaLista() {
        this.buscaResumo = true;
        this.origemLista.next(this);
    }

    limparDados() {
        this.modo = 'comparacao';
        this.estabelecimentosComparacao = [];
        this.estabelecimentosMarketplace = [];
        this.estabelecimentoBase = '';
        this.local = '';
        this.lista = {
            id: '',
            nome: '',
            produtos: [],
            produtosDisponiveisNoMercado: []
        };
        this.usuario = new UsuarioModel;
    }
}
