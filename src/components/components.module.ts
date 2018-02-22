import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicPageModule} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

import {HeaderComparacaoComponent} from './header-comparacao/header-comparacao';
import {HeaderMarketplaceComponent} from './header-marketplace/header-marketplace';
import {ModoDeVisualizacaoComponent} from './modulo-de-visualizacao/modo-de-visualizacao.component';
import {HomeTabsComponent} from './home-tabs/home-tabs';
import {ProdutoAgrupamentoComponent} from './produto-agrupamento/produto-agrupamento';
import {HomeBannerComponent} from './home-banner/home-banner';
import {FooterComponent} from './footer/footer';
import {FooterResumoComponent} from './footer-resumo/footer-resumo';
import {MenuComponent} from './menu/menu';
import {FooterResumoMarketplaceComponent} from './footer-resumo-marketplace/footer-resumo-marketplace';
import {FooterResumoComparacaoComponent} from './footer-resumo-comparacao/footer-resumo-comparacao';
import {ProdutoBoxComponent} from './produto-box/produto-box';
import {ProdutoAlertaPrecoComponent} from './produto-alerta-preco/produto-alerta-preco';
import {ProdutoBtnAdicionarRemoverComponent} from './produto-btn-adicionar-remover/produto-btn-adicionar-remover';
import {ProdutoSelectQuantidadeComponent} from './produto-select-quantidade/produto-select-quantidade';
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
    declarations: [
        HeaderComparacaoComponent,
        HeaderMarketplaceComponent,
        ModoDeVisualizacaoComponent,
        HomeTabsComponent,
        ProdutoAgrupamentoComponent,
        HomeBannerComponent,
        FooterComponent,
        FooterResumoComponent,
        MenuComponent,
        FooterResumoMarketplaceComponent,
        FooterResumoComparacaoComponent,
        ProdutoBoxComponent,
        ProdutoAlertaPrecoComponent,
        ProdutoBtnAdicionarRemoverComponent,
        ProdutoSelectQuantidadeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicPageModule,
        TextMaskModule
    ],
    exports: [
        HeaderComparacaoComponent,
        HeaderMarketplaceComponent,
        ModoDeVisualizacaoComponent,
        HomeTabsComponent,
        ProdutoAgrupamentoComponent,
        HomeBannerComponent,
        FooterComponent,
        FooterResumoComponent,
        MenuComponent,
        FooterResumoMarketplaceComponent,
        FooterResumoComparacaoComponent,
        ProdutoBoxComponent,
        ProdutoAlertaPrecoComponent,
        ProdutoBtnAdicionarRemoverComponent,
        ProdutoSelectQuantidadeComponent
    ],
    providers: [
        InAppBrowser
    ]
})
export class ComponentsModule {
}
