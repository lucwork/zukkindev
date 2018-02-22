import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigurationService } from 'ionic-configuration-service';
import { UsuarioModel } from './../../../providers/usuario/usuario.model';

@Injectable()
export class UsuarioService {

    private url;

    constructor(public http: HttpClient, private configurationService: ConfigurationService) {
        let apiWeb = this.configurationService.getValue<any>("api-web");
        this.url = apiWeb.url + '/usuario';
    }

    alterarModoDeVisualizacao(modo) {
        const url = this.url + '/modo-de-visualizacao';

        return this.http.put(url, {modo}).subscribe();
    }

    cadastrar(usuario: UsuarioModel) {
        return this.http.post(this.url, usuario);
    }

    atualizar(usuario: UsuarioModel) {
        return this.http.put(this.url, usuario);
    }

    atualizarSenha(senha: string) {
        return this.http.put(this.url + '/nova-senha', {senha: senha});
    }

    meuPerfil() {
        const url = this.url + '/meu-perfil';
        return this.http.get(url);
    }
}
