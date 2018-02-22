import {LoginPage} from '../pages/login/login';
import {TemplateUtil} from '../providers/util/template.util';
import {ComponentsModule} from '../components/components.module';
import {EnderecoService} from '../providers/endereco/endereco.service';
import {UsuarioCadastroEnderecoPageModule} from '../pages/usuario-cadastro-endereco/usuario-cadastro-endereco.module';
import {UsuarioCadastroPageModule} from '../pages/usuario-cadastro/usuario-cadastro.module';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule, LOCALE_ID} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, MenuController} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {BemVindoPageModule} from '../pages/bem-vindo/bem-vindo.module';
import {UsuarioEditarPerfilPage} from '../pages/usuario-editar-perfil/usuario-editar-perfil';
import {CidadeProvider} from '../providers/cidade/cidade';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
//import { Geolocation } from '@ionic-native/geolocation';
import {ConfigurationService} from "ionic-configuration-service";
import {APP_INITIALIZER} from "@angular/core";
import {Facebook} from '@ionic-native/facebook';
import {UsuarioProvider} from '../providers/usuario/usuario';

import {UsuarioModule} from './usuario/usuario.module';
import {CoreModule} from './core/core.module';
import {EstabelecimentoProvider} from '../providers/estabelecimento/estabelecimento';
import {ProdutoService} from "../providers/produto/produto.service";
import {HttpUtil} from "../providers/util/http.util";
import {BuscaPageModule} from "../pages/busca/busca.module";
import {ProdutosPageModule} from "../pages/produtos/produtos.module";
import {ProdutoDetalhePageModule} from "../pages/produto-detalhe/produto-detalhe.module";
import {AlertaService} from "../providers/alerta/alerta.service";
import {AvaliacaoService} from "../providers/avaliacao/avaliacao.service";
import {ListaPageModule} from "../pages/lista/lista.module";
import {ListaProvider} from '../providers/lista/lista';
import {UsuarioEstabelecimentoProvider} from '../providers/usuario-estabelecimento/usuario-estabelecimento';
import {EstabelecimentoSelecionarPageModule} from '../pages/estabelecimento-selecionar/estabelecimento-selecionar.module';
import {ComparacaoPageModule} from '../pages/comparacao/comparacao.module';
import {ResumoProvider} from '../providers/resumo/resumo';
import {ListaUtil} from "../providers/lista/lista.util";
import {MeusEnderecosPageModule} from "../pages/meus-enderecos/meus-enderecos.module";
import {TextMaskModule} from "angular2-text-mask";
import {EstabelecimentoMarketplacePageModule} from "../pages/estabelecimento-marketplace/estabelecimento-marketplace.module";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {CarrinhoPageModule} from "../pages/carrinho/carrinho.module";
import {FinalizarCompraPageModule} from "../pages/finalizar-compra/finalizar-compra.module";
import {PedidoProvider} from "../providers/pedido/pedido.provider";
import {ObrigadoPageModule} from "../pages/obrigado/obrigado.module";
import {PedidosPageModule} from "../pages/pedidos/pedidos.module";

export function loadConfiguration(configurationService: ConfigurationService): () => Promise<void> {
    return () => configurationService.load("assets/settings.json");
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        UsuarioEditarPerfilPage
        , LoginPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        UsuarioModule,
        CoreModule,
        BemVindoPageModule,
        UsuarioCadastroPageModule,
        UsuarioCadastroEnderecoPageModule,
        ComponentsModule,
        BuscaPageModule,
        EstabelecimentoSelecionarPageModule
        , ProdutoDetalhePageModule
        , BuscaPageModule
        , ProdutosPageModule
        , ListaPageModule
        , ComparacaoPageModule
        , MeusEnderecosPageModule
        , TextMaskModule
        , EstabelecimentoMarketplacePageModule
        , CarrinhoPageModule
        , ComparacaoPageModule,
        FinalizarCompraPageModule,
        ObrigadoPageModule,
        PedidosPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        UsuarioEditarPerfilPage
        , LoginPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CidadeProvider,
        //Geolocation,
        ConfigurationService,
        {
            provide: APP_INITIALIZER,
            useFactory: loadConfiguration,
            deps: [ConfigurationService],
            multi: true
        },
        Facebook,
        MenuController,
        UsuarioProvider,
        EstabelecimentoProvider,
        EnderecoService,
        TemplateUtil,
        ProdutoService,
        HttpUtil,
        AlertaService
        , UsuarioEstabelecimentoProvider
        , AvaliacaoService
        , ListaProvider,
        {provide: LOCALE_ID, useValue: "pt-BR"},
        ResumoProvider
        , ListaUtil,
        InAppBrowser,
        PedidoProvider
    ]
})
export class AppModule {
}
