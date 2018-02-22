import { Component, Input } from '@angular/core';


import { LocalStorageService } from '../../app/core/local-storage.service';
import { UsuarioService } from '../../app/usuario/shared/usuario.service';
import { Configuracao } from '../../app/core/shared/configuracao';


@Component({
    selector: 'app-modo-de-visualizacao',
    templateUrl: './modo-de-visualizacao.component.html',
    styles: ['./modo-de-visualizacao.component.scss']
})
export class ModoDeVisualizacaoComponent {

    @Input() modo: string;

    constructor(
        public configuracao: Configuracao,
        private usuarioService: UsuarioService,
        private localStorage: LocalStorageService
    ) {}

    alterar(modo) {
        this.configuracao.modo = modo;

        if (this.configuracao.usuario) {
            this.usuarioService.alterarModoDeVisualizacao(modo);
        }

        this.localStorage.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();

        // this.menuCtrl.close();
    }
}
