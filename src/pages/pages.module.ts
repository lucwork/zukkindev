import {NgModule} from "@angular/core";

import {ComponentsModule} from "../components/components.module";

import {BemVindoPageModule} from "./bem-vindo/bem-vindo.module";
import {BuscaPageModule} from "./busca/busca.module";
import {LoginPageModule} from "./login/login.module";
import {ProdutoDetalhePageModule} from "./produto-detalhe/produto-detalhe.module";
import {ProdutosPageModule} from "./produtos/produtos.module";
import {UsuarioCadastroPageModule} from "./usuario-cadastro/usuario-cadastro.module";
import {UsuarioCadastroEnderecoPageModule} from "./usuario-cadastro-endereco/usuario-cadastro-endereco.module";
import {UsuarioEditarPerfilPageModule} from "./usuario-editar-perfil/usuario-editar-perfil.module";

@NgModule({
    imports: [
        ComponentsModule,
        BemVindoPageModule,
        BuscaPageModule,
        LoginPageModule,
        ProdutoDetalhePageModule,
        ProdutosPageModule,
        UsuarioCadastroPageModule,
        UsuarioCadastroEnderecoPageModule,
        UsuarioEditarPerfilPageModule
    ],
})
export class PagesModule {

}
