import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfiguracaoService } from '../../app/core/shared/configuracao.service';
import { Configuracao } from '../../app/core/shared/configuracao';

import { BemVindoPage } from '../../pages/bem-vindo/bem-vindo';
import { BuscaPage } from './../../pages/busca/busca';
import {MeusEnderecosPage} from "../../pages/meus-enderecos/meus-enderecos";
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-footer-resumo',
  templateUrl: 'footer-resumo.html'
})
export class FooterResumoComponent {

    @Input() public navCtrl: NavController;
    local: string;
    prefixo: string;
    label: string;

    constructor(
        public configuracao: Configuracao
        ,public configuracaoService: ConfiguracaoService
    ) {
        this.configuracaoService.carregar();

        this.configuracao.alteracao.subscribe(configuracao => {
            if ( this.configuracao.local ) {

                this.prefixo = this.configuracao.local.nome
                    ? this.configuracao.local.nome
                    : 'Seu endereço'
                ;

                if ( this.configuracao.local.bairro_nome != null ) {
                    this.local = this.configuracao.local.bairro_nome+" - "+this.configuracao.local.estado_uf;
                } else {
                    this.local = this.configuracao.local.cidade_nome+" / "+this.configuracao.local.estado_uf;
                }

                this.label = this.configuracao.local.nome && this.configuracao.usuario.token
                    ? this.configuracao.local.nome
                    : this.local
                ;
            }
        });
    }

    alteraLocal() {
        this.navCtrl.push(BemVindoPage);
        return false;
    }

    meusEnderecos() {
        this.navCtrl.push(MeusEnderecosPage);
        return false;
    }

    busca() {
        this.navCtrl.push(BuscaPage);
        return false;
    }

}
