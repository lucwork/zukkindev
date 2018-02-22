webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuracao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_model__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Configuracao = (function () {
    function Configuracao() {
        this.modo = 'comparacao';
        this.estabelecimentosComparacao = [];
        this.estabelecimentosMarketplace = [];
        this.lista = {
            id: '',
            nome: '',
            produtos: [],
            produtosDisponiveisNoMercado: []
        };
        this.resumoComparacao = [];
        this.buscaResumo = true;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_model__["a" /* UsuarioModel */];
        this.origem = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this);
        this.alteracao = this.origem.asObservable();
        this.origemLista = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this);
        this.alteracaoNaLista = this.origemLista.asObservable();
    }
    Object.defineProperty(Configuracao.prototype, "estabelecimentos", {
        get: function () {
            if (this.modo === 'marketplace') {
                return this.estabelecimentosMarketplace;
            }
            return this.estabelecimentosComparacao;
        },
        set: function (estabelecimentos) {
            this.estabelecimentosMarketplace = estabelecimentos['marketplace']
                ? estabelecimentos['marketplace']
                : [];
            this.estabelecimentosComparacao = estabelecimentos['comparacao']
                ? estabelecimentos['comparacao']
                : [];
            this.estabelecimentoBase = estabelecimentos['base']
                ? estabelecimentos['base']
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuracao.prototype, "logado", {
        get: function () {
            return this.usuario.token != "" && this.usuario.token != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuracao.prototype, "dadosFaltando", {
        get: function () {
            if (!this.logado) {
                return false;
            }
            if (this.usuario.nome == '' || this.usuario.nome == null ||
                this.usuario.sobrenome == '' || this.usuario.sobrenome == null ||
                this.usuario.cpf == '' || this.usuario.cpf == null ||
                this.usuario.sexo == '' || this.usuario.sexo == null) {
                console.log('faltam dados do usuario');
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuracao.prototype, "temEstabelecimentos", {
        get: function () {
            return this.estabelecimentosComparacao.length > 0 || this.estabelecimentosMarketplace.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispara um evento para atualizar os outros componentes
     * Exemplo: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/#Unrelated-Components-Sharing-Data-with-a-Service
     */
    Configuracao.prototype.propagarAlteracao = function () {
        console.info('propagarAlteracao');
        this.buscaResumo = true;
        this.origem.next(this);
    };
    Configuracao.prototype.propagarAlteracaoNaLista = function () {
        this.buscaResumo = true;
        this.origemLista.next(this);
    };
    Configuracao.prototype.limparDados = function () {
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
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_model__["a" /* UsuarioModel */];
    };
    return Configuracao;
}());
Configuracao = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Configuracao);

//# sourceMappingURL=configuracao.js.map

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.atualizar = function (configuracao) {
        var valores = {
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
        localStorage.setItem('configuracao', JSON.stringify(valores));
    };
    LocalStorageService.prototype.carregar = function () {
        var valores = localStorage.getItem('configuracao');
        return JSON.parse(valores);
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_http_util__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ResumoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ResumoProvider = (function () {
    function ResumoProvider(httpClient, env, httpUtil, configuracao) {
        this.httpClient = httpClient;
        this.env = env;
        this.httpUtil = httpUtil;
        this.configuracao = configuracao;
        var apiWeb = this.env.getValue("api-web");
        this.apiUrl = apiWeb.url + '/resumo';
    }
    ResumoProvider.prototype.get = function (params) {
        params.estabelecimentos = Array.isArray(params.estabelecimentos) ? params.estabelecimentos.slice(0, 100) : params.estabelecimentos;
        return this.httpClient.get(this.apiUrl + '?' + this.httpUtil.objectToQueryString(params));
    };
    ResumoProvider.prototype.getOrdenado = function (params, sucesso, falha) {
        var mais_barato = {
            total: 0
        };
        var resp = [];
        this.get(params).subscribe(function (response) {
            var m = -1;
            if (response) {
                var resp_validos = [];
                var v = 0;
                for (var i = 0; i < response.length; i++) {
                    if (response[i].total) {
                        resp_validos.push(response[i]);
                        if (response[i].total <= mais_barato.total || mais_barato.total == 0) {
                            mais_barato = response[i];
                            m = v;
                        }
                        v++;
                    }
                }
                var resumo = resp_validos;
                if (m > -1) {
                    resumo.splice(m, 1);
                    resp.push(mais_barato);
                }
                resp = resp.concat(resumo);
                sucesso(resp);
            }
        }, function (error) {
            falha(error);
        });
    };
    return ResumoProvider;
}());
ResumoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_4__util_http_util__["a" /* HttpUtil */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */]])
], ResumoProvider);

//# sourceMappingURL=resumo.js.map

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cidade_cidade__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_core_shared_configuracao_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_produto_produto_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bem_vindo_bem_vindo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__usuario_editar_perfil_usuario_editar_perfil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usuario_cadastro_endereco_usuario_cadastro_endereco__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__meus_enderecos_meus_enderecos__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = (function () {
    function HomePage(navCtrl, cidadeService, usuarioProvider, configuracao, configuracaoService, fb, formBuilder, 
        //private geolocation: Geolocation,
        platform, toastCtrl, produtoService, iab) {
        this.navCtrl = navCtrl;
        this.cidadeService = cidadeService;
        this.usuarioProvider = usuarioProvider;
        this.configuracao = configuracao;
        this.configuracaoService = configuracaoService;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.produtoService = produtoService;
        this.iab = iab;
        this.produtoAgrupamento = [];
        this.loadingProdutos = true;
        this.loginForm = this.formBuilder.group({
            _username: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            _password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.configuracaoService.carregar();
        if (this.configuracao.local) {
            if (this.configuracao.local.bairro_nome != null) {
                this.local = this.configuracao.local.bairro_nome + " - " + this.configuracao.local.estado_uf;
            }
            else {
                this.local = this.configuracao.local.cidade_nome + " / " + this.configuracao.local.estado_uf;
            }
        }
        this.modo = this.configuracao.modo;
        this.usuario = this.configuracao.usuario;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        console.info('HOME ionViewWillEnter');
        if (!this.configuracao.local && !this.configuracao.logado) {
            console.info('HOME BemVindo');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__bem_vindo_bem_vindo__["a" /* BemVindoPage */]);
            return false;
        }
        if (this.configuracao.logado) {
            if (this.configuracao.dadosFaltando) {
                console.info('HOME UsuarioEditarPerfilPage');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__usuario_editar_perfil_usuario_editar_perfil__["a" /* UsuarioEditarPerfilPage */]);
                return false;
            }
            if (!this.configuracao.local) {
                console.info('HOME UsuarioCadastroEnderecoPage');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__usuario_cadastro_endereco_usuario_cadastro_endereco__["a" /* UsuarioCadastroEnderecoPage */]);
                return false;
            }
            if (!this.configuracao.temEstabelecimentos) {
                console.info('HOME N TEM estabelecimentos');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__meus_enderecos_meus_enderecos__["a" /* MeusEnderecosPage */], { 'alerta': true });
                return false;
            }
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.configuracao.alteracao.subscribe(function (configuracao) {
            _this.modo = configuracao.modo;
            _this.usuario = configuracao.usuario;
            _this.requestProdutosAgrupamento();
        });
    };
    HomePage.prototype.requestProdutosAgrupamento = function () {
        var _this = this;
        if (!this.configuracao.local) {
            return false;
        }
        this.loadingProdutos = true;
        this.ofertasDaSemana = null;
        this.produtoAgrupamento = [];
        this.produtoService.getAgrupamento().subscribe(function (response) {
            _this.separarAgrupamento(response);
            _this.loadingProdutos = false;
        }, function (error) {
            console.error(error);
            _this.presentToast('não foi possível carregar os produtos');
            _this.loadingProdutos = false;
        });
    };
    HomePage.prototype.separarAgrupamento = function (grupos) {
        for (var _i = 0, grupos_1 = grupos; _i < grupos_1.length; _i++) {
            var grupo = grupos_1[_i];
            if (grupo.pag_pro_gru_nome == 'Ofertas da Semana') {
                this.ofertasDaSemana = grupo;
            }
            else {
                this.produtoAgrupamento.push(grupo);
            }
        }
    };
    HomePage.prototype.logout = function () {
        this.usuarioProvider.logout();
        return this.fb.logout();
    };
    HomePage.prototype.linkIndisponivel = function () {
        this.presentToast('link indisponível no momento!');
    };
    HomePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    HomePage.prototype.abrirLinkExterno = function (url) {
        this.iab.create(url);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/var/www/html/app/src/pages/home/home.html"*/'\n<ion-content>\n\n    <header>\n        <app-header-marketplace *ngIf="configuracao.modo == \'marketplace\'" [navCtrl]="navCtrl"></app-header-marketplace>\n        <app-header-comparacao *ngIf="configuracao.modo != \'marketplace\'" [navCtrl]="navCtrl"></app-header-comparacao>\n    </header>\n\n    <!--main-->\n    <main class="bg-gray">\n\n        <ion-slides autoplay="5000" loop="true" speed="500" pager>\n            <ion-slide>\n                <img src="https://s3-us-west-2.amazonaws.com/pagpoucodev/banners/c7ab1d447c6320b575b896d3962206a8.jpeg"\n                     class="img-responsive" style="width: 100%;"/>\n            </ion-slide>\n\n            <ion-slide>\n                <img src="https://s3-us-west-2.amazonaws.com/pagpoucodev/banners/3ad9dc3ee868cf1003f98a474bea759f.jpeg"\n                     class="img-responsive" style="width: 100%;" (click)="abrirLinkExterno(\'http://franquia.zukkin.com\')"/>\n            </ion-slide>\n\n            <ion-slide>\n                <img src="https://s3-us-west-2.amazonaws.com/pagpoucodev/banners/13d2205f420aa50f868247ab3306ae95.jpeg"\n                     class="img-responsive" style="width: 100%;" (click)="abrirLinkExterno(\'http://b2b.zukkin.com\')"/>\n            </ion-slide>\n        </ion-slides>\n\n        <div style="margin-top: 30px;" *ngIf="loadingProdutos" class="text-center">\n            <ion-spinner></ion-spinner><br />\n            Carregando produtos...\n        </div>\n        <!--product-vitrine-->\n        <app-produto-agrupamento\n            *ngIf="ofertasDaSemana"\n            [imagem]="null"\n            [titulo]="ofertasDaSemana.pag_pro_gru_nome"\n            [produtos]="ofertasDaSemana.pag_produtos_pag_pro"\n            [categoria]="ofertasDaSemana.categoria"\n            [navCtrl]="navCtrl"\n        >\n        </app-produto-agrupamento>\n        <!--/product-vitrine-->\n\n        <app-home-tabs></app-home-tabs>\n\n        <section class="row">\n            <!--banner-fluid-->\n            <div class="banner-fluid">\n                <img src="assets/images/banner/banner-fluid.jpg" alt="" class="img-responsive">\n            </div>\n            <!--/banner-fluid-->\n        </section>\n\n        <div style="margin-top: 30px;" *ngIf="loadingProdutos" class="text-center">\n            <ion-spinner></ion-spinner><br />\n            Carregando produtos...\n        </div>\n        <app-produto-agrupamento\n            *ngFor="let grupo of produtoAgrupamento.slice(0,5)"\n            [imagem]="null"\n            [titulo]="grupo.pag_pro_gru_nome"\n            [produtos]="grupo.pag_produtos_pag_pro"\n            [categoria]="grupo.categoria"\n            [navCtrl]="navCtrl"\n        ></app-produto-agrupamento>\n\n        <div class="container-fluid">\n            <section class="row">\n                <div class="col-xs-12">\n                    <div class="wrapper">\n\n                        <!--logo body-->\n                        <div class="content-logo--body">\n                            <img src="assets/images/static/zukkin-logo-mobile-body.png" alt="">\n                        </div>\n                        <!--/logo-body-->\n\n                    </div>\n                </div>\n            </section>\n        </div>\n    </main>\n    <!--/main-->\n\n    <app-footer [navCtrl]="navCtrl"></app-footer>\n</ion-content>\n\n<ion-footer>\n    <app-footer-resumo [navCtrl]="navCtrl"></app-footer-resumo>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_cidade_cidade__["a" /* CidadeProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_7__app_core_shared_configuracao_service__["a" /* ConfiguracaoService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_produto_produto_service__["a" /* ProdutoService */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_comparacao_header_comparacao__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_marketplace_header_marketplace__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modulo_de_visualizacao_modo_de_visualizacao_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_tabs_home_tabs__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__produto_agrupamento_produto_agrupamento__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_banner_home_banner__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_resumo_footer_resumo__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_menu__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_resumo_marketplace_footer_resumo_marketplace__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_resumo_comparacao_footer_resumo_comparacao__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__produto_box_produto_box__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__produto_alerta_preco_produto_alerta_preco__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__produto_btn_adicionar_remover_produto_btn_adicionar_remover__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__produto_select_quantidade_produto_select_quantidade__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_text_mask__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__header_comparacao_header_comparacao__["a" /* HeaderComparacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_marketplace_header_marketplace__["a" /* HeaderMarketplaceComponent */],
            __WEBPACK_IMPORTED_MODULE_7__modulo_de_visualizacao_modo_de_visualizacao_component__["a" /* ModoDeVisualizacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_tabs_home_tabs__["a" /* HomeTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__produto_agrupamento_produto_agrupamento__["a" /* ProdutoAgrupamentoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_banner_home_banner__["a" /* HomeBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_resumo_footer_resumo__["a" /* FooterResumoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__menu_menu__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_resumo_marketplace_footer_resumo_marketplace__["a" /* FooterResumoMarketplaceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_resumo_comparacao_footer_resumo_comparacao__["a" /* FooterResumoComparacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__produto_box_produto_box__["a" /* ProdutoBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_17__produto_alerta_preco_produto_alerta_preco__["a" /* ProdutoAlertaPrecoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__produto_btn_adicionar_remover_produto_btn_adicionar_remover__["a" /* ProdutoBtnAdicionarRemoverComponent */],
            __WEBPACK_IMPORTED_MODULE_19__produto_select_quantidade_produto_select_quantidade__["a" /* ProdutoSelectQuantidadeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular2_text_mask__["TextMaskModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__header_comparacao_header_comparacao__["a" /* HeaderComparacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_marketplace_header_marketplace__["a" /* HeaderMarketplaceComponent */],
            __WEBPACK_IMPORTED_MODULE_7__modulo_de_visualizacao_modo_de_visualizacao_component__["a" /* ModoDeVisualizacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_tabs_home_tabs__["a" /* HomeTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__produto_agrupamento_produto_agrupamento__["a" /* ProdutoAgrupamentoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_banner_home_banner__["a" /* HomeBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_resumo_footer_resumo__["a" /* FooterResumoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__menu_menu__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_resumo_marketplace_footer_resumo_marketplace__["a" /* FooterResumoMarketplaceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_resumo_comparacao_footer_resumo_comparacao__["a" /* FooterResumoComparacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__produto_box_produto_box__["a" /* ProdutoBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_17__produto_alerta_preco_produto_alerta_preco__["a" /* ProdutoAlertaPrecoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__produto_btn_adicionar_remover_produto_btn_adicionar_remover__["a" /* ProdutoBtnAdicionarRemoverComponent */],
            __WEBPACK_IMPORTED_MODULE_19__produto_select_quantidade_produto_select_quantidade__["a" /* ProdutoSelectQuantidadeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario_cadastro_usuario_cadastro__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_util_template_util__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, usuarioProvider, configuracao, configuracaoService, fb, formBuilder, toast, templateUtil, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.usuarioProvider = usuarioProvider;
        this.configuracao = configuracao;
        this.configuracaoService = configuracaoService;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.templateUtil = templateUtil;
        this.loadingCtrl = loadingCtrl;
        this.loginForm = this.formBuilder.group({
            _username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            _password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.configuracaoService.carregar();
        if (this.configuracao.local) {
            if (this.configuracao.local.bairro_nome != null) {
                this.local = this.configuracao.local.bairro_nome + " - " + this.configuracao.local.estado_uf;
            }
            else {
                this.local = this.configuracao.local.cidade_nome + " / " + this.configuracao.local.estado_uf;
            }
        }
        this.modo = this.configuracao.modo;
        this.usuario = this.configuracao.usuario;
        this.templateUtil.header = false;
        this.templateUtil.footer = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.templateUtil.header = true;
        this.templateUtil.footer = true;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var that = this;
        this.presentLoading('Aguarde...');
        this.usuarioProvider.postUsuarioLogin(this.loginForm.value, function (s) {
            _this.usuario = {
                email: s.data.username
            };
            that.loader.dismiss();
            that.home();
        }, function (e) {
            var toast = _this.toast.create({
                message: 'Login inválido!',
                duration: 5000
            });
            that.loader.dismissAll();
            toast.present();
        });
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        var that = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            var _this = this;
            console.log('Logged into Facebook!', res);
            //this.usuario = res;
            that.fb.api('/me?fields=id,name,email', []).then(function (data) {
                // Create the user object
                if (data.email) {
                    var usuario = {
                        nome: data.name,
                        facebook_id: data.id,
                        email: data.email
                    };
                    that.usuarioProvider.postUsuarioFacebook(usuario, function (s) {
                        console.info('Login FB ok!');
                        that.home();
                    });
                    that.home();
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__usuario_cadastro_usuario_cadastro__["a" /* UsuarioCadastroPage */], { facebook_id: data.id, nome: data.name });
                }
            });
        })
            .catch(function (e) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__usuario_cadastro_usuario_cadastro__["a" /* UsuarioCadastroPage */]);
            var toast = _this.toast.create({
                message: "Sem permissão para acessar seus dados do Facebook!",
                duration: 5000
            });
            toast.present();
            console.log('Error logging into Facebook', e);
        });
    };
    ;
    LoginPage.prototype.redefinirSenha = function () {
        var _this = this;
        if (!this.username) {
            var toast = this.toast.create({
                message: "Informe seu email!",
                duration: 5000
            });
            toast.present();
            return;
        }
        this.presentLoading('Aguarde...');
        this.usuarioProvider.redefinirSenha(this.username).subscribe(function (r) {
            var toast = null;
            if (r['result']) {
                toast = _this.toast.create({
                    message: "Enviamos um email para você!",
                    duration: 5000
                });
            }
            else {
                toast = _this.toast.create({
                    message: r['message'],
                    duration: 5000
                });
            }
            _this.loader.dismiss();
            toast.present();
        });
    };
    LoginPage.prototype.presentLoading = function (message) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    LoginPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__usuario_cadastro_usuario_cadastro__["a" /* UsuarioCadastroPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/var/www/html/app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content id="login">\n  <div class="modal-content">\n  <div class="modal-header">\n    <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="home()">&times;</a>\n    <h4 class="modal-title" id="">Faça seu login ou cadastre-se</h4>\n  </div>\n  <div class="modal-body">\n    <div class="row">\n      <div class="col-xs-12">\n\n        <form role="form" class="form-inline formulario" [formGroup]="loginForm" (ngSubmit)="login($event)">\n          <div class="row">\n            <div class="form-group col-xs-12">\n              <label for="">E-mail</label>\n              <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" formControlName="_username" [(ngModel)]="username">\n            </div>\n          </div>\n\n          <div class="row">\n            <div class="form-group col-xs-8 has-success has-feedback">\n              <label for="">Senha</label>\n              <input type="password" class="form-control error-input" id="senha" placeholder="********" formControlName="_password">\n            </div>\n            <div class="form-group col-xs-4">\n                <label for=""></label>\n              <button class="btn btn-blue--confirm"  type="submit">Entrar</button>\n              <span class="pull-right lost-senha" (click)="redefinirSenha(loginForm._username)">Esqueci minha senha</span>\n            </div>\n          </div>\n\n        </form>\n\n          <ion-row>\n            <div class="col-xs-12">\n              <button class="btn btn-blue--confirm" (click)="loginFacebook()">\n                <span class="sprites-facebook-icon"></span>\n                Entrar com o Facebook\n              </button>\n            </div>\n          </ion-row>\n      </div>\n    </div>\n  </div>\n  <div class="modal-footer">\n    <div class="row">\n      <div class="col-xs-12">\n        <p class="text-left">\n          <button class="btn btn-transparent" (click)="cadastrar()">\n            Clique aqui para se cadastrar!\n          </button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>    \n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__["a" /* UsuarioProvider */],
        __WEBPACK_IMPORTED_MODULE_5__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao_service__["a" /* ConfiguracaoService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_util_template_util__["a" /* TemplateUtil */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = (function () {
    function UsuarioProvider(http, configuracao, configurationService, localStorage) {
        this.http = http;
        this.configuracao = configuracao;
        this.configurationService = configurationService;
        this.localStorage = localStorage;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + "/";
    }
    UsuarioProvider.prototype.respLogin = function (data, sucesso) {
        this.configuracao.usuario.token = data.token;
        this.configuracao.usuario.nome = data.data.nome;
        this.configuracao.usuario.sobrenome = data.data.sobrenome;
        this.configuracao.usuario.dataNascimento = data.data.dataNascimento;
        this.configuracao.usuario.cpf = data.data.cpf;
        this.configuracao.usuario.sexo = data.data.sexo;
        this.configuracao.usuario.roles = data.data.roles;
        this.configuracao.usuario.celular = data.data.celular;
        this.configuracao.usuario.telefone = data.data.telefone;
        this.configuracao.usuario.email = data.data.email;
        this.configuracao.usuario.facebook_id = data.data.facebook_id;
        this.configuracao.modo = data.data.modo_de_visualizacao;
        this.configuracao.usuario.username = data.data.username;
        this.configuracao.lista = data.data.lista;
        this.configuracao.local = data.data.endereco;
        //se tem endereço
        if (data.data.estabelecimentos) {
            this.configuracao.estabelecimentos = data.data.estabelecimentos;
        }
        this.localStorage.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();
        sucesso(data);
    };
    UsuarioProvider.prototype.atualizaUsuario = function (usuario) {
        this.configuracao.usuario.nome = usuario.nome;
        this.configuracao.usuario.sobrenome = usuario.sobrenome;
        this.configuracao.usuario.dataNascimento = usuario.dataNascimento;
        this.configuracao.usuario.cpf = usuario.cpf;
        this.configuracao.usuario.sexo = usuario.sexo;
        this.configuracao.usuario.roles = usuario.roles;
        this.configuracao.usuario.celular = usuario.celular;
        this.configuracao.usuario.telefone = usuario.telefone;
        this.configuracao.usuario.email = usuario.email;
        this.localStorage.atualizar(this.configuracao);
    };
    UsuarioProvider.prototype.postUsuarioFacebook = function (dados, sucesso) {
        var _this = this;
        this.http.post(this.apiUrl + 'usuario/facebook', dados)
            .subscribe(function (res) {
            _this.respLogin(res, sucesso);
        });
    };
    UsuarioProvider.prototype.postUsuarioLogin = function (dados, sucesso, falha) {
        var _this = this;
        this.http.post(this.apiUrl + 'login_check', dados)
            .subscribe(function (res) {
            _this.respLogin(res, sucesso);
        }, function (err) {
            console.info(err);
            falha(err);
        });
    };
    UsuarioProvider.prototype.logout = function () {
        this.configuracao.limparDados();
        this.localStorage.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();
    };
    UsuarioProvider.prototype.redefinirSenha = function (username) {
        return this.http.post(this.apiUrl + 'usuario/reset-senha', { username: username });
    };
    return UsuarioProvider;
}());
UsuarioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__["a" /* LocalStorageService */]])
], UsuarioProvider);

//# sourceMappingURL=usuario.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracao__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfiguracaoService = (function () {
    function ConfiguracaoService(localStorage, configuracao) {
        this.localStorage = localStorage;
        this.configuracao = configuracao;
    }
    ConfiguracaoService.prototype.carregar = function () {
        if (this.configuracao.usuario.token) {
            // TODO implementar a consulta no banco de dados
        }
        else {
            var objeto = this.localStorage.carregar();
            if (objeto == null) {
                objeto = __WEBPACK_IMPORTED_MODULE_2__configuracao__["a" /* Configuracao */];
            }
            this.atribuirValores(objeto);
        }
    };
    ConfiguracaoService.prototype.atribuirValores = function (objeto) {
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
    };
    ConfiguracaoService.prototype.atualizar = function () {
    };
    return ConfiguracaoService;
}());
ConfiguracaoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_2__configuracao__["a" /* Configuracao */]])
], ConfiguracaoService);

//# sourceMappingURL=configuracao.service.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstabelecimentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_http_util__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstabelecimentoProvider = (function () {
    function EstabelecimentoProvider(http, httpUtil, configurationService) {
        this.http = http;
        this.httpUtil = httpUtil;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url;
    }
    EstabelecimentoProvider.prototype.bemvindo = function (configuracao, local) {
        return this.http.get(this.apiUrl + '/bem-vindo/pesquisar-estabelecimentos?modo=' + configuracao.modo + '&' + local);
    };
    EstabelecimentoProvider.prototype.lista = function (params) {
        console.info('lista');
        return this.http.get(this.apiUrl + '/resumo?' + this.httpUtil.objectToQueryString(params));
    };
    EstabelecimentoProvider.prototype.consultarFrete = function (id_estabelecimento, cep) {
        var params = {
            id_estabelecimento: id_estabelecimento,
            cep: cep
        };
        return this.http.get(this.apiUrl + '/estabelecimento-frete?' + this.httpUtil.objectToQueryString(params));
    };
    EstabelecimentoProvider.prototype.pesquisarPeloId = function (id) {
        return this.http.get(this.apiUrl + '/estabelecimento/' + id);
    };
    return EstabelecimentoProvider;
}());
EstabelecimentoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__util_http_util__["a" /* HttpUtil */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */]])
], EstabelecimentoProvider);

//# sourceMappingURL=estabelecimento.js.map

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpUtil = (function () {
    function HttpUtil() {
    }
    HttpUtil.prototype.objectToQueryString = function (obj, prefix) {
        if (prefix === void 0) { prefix = null; }
        var str = [], p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.objectToQueryString(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    };
    return HttpUtil;
}());
HttpUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HttpUtil);

//# sourceMappingURL=http.util.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioEditarPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_data_util__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_usuario_shared_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_mascara_util__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UsuarioEditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioEditarPerfilPage = (function () {
    function UsuarioEditarPerfilPage(navCtrl, navParams, configuracao, toastCtrl, loadingCtrl, usuarioService, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarioService = usuarioService;
        this.usuarioProvider = usuarioProvider;
        this.temCpf = true;
        this.temDataNascimento = true;
        this.mascara = __WEBPACK_IMPORTED_MODULE_7__providers_util_mascara_util__["a" /* mascara */];
        this.usuario = configuracao.usuario;
        this.temCpf = this.configuracao.usuario.cpf != '' && this.configuracao.usuario.cpf != null;
        this.temDataNascimento = this.configuracao.usuario.dataNascimento != '' && this.configuracao.usuario.dataNascimento != null;
        this.usuario.plainPassword = null;
        this.data = new __WEBPACK_IMPORTED_MODULE_3__providers_util_data_util__["a" /* DataUtil */]();
    }
    UsuarioEditarPerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioEditarPerfilPage');
        console.info(this.usuario);
    };
    UsuarioEditarPerfilPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    UsuarioEditarPerfilPage.prototype.presentLoading = function (message) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    UsuarioEditarPerfilPage.prototype.atualizar = function () {
        var _this = this;
        var u = new __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario_model__["a" /* UsuarioModel */]();
        u.nome = this.usuario.nome;
        u.sobrenome = this.usuario.sobrenome;
        //u.dataNascimento = this.usuario.dataNascimento;
        u.sexo = this.usuario.sexo;
        //u.email = this.usuario.email;
        u.celular = this.usuario.celular;
        if (u.sexo == null) {
            this.presentToast('Informe o sexo.');
            return false;
        }
        if (this.usuario.cpf) {
            u.cpf = this.usuario.cpf.replace(/[^0-9]/g, '');
        }
        else {
            this.presentToast('Informe o CPF.');
            return false;
        }
        if (this.usuario.telefone) {
            u.telefone = this.usuario.telefone.replace(/[^0-9]/g, '');
        }
        if (!this.temDataNascimento) {
            u.dataNascimento = this.data.getDataDeNascimento();
            this.usuario.dataNascimento = u.dataNascimento;
            if (u.dataNascimento == null) {
                this.presentToast('Informe sua data de nascimento.');
                return false;
            }
            if (!this.data.maiorDeIdade()) {
                this.presentToast('Para se cadastrar é necessário ter no mínimo 18 anos.');
                return false;
            }
        }
        if (this.usuario.celular) {
            u.celular = this.usuario.celular.replace(/[^0-9]/g, '');
        }
        else {
            this.presentToast('Informe o celular.');
            return false;
        }
        if (!u.validEdit()) {
            this.presentToast('Informe todos os campos obrigatórios do formulário.');
            return false;
        }
        var that = this;
        this.presentLoading('Atualizando...');
        this.usuarioService.atualizar(u).subscribe(function (response) {
            if (that.usuario.plainPassword != null && that.usuario.plainPassword != "") {
                that.usuarioService.atualizarSenha(that.usuario.plainPassword).subscribe(function (respSenha) {
                    _this.presentToast('Senha atualizada!');
                    that.usuarioProvider.atualizaUsuario(_this.usuario);
                    that.loader.dismiss();
                    _this.voltar();
                }, function (errorS) {
                    _this.presentToast('Erro ao atualizar senha!');
                    that.loader.dismiss();
                });
            }
            else {
                that.loader.dismiss();
                that.usuarioProvider.atualizaUsuario(that.usuario);
                _this.presentToast('Ok!Dados atualizados!');
                _this.voltar();
            }
        }, function (error) {
            that.loader.dismiss();
            console.info(error);
            _this.presentToast('Não foi possível atualizar o cadastro.');
        });
    };
    UsuarioEditarPerfilPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    UsuarioEditarPerfilPage.prototype.dias = function () {
        var dias = [];
        for (var i = 1; i <= 31; i++) {
            dias.push(i);
        }
        return dias;
    };
    UsuarioEditarPerfilPage.prototype.meses = function () {
        return [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
    };
    UsuarioEditarPerfilPage.prototype.anos = function () {
        var anoAtual = new Date().getFullYear();
        var anos = [];
        for (var i = 0; i < 100; i++) {
            anos.push(anoAtual - i);
        }
        return anos;
    };
    return UsuarioEditarPerfilPage;
}());
UsuarioEditarPerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-usuario-editar-perfil',template:/*ion-inline-start:"/var/www/html/app/src/pages/usuario-editar-perfil/usuario-editar-perfil.html"*/'\n<ion-content class="main">\n  <div class="modal-header">\n    <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="voltar()">×</a>\n    <h4 class="modal-title" id="">Editar Perfil</h4>\n  </div>\n\n  <form role="form" class="form-inline formulario" validate (submit)="atualizar()">\n    <div class="row">\n      <div class="form-group col-xs-6">\n        <label for="">Nome*</label>\n        <input type="text" class="form-control" id="nome" placeholder="Digite aqui" [(ngModel)]="usuario.nome" name="nome" required #nome="ngModel">\n        <div class="text-danger" *ngIf="nome.invalid && (nome.dirty || nome.touched)">\n          <span *ngIf="nome.errors.required">O nome é obrigatório</span>\n        </div>\n      </div>\n      <div class="form-group col-xs-6">\n        <label for="">Sobrenome*</label>\n        <input type="text" class="form-control" id="sobrenome" placeholder="Digite aqui" [(ngModel)]="usuario.sobrenome" name="sobrenome" #sobrenome="ngModel" required>\n        <div class="text-danger" *ngIf="sobrenome.invalid && (sobrenome.dirty || sobrenome.touched)">\n          <span *ngIf="sobrenome.errors.required">O sobrenome é obrigatório</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="form-group col-xs-6">\n        <label for="">Sexo*</label>\n        <select class="form-control select-sex" [(ngModel)]="usuario.sexo" name="sexo" required>\n          <option value="masculino" selected>Masculino</option>\n          <option value="feminino">Feminino</option>\n        </select>\n      </div>\n\n      <div class="form-group col-xs-6">\n        <label for="">CPF*</label>\n        <input type="text"\n               class="form-control"\n               id="cpf"\n               placeholder="Digite seu CPF"\n               [(ngModel)]="usuario.cpf"\n               name="cpf" #cpf="ngModel"\n               [readonly]="temCpf"\n               [textMask]="{mask: mascara.cpf}">\n        <div class="text-danger" *ngIf="cpf.invalid && (cpf.dirty || cpf.touched)">\n          <span *ngIf="cpf.errors.required">O CPF é obrigatório</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=" form-group" *ngIf="!temDataNascimento">\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="nasc">\n            <span>Data de nascimento*</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="row form-group">\n        <div class="col-xs-4">\n          <select class="form-control" name="dia" [(ngModel)]="data.dia" required >\n            <option value=\'\' selected>Dia</option>\n            <option *ngFor="let dia of dias()" value=\'{{ dia }}\'>{{ dia }}</option>\n          </select>\n        </div>\n\n        <div class="col-xs-4">\n          <select class="form-control" name="mes" [(ngModel)]="data.mes">\n            <option value=\'\' selected>Mês</option>\n            <option *ngFor="let mes of meses(); let i = index" value="{{ i }}">{{ mes }}</option>\n          </select>\n        </div>\n\n        <div class="col-xs-4">\n          <select class="form-control" name="ano" [(ngModel)]="data.ano">\n            <option value=\'\' selected>Ano</option>\n            <option *ngFor="let ano of anos()" value=\'{{ ano }}\'>{{ ano }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="form-group col-xs-6">\n        <label for="">Celular*</label>\n        <input type="text"\n               class="form-control"\n               id="celular"\n               placeholder="( ) 90000-0000"\n               [(ngModel)]="usuario.celular"\n               name="celular"\n               required\n               #celular="ngModel"\n               [textMask]="{mask: mascara.celular}">\n        <div class="text-danger" *ngIf="celular.invalid && (celular.dirty || celular.touched)">\n          <span *ngIf="celular.errors.required">O celular é obrigatório</span>\n        </div>\n      </div>\n\n      <div class="form-group col-xs-6">\n        <label for="">Telefone</label>\n        <input type="text"\n               class="form-control"\n               id="telefone"\n               placeholder="( ) 9000-0000"\n               [(ngModel)]="usuario.telefone"\n               name="telefone"\n               #telefone="ngModel"\n               [textMask]="{mask: mascara.telefone}">\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="form-group col-xs-12">\n        <label for="">E-mail*</label>\n        <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" name="email" [(ngModel)]="usuario.email" required readonly #email="ngModel">\n        <div class="text-danger" *ngIf="email.invalid && (email.dirty || email.touched)">\n          <span *ngIf="email.errors.required">O email é obrigatório</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="row" *ngIf="usuario.facebook_id == null">\n      <div class="form-group col-xs-6">\n        <label for="">Alterar Senha</label>\n        <input type="password"\n               class="form-control"\n               id="senha"\n               placeholder="Informe a senha"\n               name="senha"\n               [(ngModel)]="usuario.plainPassword"\n               #senha="ngModel"\n               minlength="6"\n        >\n        <div>\n          <span >Informe se quiser atualizá-la</span>\n        </div>\n        <div class="text-danger" *ngIf="senha.invalid && (senha.dirty || senha.touched)">\n          <span *ngIf="senha.errors.minlength">A senha deve ter no mínimo 6 caracteres</span>\n        </div>\n      </div>\n      <div class="form-group col-xs-6">\n        <label for="">Confirmar senha*</label>\n        <input type="password" class="form-control" id="confirmarSenha" placeholder="Confirme a senha" #confirmarSenha (keyup)="0" required>\n        <div class="text-danger" *ngIf="confirmarSenha.value != usuario.plainPassword && senha.touched">\n          <span>A senha deve ser igual</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-xs-12 text-right">\n        <div class="container-btn--confirm">\n          <button class="btn btn-blue--confirm" type="submit">Continuar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/usuario-editar-perfil/usuario-editar-perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_usuario_shared_usuario_service__["a" /* UsuarioService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__["a" /* UsuarioProvider */]])
], UsuarioEditarPerfilPage);

//# sourceMappingURL=usuario-editar-perfil.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = (function () {
    function UsuarioService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.url = apiWeb.url + '/usuario';
    }
    UsuarioService.prototype.alterarModoDeVisualizacao = function (modo) {
        var url = this.url + '/modo-de-visualizacao';
        return this.http.put(url, { modo: modo }).subscribe();
    };
    UsuarioService.prototype.cadastrar = function (usuario) {
        return this.http.post(this.url, usuario);
    };
    UsuarioService.prototype.atualizar = function (usuario) {
        return this.http.put(this.url, usuario);
    };
    UsuarioService.prototype.atualizarSenha = function (senha) {
        return this.http.put(this.url + '/nova-senha', { senha: senha });
    };
    UsuarioService.prototype.meuPerfil = function () {
        var url = this.url + '/meu-perfil';
        return this.http.get(url);
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */]])
], UsuarioService);

//# sourceMappingURL=usuario.service.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnderecoService = (function () {
    function EnderecoService(httpClient, configurationService) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + '/usuario-enderecos';
    }
    EnderecoService.prototype.pesquisarPeloCep = function (cep) {
        var apiWeb = this.configurationService.getValue("api-web");
        var url = apiWeb.url + '/pesquisa-cep/' + cep;
        return this.httpClient.get(url);
    };
    EnderecoService.prototype.cadastrar = function (endereco) {
        return this.httpClient.post(this.apiUrl, endereco);
    };
    EnderecoService.prototype.listarTodos = function () {
        return this.httpClient.get(this.apiUrl);
    };
    EnderecoService.prototype.ativar = function (id) {
        var url = this.apiUrl + "/ativar/" + id;
        return this.httpClient.get(url);
    };
    EnderecoService.prototype.excluir = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.httpClient.delete(url);
    };
    EnderecoService.prototype.alterarEstabelecimentoBase = function (enderecoId, estabelecimentoId) {
        var url = this.apiUrl + "/atribuir-estabelecimento/" + enderecoId;
        var body = { estabelecimento: estabelecimentoId };
        return this.httpClient.put(url, body);
    };
    return EnderecoService;
}());
EnderecoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */]])
], EnderecoService);

//# sourceMappingURL=endereco.service.js.map

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplateUtil = (function () {
    function TemplateUtil() {
        this.header = true;
        this.footer = true;
    }
    return TemplateUtil;
}());
TemplateUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TemplateUtil);

//# sourceMappingURL=template.util.js.map

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModel; });
var UsuarioModel = (function () {
    function UsuarioModel() {
    }
    UsuarioModel.prototype.isValid = function () {
        return this.nome
            && this.sobrenome
            && this.dataNascimento
            && this.sexo
            && this.email
            && this.celular
            && this.plainPassword
            && this.plainPassword.length >= 6
            && this.cpf;
    };
    UsuarioModel.prototype.validEdit = function () {
        return this.nome
            && this.sobrenome
            && this.sexo
            && this.celular
            && this.cpf;
    };
    return UsuarioModel;
}());

//# sourceMappingURL=usuario.model.js.map

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_http_util__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutoService = (function () {
    function ProdutoService(httpClient, env, httpUtil, configuracao) {
        this.httpClient = httpClient;
        this.env = env;
        this.httpUtil = httpUtil;
        this.configuracao = configuracao;
        var apiWeb = this.env.getValue("api-web");
        this.apiUrl = apiWeb.url + '/produto';
    }
    ProdutoService.prototype.getAgrupamento = function () {
        var params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos.slice(0, 100)
        };
        var apiWeb = this.env.getValue("api-web");
        var url = apiWeb.url + '/produtos-agrupamento';
        return this.httpClient.get(url + '?' + this.httpUtil.objectToQueryString(params));
    };
    ProdutoService.prototype.lista = function (params) {
        params.busca.estabelecimento = params.busca.estabelecimento.slice(0, 100);
        return this.httpClient.get(this.apiUrl + '?' + this.httpUtil.objectToQueryString(params), { observe: 'response' });
    };
    ProdutoService.prototype.listaCategorias = function (params) {
        var p2 = {};
        if (params.busca) {
            p2 = {
                filtro: '{"termo":"' + params.busca.termo + '", "categoria":"' + params.busca.categoria_pai + '"}',
                estabelecimentos: params.busca.estabelecimento.slice(0, 100)
            };
        }
        ;
        return this.httpClient.get(this.apiUrl + '/categorias?' + this.httpUtil.objectToQueryString(p2), { observe: 'response' });
    };
    ProdutoService.prototype.detalhe = function (id) {
        var estabelecimentos = [];
        if (this.configuracao.modo === 'marketplace') {
            this.configuracao.estabelecimentoBase
                ? estabelecimentos.push(this.configuracao.estabelecimentoBase)
                : estabelecimentos.push(10367);
        }
        else {
            estabelecimentos = this.configuracao.estabelecimentos;
        }
        var params = {
            id: id,
            estabelecimento: estabelecimentos
        };
        var url = this.apiUrl + '/detalhe';
        return this.httpClient.get(url + ("?modo=" + this.configuracao.modo + "&filtro=" + JSON.stringify(params)));
    };
    ProdutoService.prototype.precoPorEstabelecimento = function (id) {
        var filtro = {
            id: id,
            estabelecimento: this.configuracao.estabelecimentos
        };
        var url = this.apiUrl + '/estabelecimentos';
        return this.httpClient.get(url + ("?modo=" + this.configuracao.modo + "&filtro=") + JSON.stringify(filtro));
    };
    ProdutoService.prototype.listarSemelhantes = function (produto) {
        var estabelecimentos = [];
        if (this.configuracao.modo === 'marketplace') {
            this.configuracao.estabelecimentoBase
                ? estabelecimentos.push(this.configuracao.estabelecimentoBase)
                : estabelecimentos.push(10367);
        }
        else {
            estabelecimentos = this.configuracao.estabelecimentos;
        }
        var params = {
            busca: {
                categoria: produto.pag_produto_categoria.pag_cat_id,
                estabelecimento: estabelecimentos
            },
            total_por_pagina: 6,
            pagina: 1,
            modo: this.configuracao.modo
        };
        return this.lista(params);
    };
    return ProdutoService;
}());
ProdutoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_4__util_http_util__["a" /* HttpUtil */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */]])
], ProdutoService);

//# sourceMappingURL=produto.service.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioCadastroEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_endereco_endereco_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_endereco_endereco_model__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UsuarioCadastroEnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioCadastroEnderecoPage = (function () {
    function UsuarioCadastroEnderecoPage(navCtrl, navParams, toastCtrl, enderecoService, loadingCtrl, configuracao, localStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.enderecoService = enderecoService;
        this.loadingCtrl = loadingCtrl;
        this.configuracao = configuracao;
        this.localStorage = localStorage;
        this.bairroSomenteLeitura = true;
        this.logradouroSomenteLeitura = true;
        this.campoNome = false;
        this.endereco = new __WEBPACK_IMPORTED_MODULE_3__providers_endereco_endereco_model__["a" /* EnderecoModel */]();
        console.log(this.navParams.get('campoNome'));
        if (this.navParams.get('campoNome')) {
            this.campoNome = true;
        }
    }
    UsuarioCadastroEnderecoPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    UsuarioCadastroEnderecoPage.prototype.presentLoading = function (message) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    UsuarioCadastroEnderecoPage.prototype.pesquisarEnderecoPeloCep = function (cep) {
        var _this = this;
        this.endereco.pagUsuEndCep = cep.replace(/[^0-9]/, '');
        if (!this.endereco.pagUsuEndCep || 8 !== this.endereco.pagUsuEndCep.length) {
            return false;
        }
        this.presentLoading('Pesquisando o CEP...');
        this.enderecoService.pesquisarPeloCep(this.endereco.pagUsuEndCep).subscribe(function (response) {
            _this.logradouro = response['logradouro_nome'];
            _this.bairro = response['bairro_nome'];
            _this.cidade = response['cidade_nome'];
            _this.estado = response['estado_uf'];
            if (response['bairro_id']) {
                _this.endereco.pagBairro = response['bairro_id'];
            }
            if (response['cidade_id']) {
                _this.endereco.pagCidade = response['cidade_id'];
            }
            if (!_this.logradouro) {
                _this.logradouroSomenteLeitura = false;
            }
            if (!_this.bairro) {
                _this.bairroSomenteLeitura = false;
            }
            _this.loader.dismissAll();
        }, function (error) {
            console.error(error);
            _this.presentToast('Não foi possível consultar o cep');
            _this.loader.dismiss();
        });
    };
    UsuarioCadastroEnderecoPage.prototype.cadastrar = function () {
        var _this = this;
        if (!this.endereco.pagUsuEndNome) {
            this.endereco.pagUsuEndNome = 'Meu Endereço';
        }
        this.endereco.pagUsuEndLogradouro = this.logradouro + ", " + this.numero;
        console.log(this.endereco);
        if (!this.endereco.isValid()) {
            this.presentToast('Preencha todos os campos obrigatórios');
            return false;
        }
        this.presentLoading('Realizando o cadastro...');
        this.enderecoService.cadastrar(this.endereco).subscribe(function (response) {
            console.log(response);
            _this.configuracao.local = {
                'id': response['id'],
                'cep': response['cep'],
                'nome': response['nome'],
                'cidade_id': response['cidade_id'],
                'cidade_nome': response['cidade_nome'],
                'estado_uf': response['estado_uf']
            };
            _this.configuracao.estabelecimentosMarketplace = response['estabelecimentos']['marketplace'];
            _this.configuracao.estabelecimentosComparacao = response['estabelecimentos']['comparacao'];
            _this.localStorage.atualizar(_this.configuracao);
            _this.configuracao.propagarAlteracao();
            _this.navCtrl.popToRoot();
        }, function (error) {
            console.error(error);
            _this.presentToast('Não foi posśivel cadastrar o endereço');
        }, function () { return _this.loader.dismiss(); });
    };
    UsuarioCadastroEnderecoPage.prototype.voltar = function () {
        this.navCtrl.popToRoot();
    };
    return UsuarioCadastroEnderecoPage;
}());
UsuarioCadastroEnderecoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-usuario-cadastro-endereco',template:/*ion-inline-start:"/var/www/html/app/src/pages/usuario-cadastro-endereco/usuario-cadastro-endereco.html"*/'<!--\n  Generated template for the UsuarioCadastroEnderecoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n    <div class="modal-header">\n        <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="voltar()">×</a>\n        <h4 class="modal-title" id="">Cadastre um endereço</h4>\n    </div>\n\n    <form role="form" class="form-inline formulario" validate (submit)="cadastrar()">\n        <div class="row">\n            <div class="form-group col-xs-12" *ngIf="campoNome">\n                <label for="">Nome*</label>\n                <input type="text"\n                       class="form-control"\n                       placeholder="Informe o nome para o endereço"\n                       name="nome"\n                       [(ngModel)]="endereco.pagUsuEndNome"\n                >\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="form-group col-xs-6">\n                <label for="">CEP*</label>\n                <input type="text"\n                       class="form-control"\n                       id="cep"\n                       placeholder="Digite seu cep"\n                       name="cep"\n                       [(ngModel)]="endereco.pagUsuEndCep"\n                       #cep="ngModel"\n                       (keyup)="pesquisarEnderecoPeloCep(cep.value)"\n                       maxlength="8"\n                       pattern="[0-9]{8}"\n                       required\n                >\n                <div class="text-danger" *ngIf="cep.invalid && (cep.dirty || cep.touched)">\n                    <span *ngIf="cep.errors.pattern">O cep deve ter 8 digitos</span>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="form-group col-xs-12">\n                <label for="">Endereço*</label>\n                <input type="text"\n                       class="form-control"\n                       id="endereco"\n                       [placeholder]="logradouroSomenteLeitura ? \'Aguardando cep\' : \'Informe o logradouro\'"\n                       name="logradouro"\n                       #vLogradouro="ngModel"\n                       [(ngModel)]="logradouro"\n                       [readOnly]="logradouroSomenteLeitura"\n                >\n                <div class="text-danger" *ngIf="vLogradouro.invalid && (vLogradouro.dirty || vLogradouro.touched)">\n                    <span *ngIf="vLogradouro.errors.required">O logradouro é obrigatório</span>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-xs-6">\n                <div class="form-group">\n                    <label for="">Numero*</label>\n                    <input type="text"\n                           class="form-control"\n                           id="numero"\n                           placeholder=""\n                           required\n                           name="numero"\n                           #vNumero="ngModel"\n                           [(ngModel)]="numero"\n                           required>\n                    <div class="text-danger" *ngIf="vNumero.invalid && (vNumero.dirty || vNumero.touched)">\n                        <span *ngIf="vNumero.errors.required">O número é obrigatório</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class="col-xs-6">\n                <div class="form-group">\n                    <label for="">Complemento</label>\n                    <input type="text"\n                           class="form-control"\n                           id="complemento"\n                           placeholder="Ex:Casa"\n                           name="complemento"\n                           #vComplemento="ngModel"\n                           [(ngModel)]="endereco.pagUsuEndComplemento">\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="form-group col-xs-12">\n                <label for="">Bairro*</label>\n                <input type="text"\n                       class="form-control"\n                       id="bairro"\n                       [placeholder]="bairroSomenteLeitura ? \'Aguardando cep\' : \'Informe o bairro\'"\n                       name="bairro"\n                       [readOnly]="bairroSomenteLeitura"\n                       required\n                       name="bairro"\n                       [(ngModel)]="bairro"\n                       #vBairro="ngModel"\n                >\n                <div class="text-danger" *ngIf="vBairro.invalid && (vBairro.dirty || vBairro.touched)">\n                    <span *ngIf="vBairro.errors.required">O bairro é obrigatório</span>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="form-group col-xs-6">\n                <label for="">Cidade*</label>\n                <input type="text"\n                       class="form-control"\n                       id="cidade"\n                       placeholder="Aguardando cep"\n                       readOnly\n                       required\n                       name="cidade"\n                       [(ngModel)]="cidade"\n                       #vCidade="ngModel"\n                >\n                <div class="text-danger" *ngIf="vCidade.invalid && (vCidade.dirty || vCidade.touched)">\n                    <span *ngIf="vCidade.errors.required">A cidade é obrigatória</span>\n                </div>\n            </div>\n\n            <div class="form-group col-xs-6">\n                <label for="">Estado*</label>\n                <input type="text"\n                       class="form-control"\n                       id="estado"\n                       placeholder="Aguardando cep"\n                       readOnly\n                       required\n                       name="estado"\n                       [(ngModel)]="estado"\n                       #vEstado="ngModel"\n                >\n                <div class="text-danger" *ngIf="vEstado.invalid && (vEstado.dirty || vEstado.touched)">\n                    <span *ngIf="vEstado.errors.required">O estado é obrigatório</span>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-xs-12 text-right">\n                <div class="container-btn--confirm">\n                    <button class="btn btn-blue--confirm" type="submit">Salvar</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/usuario-cadastro-endereco/usuario-cadastro-endereco.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_endereco_endereco_service__["a" /* EnderecoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__["a" /* LocalStorageService */]])
], UsuarioCadastroEnderecoPage);

//# sourceMappingURL=usuario-cadastro-endereco.js.map

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_produto_produto_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Paginacao = (function () {
    function Paginacao() {
    }
    return Paginacao;
}());
var ProdutosPage = (function () {
    function ProdutosPage(navCtrl, navParams, produtoProvider, configuracao, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoProvider = produtoProvider;
        this.configuracao = configuracao;
        this.loadingCtrl = loadingCtrl;
        this.produtos = null;
        this.categorias = null;
        this.filtroCategoria = null;
        this.parametros = {
            busca: {
                termo: null,
                categoria: null,
                categoria_pai: null,
                estabelecimento: []
            },
            total_por_pagina: 12,
            pagina: 1,
            nome: null,
            modo: ""
        };
        this.produtos = [];
        this.paginacao = new Paginacao();
        this.paginacao.pagesInRange = [];
    }
    ProdutosPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter ProdutosPage');
        var termo = this.navParams.get('termo') != undefined ? this.navParams.get('termo') : null;
        var categoria_pai = this.navParams.get('categoria_pai') != undefined ? this.navParams.get('categoria_pai') : null;
        var nome = this.navParams.get('nome') != undefined ? this.navParams.get('nome') : null;
        this.parametros = {
            busca: {
                termo: termo,
                categoria: null,
                categoria_pai: categoria_pai,
                estabelecimento: []
            },
            total_por_pagina: 12,
            pagina: 1,
            nome: nome,
            modo: this.configuracao.modo
        };
        console.info(this.configuracao.estabelecimentos.length + " estabelecimentos");
        this.produtos = [];
        this.busca(1);
    };
    ProdutosPage.prototype.busca = function (pagina) {
        var _this = this;
        console.info("pagina " + pagina);
        this.parametros.pagina = pagina;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: 'Buscando produtos'
        });
        this.parametros.busca.estabelecimento = this.configuracao.estabelecimentos;
        if (this.filtroCategoria != null) {
            this.parametros.busca.categoria = this.filtroCategoria.pag_cat_id;
        }
        loader.present();
        this.produtoProvider.lista(this.parametros).subscribe(function (response) {
            var body = response.body;
            that.produtos = body['data'];
            that.paginacao = body['meta'];
            if (that.paginacao.current == 0) {
                that.produtos = [];
                that.paginacao = new Paginacao();
            }
            that.paginacao.previous = that.paginacao.current - 1;
            if (that.paginacao.previous < 1) {
                that.paginacao.previous = 1;
            }
            _this.produtoProvider.listaCategorias(_this.parametros).subscribe(function (response2) {
                that.categorias = response2.body;
            }, function (err) {
                console.error(err);
            });
            _this.content.scrollToTop();
            loader.dismiss();
        }, function (error) {
            console.error(error);
            loader.dismiss();
        });
    };
    ProdutosPage.prototype.pagina = function (n) {
        this.busca(n);
        return false;
    };
    ProdutosPage.prototype.converteIndice = function (binary) {
        return parseInt(binary, 2);
    };
    return ProdutosPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], ProdutosPage.prototype, "content", void 0);
ProdutosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-produtos',template:/*ion-inline-start:"/var/www/html/app/src/pages/produtos/produtos.html"*/'<!--\n  Generated template for the ProdutosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="produtos">\n    <header>\n        <app-header-marketplace *ngIf="configuracao.modo == \'marketplace\'" [navCtrl]="navCtrl"></app-header-marketplace>\n        <app-header-comparacao *ngIf="configuracao.modo != \'marketplace\'" [navCtrl]="navCtrl"></app-header-comparacao>\n    </header>\n\n    <!--main-->\n    <main class="bg-gray">\n        <!--breadcrumbie-->\n        <ion-row class="breadcrumbie-content">\n            <div class="">\n                <ul>\n                    <li><a href="">Zukkin</a> |</li>\n                    <li *ngIf="parametros.busca.termo"><a href="">Busca</a> |</li>\n                    <li *ngIf="parametros.busca.termo"><a href="" class="active">{{parametros.busca.termo}}</a></li>\n                    <li *ngIf="parametros.nome"><a href="">Categoria</a> |</li>\n                    <li *ngIf="parametros.nome"><a href="" class="active">{{parametros.nome}}</a></li>\n                </ul>\n            </div>\n        </ion-row>\n        <!--/breadcrumbie-->\n\n        <!-- Filter Categorias-->\n        <section class="filter-catalogo">\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="filter-catalogo--title">\n                        <h2>Filtrar por:</h2>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <ion-select placeholder="Categoria"\n                                [(ngModel)]="filtroCategoria"\n                                cancelText="Cancelar"\n                                okText="Filtrar"\n                                interface="action-sheet"\n                                class="form-control"\n                                multiple="false"\n                                (ionChange)="busca(1)"\n                    >\n                        <ion-option *ngFor="let cat of categorias" [value]="cat">\n                            {{cat.pag_cat_nome}}\n                        </ion-option>\n                    </ion-select>\n                </div>\n            </div>\n\n        </section>\n        <!--/ Filter Categorias-->\n\n        <!-- Produtos -->\n        <div class="row">\n            <div class=" col-xs-12 ">\n                <div class="content-product--vitrine">\n                    <div class="product-list" *ngIf="produtos.length">\n                        <div class="products-group" *ngFor="let g of [\'000\',\'001\',\'010\',\'011\',\'100\',\'101\']">\n                            <div *ngFor="let i of [\'0\',\'1\'];">\n                                <app-produto-box\n                                    *ngIf="produtos[converteIndice(g+i)]"\n                                    [produto]="produtos[converteIndice(g+i)]"\n                                    [navCtrl]="navCtrl">\n                                </app-produto-box>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--/produto-->\n\n        <!--pagination-->\n        <div class="row">\n            <div class="col-xs-12">\n                <nav aria-label="Page navigation" class="nav-page">\n                    <ul class="pagination">\n                        <li>\n                            <a href="#" aria-label="Previous" *ngIf="paginacao.current > 1"\n                               (click)="pagina(paginacao.previous)">\n                                <span aria-hidden="true">&laquo;</span>\n                            </a>\n                        </li>\n                        <li *ngFor="let p of paginacao.pagesInRange">\n                            <a href="#" [ngClass]="{\'active\': p == paginacao.current}" (click)="pagina(p)">{{p}}</a>\n                        </li>\n                        <li>\n                            <a href="#" aria-label="Next" (click)="pagina(paginacao.pageCount)">\n                                <span aria-hidden="true">&raquo;</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n        <!--/pagination-->\n    </main>\n\n    <app-footer [navCtrl]="navCtrl"></app-footer>\n</ion-content>\n\n<ion-footer>\n    <app-footer-resumo [navCtrl]="navCtrl"></app-footer-resumo>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/produtos/produtos.html"*/,
        styles: ['./produtos.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_produto_produto_service__["a" /* ProdutoService */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
], ProdutosPage);

//# sourceMappingURL=produtos.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resumo_resumo__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaUtil = (function () {
    function ListaUtil(configuracao, listaService, toastCtrl, localStorage, loadingCtrl, resumoProvider) {
        this.configuracao = configuracao;
        this.listaService = listaService;
        this.toastCtrl = toastCtrl;
        this.localStorage = localStorage;
        this.loadingCtrl = loadingCtrl;
        this.resumoProvider = resumoProvider;
    }
    ListaUtil.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    ListaUtil.prototype.adicionarProduto = function (produtoId, quantidade, toastMsg) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'atualizando lista...'
        });
        loader.present();
        return this.listaService.adicionarProduto(this.configuracao.lista.id, produtoId, quantidade).subscribe(function (response) {
            var index = _this.configuracao.lista.produtos.findIndex(function (item) { return item.id == produtoId; });
            if (quantidade > 0) {
                console.info('vai adicionar o produto na lista');
                _this.adicionarProdutoNaLista(index, produtoId, response['pag_lis_pro_quantidade']);
            }
            else {
                console.info('vai remover o produto da lista');
                _this.removerProdutoDaLista(index);
            }
            _this.presentToast(toastMsg);
        }, function (error) {
            console.error(error);
            _this.presentToast('Houve uma falha na requisição');
            return new Promise(function (resolve, reject) { return reject(new Error(error)); });
        }, function () {
            _this.configuracao.propagarAlteracaoNaLista();
            _this.localStorage.atualizar(_this.configuracao);
            loader.dismiss();
        });
    };
    ListaUtil.prototype.pesquisarProduto = function (produtoId) {
        return this.configuracao.lista.produtos.find(function (item) { return item.id == produtoId; });
    };
    ListaUtil.prototype.obterQuantidade = function (produtoId) {
        var produto = this.pesquisarProduto(produtoId);
        return produto ? produto['quantidade'] : 0;
    };
    ListaUtil.prototype.adicionarProdutoNaLista = function (index, produtoId, quantidade) {
        if (index >= 0) {
            console.info('achou o index e vai modificar a quantidade');
            this.configuracao.lista.produtos[index]['quantidade'] = quantidade;
        }
        else {
            console.info('não encontrou o produto a vai adicionar na lista');
            this.configuracao.lista.produtos.push({ id: produtoId, quantidade: quantidade });
        }
    };
    ListaUtil.prototype.removerProdutoDaLista = function (index) {
        if (index >= 0) {
            this.configuracao.lista.produtos.splice(index, 1);
        }
    };
    ListaUtil.prototype.quantificarProdutosDisponiveisNoMercadoSelecionado = function () {
        var _this = this;
        var params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos,
            lista: this.configuracao.lista.id,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase
        };
        this.resumoProvider.get(params).subscribe(function (response) {
            var selecionado = response.find(function (item) { return item.estabelecimento.pag_est_id == _this.configuracao.estabelecimentoBase; });
            _this.configuracao.lista.produtosDisponiveisNoMercado = [];
            if (selecionado) {
                _this.configuracao.lista.produtosDisponiveisNoMercado = selecionado.lista.filter(function (item) {
                    return _this.configuracao.lista.produtos.find(function (produto) { return produto.id == item.produto.pag_pro_id; });
                });
            }
        }, function (error) {
            console.error(error);
        });
    };
    return ListaUtil;
}());
ListaUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__lista__["a" /* ListaProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__resumo_resumo__["a" /* ResumoProvider */]])
], ListaUtil);

//# sourceMappingURL=lista.util.js.map

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_cadastro_endereco_usuario_cadastro_endereco__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_usuario_shared_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_data_util__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_mascara_util__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the UsuarioCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioCadastroPage = (function () {
    function UsuarioCadastroPage(navCtrl, navParams, toastCtrl, usuarioService, configuracao, localStorage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.usuarioService = usuarioService;
        this.configuracao = configuracao;
        this.localStorage = localStorage;
        this.loadingCtrl = loadingCtrl;
        this.mascara = __WEBPACK_IMPORTED_MODULE_8__providers_util_mascara_util__["a" /* mascara */];
        this.data = new __WEBPACK_IMPORTED_MODULE_7__providers_util_data_util__["a" /* DataUtil */]();
        this.usuario = new __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario_model__["a" /* UsuarioModel */]();
        if (navParams.get('nome')) {
            this.usuario.nome = navParams.get('nome');
        }
        if (navParams.get('facebook_id')) {
            this.usuario.facebook_id = navParams.get('facebook_id');
        }
    }
    UsuarioCadastroPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 8000,
            cssClass: "toast-dialog"
        });
        toast.present();
    };
    UsuarioCadastroPage.prototype.presentLoading = function (message) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    UsuarioCadastroPage.prototype.cadastrar = function () {
        var _this = this;
        if (!this.data.maiorDeIdade()) {
            this.presentToast('Para se cadastrar é necessário ter no mínimo 18 anos.');
            return false;
        }
        if (this.usuario.cpf) {
            this.usuario.cpf = this.usuario.cpf.replace(/[^0-9]/g, '');
        }
        if (this.usuario.telefone) {
            this.usuario.telefone = this.usuario.telefone.replace(/[^0-9]/g, '');
        }
        if (this.usuario.celular) {
            this.usuario.celular = this.usuario.celular.replace(/[^0-9]/g, '');
        }
        this.usuario.dataNascimento = this.data.getDataDeNascimento();
        if (!this.usuario.isValid()) {
            this.presentToast('Informe todos os campos obrigatórios do formulário.');
            return false;
        }
        this.presentLoading('Realizando o cadastro...');
        var that = this;
        this.usuarioService.cadastrar(this.usuario).subscribe(function (response) {
            if (response['token']) {
                _this.configuracao.usuario = that.usuario;
                _this.configuracao.usuario.token = response['token'];
                _this.configuracao.modo = response['data']['modo_de_visualizacao'];
                _this.configuracao.lista = response['data']['lista'];
                _this.configuracao.local = null;
                _this.localStorage.atualizar(_this.configuracao);
                _this.configuracao.propagarAlteracao();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__usuario_cadastro_endereco_usuario_cadastro_endereco__["a" /* UsuarioCadastroEnderecoPage */]);
            }
            else {
                _this.presentToast(response['erros'].join("\x0A"));
            }
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
            _this.presentToast('Não foi possível efetuar o cadastro.');
        });
    };
    UsuarioCadastroPage.prototype.dias = function () {
        var dias = [];
        for (var i = 1; i <= 31; i++) {
            dias.push(i);
        }
        return dias;
    };
    UsuarioCadastroPage.prototype.meses = function () {
        return [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
    };
    UsuarioCadastroPage.prototype.anos = function () {
        var anoAtual = new Date().getFullYear();
        var anos = [];
        for (var i = 0; i < 100; i++) {
            anos.push(anoAtual - i);
        }
        return anos;
    };
    UsuarioCadastroPage.prototype.voltar = function () {
        this.navCtrl.popToRoot();
    };
    return UsuarioCadastroPage;
}());
UsuarioCadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-usuario-cadastro',template:/*ion-inline-start:"/var/www/html/app/src/pages/usuario-cadastro/usuario-cadastro.html"*/'<!--\n  Generated template for the UsuarioCadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Cadastre-se no ZUKKIN</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content class="main">\n    <div class="modal-header">\n        <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="voltar()">×</a>\n        <h4 class="modal-title" id="">Cadastre-se no Zukkin</h4>\n    </div>\n\n    <form role="form" class="form-inline formulario" validate (submit)="cadastrar()">\n        <div class="row">\n          <div class="form-group col-xs-6">\n            <label for="">Nome*</label>\n            <input type="text" class="form-control" id="nome" placeholder="Digite aqui" [(ngModel)]="usuario.nome" name="nome" required #nome="ngModel">\n            <div class="text-danger" *ngIf="nome.invalid && (nome.dirty || nome.touched)">\n              <span *ngIf="nome.errors.required">O nome é obrigatório</span>\n            </div>\n          </div>\n          <div class="form-group col-xs-6">\n            <label for="">Sobrenome*</label>\n            <input type="text" class="form-control" id="sobrenome" placeholder="Digite aqui" [(ngModel)]="usuario.sobrenome" name="sobrenome" #sobrenome="ngModel" required>\n            <div class="text-danger" *ngIf="sobrenome.invalid && (sobrenome.dirty || sobrenome.touched)">\n              <span *ngIf="sobrenome.errors.required">O sobrenome é obrigatório</span>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="form-group col-xs-6">\n            <label for="">Sexo</label>\n            <select class="form-control select-sex" [(ngModel)]="usuario.sexo" name="sexo" required>\n              <option value="masculino" selected>Masculino</option>\n              <option value="feminino">Feminino</option>\n            </select>\n          </div>\n\n          <div class="form-group col-xs-6">\n            <label for="">CPF*</label>\n            <input type="text"\n                   class="form-control"\n                   id="cpf"\n                   placeholder="Digite seu CPF"\n                   [(ngModel)]="usuario.cpf"\n                   name="cpf" #cpf="ngModel"\n                   required\n                   [textMask]="{mask: mascara.cpf}">\n            <div class="text-danger" *ngIf="cpf.invalid && (cpf.dirty || cpf.touched)">\n              <span *ngIf="cpf.errors.required">O CPF é obrigatório</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=" form-group">\n          <div class="row">\n            <div class="col-xs-12">\n              <div class="nasc">\n                <span>Data de nascimento</span>\n              </div>\n            </div>\n          </div>\n\n          <div class="row form-group">\n            <div class="col-xs-4">\n              <select class="form-control" name="dia" [(ngModel)]="data.dia" required>\n                <option value=\'\' selected>Dia</option>\n                <option *ngFor="let dia of dias()" value=\'{{ dia }}\'>{{ dia }}</option>\n              </select>\n            </div>\n\n            <div class="col-xs-4">\n              <select class="form-control" name="mes" [(ngModel)]="data.mes">\n                <option value=\'\' selected>Mês</option>\n                <option *ngFor="let mes of meses(); let i = index" value="{{ i }}">{{ mes }}</option>\n              </select>\n            </div>\n\n            <div class="col-xs-4">\n              <select class="form-control" name="ano" [(ngModel)]="data.ano">\n                <option value=\'\' selected>Ano</option>\n                <option *ngFor="let ano of anos()" value=\'{{ ano }}\'>{{ ano }}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="form-group col-xs-6">\n            <label for="">Celular*</label>\n            <input type="text"\n                   class="form-control"\n                   id="celular"\n                   placeholder="( ) 90000-0000"\n                   [(ngModel)]="usuario.celular"\n                   name="celular"\n                   required\n                   #celular="ngModel"\n                   [textMask]="{mask: mascara.celular}">\n            <div class="text-danger" *ngIf="celular.invalid && (celular.dirty || celular.touched)">\n              <span *ngIf="celular.errors.required">O celular é obrigatório</span>\n            </div>\n          </div>\n\n          <div class="form-group col-xs-6">\n            <label for="">Telefone</label>\n            <input type="text"\n                   class="form-control"\n                   id="telefone"\n                   placeholder="( ) 9000-0000"\n                   [(ngModel)]="usuario.telefone"\n                   name="telefone"\n                   #telefone="ngModel"\n                   [textMask]="{mask: mascara.telefone}">\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="form-group col-xs-12">\n            <label for="">E-mail*</label>\n            <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" name="email" [(ngModel)]="usuario.email" required #email="ngModel">\n            <div class="text-danger" *ngIf="email.invalid && (email.dirty || email.touched)">\n              <span *ngIf="email.errors.required">O email é obrigatório</span>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="form-group col-xs-6">\n            <label for="">Senha*</label>\n            <input type="password"\n                   class="form-control"\n                   id="senha"\n                   placeholder="Informe a senha"\n                   name="senha"\n                   [(ngModel)]="usuario.plainPassword"\n                   #senha="ngModel"\n                   required\n                   minlength="6"\n            >\n            <div class="text-danger" *ngIf="senha.invalid && (senha.dirty || senha.touched)">\n              <span *ngIf="senha.errors.required">A senha é obrigatória</span>\n              <span *ngIf="senha.errors.minlength">A senha deve ter no mínimo 6 caracteres</span>\n            </div>\n          </div>\n          <div class="form-group col-xs-6">\n            <label for="">Confirmar senha*</label>\n            <input type="password" class="form-control" id="confirmarSenha" placeholder="Confirme a senha" #confirmarSenha (keyup)="0" required>\n            <div class="text-danger" *ngIf="confirmarSenha.value != usuario.plainPassword">\n              <span>A senha deve ser igual</span>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col-xs-12 text-right">\n            <div class="container-btn--confirm">\n              <button class="btn btn-blue--confirm" type="submit">Continuar</button>\n            </div>\n          </div>\n        </div>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/usuario-cadastro/usuario-cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__app_usuario_shared_usuario_service__["a" /* UsuarioService */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], UsuarioCadastroPage);

//# sourceMappingURL=usuario-cadastro.js.map

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BemVindoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cidade_cidade__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_estabelecimento_estabelecimento__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_template_util__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_mascara_util__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the BemVindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BemVindoPage = (function () {
    function BemVindoPage(navCtrl, navParams, estabelecimento, configuracao, cidadeProvider, localStorageService, templateUtil, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estabelecimento = estabelecimento;
        this.configuracao = configuracao;
        this.cidadeProvider = cidadeProvider;
        this.localStorageService = localStorageService;
        this.templateUtil = templateUtil;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.mascara = __WEBPACK_IMPORTED_MODULE_8__providers_util_mascara_util__["a" /* mascara */];
        this.cidades = [];
        this.selectOptions = {
            title: 'Cidades',
            mode: 'md'
        };
    }
    BemVindoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BemVindoPage');
        this.cidadeProvider.getCidades().subscribe(function (data) {
            console.info("cidades ok!");
            _this.cidades = data;
        }, function (error) {
            console.error(error);
        });
        this.cidadeEscolhida = 'Digite sua cidade';
        this.templateUtil.header = false;
        this.templateUtil.footer = false;
    };
    BemVindoPage.prototype.ionViewDidLeave = function () {
        this.templateUtil.header = true;
        this.templateUtil.footer = true;
    };
    BemVindoPage.prototype.pesquisarCidade = function (cidade) {
        var local = 'cidade=' + this.cidadeEscolhida.pag_cid_id;
        var tipolocal = 'em ' + this.cidadeEscolhida.pag_cid_nome;
        this.pesquisar(tipolocal, local);
    };
    BemVindoPage.prototype.pesquisarCep = function (cep) {
        if (cep == null || cep == '') {
            var toast = this.toastCtrl.create({
                message: 'Informe o CEP',
                duration: 5000
            });
            toast.present();
        }
        else {
            var local = 'cep=' + cep;
            var tipolocal = 'próximos de você';
            this.pesquisar(tipolocal, local);
        }
    };
    BemVindoPage.prototype.pesquisar = function (tipolocal, local) {
        var _this = this;
        console.info('pesquisar', tipolocal, local);
        var loader = this.loadingCtrl.create({
            content: 'Buscando estabelecimentos ' + tipolocal
        });
        loader.present();
        this.estabelecimento.bemvindo(this.configuracao, local).subscribe(function (data) {
            _this.configuracao.estabelecimentosComparacao = data['estabelecimentos']['comparacao'];
            _this.configuracao.estabelecimentosMarketplace = data['estabelecimentos']['marketplace'];
            _this.configuracao.modo = _this.configuracao.estabelecimentosMarketplace.length ? 'marketplace' : 'comparacao';
            _this.configuracao.local = data['local'];
            _this.configuracao.propagarAlteracao();
            _this.localStorageService.atualizar(_this.configuracao);
            loader.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        }, function (error) {
            console.error(error);
            _this.configuracao.modo = 'marketplace';
            _this.estabelecimento.bemvindo(_this.configuracao, local).subscribe(function (data) {
                _this.configuracao = data['estabelecimentos'];
                _this.configuracao.local = data['local'];
                //this.configuracao.propagarAlteracao();
                _this.localStorageService.atualizar(_this.configuracao);
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }, function (error) {
                console.error(error);
                loader.dismiss();
                _this.configuracao.modo = 'comparacao';
                var toast = _this.toastCtrl.create({
                    message: 'Não foi possível encontrar estabelecimentos.Tente uma cidade próxima',
                    duration: 5000
                });
                toast.present();
            });
        });
    };
    return BemVindoPage;
}());
BemVindoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'page-bem-vindo',template:/*ion-inline-start:"/var/www/html/app/src/pages/bem-vindo/bem-vindo.html"*/'<ion-content id="input-cep">\n    <ion-row class="modal-header">\n        <ion-col col-12 text-center>\n            <h4>Olá, Bem vindo ao <br/>\n                <strong>Zukkin,</strong><br/>\n                seu comparador de preços online.</h4>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-12 text-center>\n            <h4>Para continuar,<br/> poderia nos informar o seu cep?</h4>\n            <form role="form" class="form-inline formulari">\n                <ion-row>\n                    <ion-col col-8>\n                        <input type="text"\n                               class="form-control"\n                               placeholder="Digite seu cep"\n                               #cep\n                               [textMask]="{mask: mascara.cep}">\n                        <!--<span class="pull-right"><a href="">Não sei meu CEP</a></span>-->\n                    </ion-col>\n                    <ion-col col-4>\n                        <button class="btn btn-red--light btn-block" (click)="pesquisarCep(cep.value)">Continuar</button>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col col-12 text-center>\n                        ou selecione uma das cidades\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-select placeholder="Escolha sua cidade"\n                                    #cidade name="cidade"\n                                    interface="popover"\n                                    [(ngModel)]="cidadeEscolhida"\n                                    [selectOptions]="selectOptions"\n                                    (ionChange)="pesquisarCidade(cidade.value)"\n                                    cancelText="Cancelar"\n                                    class="form-control"\n                        >\n                            <ion-option *ngFor="let cidade of cidades" [value]="cidade">\n                                {{cidade.pag_cid_nome}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n            </form>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/bem-vindo/bem-vindo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_estabelecimento_estabelecimento__["a" /* EstabelecimentoProvider */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_cidade_cidade__["a" /* CidadeProvider */],
        __WEBPACK_IMPORTED_MODULE_0__app_core_local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_util_template_util__["a" /* TemplateUtil */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */]])
], BemVindoPage);

//# sourceMappingURL=bem-vindo.js.map

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CidadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CidadeProvider = (function () {
    function CidadeProvider(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + "/local/cidades";
    }
    CidadeProvider.prototype.getCidades = function () {
        //console.info(this.apiUrl + '/events');
        return this.http.get(this.apiUrl + '');
    };
    return CidadeProvider;
}());
CidadeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */]])
], CidadeProvider);

//# sourceMappingURL=cidade.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataUtil; });
var DataUtil = (function () {
    function DataUtil() {
    }
    DataUtil.prototype.toJSON = function () {
        return this.toDate().toJSON();
    };
    DataUtil.prototype.maiorDeIdade = function () {
        var anoLimite = new Date().getFullYear() - 18;
        return parseInt(this.ano) <= anoLimite;
    };
    DataUtil.prototype.toDate = function () {
        return new Date(this.ano, this.mes, this.dia);
    };
    DataUtil.prototype.getDataDeNascimento = function (dataObj) {
        if (dataObj === void 0) { dataObj = null; }
        var data = dataObj ? dataObj : this.toJSON();
        if (data != null) {
            return data.split(/(T)/).shift();
        }
        return null;
    };
    return DataUtil;
}());

//# sourceMappingURL=data.util.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mascara; });
var mascara = {
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    telefone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    celular: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cep: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
};
//# sourceMappingURL=mascara.util.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusEnderecosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_endereco_endereco_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_cadastro_endereco_usuario_cadastro_endereco__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__estabelecimento_selecionar_estabelecimento_selecionar__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MeusEnderecosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusEnderecosPage = (function () {
    function MeusEnderecosPage(navCtrl, navParams, enderecoService, loadingCtrl, toastCtrl, configuracao, alertCtrl, localStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.enderecoService = enderecoService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.configuracao = configuracao;
        this.alertCtrl = alertCtrl;
        this.localStorage = localStorage;
        this.enderecos = [];
        this.alerta = false;
    }
    MeusEnderecosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.buildLoading('Carregando endereços...');
        this.alerta = this.navParams.get('alerta');
        loader.present();
        this.enderecoService.listarTodos().subscribe(function (response) {
            console.log(response);
            /* percorre o retorno do servidor e separa os endereços */
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var endereco = response_1[_i];
                if (endereco.pag_usu_end_id != _this.configuracao.local.id) {
                    _this.enderecos.push(endereco);
                }
                else {
                    _this.enderecoAtivo = endereco;
                }
            }
        }, function (error) {
            console.error(error);
            _this.presentToast('Não foi possível carregar os endereços');
        }, function () { return loader.dismiss(); });
    };
    MeusEnderecosPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    MeusEnderecosPage.prototype.buildLoading = function (message) {
        return this.loadingCtrl.create({
            content: message
        });
    };
    MeusEnderecosPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    MeusEnderecosPage.prototype.novo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuario_cadastro_endereco_usuario_cadastro_endereco__["a" /* UsuarioCadastroEnderecoPage */], { 'campoNome': true });
    };
    MeusEnderecosPage.prototype.estabelecimentosSelecionar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__estabelecimento_selecionar_estabelecimento_selecionar__["a" /* EstabelecimentoSelecionarPage */], { 'campoNome': true });
    };
    MeusEnderecosPage.prototype.ativar = function (endereco) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alterar endereço?',
            message: "Deseja alterar seu endere\u00E7o ativo para: \"" + endereco.label + "\"",
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        var loader = _this.buildLoading('Alterando o endereço...');
                        loader.present();
                        _this.enderecoService.ativar(endereco.pag_usu_end_id).subscribe(function (response) {
                            _this.configuracao.estabelecimentos = response.estabelecimentos;
                            _this.configuracao.local = {
                                id: response.id,
                                nome: response.nome,
                                cidade_id: response.cidade_id,
                                cidade_nome: response.cidade_nome,
                                estado_uf: response.estado_uf,
                                cep: response.cep
                            };
                            _this.localStorage.atualizar(_this.configuracao);
                            _this.configuracao.propagarAlteracao();
                            _this.presentToast('Endereço alterado com sucesso');
                            _this.navCtrl.popToRoot();
                        }, function (error) {
                            console.error(error);
                            _this.presentToast('Não foi possível excluir o endereço');
                        }, function () { return loader.dismiss(); });
                    }
                }
            ]
        });
        alert.present();
    };
    MeusEnderecosPage.prototype.excluir = function (endereco) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir endereço?',
            message: "Deseja excluir o endere\u00E7o: \"" + endereco.label + "\"",
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        var loader = _this.buildLoading('Excluindo o endereço...');
                        loader.present();
                        _this.enderecoService.excluir(endereco.pag_usu_end_id).subscribe(function () {
                            /* remove o endereço excluido da lista */
                            _this.enderecos = _this.enderecos.filter(function (item) { return item.pag_usu_end_id != endereco.pag_usu_end_id; });
                            _this.presentToast('Endereço removido com sucesso');
                        }, function (error) {
                            console.error(error);
                            _this.presentToast('Não foi possível excluir o endereço');
                        }, function () { return loader.dismiss(); });
                    }
                }
            ]
        });
        alert.present();
    };
    return MeusEnderecosPage;
}());
MeusEnderecosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-meus-enderecos',template:/*ion-inline-start:"/var/www/html/app/src/pages/meus-enderecos/meus-enderecos.html"*/'<!--\n  Generated template for the UsuarioCadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n<!--<ion-navbar>-->\n<!--<ion-title>Cadastre-se no ZUKKIN</ion-title>-->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content class="main">\n    <div class="modal-header">\n        <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="voltar()">×</a>\n        <h4 class="modal-title" id="">Meus endereços</h4>\n    </div>\n\n    <div class="row" *ngIf="this.alerta">\n        <div class="col-xs-12 alert bg-red-light">\n            Não encontramos nenhum preço para o endereço ativo.\n            Por favor, troque o seu endereço ou refaça a seleção de estabelecimentos\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-xs-6">\n            <button class="btn gray-button" (click)="novo()">Novo endereço</button>\n        </div>\n        <div class="col-xs-6" *ngIf="this.alerta">\n            <button class="btn gray-button" (click)="estabelecimentosSelecionar()">Selecionar Lojas</button>\n        </div>\n    </div>\n\n    <!--endereco ativo-->\n    <div class="endereco-wrapper bg-gray endereco-ativo" *ngIf="enderecoAtivo">\n        <div class="endereco-info">\n            <div class="row">\n                <div class="col-xs-8"><h5>{{ enderecoAtivo.pag_usu_end_nome }}</h5></div>\n                <div class="col-xs-4"><span class="flag-ativo">Ativo</span></div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">{{ enderecoAtivo.label }}</div>\n            </div>\n        </div>\n    </div>\n    <!--/endereço ativo-->\n\n    <!--outros endereços cadastrados-->\n    <div class="row endereco-wrapper" *ngFor="let endereco of enderecos, let i = index">\n        <div class="col-xs-12 endereco-info">\n            <h5>{{ endereco.pag_usu_end_nome }}</h5>\n            {{ endereco.label }}\n        </div>\n        <div class="col-xs-12 endereco-action">\n            <a href="#" class="btn btn-primary" (click)="ativar(endereco)">Ativar</a>\n            <a href="#" class="btn btn-danger" (click)="excluir(endereco)">Excluir</a>\n        </div>\n    </div>\n    <!--/outros endereços cadastrados-->\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/meus-enderecos/meus-enderecos.html"*/,
        styles: ['./meus-enderecos.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_endereco_endereco_service__["a" /* EnderecoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__["a" /* LocalStorageService */]])
], MeusEnderecosPage);

//# sourceMappingURL=meus-enderecos.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstabelecimentoSelecionarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_estabelecimento_usuario_estabelecimento__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EstabelecimentoSelecionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstabelecimentoSelecionarPage = (function () {
    function EstabelecimentoSelecionarPage(navCtrl, navParams, configuracao, usuarioEstabelecimento, localStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.usuarioEstabelecimento = usuarioEstabelecimento;
        this.localStorage = localStorage;
        this.filtro = {
            raio: 0,
            busca: ""
        };
        this.estabelecimentos = null;
        this.filtro.raio = 5;
    }
    EstabelecimentoSelecionarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstabelecimentoSelecionarPage');
        var that = this;
        this.usuarioEstabelecimento.get().subscribe(function (response) {
            console.info(response);
            that.estabelecimentos = response;
        });
    };
    EstabelecimentoSelecionarPage.prototype.toogleSelecionado = function (estabelecimento) {
        var _this = this;
        var that = this;
        this.usuarioEstabelecimento.toogleSelecionado(estabelecimento.pag_est_id).subscribe(function (response) {
            if (estabelecimento.pag_usu_end_est_selecionado == 1) {
                estabelecimento.pag_usu_end_est_selecionado = 0;
            }
            else {
                estabelecimento.pag_usu_end_est_selecionado = 1;
            }
            var e = [];
            for (var _i = 0, _a = that.estabelecimentos; _i < _a.length; _i++) {
                var est = _a[_i];
                if (est.pag_usu_end_est_selecionado) {
                    e.push(est.pag_est_id);
                }
            }
            if (_this.configuracao.modo === 'marketplace') {
                that.configuracao.estabelecimentosMarketplace = e;
            }
            else {
                that.configuracao.estabelecimentosComparacao = e;
            }
            console.log(e);
        });
    };
    EstabelecimentoSelecionarPage.prototype.fechar = function () {
        this.localStorage.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();
        this.navCtrl.pop();
        return false;
    };
    return EstabelecimentoSelecionarPage;
}());
EstabelecimentoSelecionarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-estabelecimento-selecionar',template:/*ion-inline-start:"/var/www/html/app/src/pages/estabelecimento-selecionar/estabelecimento-selecionar.html"*/'<!--\n  Generated template for the EstabelecimentoSelecionarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n<div id="filtrar-estabelecimentos">\n    <div class="modal-content">\n      <div class="modal-header">\n        <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="fechar()">&times;</a>\n        <h4 class="modal-title" id="">Filtrar por estabelecimentos:</h4>\n\n        <div class="row">\n          <div class="select-range">\n            <div class="col-xs-5">\n              <span class="select-range--text">Selecione o raio de distância:</span>\n            </div>\n            <div class="col-xs-7">\n              <div id="slidecontainer-range">\n                <p class="pull-right"><span id="demo">{{filtro.raio}}</span> Km</p>\n                <input type="range" min="1" max="100" value="50" class="slider-range" id="myRange" [(ngModel)]="filtro.raio" name="raio">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <form role="form" class="form-inline formulario">\n          <div class="row">\n            <div class="form-group col-xs-12">\n              <input type="text" class="form-control" id="nome" placeholder="Buscar" [(ngModel)]="filtro.busca" name="busca">\n              <!--<ion-icon name="search"></ion-icon>-->\n            </div>\n          </div>\n        </form>\n\n      </div>\n      <div class="modal-body">\n        <div class="stores-content">\n          <div class="content-vertical">\n\n            <div class="stores-content--item" *ngFor="let estabelecimento of estabelecimentos | filter : filtro.raio : filtro.busca">\n              <div class="stores-content--img">\n                <img src="https://s3-us-west-2.amazonaws.com/pagpouco-atual/{{estabelecimento.pag_est_logo}}" alt="" class="img-responsive">\n              </div>\n              <div class="stores-content--text">\n                <h1>{{estabelecimento.pag_est_marca}} - {{ estabelecimento.pag_est_local_b2c }}</h1>\n                <p>\n                  {{estabelecimento.pag_est_end_logradouro}}<br/>\n                    Distância: {{estabelecimento.distancia | number:\'1.2-2\'}} Km\n                </p>\n              </div>\n              <div class="stores-content--chose">\n                <a [ngClass]="{\'sprites-check-in\': estabelecimento.pag_usu_end_est_selecionado, \'sprites-check\': !estabelecimento.pag_usu_end_est_selecionado}"\n                   (click)="toogleSelecionado(estabelecimento)">chose\n                  </a>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n  </ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/estabelecimento-selecionar/estabelecimento-selecionar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_2__providers_usuario_estabelecimento_usuario_estabelecimento__["a" /* UsuarioEstabelecimentoProvider */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__["a" /* LocalStorageService */]])
], EstabelecimentoSelecionarPage);

//# sourceMappingURL=estabelecimento-selecionar.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Categoria */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_estabelecimento_estabelecimento__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_resumo_resumo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_lista_lista_util__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizar_compra_finalizar_compra__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Categoria = (function () {
    function Categoria(icone, slug, quantidade, titulo) {
        this.icone = icone;
        this.slug = slug;
        this.quantidade = quantidade;
        this.titulo = titulo;
    }
    return Categoria;
}());

var CarrinhoPage = (function () {
    function CarrinhoPage(navCtrl, navParams, configuracao, estabelecimentoProvider, loadingCtrl, resumoProvider, listaUtil) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.estabelecimentoProvider = estabelecimentoProvider;
        this.loadingCtrl = loadingCtrl;
        this.resumoProvider = resumoProvider;
        this.listaUtil = listaUtil;
        this.lista = null;
        this.estabelecimentos = null;
        this.exibirLoading = false;
        this.filtro_categorias = [
            new Categoria('sprites-all-dp-cart', null, 0, 'Todos os produtos'),
            new Categoria('sprites-frios-cart', 'frios-e-laticinios', 0, 'Frios'),
            new Categoria('sprites-bebida-cart', 'bebidas', 0, 'Bebidas'),
            new Categoria('sprites-clean-cart', 'limpeza', 0, 'Limpeza'),
            new Categoria('sprites-horti', 'hortifruti', 0, 'Hortifruti'),
            new Categoria('sprites-matin', 'matinais-e-sobremesas', 0, 'Matinais e Sobremesas'),
        ];
        this.selectOptions = {
            title: 'Estabelecimentos',
            mode: 'md'
        };
        this.configuracao.alteracaoNaLista.subscribe(function (configuracao) {
            _this.lista = _this.configuracao.lista;
            _this.carregaDados();
        });
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () { };
    CarrinhoPage.prototype.fechar = function () {
        this.navCtrl.pop();
    };
    CarrinhoPage.prototype.mudaEstabelecimento = function () {
        console.info(this.estabelecimento666);
    };
    CarrinhoPage.prototype.populaCategorias = function (items) {
        for (var j = 0; j < this.filtro_categorias.length; j++) {
            this.filtro_categorias[j].quantidade = 0;
        }
        for (var i = 0; i < items.length; i++) {
            var slug = items[i].produto.pag_pro_categoria_slug;
            console.info(slug);
            this.filtro_categorias[0].quantidade++; //todas
            for (var j = 0; j < this.filtro_categorias.length; j++) {
                if (this.filtro_categorias[j].slug == slug) {
                    this.filtro_categorias[j].quantidade++;
                    break;
                }
            }
        }
    };
    CarrinhoPage.prototype.exibeProduto = function (produto) {
        if (this.categoria_filtrada == null || this.categoria_filtrada.slug == null) {
            return true;
        }
        return (produto.pag_pro_categoria_slug == this.categoria_filtrada.slug);
    };
    CarrinhoPage.prototype.filtro = function (categoria) {
        this.categoria_filtrada = categoria;
    };
    CarrinhoPage.prototype.remover = function (produto) {
        var toastMsg = 'Produto removido com sucesso';
        this.listaUtil.adicionarProduto(produto.pag_pro_id, 0, toastMsg);
        this.configuracao.propagarAlteracaoNaLista();
    };
    CarrinhoPage.prototype.carregaDados = function () {
        var _this = this;
        this.exibirLoading = true;
        var estabs = this.configuracao.estabelecimentos;
        this.categoria_filtrada = this.filtro_categorias[0];
        this.estabelecimentoProvider.lista({
            modo: this.configuracao.modo,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase,
            estabelecimentos: estabs,
            lista: this.configuracao.lista.id
        }).subscribe(function (r) {
            _this.estabelecimentos = r;
            _this.estabelecimento666 = r[0];
            _this.lista = _this.configuracao.lista;
            _this.populaCategorias(_this.estabelecimento666.lista);
            _this.exibirLoading = false;
        }, function (e) {
            console.error(e);
        });
    };
    CarrinhoPage.prototype.paginaFinalizarCompra = function (ev) {
        ev.preventDefault();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__finalizar_compra_finalizar_compra__["a" /* FinalizarCompraPage */]);
    };
    return CarrinhoPage;
}());
CarrinhoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carrinho',template:/*ion-inline-start:"/var/www/html/app/src/pages/carrinho/carrinho.html"*/'<ion-content id="carrinho">\n    <!--carrinho-->\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <!--footer fixe adaptado cart-->\n\n                <div class="footer-fixe row">\n                    <div class="you-are bg-white" style="width: 100%;">\n                        <div class="col-xs-5 you-are--text">\n                            <p>Meu carrinho</p>\n                        </div>\n                        <div class="col-xs-5" *ngIf="estabelecimento666">\n                            <div class="content-left">\n                                <img src="{{ estabelecimento666.estabelecimento.pag_est_logo }}"\n                                     alt="{{ estabelecimento666.estabelecimento.pag_est_marca }}" class="store">\n                            </div>\n                        </div>\n\n                        <div class="col-xs-2">\n                            <a href="#" (click)="fechar()" class="close closeModal" data-dismiss="modal"\n                               aria-hidden="true">&times;</a>\n                        </div>\n                    </div>\n                </div>\n                <!--/footer adaptado cart-->\n                <!--itens compra-->\n                <div class="itens-compra--content" style="margin-top: 31px; margin-bottom: -89px;">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div class="mCustomScrollbar">\n                                <ul class="content">\n                                    <ng-container *ngFor="let cat of filtro_categorias">\n                                        <li *ngIf="cat.quantidade" (click)="filtro(cat)">\n                                            <span class="{{cat.icone}}"></span>\n                                            <div *ngIf="cat.quantidade" class="carret-red">\n                                                <span>{{cat.quantidade}}</span>\n                                            </div>\n                                        </li>\n                                    </ng-container>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class="modal-body">\n                <div class="all-product" *ngIf="categoria_filtrada">\n                    <h1>{{categoria_filtrada.titulo}}</h1>\n                </div>\n\n                <div class="product-list-cart">\n                    <div class="content-vertical" *ngIf="estabelecimento666">\n                        <div class="content-vertical--wrap" *ngFor="let lista of estabelecimento666.lista">\n                            <ng-container *ngIf="exibeProduto(lista.produto)">\n                                <div class="product-list-item">\n                                    <img src="{{lista.produto.pag_pro_imagem}}" alt="{{lista.produto.pag_pro_nome}}"\n                                         class="img-responsive">\n                                </div>\n                                <div class="product-list-name">\n                                    <p>{{lista.produto.pag_pro_nome}}</p>\n                                </div>\n                                <div class="product-list-select">\n                                    <app-produto-select-quantidade [navCtrl]="navCtrl" [produto]="lista.produto"></app-produto-select-quantidade>\n                                </div>\n\n                                <div class="product-list-prices">\n                                    <div class="prices">\n                                        <div>\n                                            <span *ngIf="lista.preco_promocao">Un.: R$ {{lista.preco_promocao|number:\'1.2-2\'}}</span>\n                                            <span *ngIf="lista.preco_normal">Un.: R$ {{lista.preco_normal|number:\'1.2-2\'}}</span>\n                                        </div>\n                                        <div class="price" *ngIf="!exibirLoading">R$ {{lista.sub_total|\n                                            number:\'1.2-2\'}}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="product-list-close">\n                                    <a class="close" (click)="remover(lista.produto)">&times;</a>\n                                </div>\n                            </ng-container>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n    <!--/carrinho-->\n\n</ion-content>\n<ion-footer class="modal-footer">\n    <!--loading-->\n    <div class="row">\n        <div class="col-xs-12">\n            <div *ngIf="exibirLoading" class="text-center">\n                <ion-spinner></ion-spinner>\n                Calculando o total...\n            </div>\n        </div>\n    </div>\n    <!--/loading-->\n    <div class="row" *ngIf="estabelecimento666 && !exibirLoading">\n        <div class="col-xs-5">\n            <p class="total-itens" *ngIf="lista">\n                <strong>\n                    <span class="valor-maior">{{estabelecimento666.lista.length}}</span>/{{lista.produtos.length}}\n                </strong> itens\n            </p>\n            <p class="total">R$ {{estabelecimento666.sub_total | number:\'1.2-2\'}}</p>\n        </div>\n        <div class="col-xs-7">\n            <a href="#" class="btn green-button add-inactive" (click)="paginaFinalizarCompra($event)">Finalizar</a>\n        </div>\n    </div>\n\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/carrinho/carrinho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_estabelecimento_estabelecimento__["a" /* EstabelecimentoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_resumo_resumo__["a" /* ResumoProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_lista_lista_util__["a" /* ListaUtil */]])
], CarrinhoPage);

//# sourceMappingURL=carrinho.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ListaProvider = (function () {
    function ListaProvider(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + '/usuario-lista';
    }
    ListaProvider.prototype.lista = function () {
        return this.http.get(this.apiUrl);
    };
    ListaProvider.prototype.salvar = function (id, lista) {
        return this.http.post(this.apiUrl + "/" + id, lista);
    };
    ListaProvider.prototype.salvarNovo = function (lista) {
        return this.http.post(this.apiUrl + "/", lista);
    };
    ListaProvider.prototype.salvarAlteracao = function (lista) {
        return this.http.put(this.apiUrl + "/", lista);
    };
    ListaProvider.prototype.excluir = function (lista) {
        return this.http.delete(this.apiUrl + "/" + lista.pagLisId);
    };
    ListaProvider.prototype.adicionarProduto = function (listaId, produtoId, quantidade) {
        var url = this.apiUrl + '/' + 'produto';
        var params = {
            id: listaId,
            id_produto: produtoId,
            quantidade: quantidade
        };
        return this.http.post(url, params);
    };
    return ListaProvider;
}());
ListaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_configuration_service__["a" /* ConfigurationService */]])
], ListaProvider);

//# sourceMappingURL=lista.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_http_util__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidoProvider = (function () {
    function PedidoProvider(httpClient, configurationService, httpUtil) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.httpUtil = httpUtil;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + '/pedido';
    }
    PedidoProvider.prototype.cadastrar = function (pedido) {
        return this.httpClient.post(this.apiUrl, pedido);
    };
    PedidoProvider.prototype.listarTodos = function (params) {
        var url = this.apiUrl + '?' + this.httpUtil.objectToQueryString(params);
        return this.httpClient.get(url);
    };
    return PedidoProvider;
}());
PedidoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_3__util_http_util__["a" /* HttpUtil */]])
], PedidoProvider);

//# sourceMappingURL=pedido.provider.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pedido_pedido_provider__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Paginacao = (function () {
    function Paginacao() {
    }
    return Paginacao;
}());
var PedidosPage = (function () {
    function PedidosPage(navCtrl, navParams, configuracao, pedidoProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.pedidoProvider = pedidoProvider;
        this.loadingCtrl = loadingCtrl;
        this.filtro = {
            status: null,
            pagina: 1
        };
        this.paginacao = new Paginacao();
        this.paginacao.pagesInRange = [];
    }
    PedidosPage.prototype.ionViewDidLoad = function () {
        var params = {};
        this.carregarPedidos(params);
    };
    PedidosPage.prototype.carregarPedidos = function (params) {
        var _this = this;
        this.pedidos = null;
        var loader = this.loadingCtrl.create({
            content: 'Carregando pedidos...'
        });
        loader.present();
        this.pedidoProvider.listarTodos(params).subscribe(function (response) {
            _this.pedidos = response.data.map(function (pedido) {
                pedido.varDetalhe = false;
                pedido.verProdutos = false;
                return pedido;
            });
            console.info('debug dos pedidos');
            console.log(_this.pedidos);
            _this.paginacao = response.meta;
            if (_this.paginacao.current == 0) {
                _this.pedidos = [];
                _this.paginacao = new Paginacao();
            }
            _this.paginacao.previous = _this.paginacao.current - 1;
            if (_this.paginacao.previous < 1) {
                _this.paginacao.previous = 1;
            }
            loader.dismiss();
        }, function (error) {
            console.error(error);
            loader.dismiss();
        });
    };
    PedidosPage.prototype.pagina = function (pagina) {
        var params = {
            pagina: pagina
        };
        if (this.filtro.status) {
            params['status'] = this.filtro.status;
        }
        this.carregarPedidos(params);
    };
    PedidosPage.prototype.corDoStatus = function (pedido) {
        if (pedido.status.nome_normalizado.toLowerCase() === 'pago') {
            return 'btn green-button add-inactive';
        }
        else if (pedido.status.nome_normalizado.toLowerCase() === 'cancelado') {
            return 'btn btn-red--light';
        }
        else {
            return 'btn btn-yellow';
        }
    };
    PedidosPage.prototype.executarFiltro = function (status) {
        this.filtro.status = status;
        console.info('executar filtro');
        console.log(this.filtro.status);
        var params = {};
        if (this.filtro.status) {
            params['status'] = this.filtro.status;
        }
        this.carregarPedidos(params);
    };
    return PedidosPage;
}());
PedidosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pedidos',template:/*ion-inline-start:"/var/www/html/app/src/pages/pedidos/pedidos.html"*/'<ion-content>\n    <header>\n        <app-header-marketplace *ngIf="configuracao.modo == \'marketplace\'" [navCtrl]="navCtrl"></app-header-marketplace>\n        <app-header-comparacao *ngIf="configuracao.modo != \'marketplace\'" [navCtrl]="navCtrl"></app-header-comparacao>\n    </header>\n\n    <!--main-->\n    <main class="bg-gray pedidos">\n\n        <!--breadcrumbie-->\n        <section class="breadcrumbie-content">\n            <div class="">\n                <ul>\n                    <li><a href="">Zukkin</a> |</li>\n                    <li><a href="" class="active">Meus pedidos</a></li>\n                </ul>\n            </div>\n        </section>\n        <!--/breadcrumbie-->\n\n        <div class="bg-white">\n\n            <div class="header">\n                <div class="row">\n                    <div class="col-xs-12">\n                        <h1>Meus pedidos</h1>\n                    </div>\n                </div>\n\n                <div class="row">\n                    <div class="col-xs-4">\n                        <p>Filtrar por:</p>\n                    </div>\n\n                    <div class="col-xs-8">\n                        <select name="filtro_status" id="" (change)="executarFiltro(status.value)" #status>\n                            <option value="">Selecione</option>\n                            <option>Aguardando Aprovação</option>\n                            <option>Aguardando Pagamento</option>\n                            <option>Cancelado</option>\n                            <option>Separando Produtos</option>\n                            <option>Finalizado</option>\n                            <option>Em Transporte</option>\n                            <option>Entrega pronta para ser retirada na loja</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div id="accordionpedidos" *ngIf="pedidos">\n                <div class="row col-xs-12 pedidos-item" *ngIf="pedidos.length == 0">\n                    <p>Nenhum pedido encontrado</p>\n                </div>\n\n                <div *ngFor="let pedido of pedidos">\n                    <div class="row">\n                        <div class="col-xs-12 pedidos-item">\n                            <p>Pedido dia <strong>{{pedido.data_de_criacao | date: \'d\'}} de {{pedido.data_de_criacao | date: \'MMMM\'}} de {{pedido.data_de_criacao | date: \'yyyy\'}}</strong></p>\n                            <strong>Número do pedido: #{{pedido.id}}</strong>\n                            <div class="status">\n                                <div class="status-item">\n                                    Status:\n                                </div>\n                                <div class="status-content">\n                                    <button [class]="corDoStatus(pedido)">{{pedido.status.nome_normalizado}}</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="">\n                        <div class="panel-heading" (click)="pedido.verDetalhe = !pedido.verDetalhe">\n                            <h4 class="panel-title">\n                                <a data-toggle="collapse" data-parent="#accordionsp" href="#" class="btn-detail {{pedido.verDetalhe ? \'arrow-up\' : \'arrow-down\'}}" >\n                                    Abrir detalhes\n                                </a>\n                            </h4>\n                        </div>\n                        <div id="collapsespOne" class="panel-collapse" *ngIf="pedido.verDetalhe">\n                            <div class="panel-body">\n                                <div class="info-pedido">\n                                    <div>\n                                        <!--<span class="sprites-logo-card"></span>-->\n                                        <span class="valor">R$ {{ pedido.valor_total | number:\'1.2-2\'}}</span>\n                                    </div>\n\n                                    <div class="frete">Frete: R$ {{ pedido.frete | number:\'1.2-2\'}}</div>\n                                    <div class="pagamento">Pagamento: <strong>Cartão de crédito</strong></div>\n                                    <div class="pagamento">Forma de entrega: <strong>{{pedido.entrega_tipo.nome}}</strong></div>\n                                </div>\n\n                                <!--<div class="payment-list">-->\n                                    <!--<ul>-->\n                                        <!--<li><a href=""><span class="sprites-boleto-logo"></span> <span class="text">Imprimir boleto</span></a></li>-->\n                                        <!--<li><a href=""><span class="sprites-recharge"></span> <span class="text">Pedir novamente</span></a></li>-->\n                                        <!--<li><a href=""><span class="sprites-x"></span> <span class="text">Cancelar pedido</span></a></li>-->\n                                    <!--</ul>-->\n                                <!--</div>-->\n\n                                <button class="btn btn-red--comparar detail-more" id="" (click)="pedido.verProdutos = !pedido.verProdutos">\n                                    {{ pedido.verProdutos ? \'Fechar detalhes\' : \'Ver mais detalhes\' }}\n                                </button>\n                                <div class="iten-detail--content" *ngIf="pedido.verProdutos">\n                                    <h1>Itens do pedido:</h1>\n\n                                    <div class="product-list-cart mCustomScrollbar">\n                                        <div class="content-vertical">\n                                            <div class="content-vertical--wrap" *ngFor="let produto of pedido.produtos">\n                                                <div class="product-list-item">\n                                                    <img src="{{produto.produto.pag_pro_imagem_absolute_url}}" alt="" class="img-responsive">\n                                                </div>\n                                                <div class="product-list-name">\n                                                    <p>{{produto.produto.pag_pro_nome}}</p>\n                                                </div>\n                                                <div class="product-list-select">\n                                                    <span><strong>{{ produto.quantidade }}</strong> Unid</span>\n                                                </div>\n                                                <div class="product-list-prices">\n                                                    <div class="prices">\n                                                        <div class="preco-unitario">\n                                                            R$ {{ produto.valor_unitario | number:\'1.2-2\'}}\n                                                        </div>\n                                                        <div class="price">\n                                                            R$ {{ produto.valor_unitario * produto.quantidade | number:\'1.2-2\'}}\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="line-gray"></div>\n                </div>\n            </div>\n\n            <!--pagination-->\n            <div class="row" *ngIf="pedidos && pedidos.length > 0">\n                <div class="col-xs-12">\n                    <nav aria-label="Page navigation" class="nav-page">\n                        <ul class="pagination">\n                            <li>\n                                <a href="#" aria-label="Previous" *ngIf="paginacao.current > 1"\n                                   (click)="pagina(paginacao.previous)">\n                                    <span aria-hidden="true">&laquo;</span>\n                                </a>\n                            </li>\n                            <li *ngFor="let p of paginacao.pagesInRange">\n                                <a href="#" [ngClass]="{\'active\': p == paginacao.current}" (click)="pagina(p)">{{p}}</a>\n                            </li>\n                            <li>\n                                <a href="#" aria-label="Next" (click)="pagina(paginacao.pageCount)">\n                                    <span aria-hidden="true">&raquo;</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n            </div>\n            <!--/pagination-->\n\n        </div>\n\n        <div class="container-fluid">\n            <section class="row">\n                <div class="col-xs-12">\n                    <div class="wrapper">\n\n                        <!--logo body-->\n                        <div class="content-logo--body">\n                            <img src="assets/images/static/zukkin-logo-mobile-body.png" alt="" >\n                        </div>\n                        <!--/logo-body-->\n\n                    </div>\n                </div>\n            </section>\n        </div>\n    </main>\n    <!--/main-->\n\n    <app-footer [navCtrl]="navCtrl"></app-footer>\n</ion-content>\n\n<ion-footer>\n    <app-footer-resumo [navCtrl]="navCtrl"></app-footer-resumo>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/pedidos/pedidos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_pedido_pedido_provider__["a" /* PedidoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], PedidosPage);

//# sourceMappingURL=pedidos.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_lista_lista__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaPage = (function () {
    function ListaPage(navCtrl, navParams, listaProvider, alertCtrl, loadingCtrl, configuracao, localStorageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listaProvider = listaProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.configuracao = configuracao;
        this.localStorageService = localStorageService;
        this.listas = null;
        this.lista = {
            pag_lis_nome: ""
        };
        this.listaAtiva = null;
    }
    ListaPage.prototype.ionViewDidLoad = function () {
        this.carregaLista();
    };
    ListaPage.prototype.carregaLista = function () {
        var that = this;
        this.listaProvider.lista().subscribe(function (response) {
            console.info(response);
            that.listas = response;
            for (var i = 0; i < that.listas.length; i++) {
                if (that.listas[i]['pag_lis_status']) {
                    that.listaAtiva = that.listas[i];
                    console.info("ativa ", that.listaAtiva);
                    break;
                }
            }
        });
        this.lista = {
            pag_lis_nome: ""
        };
    };
    ListaPage.prototype.editar = function (lista) {
        this.listas.map(function (i) {
            i.editando = false;
        });
        lista.editando = true;
    };
    ListaPage.prototype.gravarAlteracao = function (lista) {
        var that = this;
        this.listas = [];
        var loader = this.loadingCtrl.create({
            content: 'Carregando'
        });
        loader.present();
        this.listaProvider.salvarAlteracao({
            pagLisId: lista.pag_lis_id,
            pagLisNome: lista.pag_lis_nome,
            pagLisStatus: (lista.pag_lis_status) ? 1 : 0
        }).subscribe(function (response) {
            that.carregaLista();
            loader.dismiss();
        });
    };
    ListaPage.prototype.gravarNovo = function () {
        var that = this;
        this.listas = [];
        var loader = this.loadingCtrl.create({
            content: 'Carregando'
        });
        loader.present();
        this.listaProvider.salvarNovo({ pagLisNome: this.lista.pag_lis_nome }).subscribe(function (response) {
            console.info("ok!");
            that.carregaLista();
            loader.dismiss();
        });
    };
    // TODO refatorar esse trecho
    ListaPage.prototype.ativar = function (lista) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Carregando'
        });
        loader.present();
        var that = this;
        this.listaProvider.salvarAlteracao({
            pagLisId: lista.pag_lis_id, pagLisNome: lista.pag_lis_nome, pagLisStatus: 1
        }).subscribe(function (response) {
            _this.configuracao.lista = {
                id: lista.pag_lis_id,
                nome: lista.pag_lis_nome,
                produtos: lista.pag_lista_produtos.map(function (listaProduto) {
                    return {
                        id: listaProduto.pag_produto.pag_pro_id,
                        quantidade: listaProduto.pag_lis_pro_quantidade
                    };
                }),
                produtosDisponiveisNoMercado: []
            };
            _this.localStorageService.atualizar(_this.configuracao);
            _this.configuracao.propagarAlteracao();
            _this.listaProvider.salvarAlteracao({
                pagLisId: that.listaAtiva.pag_lis_id,
                pagLisNome: that.listaAtiva.pag_lis_nome,
                pagLisStatus: 0
            }).subscribe(function (response) {
                loader.dismiss();
                that.navCtrl.pop();
            });
        });
    };
    ListaPage.prototype.remover = function (lista) {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Certeza?',
            message: 'Deseja realmente excluir?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        var loader = _this.loadingCtrl.create({
                            content: 'Carregando'
                        });
                        loader.present();
                        _this.listaProvider.excluir({
                            pagLisId: lista.pag_lis_id
                        }).subscribe(function (response) {
                            that.carregaLista();
                            loader.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListaPage.prototype.closeModal = function () {
        this.navCtrl.pop();
        return false;
    };
    return ListaPage;
}());
ListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-lista',template:/*ion-inline-start:"/var/www/html/app/src/pages/lista/lista.html"*/'<!--editarLista-->\n<ion-content>\n    <div class="modal-dialog" id="editarLista">\n        <div class="modal-content">\n            <div class="modal-header">\n                <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="closeModal()">&times;</a>\n                <h4 class="modal-title" id="">Selecione a sua lista</h4>\n            </div>\n            <div class="modal-body">\n\n                <div *ngFor="let lista of listas">\n                    <div class="row" *ngIf="!lista.editando">\n                        <div class="col-xs-12">\n                            <div class="link-content modal-body-text" *ngIf="!lista.editando && !lista.pag_lis_status">\n                                <input name="lista" type="radio" (click)="ativar(lista)" /> {{lista.pag_lis_nome}} <span class="modal-body-text span">(<span class="span-item">{{lista.produtos_quantidade}}</span> itens)</span>\n                            </div>\n                            <div class="link-content modal-body-text" *ngIf="!lista.editando && lista.pag_lis_status">\n                                <input type="radio" [disabled]="true" [checked]="true" name="lista" /> {{lista.pag_lis_nome}} <span class="modal-body-text span">(<span class="span-item">{{lista.produtos_quantidade}}</span> itens)</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row" *ngIf="lista.editando">\n                        <div class="form-group col-xs-7 col-sm-10">\n                            <label for="editar-nome">Editar nome:</label>\n                            <input type="text" class="form-control" id="editar-nome" placeholder="Digite o novo nome"\n                                   [(ngModel)]="lista.pag_lis_nome" name="lista">\n                        </div>\n\n                        <div class="form-group col-xs-5 col-sm-2">\n                            <div class="container-btn--confirm">\n                                <button class="btn btn-blue--confirm " (click)="gravarAlteracao(lista)">Ok</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="row" *ngIf="!lista.editando">\n                        <div class="col-xs-4">\n                            <div class="link-content">\n                                <a href="#" (click)="editar(lista)" class="link">Editar</a>\n                            </div>\n                        </div>\n                        <div class="col-xs-4">\n                            <div class="link-content" *ngIf="!lista.pag_lis_status && listas.length > 1">\n                                <a href="#" (click)="remover(lista)" class="link">Remover</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n    <!--/editarLista-->\n</ion-content>\n<ion-footer>\n    <div class="modal-footer">\n\n        <form role="form" class="form-inline formulario">\n            <div class="row">\n                <div class="form-group col-xs-7">\n                    <input type="text" class="form-control" id="digite-nome" placeholder="Digite um nome"\n                           [(ngModel)]="lista.pag_lis_nome" name="nome">\n                </div>\n                <div class="form-group col-xs-5">\n                    <div class="pull-left">\n                        <button class="btn btn-blue--new" (click)="gravarNovo()">Criar nova</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/lista/lista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_lista_lista__["a" /* ListaProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__["a" /* LocalStorageService */]])
], ListaPage);

//# sourceMappingURL=lista.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_resumo_resumo__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ComparacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComparacaoPage = (function () {
    function ComparacaoPage(navCtrl, navParams, configuracao, resumoProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.resumoProvider = resumoProvider;
        this.loadingCtrl = loadingCtrl;
        this.resumo = null;
        this.mais_barato = {
            total: 0
        };
        this.atual = null;
        this.exibeEnderecoAtual = false;
        this.exibeLista = false;
        this.lista = null;
        this.busca();
    }
    ComparacaoPage.prototype.busca = function () {
        var loader = this.loadingCtrl.create({
            content: 'Comparando estabelecimentos'
        });
        loader.present();
        var that = this;
        this.lista = this.configuracao.lista;
        var params = {
            lista: this.lista.id,
            estabelecimentos: this.configuracao.estabelecimentos,
            modo: this.configuracao.modo
        };
        this.resumo = null;
        this.resumoProvider.getOrdenado(params, function (r) {
            that.resumo = r;
            that.mais_barato = r[0];
            that.atual = r[0];
            loader.dismissAll();
        }, function (e) {
            loader.dismissAll();
        });
    };
    ComparacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComparacaoPage');
    };
    ComparacaoPage.prototype.anterior = function (ev) {
        ev.preventDefault();
        this.exibeEnderecoAtual = false;
        this.exibeLista = false;
        this.slides.slidePrev(500);
    };
    ComparacaoPage.prototype.proximo = function (ev) {
        ev.preventDefault();
        this.exibeEnderecoAtual = false;
        this.exibeLista = false;
        this.slides.slideNext(500);
    };
    ComparacaoPage.prototype.verEnderecoAtual = function () {
        this.exibeEnderecoAtual = true;
    };
    ComparacaoPage.prototype.atualizarAtual = function () {
        var index = this.slides.getActiveIndex();
        this.atual = this.resumo[index];
        console.log(this.atual);
        this.exibeLista = !this.exibeLista;
    };
    return ComparacaoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], ComparacaoPage.prototype, "slides", void 0);
ComparacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-comparacao',template:/*ion-inline-start:"/var/www/html/app/src/pages/comparacao/comparacao.html"*/'<!--\n  Generated template for the ComparacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="comparacao-page comparativo">\n    <header>\n        <app-header-marketplace *ngIf="configuracao.modo == \'marketplace\'" [navCtrl]="navCtrl"></app-header-marketplace>\n        <app-header-comparacao *ngIf="configuracao.modo != \'marketplace\'" [navCtrl]="navCtrl"></app-header-comparacao>\n    </header>\n\n    <!--main-->\n    <main class="bg-gray">\n\n        <!--breadcrumbie-->\n        <section class="breadcrumbie-content">\n            <div class="">\n                <ul>\n                    <li><a href="">Zukkin</a> |</li>\n                    <li><a href="" class="active">Comparativo</a></li>\n                </ul>\n            </div>\n        </section>\n        <!--/breadcrumbie-->\n\n        <div class="container bg-white">\n\n            <div class="body" *ngIf="resumo">\n                <!--h1>Veja em outros supermercados</h1-->\n                <div class="row">\n                    <div class="col-xs-1" style="width: 5%; margin: 0; padding: 0;">\n                        <a href="#" (click)="anterior($event)" class="sprites-arrow-left">prev</a>\n                    </div>\n                    <div class="col-xs-10" style="width: 88%">\n                        <ion-slides>\n                            <ion-slide class="item" *ngFor="let item of resumo">\n                                <div *ngIf="item.estabelecimento && item.lista">\n                                    <div class="row">\n                                        <div\n                                            *ngIf="item.estabelecimento.pag_est_id == mais_barato.estabelecimento.pag_est_id"\n                                            class="col-xs-12 text-center flag">\n                                            <img src="assets/images/static/best-price.png" alt="" class="store">\n                                        </div>\n                                    </div>\n\n                                    <div class="row">\n                                        <div class="col-xs-6 store-logo">\n                                            <img src="{{item.estabelecimento.pag_est_logo}}"\n                                                 alt="{{item.estabelecimento.label}}">\n                                        </div>\n\n                                        <div class="col-xs-6">\n                                            <div class="col-xs-12 text-center">\n                                                <p class="itens" *ngIf="item.lista">\n                                                    <strong>{{item.lista.length}}</strong>\n                                                    <span>\n                                                        <strong>/ {{lista.produtos.length}}</strong> itens\n                                                    </span>\n                                                </p>\n                                                <p class="itens">\n                                                    <span class="valor">\n                                                        <strong>R$ {{item.total | number: \'1.2-2\'}}</strong>\n                                                    </span>\n                                                </p>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <div class="row">\n                                        <div class="col-xs-12">\n                                            {{item.estabelecimento.pag_est_marca}} -\n                                            {{item.estabelecimento.pag_est_local_b2c}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-slide>\n                        </ion-slides>\n                    </div>\n                    <div class="col-xs-1" style="width: 5%; margin: 0; padding: 0;">\n                        <a href="#" (click)="proximo($event)" class="sprites-arrow-right">next</a>\n                    </div>\n                </div>\n\n                <div class="change-store transparent">\n                    <div class="row">\n                        <div class="col-xs-12">\n                            <a href="#" (click)="verEnderecoAtual()" class="btn btn-transparent">\n                                Ver endereço\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n\n                <ion-row *ngIf="atual && exibeEnderecoAtual">\n                    <ion-col col-12 class="comparacao-endereco">\n                        {{atual.estabelecimento.endereco}}\n                    </ion-col>\n                </ion-row>\n\n                <div class="row btn-final">\n                    <div class="col-xs-12 ">\n                        <button class="detail-more-btn btn btn-transparent"\n                                [ngClass]="exibeLista ? \'arrow-up\' : \'\'"\n                                (click)="atualizarAtual()">\n                            Ver itens do seu carrinho <span class="sprites-arrow-select-fake pull-right"></span>\n                        </button>\n\n                        <div *ngIf="atual.lista.length > 0 && exibeLista" style="display: block;">\n                            <div class="product-list-cart">\n                                <div class="content-vertical">\n                                    <div class="content-vertical--wrap" *ngFor="let item of atual.lista">\n\n                                        <ion-row>\n                                            <ion-col col-12 class="product-list-name">\n                                                {{item.produto.pag_pro_nome}}\n                                            </ion-col>\n                                        </ion-row>\n\n                                        <div class="row">\n                                            <div class="col-xs-7 product-list">\n                                                <div class="flex">\n                                                    <div class="product-list-item">\n                                                        <img src="{{item.produto.pag_pro_imagem}}"\n                                                             alt="{{item.produto.pag_pro_nome}}" class="img-responsive"\n                                                             height="60">\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class="col-xs-5 product-list-prices">\n                                                <div class="prices">\n                                                    <div class="price">\n                                                        R$ {{item.sub_total|number:\'1.2-2\'}}\n                                                    </div>\n                                                </div>\n\n                                                <div class="product-list-select">\n                                                    <app-produto-select-quantidade [produto]="item.produto"\n                                                                                   [navCtrl]="navCtrl"></app-produto-select-quantidade>\n                                                    <app-produto-btn-adicionar-remover [produto]="item.produto"\n                                                                                       [navCtrl]="navCtrl"></app-produto-btn-adicionar-remover>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class="container-fluid">\n            <section class="row">\n                <div class="col-xs-12">\n                    <div class="wrapper">\n\n                        <!--logo body-->\n                        <div class="content-logo--body">\n                            <img src="assets/images/static/zukkin-logo-mobile-body.png" alt="">\n                        </div>\n                        <!--/logo-body-->\n\n                    </div>\n                </div>\n            </section>\n        </div>\n    </main>\n    <!--/main-->\n    <app-footer [navCtrl]="navCtrl"></app-footer>\n</ion-content>\n<ion-footer>\n    <app-footer-resumo [navCtrl]="navCtrl"></app-footer-resumo>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/comparacao/comparacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_resumo_resumo__["a" /* ResumoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ComparacaoPage);

//# sourceMappingURL=comparacao.js.map

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bem-vindo/bem-vindo.module": [
		191
	],
	"../pages/busca/busca.module": [
		196
	],
	"../pages/carrinho/carrinho.module": [
		198
	],
	"../pages/comparacao/comparacao.module": [
		205
	],
	"../pages/estabelecimento-marketplace/estabelecimento-marketplace.module": [
		206
	],
	"../pages/estabelecimento-selecionar/estabelecimento-selecionar.module": [
		207
	],
	"../pages/finalizar-compra/finalizar-compra.module": [
		208
	],
	"../pages/lista/lista.module": [
		209
	],
	"../pages/login/login.module": [
		357,
		1
	],
	"../pages/meus-enderecos/meus-enderecos.module": [
		210
	],
	"../pages/obrigado/obrigado.module": [
		211
	],
	"../pages/pedidos/pedidos.module": [
		212
	],
	"../pages/produto-detalhe/produto-detalhe.module": [
		213
	],
	"../pages/produtos/produtos.module": [
		214
	],
	"../pages/usuario-cadastro-endereco/usuario-cadastro-endereco.module": [
		215
	],
	"../pages/usuario-cadastro/usuario-cadastro.module": [
		216
	],
	"../pages/usuario-editar-perfil/usuario-editar-perfil.module": [
		358,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BemVindoPageModule", function() { return BemVindoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bem_vindo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BemVindoPageModule = (function () {
    function BemVindoPageModule() {
    }
    return BemVindoPageModule;
}());
BemVindoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bem_vindo__["a" /* BemVindoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bem_vindo__["a" /* BemVindoPage */]),
            __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"]
        ],
    })
], BemVindoPageModule);

//# sourceMappingURL=bem-vindo.module.js.map

/***/ }),
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioEstabelecimentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioEstabelecimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioEstabelecimentoProvider = (function () {
    function UsuarioEstabelecimentoProvider(http, configuracao, configurationService, localStorage) {
        this.http = http;
        this.configuracao = configuracao;
        this.configurationService = configurationService;
        this.localStorage = localStorage;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + "/usuario-estabelecimentos";
    }
    UsuarioEstabelecimentoProvider.prototype.get = function () {
        return this.http.get(this.apiUrl);
    };
    UsuarioEstabelecimentoProvider.prototype.toogleSelecionado = function (id_estabelecimento) {
        return this.http.post(this.apiUrl + "/" + id_estabelecimento, {});
    };
    return UsuarioEstabelecimentoProvider;
}());
UsuarioEstabelecimentoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__["a" /* LocalStorageService */]])
], UsuarioEstabelecimentoProvider);

//# sourceMappingURL=usuario-estabelecimento.js.map

/***/ }),
/* 195 */,
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaPageModule", function() { return BuscaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busca__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuscaPageModule = (function () {
    function BuscaPageModule() {
    }
    return BuscaPageModule;
}());
BuscaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__busca__["a" /* BuscaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__busca__["a" /* BuscaPage */]),
        ],
    })
], BuscaPageModule);

//# sourceMappingURL=busca.module.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__produtos_produtos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_template_util__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscaPage = (function () {
    function BuscaPage(navCtrl, navParams, templateUtil) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.templateUtil = templateUtil;
    }
    BuscaPage.prototype.ionViewDidLoad = function () {
        this.templateUtil.header = false;
        this.templateUtil.footer = false;
    };
    BuscaPage.prototype.ionViewDidLeave = function () {
        this.templateUtil.header = true;
        this.templateUtil.footer = true;
    };
    BuscaPage.prototype.voltar = function () {
        this.navCtrl.pop();
        return false;
    };
    BuscaPage.prototype.buscar = function (termo) {
        console.info("BUSCAR " + termo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__produtos_produtos__["a" /* ProdutosPage */], { termo: termo });
    };
    return BuscaPage;
}());
BuscaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-busca',template:/*ion-inline-start:"/var/www/html/app/src/pages/busca/busca.html"*/'<!--\n  Generated template for the BuscaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n<ion-content id="search">\n    <div class="modal-content">\n        <div class="modal-header">\n            <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="voltar()">&times;</a>\n        </div>\n        <div class="modal-body">\n            <div class="row">\n                <div class="col-xs-12">\n\n                    <form role="form" class="form-inline formulario">\n                        <div class="row">\n                            <div class="form-group col-xs-12  has-feedback">\n                                <div class="input-group">\n                                    <input type="text" class="form-control" #busca placeholder="Buscar por algo?">\n                                    <span class="input-group-btn">\n                                        <button class="btn btn-search" type="button" (click)="buscar(busca.value)">\n                                            <span class="sprites-search-mobile-icon"></span>\n                                        </button>\n                                      </span>\n                                </div>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/busca/busca.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_util_template_util__["a" /* TemplateUtil */]])
], BuscaPage);

//# sourceMappingURL=busca.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CarrinhoPageModule = (function () {
    function CarrinhoPageModule() {
    }
    return CarrinhoPageModule;
}());
CarrinhoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* CarrinhoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* CarrinhoPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], CarrinhoPageModule);

//# sourceMappingURL=carrinho.module.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarCompraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_usuario_shared_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_endereco_endereco_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_resumo_resumo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pagamento_cartao_model__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_pedido_pedido_provider__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_pedido_pedido_model__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__obrigado_obrigado__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carrinho_carrinho__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_util_data_util__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_estabelecimento_estabelecimento__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the FinalizarCompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinalizarCompraPage = (function () {
    function FinalizarCompraPage(navCtrl, navParams, configuracao, usuarioService, usuarioProvider, enderecoService, resumoService, pedidoProvider, loadingCtrl, toastCtrl, estabelecimentoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.usuarioService = usuarioService;
        this.usuarioProvider = usuarioProvider;
        this.enderecoService = enderecoService;
        this.resumoService = resumoService;
        this.pedidoProvider = pedidoProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.estabelecimentoProvider = estabelecimentoProvider;
        this.mostrarEndereco = false;
        this.mostrarPagamento = false;
        this.selectOptions = {
            title: 'Endereço de entrega',
            mode: 'md'
        };
        this.cartao = new __WEBPACK_IMPORTED_MODULE_8__providers_pagamento_cartao_model__["a" /* Cartao */]();
        this.numeroDoCartaoCorreto = false;
        this.pedido = new __WEBPACK_IMPORTED_MODULE_10__providers_pedido_pedido_model__["a" /* Pedido */]();
        this.dataUtil = new __WEBPACK_IMPORTED_MODULE_13__providers_util_data_util__["a" /* DataUtil */]();
        this.desabilitarBotaoIrParaPagamento = false;
    }
    FinalizarCompraPage.prototype.ionViewDidLoad = function () {
        this.carregarDadosDoUsuario();
        this.carregarEnderecos();
        this.carregarResumo();
    };
    FinalizarCompraPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    FinalizarCompraPage.prototype.createLoader = function (message) {
        return this.loadingCtrl.create({
            content: message
        });
    };
    FinalizarCompraPage.prototype.carregarEnderecos = function () {
        var _this = this;
        console.info('carregando endereços');
        this.enderecoService.listarTodos().subscribe(function (response) {
            _this.enderecos = response;
            _this.enderecoAtivo = response.find(function (endereco) { return endereco.pag_usu_end_id = _this.configuracao.local.id; });
        });
    };
    FinalizarCompraPage.prototype.carregarDadosDoUsuario = function () {
        var _this = this;
        var loader = this.createLoader('Carregando informações...');
        loader.present();
        console.info('carregando dados do usuário');
        this.usuarioService.meuPerfil().subscribe(function (response) {
            loader.dismiss();
            _this.usuario = response;
        }, function (error) {
            loader.dismiss();
            console.error(error);
        });
    };
    FinalizarCompraPage.prototype.carregarResumo = function () {
        var _this = this;
        console.info('carregando resumo');
        var params = {
            lista: this.configuracao.lista.id,
            estabelecimentos: this.configuracao.estabelecimentoBase,
            modo: this.configuracao.modo,
        };
        this.resumoService.get(params).subscribe(function (response) {
            _this.resumo = response.shift();
        });
    };
    FinalizarCompraPage.prototype.editarCadastro = function () {
        var _this = this;
        var u = new __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario_model__["a" /* UsuarioModel */]();
        u.nome = this.usuario.nome;
        u.sobrenome = this.usuario.sobrenome;
        u.dataNascimento = this.dataUtil.getDataDeNascimento(this.usuario.data_nascimento);
        u.sexo = this.usuario.sexo;
        u.cpf = this.usuario.cpf.replace(/[^0-9]/g, '');
        if (this.usuario.telefone) {
            u.telefone = this.usuario.telefone.replace(/[^0-9]/g, '');
        }
        if (this.usuario.celular) {
            u.celular = this.usuario.celular.replace(/[^0-9]/g, '');
        }
        else {
            this.presentToast('Informe o celular.');
            return false;
        }
        if (!u.validEdit()) {
            this.presentToast('Informe todos os campos obrigatórios do formulário.');
            return false;
        }
        console.log(u);
        var loader = this.createLoader('Atualizando informações...');
        loader.present();
        this.usuarioService.atualizar(u).subscribe(function (response) {
            _this.usuarioProvider.atualizaUsuario(_this.usuario);
            loader.dismiss();
            _this.presentToast('Cadastro atualizados!');
        }, function (error) {
            loader.dismiss();
            console.error(error);
            _this.presentToast('Não foi possível atualizar o cadastro.');
        });
        // this.navCtrl.push(UsuarioEditarPerfilPage);
    };
    FinalizarCompraPage.prototype.verificarBandeiraCartao = function (numero) {
        this.cartao.obterBandeira();
        console.log(this.cartao.bandeira);
    };
    FinalizarCompraPage.prototype.meses = function () {
        return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    };
    FinalizarCompraPage.prototype.anos = function () {
        var data = new Date();
        var anoAtual = data.getFullYear();
        var anos = [anoAtual];
        for (var i = 1; i <= 20; i++) {
            anos.push(anoAtual + i);
        }
        return anos;
    };
    FinalizarCompraPage.prototype.validarNumeroDoCartao = function () {
        this.numeroDoCartaoCorreto = this.cartao.validarNumero();
    };
    FinalizarCompraPage.prototype.finalizarCompra = function () {
        var _this = this;
        this.pedido.frete = this.resumo.estabelecimento.frete;
        this.pedido.conveniencia = this.resumo.estabelecimento.taxa_de_conveniencia ? this.resumo.estabelecimento.taxa_de_conveniencia : 0;
        this.pedido.estabelecimento = this.resumo.estabelecimento.pag_est_id;
        this.pedido.subTotal = this.resumo.sub_total;
        this.pedido.produtos = this.resumo.lista;
        this.pedido.endereco = this.enderecoAtivo.pag_usu_end_id;
        this.pedido.cartao = this.cartao;
        if (!this.pedido.validarDados() || !this.cartao.validarDados()) {
            this.presentToast('Preencha todos os dados do pagamento');
            return false;
        }
        var loader = this.createLoader('Processando...');
        loader.present();
        this.pedidoProvider.cadastrar(this.pedido).subscribe(function (response) {
            loader.dismiss();
            console.log(response);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__obrigado_obrigado__["a" /* ObrigadoPage */], { id: response.id });
        }, function (error) {
            loader.dismiss();
            console.error(error);
            _this.presentToast('Ocorreu um erro no servidor e não foi possível fazer o pagamento');
        });
    };
    FinalizarCompraPage.prototype.selecionarTipoDeEntrega = function (entrega) {
        this.pedido.entregaTipo = entrega.tipo_id;
    };
    FinalizarCompraPage.prototype.paginaCarrinho = function (ev) {
        ev.preventDefault();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    FinalizarCompraPage.prototype.enderecoAlterado = function (endereco) {
        var _this = this;
        var loader = this.createLoader('Verificando endereço...');
        loader.present();
        this.estabelecimentoProvider.consultarFrete(this.configuracao.estabelecimentoBase, endereco.pag_usu_end_cep).subscribe(function (response) {
            _this.desabilitarBotaoIrParaPagamento = !response.frete;
            loader.dismiss();
            if (!response.frete) {
                _this.presentToast('O endereço selecionado está fora da área de entrega. Por favor, escolha outro local');
            }
            else {
                _this.resumo.estabelecimento.frete = response.frete.pag_valor_frete;
            }
        }, function (error) {
            _this.desabilitarBotaoIrParaPagamento = false;
            loader.dismiss();
            _this.presentToast('Não foi possível consultar o frete desse endereço, por favor, escolha outro endereço');
            console.error(error);
        });
    };
    FinalizarCompraPage.prototype.calcularTotal = function () {
        var total = parseFloat(this.resumo.estabelecimento.frete) + parseFloat(this.resumo.sub_total);
        if (this.resumo.estabelecimento.taxa_de_conveniencia) {
            total += parseFloat(this.resumo.estabelecimento.taxa_de_conveniencia);
        }
        return total;
    };
    return FinalizarCompraPage;
}());
FinalizarCompraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-finalizar-compra',template:/*ion-inline-start:"/var/www/html/app/src/pages/finalizar-compra/finalizar-compra.html"*/'<ion-content>\n    <header>\n        <app-header-marketplace *ngIf="configuracao.modo == \'marketplace\'" [navCtrl]="navCtrl"></app-header-marketplace>\n        <app-header-comparacao *ngIf="configuracao.modo != \'marketplace\'" [navCtrl]="navCtrl"></app-header-comparacao>\n    </header>\n\n    <!--main-->\n    <main style="margin-top: 60px;">\n        <!--breadcrumbie-->\n        <section class="breadcrumbie-content">\n            <div class="">\n                <ul>\n                    <li><a href="">Zukkin</a> |</li>\n                    <li><a href="" class="active">Checkout</a> </li>\n                </ul>\n            </div>\n        </section>\n        <!--/breadcrumbie-->\n\n        <!-- Accordion pagamento-->\n        <section class="accordion-payment">\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="" id="accordion-payment" role="tablist" aria-multiselectable="true">\n                        <!--seção dados pessoais-->\n                        <div class="accordion-payment--content">\n                            <div class="" role="tab" id="pay-01">\n                                <h4 class="">\n                                    <a role="button" data-toggle="collapse"\n                                       data-parent="#accordion-payment" href="#collapse-01"\n                                       aria-expanded="true" aria-controls="collapseOne"\n                                       class="">\n                                        <span class="sprites-user-payment"></span>1. Dados pessoais\n                                    </a>\n                                </h4>\n                            </div>\n                            <div id="collapse-01" class="panel-collapse" role="tabpanel" aria-labelledby="headingOne" *ngIf="usuario">\n                                <div class="panel-body">\n                                    <form role="form" class="form-inline formulario">\n                                        <div class="row">\n                                            <div class="form-group col-xs-12">\n                                                <label for="">E-mail</label>\n                                                <input type="email"\n                                                       class="form-control error-input"\n                                                       id="email"\n                                                       placeholder="Difite seu e-mail"\n                                                       [value]="usuario.email"\n                                                       readonly\n                                                       name="usuario_email"\n                                                >\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Nome</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="nome"\n                                                       placeholder="Digite aqui"\n                                                       [(ngModel)]="usuario.nome"\n                                                       name="usuario_nome"\n                                                />\n                                            </div>\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Sobrenome</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="sobrenome"\n                                                       placeholder="Digite aqui"\n                                                       [(ngModel)]="usuario.sobrenome"\n                                                       name="usuario_sobrenome"\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-6">\n                                                <label for="">CPF</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="cpf"\n                                                       placeholder="Difite aqui"\n                                                       [value]="usuario.cpf"\n                                                       readonly\n                                                       name="usuario_cpf"\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Celular</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="celular"\n                                                       placeholder="( ) 90000-0000"\n                                                       [(ngModel)]="usuario.celular"\n                                                       name="usuario_celular"\n                                                />\n                                            </div>\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Telefone</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="telefone"\n                                                       placeholder="( ) 9000-0000"\n                                                       [(ngModel)]="usuario.telefone"\n                                                       name="usuario_telefone"\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="col-xs-6">\n                                                <button class="btn btn-blue--new" (click)="editarCadastro()">Editar dados</button>\n                                            </div>\n                                            <div class="col-xs-6">\n                                                <button class="btn green-button add-inactive" (click)="mostrarEndereco = true">Ir para entrega</button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/seção dados pessoais-->\n\n                        <!--seção endereço-->\n                        <div class="accordion-payment--content">\n                            <div class="" role="tab" id="pay-02">\n                                <h4 class="">\n                                    <a role="button" data-toggle="collapse" data-parent="#accordion-payment"\n                                       href="#collapse-02" aria-expanded="true" aria-controls="collapseOne" class="accordion-name">\n                                        <span class="sprites-gps-payment"></span>2. Entrega\n                                    </a>\n                                </h4>\n                            </div>\n\n                            <div id="collapse-02" class="panel-collapse" role="tabpanel" aria-labelledby="headingOne" *ngIf="mostrarEndereco">\n                                <!--loading-->\n                                <div class="row">\n                                    <div class="col-xs-12">\n                                        <div *ngIf="!enderecos" class="text-center">\n                                            <ion-spinner></ion-spinner> Carregando...\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/loading-->\n\n                                <div class="panel-body" *ngIf="enderecos">\n\n                                    <div class="row">\n                                        <div class="col-xs-12">\n                                            <span>Entregar em:</span>\n                                        </div>\n                                        <div class="col-xs-12 form-group">\n                                            <ion-select placeholder="Escolha sua cidade"\n                                                        name="endereco_nome"\n                                                        interface="popover"\n                                                        [(ngModel)]="enderecoAtivo"\n                                                        (ngModelChange)="enderecoAlterado($event)"\n                                                        [selectOptions]="selectOptions"\n                                                        cancelText="Cancelar"\n                                                        class="form-control"\n                                            >\n                                                <ion-option *ngFor="let endereco of enderecos" [value]="endereco">\n                                                    {{endereco.pag_usu_end_nome}}\n                                                </ion-option>\n                                            </ion-select>\n                                        </div>\n                                    </div>\n\n                                    <form role="form" class="form-inline formulario">\n                                        <div class="row">\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Cep</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="cep"\n                                                       placeholder="Digite seu cep"\n                                                       [ngModel]="enderecoAtivo.pag_usu_end_cep"\n                                                       readonly\n                                                       name="endereco_cep"\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-12">\n                                                <label for="">Endereço</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="endereco"\n                                                       placeholder="Digite aqui"\n                                                       [ngModel]="enderecoAtivo.pag_usu_end_logradouro"\n                                                       readonly\n                                                       name="endereco_logradouro"\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row" *ngIf="enderecoAtivo.pag_usu_end_complemento">\n                                            <div class="col-xs-12">\n                                                <div class="form-group">\n                                                    <label for="">Complemento</label>\n                                                    <input type="text"\n                                                           class="form-control"\n                                                           id="complemento"\n                                                           placeholder="Ex:Casa"\n                                                           [ngModel]="enderecoAtivo.pag_usu_end_complemento ? enderecoAtivo.pag_usu_end_complemento : \'\'"\n                                                           readonly\n                                                           name="endereco_complemento"\n                                                    />\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Bairro*</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="bairro"\n                                                       placeholder="Aguardando cep"\n                                                       [ngModel]="enderecoAtivo.pag_bairro ? enderecoAtivo.pag_bairro.pag_bai_nome : enderecoAtivo.pag_bairro.pag_usu_end_bairro_descricao"\n                                                       readonly\n                                                       name="endereco_bairro"\n                                                />\n                                            </div>\n\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Cidade*</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="cidade"\n                                                       placeholder="Aguardando cep"\n                                                       [ngModel]="enderecoAtivo.pag_cidade.pag_cid_nome"\n                                                       readonly\n                                                       name="endereco_cidade"\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-6">\n                                                <label for="">Estado*</label>\n                                                <input type="text"\n                                                       class="form-control"\n                                                       id="estado"\n                                                       placeholder="Aguardando cep"\n                                                       [ngModel]="enderecoAtivo.pag_cidade.pag_estado.pag_est_uf"\n                                                       name="endereco_estado"\n                                                       readonly\n                                                />\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-12">\n                                                <label for="">Referência</label>\n                                                <input type="text" class="form-control" id="ref" placeholder="Digite aqui" name="referencia" [(ngModel)]="pedido.referencia">\n                                            </div>\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="form-group col-xs-12">\n                                                <label for="">Destinatário</label>\n                                                <input type="text" class="form-control" id="dest" placeholder="Digite aqui" name="destinatario" [(ngModel)]="pedido.destinatario">\n                                            </div>\n                                        </div>\n\n                                        <div class="content-delivery">\n                                            <div class="row">\n                                                <div class="col-xs-12">\n                                                    <span class="title">Tipo de entrega:</span>\n                                                </div>\n                                            </div>\n\n                                            <div class="row">\n                                                <div class="col-xs-12" *ngFor="let entrega of resumo.estabelecimento.opcoes_de_entrega">\n                                                    <label class="radio-button" (click)="selecionarTipoDeEntrega(entrega)">\n                                                        <input type="radio" name="radio">\n                                                        <span class="label-visible active">\n                                                            <span class="fake-radiobutton"></span>{{entrega.tipo_nome}}<br/>\n                                                            <span class="price">{{entrega.descricao}}</span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </div>\n\n                                            <div class="row">\n                                                <div class="col-xs-12 text-center">\n                                                    <button class="btn green-button add-inactive" (click)="mostrarPagamento = true" [disabled]="desabilitarBotaoIrParaPagamento">Ir para pagamento</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/seção endereço-->\n\n                        <!--seção pagamento-->\n                        <div class="accordion-payment--content payment">\n                            <div class="" role="tab" id="pay-03">\n                                <h4 class="">\n                                    <a role="button" data-toggle="collapse" data-parent="#accordion-payment"\n                                       href="#collapse-03" aria-expanded="true" aria-controls="collapseOne" class="accordion-name">\n                                        <span class="sprites-card-payment"></span>3. Pagamento\n                                    </a>\n                                </h4>\n                            </div>\n\n                            <div id="collapse-03" class="panel-collapse" role="tabpanel" aria-labelledby="headingOne" *ngIf="mostrarPagamento && !desabilitarBotaoIrParaPagamento">\n                                <div class="panel-body">\n                                    <div class="row">\n                                        <div class="col-xs-12">\n                                            <h1>Vendido e entregue por:</h1>\n                                        </div>\n                                    </div>\n\n                                    <div class="row">\n                                        <div class="col-xs-12 text-center store-logo">\n                                            <img src="{{resumo.estabelecimento.pag_est_logo}}" alt="resumo.estabelecimento.pag_est_marca" class="store">\n                                        </div>\n                                    </div>\n\n                                    <div class="row">\n                                        <div class="col-xs-12 text-center">\n                                            <p class="itens">\n                                                <strong>{{resumo.lista.length}}</strong>\n                                                <span><strong>/{{configuracao.lista.produtos.length}}</strong> itens</span>\n                                            </p>\n                                        </div>\n                                    </div>\n\n                                    <div class="row itens-valor">\n                                        <div class="col-xs-7">\n                                            <span class="text">Valor do seu pedido:</span>\n                                        </div>\n\n                                        <div class="col-xs-5">\n                                            <span class="valor">R$ {{resumo.sub_total | number:\'1.2-2\'}}</span>\n                                        </div>\n                                    </div>\n\n                                    <div class="row itens-valor">\n                                        <div class="col-xs-7">\n                                            <span class="text">Frete:</span>\n                                        </div>\n\n                                        <div class="col-xs-5">\n                                            <span class="valor">R$ {{resumo.estabelecimento.frete | number:\'1.2-2\'}}</span>\n                                        </div>\n                                    </div>\n\n                                    <div class="row itens-valor" *ngIf="resumo.estabelecimento.taxa_de_conveniencia">\n                                        <div class="col-xs-7">\n                                            <span class="text">Taxa de conveniência:</span>\n                                        </div>\n\n                                        <div class="col-xs-5">\n                                            <span class="valor">R$ {{resumo.estabelecimento.taxa_de_conveniencia | number:\'1.2-2\'}}</span>\n                                        </div>\n                                    </div>\n\n                                    <div class="row itens-total">\n                                        <div class="col-xs-5">\n                                            <span class="text">Total:</span>\n                                        </div>\n\n                                        <div class="col-xs-7">\n                                            <span class="valor">R$ {{calcularTotal() | number:\'1.2-2\'}}</span>\n                                        </div>\n                                    </div>\n\n                                    <div class="row btn-final">\n                                        <div class="col-xs-12 text-center">\n                                            <button class="btn btn-blue--new" (click)="paginaCarrinho($event)">Ver pedido</button>\n                                        </div>\n                                    </div>\n\n                                    <div class="row">\n                                        <div class="col-xs-12">\n                                            <!-- Nav tabs -->\n                                            <ul class="nav nav-tabs" role="tablist">\n                                                <!--<li role="presentation" class="active"><a href="#debito" aria-controls="debito" role="tab" data-toggle="tab">Cartão de debito</a></li>-->\n                                                <!--<li role="presentation" class="active"><a href="#" aria-controls="credito" role="tab" data-toggle="tab">Cartão de crédito</a></li>-->\n                                                <!--<li role="presentation"><a href="#boleto" aria-controls="boleto" role="tab" data-toggle="tab">Boleto</a></li>-->\n                                                <li role="presentation" class="active"><a href="#" aria-controls="credito" role="tab">Cartão de crédito</a></li>\n                                            </ul>\n\n                                            <!-- Tab panes -->\n                                            <div class="tab-content">\n                                                <div role="tabpanel" class="tab-pane" id="debito"></div>\n                                                <div role="tabpanel" class="tab-pane active" id="credito">\n                                                    <form role="form" class="form-inline formulario">\n                                                        <div class="row">\n                                                            <div class="form-group col-xs-12 wrapper-card-number">\n                                                                <label for="">Número do cartão:</label>\n                                                                <input type="number"\n                                                                       class="form-control"\n                                                                       id="num-cart"\n                                                                       placeholder="Digite o número do cartão"\n                                                                       (keyup)="verificarBandeiraCartao(cartaoNumero.value)"\n                                                                       #cartaoNumero\n                                                                       name="cartao_numero"\n                                                                       [(ngModel)]="cartao.numero"\n                                                                       (blur)="validarNumeroDoCartao()"\n                                                                />\n                                                                <span class="text-danger" *ngIf="!numeroDoCartaoCorreto">O número da cartão não é valido!</span>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class="row form-group">\n                                                            <div class="col-xs-4 text-center"><img src="images/cartoes/visa.png" *ngIf="cartao.bandeira == \'visa\' || !cartao.bandeira" /></div>\n                                                            <div class="col-xs-4 text-center"><img src="images/cartoes/master.png" *ngIf="cartao.bandeira == \'master\' || !cartao.bandeira" /></div>\n                                                            <div class="col-xs-4 text-center"><img src="images/cartoes/amex.png" *ngIf="cartao.bandeira == \'amex\' || !cartao.bandeira" /></div>\n                                                        </div>\n\n                                                        <div class="row">\n                                                            <div class="form-group col-xs-12">\n                                                                <label for="">Nome no cartão:</label>\n                                                                <input type="text"\n                                                                       class="form-control"\n                                                                       id="nome"\n                                                                       placeholder="Ex: João Silva"\n                                                                       name="cartao_nome"\n                                                                       [(ngModel)]="cartao.nomeCompleto"\n                                                                />\n                                                            </div>\n                                                        </div>\n\n                                                        <div class="row">\n                                                            <div class="col-xs-4">\n                                                                <label for="">Validade:</label>\n                                                            </div>\n                                                            <div class="col-xs-8">\n                                                                <label for="">Código de segurança:</label>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class="row form-group">\n                                                            <div class="col-xs-4">\n                                                                <select class="form-control" name="cartao_mes" [(ngModel)]="cartao.mes">\n                                                                    <option>Mês</option>\n                                                                    <option *ngFor="let mes of meses(), let i = index" value="{{i}}">{{mes}}</option>\n                                                                </select>\n                                                            </div>\n\n                                                            <div class="col-xs-4">\n                                                                <select class="form-control" name="cartao_ano" [(ngModel)]="cartao.ano">\n                                                                    <option *ngFor="let ano of anos()" value="{{ano}}">{{ano}}</option>\n                                                                </select>\n                                                            </div>\n\n                                                            <div class="col-xs-4">\n                                                                <div class="content-input">\n                                                                    <label for=""></label>\n                                                                    <input type="string"\n                                                                           class="form-control"\n                                                                           id="cvv"\n                                                                           placeholder="CVV"\n                                                                           [(ngModel)]="cartao.cvv"\n                                                                           name="cartao_cvv"\n                                                                           pattern="\d{3,4}"\n                                                                           #cvv\n                                                                    />\n                                                                    <div class="text-danger" *ngIf="cvv.invalid && (cvv.dirty || cvv.touched)">\n                                                                        <span *ngIf="cvv.errors.pattern">CVV incorreto</span>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <!--<div class="row">-->\n                                                            <!--<div class="form-group col-xs-7">-->\n                                                                <!--<label for="">Pagar em quantas vezes?</label>-->\n                                                                <!--<select class="form-control">-->\n                                                                    <!--<option>Aguardando cartão</option>-->\n                                                                <!--</select>-->\n                                                            <!--</div>-->\n                                                        <!--</div>-->\n\n                                                        <div class="row" style="margin: 30px;">\n                                                            <div class="col-xs-12 text-center form-group ">\n                                                                <button class="btn green-button add-inactive" (click)="finalizarCompra()">Finalizar Compra</button>\n                                                            </div>\n                                                        </div>\n                                                    </form>\n                                                </div>\n                                                <div role="tabpanel" class="tab-pane" id="boleto">...</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/seção pagamento-->\n                    </div>\n                </div>\n            </div>\n\n        </section>\n        <!--/ acordion payment-->\n\n\n        <div class="container-fluid">\n            <section class="row">\n                <div class="col-xs-12">\n                    <div class="wrapper">\n\n                        <!--logo body-->\n                        <div class="content-logo--body">\n                            <img src="assets/images/static/zukkin-logo-mobile-body.png" alt="" >\n                        </div>\n                        <!--/logo-body-->\n\n                    </div>\n                </div>\n            </section>\n        </div>\n    </main>\n    <!--/main-->\n\n    <app-footer [navCtrl]="navCtrl"></app-footer>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/finalizar-compra/finalizar-compra.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_4__app_usuario_shared_usuario_service__["a" /* UsuarioService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_endereco_endereco_service__["a" /* EnderecoService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_resumo_resumo__["a" /* ResumoProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_pedido_pedido_provider__["a" /* PedidoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_14__providers_estabelecimento_estabelecimento__["a" /* EstabelecimentoProvider */]])
], FinalizarCompraPage);

//# sourceMappingURL=finalizar-compra.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObrigadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedidos_pedidos__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ObrigadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObrigadoPage = (function () {
    function ObrigadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = navParams.get('id');
    }
    ObrigadoPage.prototype.paginaHome = function (ev) {
        ev.preventDefault();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ObrigadoPage.prototype.paginaPedidos = function (ev) {
        ev.preventDefault();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pedidos_pedidos__["a" /* PedidosPage */]);
    };
    return ObrigadoPage;
}());
ObrigadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-obrigado',template:/*ion-inline-start:"/var/www/html/app/src/pages/obrigado/obrigado.html"*/'<ion-content>\n\n    <!--Obrigado-->\n    <div class="modal-header">\n        <a href="#" class="close closeModal" data-dismiss="modal" aria-hidden="true" (click)="paginaHome($event)">&times;</a>\n        <h4 class="modal-title" id="">Obrigado pelo seu pedido!</h4>\n    </div>\n    <div class="modal-body">\n        <div class="row">\n            <div class="col-xs-12">\n                <p>Seu pedido foi recebido e está sendo processado.</p>\n                <p>Você pode acompanha-lo pela tela de <strong>meus pedidos.</strong></p>\n                <p>Nº do pedido:</p>\n                <p class="live-red">{{id}}</p>\n            </div>\n        </div>\n    </div>\n    <div class="modal-footer">\n        <div class="row">\n            <div class="col-xs-12">\n                <p class="text-left">\n                    <button class="btn btn-red--light" (click)="paginaPedidos($event)">Ir para meus pedidos</button>\n                </p>\n            </div>\n        </div>\n    </div>\n    <!--/Obrigado-->\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/obrigado/obrigado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ObrigadoPage);

//# sourceMappingURL=obrigado.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstabelecimentoMarketplacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_resumo_resumo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_endereco_endereco_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EstabelecimentoMarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstabelecimentoMarketplacePage = (function () {
    function EstabelecimentoMarketplacePage(navCtrl, navParams, configuracao, resumoProvider, loadingCtrl, localStorage, enderecoService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configuracao = configuracao;
        this.resumoProvider = resumoProvider;
        this.loadingCtrl = loadingCtrl;
        this.localStorage = localStorage;
        this.enderecoService = enderecoService;
        this.toastCtrl = toastCtrl;
        this.resumo = [];
    }
    EstabelecimentoMarketplacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Carregando estabelecimentos...'
        });
        loader.present();
        var params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos,
            lista: this.configuracao.lista.id,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase
        };
        this.resumoProvider.get(params).subscribe(function (response) {
            _this.resumo = response.filter(function (item) { return item.estabelecimento.pag_est_id != _this.configuracao.estabelecimentoBase; });
            _this.selecionado = response.find(function (item) { return item.estabelecimento.pag_est_id == _this.configuracao.estabelecimentoBase; });
            console.log(_this.selecionado);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
            console.error(error);
        });
    };
    EstabelecimentoMarketplacePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    EstabelecimentoMarketplacePage.prototype.anterior = function (ev) {
        ev.preventDefault();
        this.slides.slidePrev(500);
    };
    EstabelecimentoMarketplacePage.prototype.proximo = function (ev) {
        ev.preventDefault();
        this.slides.slideNext(500);
    };
    EstabelecimentoMarketplacePage.prototype.voltar = function (ev) {
        ev.preventDefault();
        this.navCtrl.pop();
    };
    EstabelecimentoMarketplacePage.prototype.alterarEstabelecimento = function (estabelecimento) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Alterando o estabelecimento...'
        });
        loader.present();
        this.enderecoService.alterarEstabelecimentoBase(this.configuracao.local.id, estabelecimento.pag_est_id).subscribe(function (response) {
            _this.configuracao.estabelecimentos = response['estabelecimentos'];
            _this.localStorage.atualizar(_this.configuracao);
            _this.configuracao.propagarAlteracao();
            loader.dismiss();
            _this.presentToast('Estabelecimento alterado com sucesso');
            _this.navCtrl.pop();
        }, function (error) {
            console.error(error);
            loader.dismiss();
            _this.presentToast('Não foi possível alterar o estabelecimento');
        });
    };
    return EstabelecimentoMarketplacePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], EstabelecimentoMarketplacePage.prototype, "slides", void 0);
EstabelecimentoMarketplacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-estabelecimento-marketplace',template:/*ion-inline-start:"/var/www/html/app/src/pages/estabelecimento-marketplace/estabelecimento-marketplace.html"*/'\n\n<ion-content>\n    <!--select-stores-->\n    <div id="select-stores" *ngIf="selecionado">\n        <div class="modal-header">\n            <a href="#" class="close closeModal" aria-hidden="true" (click)="voltar($event)">×</a>\n            <h4>Selecione um dos mercados para continuar comprando:</h4>\n        </div>\n        <div class="modal-body">\n            <div class="row">\n                <div class="col-xs-5">\n                    <div class="content-item">\n                        <div class="item">\n                            <img src="{{selecionado.estabelecimento.pag_est_logo}}" alt="{{selecionado.estabelecimento.pag_est_marca}}" class="img-responsive mCS_img_loaded">\n                            <div class="title">{{selecionado.estabelecimento.pag_est_marca}} - {{selecionado.estabelecimento.pag_est_local_b2c}}</div>\n\n                            <div class="valor" *ngIf="selecionado.lista.length > 0">R$ {{selecionado.total | number:\'1.2-2\'}}</div>\n                            <div class="valor" *ngIf="selecionado.lista.length == 0">&nbsp;</div>\n\n                            <div class="itens-valor"><span>{{selecionado.lista.length}}</span> de {{this.configuracao.lista.produtos.length}} itens</div>\n                            <div class="frete" *ngIf="selecionado.estabelecimento.frete">\n                                <strong>Frete:</strong> R$ {{selecionado.estabelecimento.frete | number:\'1.2-2\'}}\n                            </div>\n                            <div class="btn-content">\n                                <div class="btn btn-blue--confirm" (click)="alterarEstabelecimento(selecionado.estabelecimento)">Continuar</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf="resumo.length > 0">\n                    <div class="col-xs-1 content-item" (click)="anterior($event)">\n                        <a href="" class="sprites-arrow-product-left" (click)="anterior($event)">prev</a>\n                    </div>\n                    <div class="col-xs-5 content-item">\n                        <ion-slides>\n                            <ion-slide *ngFor="let item of resumo">\n                                <div class="item">\n                                    <img src="{{item.estabelecimento.pag_est_logo}}" alt="{{item.estabelecimento.pag_est_marca}}" class="img-responsive mCS_img_loaded">\n                                    <div class="title">{{item.estabelecimento.pag_est_marca}} - {{item.estabelecimento.pag_est_local_b2c}}</div>\n\n                                    <div class="valor" *ngIf="item.lista.length > 0">R$ {{item.total | number:\'1.2-2\'}}</div>\n                                    <div class="valor" *ngIf="item.lista.length == 0">&nbsp;</div>\n\n                                    <div class="itens-valor"><span>{{item.lista.length}}</span> de {{this.configuracao.lista.produtos.length}} itens</div>\n                                    <div class="frete" *ngIf="item.estabelecimento.frete">\n                                        <strong>Frete:</strong> R$ {{item.estabelecimento.frete | number:\'1.2-2\'}}\n                                    </div>\n                                    <div class="btn-content">\n                                        <div class="btn btn-green--transparent" (click)="alterarEstabelecimento(item.estabelecimento)" *ngIf="!item.economia">\n                                            Continuar\n                                        </div>\n                                        <div class="btn btn-green--transparent" (click)="alterarEstabelecimento(item.estabelecimento)" *ngIf="item.economia">\n                                            Troque <br />\n                                            e economize: <br/>\n                                            R$ {{item.economia | number:\'1.2-2\'}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-slide>\n                        </ion-slides>\n                    </div>\n                    <div class="col-xs-1 content-item" (click)="proximo($event)">\n                        <a href="" class="sprites-arrow-product-right" (click)="proximo($event)">next</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div><!-- /.modal-dialog -->\n    <!--/select-stores-->\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/app/src/pages/estabelecimento-marketplace/estabelecimento-marketplace.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_2__providers_resumo_resumo__["a" /* ResumoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_core_local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_endereco_endereco_service__["a" /* EnderecoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], EstabelecimentoMarketplacePage);

//# sourceMappingURL=estabelecimento-marketplace.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoDetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_avaliacao_avaliacao_model__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_avaliacao_avaliacao_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProdutoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoDetalhePage = (function () {
    function ProdutoDetalhePage(navCtrl, navParams, produtoService, loadingCtrl, configuracao, avaliacaoService, toastCtrl, localStorageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoService = produtoService;
        this.loadingCtrl = loadingCtrl;
        this.configuracao = configuracao;
        this.avaliacaoService = avaliacaoService;
        this.toastCtrl = toastCtrl;
        this.localStorageService = localStorageService;
        this.avaliacao = new __WEBPACK_IMPORTED_MODULE_4__providers_avaliacao_avaliacao_model__["a" /* AvaliacaoModel */]();
        this.accordionOpiniaoConsumidores = false;
        this.avaliacaoRequisicao = false;
    }
    ProdutoDetalhePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var id = this.navParams.get('id');
        var loader = this.createLoading('Carragando as informações do produto');
        loader.present();
        this.produtoService.detalhe(id).subscribe(function (response) {
            _this.produto = response;
            loader.dismiss();
            _this.carregarPrecoPorEstabelecmento();
            _this.produtosSemelhantes();
        }, function (error) {
            console.error(error);
            loader.dismiss();
        });
    };
    ProdutoDetalhePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    ProdutoDetalhePage.prototype.createLoading = function (message) {
        return this.loadingCtrl.create({
            content: message
        });
    };
    ProdutoDetalhePage.prototype.carregarPrecoPorEstabelecmento = function () {
        var _this = this;
        this.produtoService.precoPorEstabelecimento(this.produto.pag_pro_id).subscribe(function (response) { return _this.precos = response; }, function (error) { return console.error(error); });
    };
    ProdutoDetalhePage.prototype.produtosSemelhantes = function () {
        var _this = this;
        if (!this.produto.pag_produto_categoria || !this.produto.pag_produto_categoria.pag_cat_id) {
            this.semelhantes = [];
            return false;
        }
        this.produtoService.listarSemelhantes(this.produto).subscribe(function (response) {
            _this.semelhantes = response.body['data'].filter(function (item) { return item.pag_pro_id != _this.produto.pag_pro_id; });
        }, function (error) { return console.error(error); });
    };
    ProdutoDetalhePage.prototype.enviarAvaliacao = function (ev) {
        var _this = this;
        ev.preventDefault();
        this.avaliacao.pagProduto = this.produto.pag_pro_id;
        if (!this.avaliacao.isValid()) {
            this.presentToast('Preencha todos os campos da avaliaçoã');
            return false;
        }
        this.avaliacaoRequisicao = true;
        this.avaliacaoService.cadastrar(this.avaliacao).subscribe(function (response) {
            var msg = response ? response : 'Avaliação cadastrada com sucesso';
            _this.presentToast(msg);
            _this.avaliacaoRequisicao = false;
        }, function (error) {
            console.error(error);
            _this.presentToast('Não foi possível cadastrar a avaliação');
            _this.avaliacaoRequisicao = false;
        });
    };
    ProdutoDetalhePage.prototype.linkIndisponivel = function () {
        this.presentToast('Link indisponível no momento');
    };
    ProdutoDetalhePage.prototype.calcularDesconto = function (precoPromocao, precoNormal) {
        var result = (precoNormal - precoPromocao) * 100 / precoNormal;
        return Math.ceil(result);
    };
    ProdutoDetalhePage.prototype.mudarEstabelecimentoBase = function (estabelecimento) {
        this.configuracao.estabelecimentoBase = estabelecimento.pag_est_id;
        this.localStorageService.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();
        this.navCtrl.viewDidLoad;
    };
    return ProdutoDetalhePage;
}());
ProdutoDetalhePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-produto-detalhe',template:/*ion-inline-start:"/var/www/html/app/src/pages/produto-detalhe/produto-detalhe.html"*/'<ion-content>\n    <header>\n        <app-header-marketplace *ngIf="configuracao.modo == \'marketplace\'" [navCtrl]="navCtrl"></app-header-marketplace>\n        <app-header-comparacao *ngIf="configuracao.modo != \'marketplace\'" [navCtrl]="navCtrl"></app-header-comparacao>\n    </header>\n\n    <!--main-->\n    <main class="bg-gray produto-detalhe" *ngIf="produto">\n        <!--product image-->\n        <section class="product-image--content text-center">\n            <img src="{{ produto.pag_pro_imagem_absolute_url }}" alt="">\n        </section>\n        <!--/product images-->\n\n        <div class="container">\n            <!--product info -->\n            <section class="product-info--content">\n                <div class="row">\n                    <div class="col-xs-6">\n                        <p class="brand" *ngIf="produto.pag_marca && produto.pag_marca.pag_mar_nome">\n                            {{ produto.pag_marca.pag_mar_nome }}\n                        </p>\n                    </div>\n                    <div class="col-xs-6">\n                        <p class="cod">Cod.:{{ produto.pag_pro_id }}</p>\n                    </div>\n                </div>\n\n                <div class="row">\n                    <div class="col-xs-12">\n                        <p class="product-title">{{ produto.pag_pro_nome }}</p>\n                    </div>\n                </div>\n\n                <div class="row">\n                    <div class="col-xs-12">\n                        <div class="">\n                            <!--<p><span class="sprites-0-stars-mediun"></span><span class="avalie">Avalie</span></p>-->\n                        </div>\n                    </div>\n                </div>\n\n                <div class="row">\n                    <!--preços comparação-->\n                    <div class="col-xs-12" *ngIf="configuracao.modo !== \'marketplace\'">\n                        <div class="product-list-prices">\n                            <div class="prices preco-comparacao">\n                                <span class="price">R$ {{ produto.precos.preco_minimo | number:\'1.2-2\'}}</span>\n                                até\n                                <span class="price">R$ {{ produto.precos.preco_maximo | number:\'1.2-2\'}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/preços comparação-->\n\n                    <!--preços marketplace-->\n                    <div class="col-xs-5" *ngIf="configuracao.modo === \'marketplace\' && produto.precos.preco_promocao">\n                        <div class="off-content">\n                            <span class="sprites-percent"></span><span>{{ calcularDesconto(produto.precos.preco_promocao, produto.precos.preco_normal) }}% OFF</span>\n                        </div>\n                    </div>\n\n                    <div class="col-xs-7" *ngIf="configuracao.modo === \'marketplace\'">\n                        <div class="product-list-prices">\n                            <div class="prices" *ngIf="produto.precos.preco_promocao">\n                                <div class="price-strike">\n                                    R$ {{ produto.precos.preco_normal | number:\'1.2-2\'}}\n                                </div>\n                                <div class="price">\n                                    R$ {{ produto.precos.preco_promocao | number:\'1.2-2\'}}\n                                </div>\n                            </div>\n\n                            <div class="prices" *ngIf="!produto.precos.preco_promocao">\n                                <div class="price">\n                                    R$ {{ produto.precos.preco_normal | number:\'1.2-2\'}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/preços marketplace-->\n                </div>\n\n                <div class="row">\n                    <div class="select-content">\n                        <div class="col-xs-3">\n                            <app-produto-select-quantidade [produto]="produto" [navCtrl]="navCtrl"></app-produto-select-quantidade>\n                        </div>\n\n                        <div class="col-xs-9">\n                            <app-produto-btn-adicionar-remover [produto]="produto" [navCtrl]="navCtrl" [fullWidth]=true></app-produto-btn-adicionar-remover>\n                        </div>\n                    </div>\n                </div>\n\n                <!--<div class="row">-->\n                <!--<div class="col-xs-12">-->\n                <!--<div class="content-description">-->\n                <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n            </section>\n            <!--/product info-->\n        </div>\n\n        <app-produto-alerta-preco *ngIf="configuracao.usuario.token" [produto]="produto"></app-produto-alerta-preco>\n\n        <section class="alert">\n            <div class="row">\n                <div class="col-xs-12 bg-red-light">\n                    <p class="alert-info--home">*Não nos responsabilizamos pelos preços divulgados,\n                        pois pode ocorrer alterações dos preços informados.</p>\n                </div>\n            </div>\n        </section>\n\n\n        <!--grafico-->\n        <!--<section class="grafic">-->\n        <!--<h1>Histórico de preços</h1>-->\n        <!--<p>Ver histórico:</p>-->\n        <!--<div id="chart-container">FusionCharts will render here</div>-->\n        <!--</section>-->\n        <!--/grafico-->\n\n        <div style="margin-top: 30px;" *ngIf="!precos" class="text-center">\n            <ion-spinner></ion-spinner>\n            <br/>\n            Carregando preços nos estabelecimentos...\n        </div>\n        <!--OUTROS SUPERMERCADOS-->\n        <section class="outros-supermercados--content" *ngIf="precos && precos.length > 0">\n            <div class="row">\n                <div class="col-xs-12">\n                    <h1>Veja os Preços nos Supermercados</h1>\n                </div>\n            </div>\n\n            <div class="supermercados-item">\n                <div class="container" id="accordionsp">\n\n                    <div *ngFor="let item of precos">\n                        <div *ngIf="item.estabelecimento.pag_est_id != configuracao.estabelecimentoBase">\n                            <div class="row">\n                                <div class="col-xs-3">\n                                    <img src="{{ item.estabelecimento.pag_est_logo_absolute_url }}"\n                                         alt="{{ item.estabelecimento.pag_est_marca }}" class="img-responsive">\n                                </div>\n\n                                <!--modo comparação-->\n                                <div class="col-xs-9" *ngIf="configuracao.modo !== \'marketplace\'">\n                                    <p>{{ item.estabelecimento.pag_est_marca }} - {{ item.estabelecimento.pag_est_local_b2c }}</p>\n                                    <div class="product-list-prices">\n                                        <div class="prices">\n                                            <div class="price price-comparacao">\n                                                R$ {{ item.preco_normal | number:\'1.2-2\'}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/modo comparação-->\n\n                                <!--modo marketplace-->\n                                <div class="col-xs-5" *ngIf="configuracao.modo === \'marketplace\'">\n                                    <p>{{ item.estabelecimento.pag_est_marca }} - {{ item.estabelecimento.pag_est_local_b2c }}</p>\n                                    <div class="product-list-prices">\n                                        <div class="prices" *ngIf="item.preco_promocao">\n                                            <div class="price-strike">\n                                                R$ {{ item.preco_normal | number:\'1.2-2\'}}\n                                            </div>\n                                            <div class="price">\n                                                R$ {{ item.preco_promocao | number:\'1.2-2\'}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="col-xs-3 text-right" *ngIf="configuracao.modo === \'marketplace\'">\n                                    <div class="change-store">\n                                        <a href="" (click)="mudarEstabelecimentoBase(item.estabelecimento)"><span class="sprites-change-storeWhite"></span> Trocar</a>\n                                    </div>\n                                </div>\n                                <!--/modo marketplace-->\n                            </div>\n\n                            <div class="row">\n                                <div class="col-xs-12">\n                                    <div class="update">\n                                        <span>Atualizado em:</span>\n                                        {{ item.preco_data | date:\'dd/MM/yyyy\' }} |\n                                        <strong>{{ item.preco_data | date:\'HH:mm\' }}</strong>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </section>\n        <!--/OUTROS SUPERMERCADOS-->\n\n        <!--nutricional description-->\n        <section class="nutricional-description--content container-fluid">\n            <div class="" id="accordioninfo">\n                <!--<div class="">-->\n                <!--<div class="panel-heading">-->\n                <!--<h4 class="panel-title">-->\n                <!--<a data-toggle="collapse" data-parent="#accordioninfo" href="#collapseinfoOne">-->\n                <!--<h1>Informação nutricional:</h1>-->\n                <!--</a>-->\n                <!--</h4>-->\n                <!--</div>-->\n                <!--<div id="collapseinfoOne" class="panel-collapse collapse">-->\n                <!--<div class="panel-body">-->\n                <!--<div class="row">-->\n                <!--<div class="table-information">-->\n                <!--<div class="col-xs-7">-->\n                <!--<p class="line-white">Energia Kcal</p>-->\n                <!--</div>-->\n                <!--<div class="col-xs-5">-->\n                <!--<p class="line-white">329kcal</p>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n\n                <!--<div class="row">-->\n                <!--<div class="table-information">-->\n                <!--<div class="col-xs-7">-->\n                <!--<p>Energia Kj</p>-->\n                <!--</div>-->\n                <!--<div class="col-xs-5">-->\n                <!--<p>329kj</p>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n\n                <!--<div class="row">-->\n                <!--<div class="table-information">-->\n                <!--<div class="col-xs-7">-->\n                <!--<p class="line-white">Energia Kcal</p>-->\n                <!--</div>-->\n                <!--<div class="col-xs-5">-->\n                <!--<p class="line-white">329kcal</p>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n\n                <div class="">\n                    <div class="panel-heading">\n                        <h4 class="panel-title">\n                            <a data-toggle="collapse" data-parent="#accordioninfo"\n                               (click)="accordionOpiniaoConsumidores = !accordionOpiniaoConsumidores">\n                                <h1>Opinião dos consumidores:</h1>\n                            </a>\n                        </h4>\n                    </div>\n\n                    <div id="collapseinfoTwo" class="panel-collapse"\n                         [ngClass]="accordionOpiniaoConsumidores ? \'\' : \'panel-collapse collapse\'">\n                        <div class="avaliationbox-stars">\n                            <!--<div class="row">-->\n                                <!--<div class="col-xs-4">-->\n                                    <!--<div class="sprites-1-stars-small"></div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-5">-->\n                                    <!--<div class="progress">-->\n                                        <!--<div class="progress-bar progress-bar-danger" role="progressbar"-->\n                                             <!--aria-valuenow="20"-->\n                                             <!--aria-valuemin="0" aria-valuemax="100" style="width:20%">-->\n                                        <!--</div>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-1">-->\n                                    <!--<p>1</p>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class="row">-->\n                                <!--<div class="col-xs-4">-->\n                                    <!--<div class="sprites-2-stars-small"></div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-5">-->\n                                    <!--<div class="progress">-->\n                                        <!--<div class="progress-bar progress-bar-danger" role="progressbar"-->\n                                             <!--aria-valuenow="40"-->\n                                             <!--aria-valuemin="0" aria-valuemax="100" style="width:40%">-->\n                                        <!--</div>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-1">-->\n                                    <!--<p>2</p>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class="row">-->\n                                <!--<div class="col-xs-4">-->\n                                    <!--<div class="sprites-3-stars-small"></div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-5">-->\n                                    <!--<div class="progress">-->\n                                        <!--<div class="progress-bar progress-bar-danger" role="progressbar"-->\n                                             <!--aria-valuenow="60"-->\n                                             <!--aria-valuemin="0" aria-valuemax="100" style="width:60%">-->\n                                        <!--</div>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n\n                                <!--<div class="col-xs-1">-->\n                                    <!--<p>3</p>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class="row">-->\n                                <!--<div class="col-xs-4">-->\n                                    <!--<div class="sprites-4-stars-small"></div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-5">-->\n                                    <!--<div class="progress">-->\n                                        <!--<div class="progress-bar progress-bar-danger" role="progressbar"-->\n                                             <!--aria-valuenow="80"-->\n                                             <!--aria-valuemin="0" aria-valuemax="100" style="width:80%">-->\n                                        <!--</div>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-1">-->\n                                    <!--<p>4</p>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class="row">-->\n                                <!--<div class="col-xs-4">-->\n                                    <!--<div class="sprites-5-stars-small"></div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-5">-->\n                                    <!--<div class="progress">-->\n                                        <!--<div class="progress-bar progress-bar-danger" role="progressbar"-->\n                                             <!--aria-valuenow="100"-->\n                                             <!--aria-valuemin="0" aria-valuemax="100" style="width:100%">-->\n                                        <!--</div>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class="col-xs-1">-->\n                                    <!--<p>5</p>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class="row">-->\n                                <!--<div class="col-xs-12">-->\n                                    <!--<div class="product-avaliations-box">-->\n                                        <!--<p>Produto maravilhoso.</p>-->\n                                        <!--<p class="sprites-5-stars-large"></p>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <div class="row">\n                                <div class="col-md-12">\n                                    <h1>O que achou do produto?</h1>\n                                </div>\n\n                                <!--<div class="col-xs-12">-->\n                                    <!--<div class="sprites-0-stars-extra-large"></div>-->\n                                <!--</div>-->\n                                <div class="col-xs-12">\n                                    <label><input type="radio" name="nota" (click)="avaliacao.pagAvaNota = 1" /> 1</label>\n                                    <label><input type="radio" name="nota" (click)="avaliacao.pagAvaNota = 2" /> 2</label>\n                                    <label><input type="radio" name="nota" (click)="avaliacao.pagAvaNota = 3" /> 3</label>\n                                    <label><input type="radio" name="nota" (click)="avaliacao.pagAvaNota = 4" /> 4</label>\n                                    <label><input type="radio" name="nota" (click)="avaliacao.pagAvaNota = 5" /> 5</label>\n                                </div>\n                            </div>\n\n                            <div class="row">\n                                <div class="col-md-12" style="width: 100%;">\n                                    <form action="" class="formulario formulario-avaliation">\n                                        <div class="form-group">\n                                            <textarea type="text" class="form-control"\n                                                      id="area"\n                                                      placeholder="Digite aqui o que achou do produto"\n                                                      name="avaliacaoMensagem"\n                                                      [(ngModel)]="avaliacao.pagAvaMensagem"\n                                            ></textarea>\n                                        </div>\n\n                                        <div class="form-group">\n                                            <input type="text" class="form-control"\n                                                   id="nome"\n                                                   placeholder="Digite aqui seu nome"\n                                                   name="nome"\n                                                   [(ngModel)]="avaliacao.pagAvaNome"\n                                            >\n                                        </div>\n\n                                        <div class="form-group">\n                                            <input type="email" class="form-control" id="email"\n                                                   placeholder="Digite aqui seu email"\n                                                   name="email"\n                                                   [(ngModel)]="avaliacao.pagAvaEmail"\n                                            >\n                                        </div>\n\n                                        <div class="row">\n                                            <div class="pull-right">\n                                                <button class="btn btn-red--comparar" (click)="enviarAvaliacao($event)" *ngIf="!avaliacaoRequisicao">\n                                                    Publicar opinião\n                                                </button>\n                                                <button class="btn btn-red--comparar" *ngIf="avaliacaoRequisicao" disabled>\n                                                    Processando...\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!--nutricional description-->\n\n\n        <div style="margin-top: 30px;" *ngIf="!semelhantes" class="text-center">\n            <ion-spinner></ion-spinner>\n            <br/>\n            Carregando produtos semelhantes...\n        </div>\n\n        <!--compre também-->\n        <app-produto-agrupamento\n            *ngIf="semelhantes && semelhantes.length > 0"\n            [imagem]="null"\n            [titulo]="\'Você pode gostar também:\'"\n            [slug]="null"\n            [produtos]="semelhantes"\n            [navCtrl]="navCtrl"\n        >\n        </app-produto-agrupamento>\n        <!--/compre também-->\n\n        <div class="container-fluid">\n            <section class="row">\n                <div class="col-xs-12">\n                    <div class="wrapper">\n\n                        <!--logo body-->\n                        <div class="content-logo--body">\n                            <img src="../assets/images/static/zukkin-logo-mobile-body.png" alt="">\n                        </div>\n                        <!--/logo-body-->\n\n                    </div>\n                </div>\n            </section>\n        </div>\n    </main>\n    <!--/main-->\n\n    <app-footer [navCtrl]="navCtrl"></app-footer>\n</ion-content>\n\n<ion-footer>\n    <app-footer-resumo [navCtrl]="navCtrl"></app-footer-resumo>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/app/src/pages/produto-detalhe/produto-detalhe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto_service__["a" /* ProdutoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_5__providers_avaliacao_avaliacao_service__["a" /* AvaliacaoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__app_core_local_storage_service__["a" /* LocalStorageService */]])
], ProdutoDetalhePage);

//# sourceMappingURL=produto-detalhe.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvaliacaoService = (function () {
    function AvaliacaoService(httpClient, configurationService) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + '/avaliacoes';
    }
    AvaliacaoService.prototype.cadastrar = function (avaliacao) {
        return this.httpClient.post(this.apiUrl, avaliacao);
    };
    return AvaliacaoService;
}());
AvaliacaoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */]])
], AvaliacaoService);

//# sourceMappingURL=avaliacao.service.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertaService = (function () {
    function AlertaService(httpClient, configurationService) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        var apiWeb = this.configurationService.getValue("api-web");
        this.apiUrl = apiWeb.url + '/alerta';
    }
    AlertaService.prototype.cadastrar = function (alerta) {
        return this.httpClient.post(this.apiUrl, alerta);
    };
    AlertaService.prototype.editar = function (alerta) {
        return this.httpClient.put(this.apiUrl + ("/" + alerta.pagAleId), alerta);
    };
    AlertaService.prototype.pesquisarPeloProduto = function (produto) {
        return this.httpClient.get(this.apiUrl + ("?pagProduto=" + produto));
    };
    return AlertaService;
}());
AlertaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_configuration_service__["a" /* ConfigurationService */]])
], AlertaService);

//# sourceMappingURL=alerta.service.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparacaoPageModule", function() { return ComparacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comparacao__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComparacaoPageModule = (function () {
    function ComparacaoPageModule() {
    }
    return ComparacaoPageModule;
}());
ComparacaoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comparacao__["a" /* ComparacaoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comparacao__["a" /* ComparacaoPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], ComparacaoPageModule);

//# sourceMappingURL=comparacao.module.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoMarketplacePageModule", function() { return EstabelecimentoMarketplacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estabelecimento_marketplace__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstabelecimentoMarketplacePageModule = (function () {
    function EstabelecimentoMarketplacePageModule() {
    }
    return EstabelecimentoMarketplacePageModule;
}());
EstabelecimentoMarketplacePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__estabelecimento_marketplace__["a" /* EstabelecimentoMarketplacePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estabelecimento_marketplace__["a" /* EstabelecimentoMarketplacePage */]),
        ],
    })
], EstabelecimentoMarketplacePageModule);

//# sourceMappingURL=estabelecimento-marketplace.module.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoSelecionarPageModule", function() { return EstabelecimentoSelecionarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estabelecimento_selecionar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_pipe__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EstabelecimentoSelecionarPageModule = (function () {
    function EstabelecimentoSelecionarPageModule() {
    }
    return EstabelecimentoSelecionarPageModule;
}());
EstabelecimentoSelecionarPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__estabelecimento_selecionar__["a" /* EstabelecimentoSelecionarPage */],
            __WEBPACK_IMPORTED_MODULE_3__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estabelecimento_selecionar__["a" /* EstabelecimentoSelecionarPage */]),
        ],
    })
], EstabelecimentoSelecionarPageModule);

//# sourceMappingURL=estabelecimento-selecionar.module.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarCompraPageModule", function() { return FinalizarCompraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalizar_compra__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_estabelecimento_estabelecimento__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FinalizarCompraPageModule = (function () {
    function FinalizarCompraPageModule() {
    }
    return FinalizarCompraPageModule;
}());
FinalizarCompraPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__finalizar_compra__["a" /* FinalizarCompraPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finalizar_compra__["a" /* FinalizarCompraPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_estabelecimento_estabelecimento__["a" /* EstabelecimentoProvider */]
        ]
    })
], FinalizarCompraPageModule);

//# sourceMappingURL=finalizar-compra.module.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPageModule", function() { return ListaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaPageModule = (function () {
    function ListaPageModule() {
    }
    return ListaPageModule;
}());
ListaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista__["a" /* ListaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista__["a" /* ListaPage */])
        ],
    })
], ListaPageModule);

//# sourceMappingURL=lista.module.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusEnderecosPageModule", function() { return MeusEnderecosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meus_enderecos__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeusEnderecosPageModule = (function () {
    function MeusEnderecosPageModule() {
    }
    return MeusEnderecosPageModule;
}());
MeusEnderecosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__meus_enderecos__["a" /* MeusEnderecosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meus_enderecos__["a" /* MeusEnderecosPage */]),
        ],
    })
], MeusEnderecosPageModule);

//# sourceMappingURL=meus-enderecos.module.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrigadoPageModule", function() { return ObrigadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obrigado__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ObrigadoPageModule = (function () {
    function ObrigadoPageModule() {
    }
    return ObrigadoPageModule;
}());
ObrigadoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__obrigado__["a" /* ObrigadoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__obrigado__["a" /* ObrigadoPage */]),
        ],
    })
], ObrigadoPageModule);

//# sourceMappingURL=obrigado.module.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PedidosPageModule = (function () {
    function PedidosPageModule() {
    }
    return PedidosPageModule;
}());
PedidosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], PedidosPageModule);

//# sourceMappingURL=pedidos.module.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoDetalhePageModule", function() { return ProdutoDetalhePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_detalhe__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProdutoDetalhePageModule = (function () {
    function ProdutoDetalhePageModule() {
    }
    return ProdutoDetalhePageModule;
}());
ProdutoDetalhePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__produto_detalhe__["a" /* ProdutoDetalhePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produto_detalhe__["a" /* ProdutoDetalhePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], ProdutoDetalhePageModule);

//# sourceMappingURL=produto-detalhe.module.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProdutosPageModule = (function () {
    function ProdutosPageModule() {
    }
    return ProdutosPageModule;
}());
ProdutosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */]
        ]
    })
], ProdutosPageModule);

//# sourceMappingURL=produtos.module.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCadastroEnderecoPageModule", function() { return UsuarioCadastroEnderecoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_cadastro_endereco__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsuarioCadastroEnderecoPageModule = (function () {
    function UsuarioCadastroEnderecoPageModule() {
    }
    return UsuarioCadastroEnderecoPageModule;
}());
UsuarioCadastroEnderecoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__usuario_cadastro_endereco__["a" /* UsuarioCadastroEnderecoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuario_cadastro_endereco__["a" /* UsuarioCadastroEnderecoPage */])
        ],
    })
], UsuarioCadastroEnderecoPageModule);

//# sourceMappingURL=usuario-cadastro-endereco.module.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCadastroPageModule", function() { return UsuarioCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_cadastro__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsuarioCadastroPageModule = (function () {
    function UsuarioCadastroPageModule() {
    }
    return UsuarioCadastroPageModule;
}());
UsuarioCadastroPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__usuario_cadastro__["a" /* UsuarioCadastroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuario_cadastro__["a" /* UsuarioCadastroPage */]),
            __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"]
        ],
    })
], UsuarioCadastroPageModule);

//# sourceMappingURL=usuario-cadastro.module.js.map

/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(275);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadConfiguration */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_template_util__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_endereco_endereco_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_usuario_cadastro_endereco_usuario_cadastro_endereco_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_usuario_cadastro_usuario_cadastro_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bem_vindo_bem_vindo_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_usuario_editar_perfil_usuario_editar_perfil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_cidade_cidade__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_configuration_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__usuario_usuario_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_core_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_estabelecimento_estabelecimento__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_produto_produto_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_util_http_util__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_busca_busca_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_produtos_produtos_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_produto_detalhe_produto_detalhe_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_alerta_alerta_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_avaliacao_avaliacao_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_lista_lista_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_lista_lista__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_usuario_estabelecimento_usuario_estabelecimento__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_estabelecimento_selecionar_estabelecimento_selecionar_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_comparacao_comparacao_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_resumo_resumo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_lista_lista_util__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_meus_enderecos_meus_enderecos_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_text_mask__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_estabelecimento_marketplace_estabelecimento_marketplace_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_in_app_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_carrinho_carrinho_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_finalizar_compra_finalizar_compra_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_pedido_pedido_provider__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_obrigado_obrigado_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_pedidos_pedidos_module__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//import { Geolocation } from '@ionic-native/geolocation';






























function loadConfiguration(configurationService) {
    return function () { return configurationService.load("assets/settings.json"); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_usuario_editar_perfil_usuario_editar_perfil__["a" /* UsuarioEditarPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/bem-vindo/bem-vindo.module#BemVindoPageModule', name: 'BemVindoPage', segment: 'bem-vindo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/busca/busca.module#BuscaPageModule', name: 'BuscaPage', segment: 'busca', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comparacao/comparacao.module#ComparacaoPageModule', name: 'ComparacaoPage', segment: 'comparacao', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/estabelecimento-marketplace/estabelecimento-marketplace.module#EstabelecimentoMarketplacePageModule', name: 'EstabelecimentoMarketplacePage', segment: 'estabelecimento-marketplace', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/estabelecimento-selecionar/estabelecimento-selecionar.module#EstabelecimentoSelecionarPageModule', name: 'EstabelecimentoSelecionarPage', segment: 'estabelecimento-selecionar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/finalizar-compra/finalizar-compra.module#FinalizarCompraPageModule', name: 'FinalizarCompraPage', segment: 'finalizar-compra', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista/lista.module#ListaPageModule', name: 'ListaPage', segment: 'lista', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meus-enderecos/meus-enderecos.module#MeusEnderecosPageModule', name: 'MeusEnderecosPage', segment: 'meus-enderecos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/obrigado/obrigado.module#ObrigadoPageModule', name: 'ObrigadoPage', segment: 'obrigado', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pedidos/pedidos.module#PedidosPageModule', name: 'PedidosPage', segment: 'pedidos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/produto-detalhe/produto-detalhe.module#ProdutoDetalhePageModule', name: 'ProdutoDetalhePage', segment: 'produto-detalhe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/produtos/produtos.module#ProdutosPageModule', name: 'ProdutosPage', segment: 'produtos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usuario-cadastro-endereco/usuario-cadastro-endereco.module#UsuarioCadastroEnderecoPageModule', name: 'UsuarioCadastroEnderecoPage', segment: 'usuario-cadastro-endereco', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usuario-cadastro/usuario-cadastro.module#UsuarioCadastroPageModule', name: 'UsuarioCadastroPage', segment: 'usuario-cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usuario-editar-perfil/usuario-editar-perfil.module#UsuarioEditarPerfilPageModule', name: 'UsuarioEditarPerfilPage', segment: 'usuario-editar-perfil', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_21__usuario_usuario_module__["a" /* UsuarioModule */],
            __WEBPACK_IMPORTED_MODULE_22__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_13__pages_bem_vindo_bem_vindo_module__["BemVindoPageModule"],
            __WEBPACK_IMPORTED_MODULE_5__pages_usuario_cadastro_usuario_cadastro_module__["UsuarioCadastroPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__pages_usuario_cadastro_endereco_usuario_cadastro_endereco_module__["UsuarioCadastroEnderecoPageModule"],
            __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_26__pages_busca_busca_module__["BuscaPageModule"],
            __WEBPACK_IMPORTED_MODULE_34__pages_estabelecimento_selecionar_estabelecimento_selecionar_module__["EstabelecimentoSelecionarPageModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_produto_detalhe_produto_detalhe_module__["ProdutoDetalhePageModule"],
            __WEBPACK_IMPORTED_MODULE_26__pages_busca_busca_module__["BuscaPageModule"],
            __WEBPACK_IMPORTED_MODULE_27__pages_produtos_produtos_module__["ProdutosPageModule"],
            __WEBPACK_IMPORTED_MODULE_31__pages_lista_lista_module__["ListaPageModule"],
            __WEBPACK_IMPORTED_MODULE_35__pages_comparacao_comparacao_module__["ComparacaoPageModule"],
            __WEBPACK_IMPORTED_MODULE_38__pages_meus_enderecos_meus_enderecos_module__["MeusEnderecosPageModule"],
            __WEBPACK_IMPORTED_MODULE_39_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_40__pages_estabelecimento_marketplace_estabelecimento_marketplace_module__["EstabelecimentoMarketplacePageModule"],
            __WEBPACK_IMPORTED_MODULE_42__pages_carrinho_carrinho_module__["CarrinhoPageModule"],
            __WEBPACK_IMPORTED_MODULE_35__pages_comparacao_comparacao_module__["ComparacaoPageModule"],
            __WEBPACK_IMPORTED_MODULE_43__pages_finalizar_compra_finalizar_compra_module__["FinalizarCompraPageModule"],
            __WEBPACK_IMPORTED_MODULE_45__pages_obrigado_obrigado_module__["ObrigadoPageModule"],
            __WEBPACK_IMPORTED_MODULE_46__pages_pedidos_pedidos_module__["PedidosPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_usuario_editar_perfil_usuario_editar_perfil__["a" /* UsuarioEditarPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_cidade_cidade__["a" /* CidadeProvider */],
            //Geolocation,
            __WEBPACK_IMPORTED_MODULE_18_ionic_configuration_service__["a" /* ConfigurationService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["APP_INITIALIZER"],
                useFactory: loadConfiguration,
                deps: [__WEBPACK_IMPORTED_MODULE_18_ionic_configuration_service__["a" /* ConfigurationService */]],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_20__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_estabelecimento_estabelecimento__["a" /* EstabelecimentoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_endereco_endereco_service__["a" /* EnderecoService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_util_template_util__["a" /* TemplateUtil */],
            __WEBPACK_IMPORTED_MODULE_24__providers_produto_produto_service__["a" /* ProdutoService */],
            __WEBPACK_IMPORTED_MODULE_25__providers_util_http_util__["a" /* HttpUtil */],
            __WEBPACK_IMPORTED_MODULE_29__providers_alerta_alerta_service__["a" /* AlertaService */],
            __WEBPACK_IMPORTED_MODULE_33__providers_usuario_estabelecimento_usuario_estabelecimento__["a" /* UsuarioEstabelecimentoProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_avaliacao_avaliacao_service__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_32__providers_lista_lista__["a" /* ListaProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["LOCALE_ID"], useValue: "pt-BR" },
            __WEBPACK_IMPORTED_MODULE_36__providers_resumo_resumo__["a" /* ResumoProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_lista_lista_util__["a" /* ListaUtil */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_44__providers_pedido_pedido_provider__["a" /* PedidoProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoModel; });
var EnderecoModel = (function () {
    function EnderecoModel() {
    }
    EnderecoModel.prototype.isValid = function () {
        return this.pagUsuEndNome
            && this.pagUsuEndCep
            && this.pagUsuEndLogradouro
            && this.pagCidade;
    };
    return EnderecoModel;
}());

//# sourceMappingURL=endereco.model.js.map

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cartao; });
var Cartao = (function () {
    function Cartao() {
        this.bandeiras = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            master: /^5[1-5][0-9]{14}/,
            amex: /^3[47][0-9]{13}/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/
        };
    }
    Cartao.prototype.validarNumero = function () {
        return this.obterBandeira();
    };
    Cartao.prototype.validarCvv = function () {
    };
    Cartao.prototype.obterBandeira = function () {
        var numero = new String(this.numero);
        this.bandeira = false;
        for (var bandeira in this.bandeiras) {
            if (numero.match(this.bandeiras[bandeira])) {
                this.bandeira = bandeira;
                break;
            }
        }
        return this.bandeira;
    };
    Cartao.prototype.validarDados = function () {
        var cvvRegex = /^[0-9]{3,4}$/;
        return cvvRegex.test(this.cvv) && this.validarNumero() && this.nomeCompleto;
    };
    return Cartao;
}());

//# sourceMappingURL=cartao.model.js.map

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = (function () {
    function Pedido() {
    }
    Pedido.prototype.validarDados = function () {
        return this.estabelecimento
            && this.entregaTipo
            && this.subTotal
            && this.produtos
            && this.cartao
            && this.endereco;
    };
    return Pedido;
}());

//# sourceMappingURL=pedido.model.js.map

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComparacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_usuario_cadastro_usuario_cadastro__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lista_lista__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_estabelecimento_selecionar_estabelecimento_selecionar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_comparacao_comparacao__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the HeaderComparacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComparacaoComponent = (function () {
    function HeaderComparacaoComponent(menuCtrl, configuracao) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.configuracao = configuracao;
        this.configuracao.alteracao.subscribe(function (configuracao) {
            _this.logado = _this.configuracao.usuario.token != "";
        });
    }
    HeaderComparacaoComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HeaderComparacaoComponent.prototype.paginaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_usuario_cadastro_usuario_cadastro__["a" /* UsuarioCadastroPage */]);
    };
    HeaderComparacaoComponent.prototype.paginaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    HeaderComparacaoComponent.prototype.paginaHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    HeaderComparacaoComponent.prototype.modalLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_lista_lista__["a" /* ListaPage */]);
        return false;
    };
    HeaderComparacaoComponent.prototype.estabelecimentos = function () {
        console.info("estabelecimentos!");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_estabelecimento_selecionar_estabelecimento_selecionar__["a" /* EstabelecimentoSelecionarPage */]);
    };
    HeaderComparacaoComponent.prototype.comparacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_comparacao_comparacao__["a" /* ComparacaoPage */]);
    };
    return HeaderComparacaoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], HeaderComparacaoComponent.prototype, "navCtrl", void 0);
HeaderComparacaoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header-comparacao',template:/*ion-inline-start:"/var/www/html/app/src/components/header-comparacao/header-comparacao.html"*/'<div class="row">\n    <div class="col-xs-2" (click)="openMenu()">\n        <nav id="navside">\n            <a id="open" class="sprites-menu-hamburguer">Open</a>\n        </nav>\n    </div>\n    <div class="col-xs-3">\n        <a href="#" class="sprites-zukkin-logo-mobile" (click)="paginaHome()"></a>\n    </div>\n\n    <div class="col-xs-2">\n        <a href="#" class="icone-mercado" (click)="estabelecimentos()" *ngIf="configuracao.usuario.token"></a>\n    </div>\n    <div class="col-xs-2">\n        <a href="#" class="sprites-list-blue" (click)="modalLista()" *ngIf="configuracao.usuario.token"></a>\n    </div>\n    <div class="pull-right item">\n        <div class="compare-item" (click)="comparacao()" *ngIf="configuracao.usuario.token">Comparar</div>\n        <div class="compare-item" (click)="paginaLogin()" *ngIf="!configuracao.usuario.token">Entrar</div>\n    </div>\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/header-comparacao/header-comparacao.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */]])
], HeaderComparacaoComponent);

//# sourceMappingURL=header-comparacao.js.map

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMarketplaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_carrinho_carrinho__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_usuario_editar_perfil_usuario_editar_perfil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the HeaderMarketplaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderMarketplaceComponent = (function () {
    function HeaderMarketplaceComponent(menuCtrl, configuracao) {
        this.menuCtrl = menuCtrl;
        this.configuracao = configuracao;
    }
    HeaderMarketplaceComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HeaderMarketplaceComponent.prototype.paginaCadastro = function () {
        if (this.configuracao.usuario.token) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_usuario_editar_perfil_usuario_editar_perfil__["a" /* UsuarioEditarPerfilPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        }
    };
    HeaderMarketplaceComponent.prototype.paginaLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */]);
    };
    HeaderMarketplaceComponent.prototype.paginaCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    HeaderMarketplaceComponent.prototype.paginaHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return HeaderMarketplaceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], HeaderMarketplaceComponent.prototype, "navCtrl", void 0);
HeaderMarketplaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header-marketplace',template:/*ion-inline-start:"/var/www/html/app/src/components/header-marketplace/header-marketplace.html"*/'<div class="row">\n    <div class="col-xs-2" (click)="openMenu()">\n        <nav id="navside">\n            <a id="open" class="sprites-menu-hamburguer">Open</a>\n        </nav>\n    </div>\n\n  <div class="col-xs-4">\n      <a href="#" class="sprites-zukkin-logo-mobile" (click)="paginaHome()"></a>\n  </div>\n\n    <div class="col-xs-2">\n        <a class="sprites-user-icon" (click)="paginaCadastro()" *ngIf="!configuracao.usuario.token"></a>\n    </div>\n    <div class="col-xs-2">\n        <a class="sprites-list" (click)="paginaLista()"></a>\n    </div>\n    <div class="col-xs-2" (click)="paginaCarrinho()">\n        <a class="sprites-cart-icon"></a>\n        <div class="carret-cart">\n            <span>{{configuracao.lista.produtosDisponiveisNoMercado ? configuracao.lista.produtosDisponiveisNoMercado.length : 0}}</span>\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/header-marketplace/header-marketplace.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */]])
], HeaderMarketplaceComponent);

//# sourceMappingURL=header-marketplace.js.map

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModoDeVisualizacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_usuario_shared_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModoDeVisualizacaoComponent = (function () {
    function ModoDeVisualizacaoComponent(configuracao, usuarioService, localStorage) {
        this.configuracao = configuracao;
        this.usuarioService = usuarioService;
        this.localStorage = localStorage;
    }
    ModoDeVisualizacaoComponent.prototype.alterar = function (modo) {
        this.configuracao.modo = modo;
        if (this.configuracao.usuario) {
            this.usuarioService.alterarModoDeVisualizacao(modo);
        }
        this.localStorage.atualizar(this.configuracao);
        this.configuracao.propagarAlteracao();
        // this.menuCtrl.close();
    };
    return ModoDeVisualizacaoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModoDeVisualizacaoComponent.prototype, "modo", void 0);
ModoDeVisualizacaoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modo-de-visualizacao',template:/*ion-inline-start:"/var/www/html/app/src/components/modulo-de-visualizacao/modo-de-visualizacao.component.html"*/'<select [(ngModel)]="modo" (change)="alterar(modo)" class="form-control select-modo-de-visualizacao">\n    <option value="marketplace" *ngIf="configuracao.estabelecimentosMarketplace.length > 0">Comprar Online</option>\n    <option value="comparacao" *ngIf="configuracao.estabelecimentosComparacao.length > 0">Comparar Preços</option>\n</select>\n'/*ion-inline-end:"/var/www/html/app/src/components/modulo-de-visualizacao/modo-de-visualizacao.component.html"*/,
        styles: ['./modo-de-visualizacao.component.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_2__app_usuario_shared_usuario_service__["a" /* UsuarioService */],
        __WEBPACK_IMPORTED_MODULE_1__app_core_local_storage_service__["a" /* LocalStorageService */]])
], ModoDeVisualizacaoComponent);

//# sourceMappingURL=modo-de-visualizacao.component.js.map

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HomeTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HomeTabsComponent = (function () {
    function HomeTabsComponent() {
        this.tab = 'tab1';
    }
    HomeTabsComponent.prototype.alterarTab = function (string) {
        this.tab = string;
    };
    return HomeTabsComponent;
}());
HomeTabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-tabs',template:/*ion-inline-start:"/var/www/html/app/src/components/home-tabs/home-tabs.html"*/'<div class="wrapper">\n    <!--how-works-->\n\n    <div class="how-works">\n        <div class="container-fluid">\n            <h1>Como funciona o Zukkin?</h1>\n        </div>\n\n        <ul class="nav nav-tabs">\n            <li [ngClass]="{\'active\': tab === \'tab1\'}">\n                <a (click)="alterarTab(\'tab1\')"><span class="sprites-money-ico"></span></a>\n            </li>\n            <li [ngClass]="{\'active\': tab === \'tab2\'}">\n                <a (click)="alterarTab(\'tab2\')"><span class="sprites-pig-ico"></span></a>\n            </li>\n            <li [ngClass]="{\'active\': tab === \'tab3\'}">\n                <a (click)="alterarTab(\'tab3\')"><span class="sprites-smartstore-ico"></span></a>\n            </li>\n        </ul>\n\n        <div class="tab-content">\n            <div id="home" class="tab-pane fade in active" *ngIf="tab === \'tab1\'">\n                <h1>Procure pelas melhores ofertas</h1>\n                <p>\n                    Encontrar boas promoções pode ser uma\n                    tarefa difícil.\n                </p>\n                <p>\n                    É aí que entramos, <strong>digitamos os preços e\n                    fazemos a matemática para você.</strong>\n                </p>\n                <p>\n                    Encontre aqueles que economizam mais.\n                </p>\n            </div>\n\n            <div id="menu1" class="tab-pane fade in active" *ngIf="tab === \'tab2\'">\n                <h1>Crie as suas listas</h1>\n                <p>\n                    Ao se cadastrar no Zukkin, você poderá criar ilimitadas listas de compras, e a gente\n                    informará automaticamente quais Estabelecimentos têm as melhores ofertas.\n                </p>\n            </div>\n\n            <div id="menu2" class="tab-pane fade in active" *ngIf="tab === \'tab3\'">\n                <h1>Economize!</h1>\n                <p>\n                    Após encontrar o melhor local para realizar a sua compra, você pode ir até o local e\n                    aproveitar as ofertas encontradas.\n                </p>\n                <p>\n                    Se estiver no modo "Venda online" do site, basta realizar o pedido e esperar os produtos no\n                    conforto da sua casa!\n                </p>\n            </div>\n        </div>\n\n    </div>\n    <!--/how-works-->\n\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/home-tabs/home-tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomeTabsComponent);

//# sourceMappingURL=home-tabs.js.map

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoAgrupamentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_produtos_produtos__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProdutoAgrupamentoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProdutoAgrupamentoComponent = (function () {
    function ProdutoAgrupamentoComponent(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ProdutoAgrupamentoComponent.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    ProdutoAgrupamentoComponent.prototype.exibirTodos = function (ev) {
        ev.preventDefault();
        if (!this.categoria || !this.categoria.pag_cat_id) {
            this.presentToast('link indisponível no momento!');
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_produtos_produtos__["a" /* ProdutosPage */], {
            categoria_pai: this.categoria.pag_cat_id,
            nome: this.categoria.pag_cat_nome
        });
    };
    return ProdutoAgrupamentoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProdutoAgrupamentoComponent.prototype, "imagem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProdutoAgrupamentoComponent.prototype, "titulo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProdutoAgrupamentoComponent.prototype, "slug", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ProdutoAgrupamentoComponent.prototype, "produtos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoAgrupamentoComponent.prototype, "categoria", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], ProdutoAgrupamentoComponent.prototype, "navCtrl", void 0);
ProdutoAgrupamentoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produto-agrupamento',template:/*ion-inline-start:"/var/www/html/app/src/components/produto-agrupamento/produto-agrupamento.html"*/'<!--banner-fluid-->\n<div class="banner-fluid" *ngIf="imagem">\n    <img src="{{ imagem }}" alt="" class="img-responsive">\n</div>\n<!--/banner-fluid-->\n\n<section class="row">\n    <div class="col-xs-12">\n        <div class="wrapper">\n            <!--product-vitrine-->\n            <div class="content-product--vitrine">\n                <h1>{{ titulo }}</h1>\n                <h2 *ngIf="categoria"><a href="#" (click)="exibirTodos($event)">Ver todos</a></h2>\n\n                <div class="product-list  mCustomScrollbar" style="overflow-x: scroll;">\n                    <div class="products-group content">\n                        <app-produto-box *ngFor="let produto of produtos" [produto]="produto" [navCtrl]="navCtrl"></app-produto-box>\n                    </div>\n                </div>\n            </div>\n            <!--/product-vitrine-->\n        </div>\n    </div>\n</section>\n'/*ion-inline-end:"/var/www/html/app/src/components/produto-agrupamento/produto-agrupamento.html"*/,
        styles: ['./app-produto-agrupamento.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ProdutoAgrupamentoComponent);

//# sourceMappingURL=produto-agrupamento.js.map

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HomeBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HomeBannerComponent = (function () {
    function HomeBannerComponent() {
    }
    return HomeBannerComponent;
}());
HomeBannerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-banner',template:/*ion-inline-start:"/var/www/html/app/src/components/home-banner/home-banner.html"*/'<!--Banner-->\n<div id="carousel-example-captions" class="carousel slide" data-ride="carousel">\n    <!-- Indicators -->\n    <div class="content-pills">\n        <ol class="carousel-indicators">\n            <li data-target="#carousel-example-captions" data-slide-to="0" class="active"></li>\n            <li data-target="#carousel-example-captions" data-slide-to="1" class=""></li>\n            <li data-target="#carousel-example-captions" data-slide-to="2" class=""></li>\n        </ol>\n    </div>\n\n\n    <!-- Wrapper for slides -->\n    <div class="carousel-inner">\n        <div class="item active">\n            <img src="../assets/images/banner/banner-mobile.jpg" alt="..." class="img-responsive">\n            <div class="carousel-caption">\n            </div>\n        </div>\n        <div class="item">\n            <img src="../assets/images/banner/banner-mobile.jpg" alt="..." class="img-responsive">\n            <div class="carousel-caption">\n            </div>\n        </div>\n        <div class="item">\n            <img src="../assets/images/banner/banner-mobile.jpg" alt="..." class="img-responsive">\n            <div class="carousel-caption">\n            </div>\n        </div>\n    </div>\n</div>\n<!--/Banner-->\n'/*ion-inline-end:"/var/www/html/app/src/components/home-banner/home-banner.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomeBannerComponent);

//# sourceMappingURL=home-banner.js.map

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = (function () {
    function FooterComponent(configuracao, configuracaoService, usuarioProvider, iab) {
        this.configuracao = configuracao;
        this.configuracaoService = configuracaoService;
        this.usuarioProvider = usuarioProvider;
        this.iab = iab;
        this.accordionInstitucional = false;
        this.accordionProdutos = false;
        this.accordionAjudaESuporte = false;
        this.accordionSobre = false;
    }
    FooterComponent.prototype.logout = function () {
        this.usuarioProvider.logout();
        this.navCtrl.popToRoot();
    };
    FooterComponent.prototype.toogleAccordion = function (accordion) {
        if (accordion === 'institucional') {
            this.accordionInstitucional = !this.accordionInstitucional;
        }
        if (accordion === 'produtos') {
            this.accordionProdutos = !this.accordionProdutos;
        }
        if (accordion === 'ajudaESuporte') {
            this.accordionAjudaESuporte = !this.accordionAjudaESuporte;
        }
        if (accordion === 'sobre') {
            this.accordionSobre = !this.accordionSobre;
        }
    };
    FooterComponent.prototype.paginaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    FooterComponent.prototype.abrirLinkExterno = function (url) {
        this.iab.create(url);
    };
    return FooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], FooterComponent.prototype, "navCtrl", void 0);
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',template:/*ion-inline-start:"/var/www/html/app/src/components/footer/footer.html"*/'<!--Footer-->\n<footer>\n\n    <section class="row">\n        <div class="col-xs-12  bg-white">\n\n            <!--list-links-->\n            <ul class="list-links">\n                <li *ngIf="!configuracao.usuario.token"><a href="#" (click)="paginaLogin()">Login</a></li>\n                <li *ngIf="configuracao.usuario.token"><a href="#" (click)="logout()">Logout</a></li>\n                <li><a href="#" (click)="abrirLinkExterno(\'http://blog.zukkin.com\')">Blog</a></li>\n                <li><a href="#" (click)="abrirLinkExterno(\'http://b2b.zukkin.com\')">Zukkin B2B</a></li>\n                <li><a href="#" (click)="abrirLinkExterno(\'http://franquia.zukkin.com\')">Seja um franqueado</a></li>\n            </ul>\n            <!--/list-links-->\n\n        </div>\n    </section>\n\n\n    <section class="row">\n        <div class="col-xs-12">\n\n            <!--collapse footer-->\n            <div class="collapse-footer">\n                <button type="button"\n                        class="collapse-btn"\n                        data-toggle="collapse"\n                        data-target="#collapse-footer-1"\n                        (click)="toogleAccordion(\'institucional\')"\n                >\n                    Institucional\n                </button>\n                <div id="collapse-footer-1" *ngIf="accordionInstitucional" class="text-left container-fluid">\n                    <p>\n                        A missão do ZUKKIN é aumentar o poder de compra do consumidor.\n                    </p>\n                    <p>\n                        Coletamos milhares de preços em supermercados, e comparamos todos eles na nossa plataforma,\n                        idealizada para os nossos usuários terem uma experiência extremamente útil, intuitiva e gratuita.\n                    </p>\n                </div>\n\n                <button type="button"\n                        class="collapse-btn"\n                        data-toggle="collapse"\n                        data-target="#collapse-footer-3"\n                        (click)="toogleAccordion(\'ajudaESuporte\')"\n                >\n                    Ajuda e suporte\n                </button>\n                <div id="collapse-footer-3" *ngIf="accordionAjudaESuporte" class="text-left container-fluid">\n                    <p>\n                        Você tem alguma dúvida para utilizar a nossa plataforma? Envie um e-mail para contato@zukkin.com,\n                        ou então nos ligue no (11) 5584.9730\n                    </p>\n                </div>\n            </div>\n            <!--/collapse footer-->\n\n        </div>\n    </section>\n\n    <section class="row">\n        <div class="col-xs-12 bg-red-light">\n\n            <!--alert-info-home-->\n            <div class="alert-info--home">\n                <p>\n                    Proibida a venda de bebidas alcoólicas para\n                    menores de idade, conforme Lei n.° 8069/90, art. 81,\n                    inciso II (Estatuto da Criança e do Adolescente).\n                </p>\n            </div>\n            <!--/alert-info-home-->\n\n        </div>\n    </section>\n\n    <section class="row">\n        <div class="col-xs-12">\n\n            <!--Payfor-->\n            <div class="payfor" [ngClass]="configuracao.usuario.token ? \'aumentar-padding\' : \'\'">\n                <!--<h1>Pague com</h1>-->\n\n                <!--<ul>-->\n                    <!--<li><span class="sprites-visa"></span></li>-->\n                    <!--<li><span class="sprites-master-bandeira"></span></li>-->\n                    <!--<li><span class="sprites-american-express-bandeira"></span></li>-->\n                    <!--<li><span class="sprites-elo-bandeira"></span></li>-->\n                    <!--<li><span class="sprites-dinner-bandeira"></span></li>-->\n                    <!--<li><span class="sprites-boleto"></span></li>-->\n                <!--</ul>-->\n\n                <div class="copyright">\n                    <div class="text-center">\n\n                        <!--no futuro tem que remover esses br\'s-->\n                        <br />\n                        <!--/no futuro tem que remover esses br\'s-->\n\n                        <strong>© 2017 ZUKKIN - TODOS OS DIREITOS RESERVADOS </strong>\n                        <!--<p>-->\n                            <!--Zukkin. - CNPJ: 71.676.316/0001-46 - Inscrição Estadual:-->\n                            <!--116.827.781.117 Endereço: Av. Fagundes Filho, 300 Cj 22-->\n                            <!--Vl Monte Alegre - São Paulo/SP-->\n                        <!--</p>-->\n                    </div>\n                </div>\n            </div>\n            <!--/Payfor-->\n\n        </div>\n    </section>\n\n</footer>\n<!--/Footer-->\n'/*ion-inline-end:"/var/www/html/app/src/components/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao_service__["a" /* ConfiguracaoService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterResumoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bem_vindo_bem_vindo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_busca_busca__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_meus_enderecos_meus_enderecos__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterResumoComponent = (function () {
    function FooterResumoComponent(configuracao, configuracaoService) {
        var _this = this;
        this.configuracao = configuracao;
        this.configuracaoService = configuracaoService;
        this.configuracaoService.carregar();
        this.configuracao.alteracao.subscribe(function (configuracao) {
            if (_this.configuracao.local) {
                _this.prefixo = _this.configuracao.local.nome
                    ? _this.configuracao.local.nome
                    : 'Seu endereço';
                if (_this.configuracao.local.bairro_nome != null) {
                    _this.local = _this.configuracao.local.bairro_nome + " - " + _this.configuracao.local.estado_uf;
                }
                else {
                    _this.local = _this.configuracao.local.cidade_nome + " / " + _this.configuracao.local.estado_uf;
                }
                _this.label = _this.configuracao.local.nome && _this.configuracao.usuario.token
                    ? _this.configuracao.local.nome
                    : _this.local;
            }
        });
    }
    FooterResumoComponent.prototype.alteraLocal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_bem_vindo_bem_vindo__["a" /* BemVindoPage */]);
        return false;
    };
    FooterResumoComponent.prototype.meusEnderecos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_meus_enderecos_meus_enderecos__["a" /* MeusEnderecosPage */]);
        return false;
    };
    FooterResumoComponent.prototype.busca = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_busca_busca__["a" /* BuscaPage */]);
        return false;
    };
    return FooterResumoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], FooterResumoComponent.prototype, "navCtrl", void 0);
FooterResumoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-resumo',template:/*ion-inline-start:"/var/www/html/app/src/components/footer-resumo/footer-resumo.html"*/'<!-- Generated template for the FooterComponent component -->\n<footer class="bg-gray">\n    <section>\n        <!--footer fixe-->\n        <div class="footer-fixe">\n            <span class="icon 01"></span>\n\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="search-footer">\n                        <button class="btn search-footer-button pull-right" (click)="busca()">\n                            <span class="sprites-search-mobile-icon"></span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="row">\n                <div class="col-xs-12 bgRed-size2 text-left"\n                     [ngClass]="configuracao.modo === \'marketplace\' ? \'bg-red-light\' : \'bg-blue-dark\'" >\n                    <div class="line-address--footer" *ngIf="!configuracao.usuario.token" (click)="alteraLocal()">\n                        <strong>{{label}}</strong>\n                        <a class="line-address--edit pull-right">Trocar</a>\n                    </div>\n                    <div class="line-address--footer" *ngIf="configuracao.usuario.token" (click)="meusEnderecos()">\n                        <strong>{{label}}</strong>\n                        <a class="line-address--edit pull-right">Trocar</a>\n                    </div>\n                </div>\n            </div>\n\n            <app-footer-resumo-marketplace *ngIf="configuracao.modo === \'marketplace\' && configuracao.logado"></app-footer-resumo-marketplace>\n            <app-footer-resumo-comparacao *ngIf="configuracao.modo !== \'marketplace\' && configuracao.logado"></app-footer-resumo-comparacao>\n        </div>\n        <!--/footer fixe-->\n    </section>\n</footer>\n'/*ion-inline-end:"/var/www/html/app/src/components/footer-resumo/footer-resumo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao_service__["a" /* ConfiguracaoService */]])
], FooterResumoComponent);

//# sourceMappingURL=footer-resumo.js.map

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_produtos_produtos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_usuario_editar_perfil_usuario_editar_perfil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pedidos_pedidos__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuComponent = (function () {
    function MenuComponent(menuCtrl, configuracao) {
        this.menuCtrl = menuCtrl;
        this.configuracao = configuracao;
    }
    MenuComponent.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MenuComponent.prototype.categoria = function (categoria, nome) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_produtos_produtos__["a" /* ProdutosPage */], { categoria_pai: categoria, nome: nome });
        this.menuCtrl.close();
    };
    MenuComponent.prototype.minhaConta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_usuario_editar_perfil_usuario_editar_perfil__["a" /* UsuarioEditarPerfilPage */]);
        this.menuCtrl.close();
    };
    MenuComponent.prototype.meusPedidos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pedidos_pedidos__["a" /* PedidosPage */]);
        this.menuCtrl.close();
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], MenuComponent.prototype, "navCtrl", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',template:/*ion-inline-start:"/var/www/html/app/src/components/menu/menu.html"*/'\n<div id="pm_menu" class="pm_close">\n    <div class="pm_menu-header">\n        <div class="col-xs-4">\n            <span>O que deseja fazer?</span>\n        </div>\n        <div class="col-xs-6">\n            <app-modo-de-visualizacao [modo]="configuracao.modo"></app-modo-de-visualizacao>\n        </div>\n        <div class="col-xs-2 pull-right" (click)="closeMenu()">\n            <a class="pm_overlay sprites-close">Fechar</a>\n        </div>\n    </div>\n    <div class="pm_menu-body">\n        <ul>\n            <li (click)="categoria(211, \'Carnes\')"><a href="#" class="carnes"><span class="sprites-carnes"></span>Carnes</a></li>\n            <li (click)="categoria(155, \'Bebidas\')"><a href="#" class="bebidas"><span class="sprites-bebi"></span>Bebidas</a></li>\n            <li (click)="categoria(209, \'Frios\')"><a href="#" class="frios"><span class="sprites-frio"></span>Frios</a></li>\n            <!--<li><a href="#" class="laticinios"><span class="sprites-lati" ></span>Laticinios</a></li>-->\n            <li (click)="categoria(34, \'Matinas\')"><a href="#" class="matinais"><span class="sprites-matin"></span>Matinais</a></li>\n            <!--<li><a href="#" class="sobremesas"><span class="sprites-sobre"></span>Sobremesas</a></li>-->\n            <li (click)="categoria(140, \'Perfumaria\')"><a href="#" class="perfumaria"><span class="sprites-perfum"></span>Perfumaria</a></li>\n            <!--<li><a href="#" class="higiene"><span class="sprites-higi"></span>Higiene</a></li>-->\n            <li (click)="categoria(103, \'Cereais\')"><a href="#" class="cereais"><span class="sprites-cere"></span>Cereais</a></li>\n            <li (click)="categoria(55, \'Mercearia\')"><a href="#" class="mercearia"><span class="sprites-merce"></span>Mercearia</a></li>\n            <li (click)="categoria(197, \'Hortifruit\')"><a href="#" class="hortfruti"><span class="sprites-horti"></span>Hortfruti</a></li>\n            <!--<li><a href="#" class="all-departaments"><span class="sprites-all-dp"></span><strong>Todos departamentos</strong></a></li>-->\n        </ul>\n\n        <div class="content-menu--mobile">\n            <div class="content-menu--lista">\n                <ul>\n                    <li><a href="" dp-type="aves">Aves</a></li>\n                    <li><a href="" dp-type="bovinas">Bovinas</a></li>\n                    <li><a href="" dp-type="peixes">Peixes e Crustáceos</a></li>\n                    <li><a href="" dp-type="suinas">Suínas</a></li>\n                    <li><a href="" dp-type="linguicas">Linguiças e Salsichas</a></li>\n                    <li><a href="" dp-type="especiais">Exóticas e Especiais</a></li>\n                    <li><a href="" class="see-all" dp-type="tudo">ver tudo</a></li>\n                </ul>\n            </div>\n\n            <div class="content-menu--footer">\n                <img src="../assets/images/static/banner-menu.png" alt="">\n            </div>\n        </div>\n    </div>\n    <div class="pm_menu-footer" *ngIf="configuracao.usuario.token">\n        <ul>\n            <li><a href="#" (click)="minhaConta()"><span class="sprites-user-white"></span>Minha conta</a></li>\n            <li><a href=""><span class="sprites-white-list"></span>Minhas listas</a></li>\n            <li><a href="#" (click)="meusPedidos()"><span class="sprites-pedidos"></span>Meus pedidos</a></li>\n        </ul>\n    </div>\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */]])
], MenuComponent);

//# sourceMappingURL=menu.js.map

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterResumoMarketplaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_estabelecimento_marketplace_estabelecimento_marketplace__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_resumo_resumo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_estabelecimento_estabelecimento__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FooterResumoMarketplaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterResumoMarketplaceComponent = (function () {
    function FooterResumoMarketplaceComponent(navCtrl, configuracao, resumoProvider, estabelecimentoProvider) {
        this.navCtrl = navCtrl;
        this.configuracao = configuracao;
        this.resumoProvider = resumoProvider;
        this.estabelecimentoProvider = estabelecimentoProvider;
    }
    FooterResumoMarketplaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configuracao.alteracaoNaLista.subscribe(function () { return _this.carregarResumo(); });
        this.configuracao.alteracao.subscribe(function () {
            _this.carregarResumo();
            _this.carregarEstabelecimentoBase();
        });
    };
    FooterResumoMarketplaceComponent.prototype.mudarEstabelecimento = function (ev) {
        ev.preventDefault();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_estabelecimento_marketplace_estabelecimento_marketplace__["a" /* EstabelecimentoMarketplacePage */]);
    };
    FooterResumoMarketplaceComponent.prototype.carregarResumo = function () {
        var _this = this;
        var params = {
            modo: this.configuracao.modo,
            estabelecimentos: this.configuracao.estabelecimentos,
            lista: this.configuracao.lista.id,
            estabelecimentoSelecionado: this.configuracao.estabelecimentoBase
        };
        this.resumoProvider.get(params).subscribe(function (response) {
            _this.selecionado = response.find(function (item) { return item.estabelecimento.pag_est_id == _this.configuracao.estabelecimentoBase; });
            _this.configuracao.lista.produtosDisponiveisNoMercado = [];
            if (_this.selecionado) {
                _this.configuracao.lista.produtosDisponiveisNoMercado = _this.selecionado.lista.filter(function (item) {
                    return _this.configuracao.lista.produtos.find(function (produto) { return produto.id == item.produto.pag_pro_id; });
                });
            }
        }, function (error) {
            console.error(error);
        });
    };
    FooterResumoMarketplaceComponent.prototype.carregarEstabelecimentoBase = function () {
        var _this = this;
        this.estabelecimentoProvider.pesquisarPeloId(this.configuracao.estabelecimentoBase).subscribe(function (response) { return _this.estabelecimento = response; }, function (error) { return console.error(error); });
    };
    return FooterResumoMarketplaceComponent;
}());
FooterResumoMarketplaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-resumo-marketplace',template:/*ion-inline-start:"/var/www/html/app/src/components/footer-resumo-marketplace/footer-resumo-marketplace.html"*/'<div class="you-are bg-white">\n    <div class="row">\n        <div class="col-xs-5 you-are--text">\n            <p>Você está comprando em:</p>\n        </div>\n        <div class="col-xs-7 you-are--store" (click)="mudarEstabelecimento($event)">\n            <div class="content-left estabelecimento-selecionado" *ngIf="estabelecimento">\n                <img *ngIf="estabelecimento" src="{{ estabelecimento.pag_est_logo_absolute_url }}" alt="{{ estabelecimento.label }}" class="store">\n                {{estabelecimento.pag_est_marca}}<br />\n                <span class="resumo-footer-local">{{estabelecimento.pag_est_local_b2c}}</span>\n            </div>\n\n            <div class="content-right">\n                <a href="#" class="change-store sprites-change-store"></a>\n            </div>\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/footer-resumo-marketplace/footer-resumo-marketplace.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_4__providers_resumo_resumo__["a" /* ResumoProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_estabelecimento_estabelecimento__["a" /* EstabelecimentoProvider */]])
], FooterResumoMarketplaceComponent);

//# sourceMappingURL=footer-resumo-marketplace.js.map

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterResumoComparacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_comparacao_comparacao__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_resumo_resumo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FooterResumoComparacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterResumoComparacaoComponent = (function () {
    function FooterResumoComparacaoComponent(navCtrl, configuracao, localStorage, resumoProvider) {
        this.navCtrl = navCtrl;
        this.configuracao = configuracao;
        this.localStorage = localStorage;
        this.resumoProvider = resumoProvider;
        this.exibirLoading = false;
        this.lista = null;
        this.lista = this.configuracao.lista;
    }
    FooterResumoComparacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.configuracao.alteracao.subscribe((configuracao) => this.carregarResumo());
        this.configuracao.alteracaoNaLista.subscribe(function (configuracao) { return _this.carregarResumo(); });
    };
    FooterResumoComparacaoComponent.prototype.carregarResumo = function () {
        var _this = this;
        if (!this.configuracao.buscaResumo) {
            return;
        }
        console.info("BUSCA RESUMO ...");
        this.exibirLoading = true;
        var params = {
            lista: this.configuracao.lista.id,
            estabelecimentos: this.configuracao.estabelecimentos,
            modo: this.configuracao.modo,
        };
        this.resumoProvider.get(params).subscribe(function (response) {
            if (response) {
                _this.configuracao.resumoComparacao = response.filter(function (item) { return item.lista.length > 0; });
                _this.localStorage.atualizar(_this.configuracao);
                //this.configuracao.propagarAlteracao();
            }
            _this.configuracao.buscaResumo = false;
            _this.exibirLoading = false;
        }, function (error) {
            console.error(error);
            _this.exibirLoading = false;
        });
    };
    FooterResumoComparacaoComponent.prototype.anterior = function (ev) {
        ev.preventDefault();
        this.slides.slidePrev(500);
    };
    FooterResumoComparacaoComponent.prototype.proximo = function (ev) {
        ev.preventDefault();
        this.slides.slideNext(500);
    };
    FooterResumoComparacaoComponent.prototype.comparacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_comparacao_comparacao__["a" /* ComparacaoPage */]);
    };
    return FooterResumoComparacaoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], FooterResumoComparacaoComponent.prototype, "slides", void 0);
FooterResumoComparacaoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-resumo-comparacao',template:/*ion-inline-start:"/var/www/html/app/src/components/footer-resumo-comparacao/footer-resumo-comparacao.html"*/'<div class="you-are bg-white">\n\n    <!--loading-->\n    <div class="row">\n        <div class="col-xs-12">\n            <div *ngIf="exibirLoading" class="text-center">\n                <ion-spinner></ion-spinner> Carregando estabelecimentos...\n            </div>\n        </div>\n    </div>\n    <!--/loading-->\n\n    <!--mensagem caso nenhum preço for encontrado-->\n    <div class="row" *ngIf="configuracao.resumoComparacao.length == 0 && !exibirLoading">\n        <div class="col-xs-12">\n            Nenhum preços encontrado\n        </div>\n    </div>\n    <!--/mensagem caso nenhum preço for encontrado-->\n\n    <!--resumo-->\n    <div class="row" *ngIf="configuracao.resumoComparacao.length > 0">\n        <!--seta p/ esquerda-->\n        <div class="col-xs-1 you-are--text arrow-left" (click)="anterior($event)">\n            <a href="#" class="sprites-arrow-product-left" (click)="anterior($event)">prev</a>\n        </div>\n        <!--/seta p/ esquerda-->\n\n        <!--slides-->\n        <div class="col-md-9 col-xs-8">\n            <ion-slides>\n                <ion-slide class="item-store" *ngFor="let item of configuracao.resumoComparacao.slice(0,10); let index = index">\n                    <div class="resumo-footer-estabelecimento-bandeira text-left col-xs-5 col-md-4">\n                        <span class="resumo-footer-posicao">{{index + 1}}º)</span>\n                        <img src="{{ item.estabelecimento.pag_est_logo }}" alt="{{ item.estabelecimento.pag_est_marca }}" class="store">\n                    </div>\n                    <div class="xs-hidden col-md-4">\n                        <div class="resumo-footer-label">\n                            <span class="resumo-footer-marca">{{ item.estabelecimento.pag_est_marca }}</span>\n                            <span class="resumo-footer-local">{{ item.estabelecimento.pag_est_local_b2c }}</span>\n                        </div>\n                    </div>\n                    <div class="resumo-footer-info col-xs-7 col-md-4">\n                        <div class="produtos">{{ item.lista.length }}/{{lista.produtos.length}} itens</div>\n                        <div class="valor-total">R$ {{ item.total | number:\'1.2-2\' }}</div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <!--/slides-->\n\n        <!--seta p/ direita-->\n        <div class="col-xs-1 you-are--text arrow-right" (click)="proximo($event)">\n            <a href="#" class="sprites-arrow-product-right" (click)="proximo($event)">next</a>\n        </div>\n        <!--/seta p/ direita-->\n\n        <!--botão mostrar mais-->\n        <div class="col-md-1 col-xs-2 btn-trocar">\n            <div class="content-left">\n                <button class="btn btn-transparent" (click)="comparacao()">+</button>\n            </div>\n        </div>\n        <!--/botão mostrar mais-->\n\n    </div>\n    <!--/resumo-->\n\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/footer-resumo-comparacao/footer-resumo-comparacao.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_resumo_resumo__["a" /* ResumoProvider */]])
], FooterResumoComparacaoComponent);

//# sourceMappingURL=footer-resumo-comparacao.js.map

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_produto_detalhe_produto_detalhe__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProdutoBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProdutoBoxComponent = (function () {
    function ProdutoBoxComponent(configuracao) {
        this.configuracao = configuracao;
    }
    ProdutoBoxComponent.prototype.paginaProduto = function (produto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_produto_detalhe_produto_detalhe__["a" /* ProdutoDetalhePage */], { id: produto.pag_pro_id });
    };
    return ProdutoBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoBoxComponent.prototype, "produto", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], ProdutoBoxComponent.prototype, "navCtrl", void 0);
ProdutoBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produto-box',template:/*ion-inline-start:"/var/www/html/app/src/components/produto-box/produto-box.html"*/'<div class="products-group--item">\n    <div class="products-group--img">\n        <img src="{{ produto.pag_pro_imagem_absolute_url }}" alt="{{ produto.pag_pro_nome }}" (click)="paginaProduto(produto)">\n    </div>\n\n    <div class="products-group--text">\n        <h3>\n            <div *ngIf="produto.pag_marca && produto.pag_marca.pag_mar_nome">{{ produto.pag_marca.pag_mar_nome }}</div>\n            <div *ngIf="!produto.pag_marca || !produto.pag_marca.pag_mar_nome">&nbsp;</div>\n        </h3>\n        <h2>{{ produto.pag_pro_nome }}</h2>\n        <!--marketplace-->\n        <div *ngIf="configuracao.modo === \'marketplace\'">\n            <div *ngIf="produto.precos.preco_promocao">\n                <h4>R$ {{ produto.precos.preco_normal | number:\'1.2-2\' }}</h4>\n                <h1>R$ {{ produto.precos.preco_promocao | number:\'1.2-2\' }}</h1>\n            </div>\n            <div *ngIf="!produto.precos.preco_promocao">\n                <h1>R$ {{ produto.precos.preco_normal | number:\'1.2-2\' }}</h1>\n            </div>\n        </div>\n        <!--/marketplace-->\n        <!--comparacao-->\n        <div *ngIf="configuracao.modo !== \'marketplace\'">\n            <h4>R$ {{ produto.precos.preco_minimo | number:\'1.2-2\' }}</h4>\n            <span class="comparacao-ate"> até </span>\n            <h1>R$ {{ produto.precos.preco_maximo | number:\'1.2-2\' }}</h1>\n        </div>\n        <!--/comparacao-->\n    </div>\n\n    <div class="products-group--select">\n        <app-produto-select-quantidade [produto]="produto" [navCtrl]="navCtrl"></app-produto-select-quantidade>\n    </div>\n\n    <app-produto-btn-adicionar-remover [produto]="produto" [navCtrl]="navCtrl"></app-produto-btn-adicionar-remover>\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/produto-box/produto-box.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_configuracao__["a" /* Configuracao */]])
], ProdutoBoxComponent);

//# sourceMappingURL=produto-box.js.map

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoModel; });
var AvaliacaoModel = (function () {
    function AvaliacaoModel() {
    }
    AvaliacaoModel.prototype.isValid = function () {
        return this.pagAvaNome
            && this.pagAvaEmail
            && this.pagAvaNota
            && this.pagAvaMensagem
            && this.pagProduto;
    };
    return AvaliacaoModel;
}());

//# sourceMappingURL=avaliacao.model.js.map

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoAlertaPrecoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alerta_alerta_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alerta_alerta_model__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProdutoAlertaPrecoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProdutoAlertaPrecoComponent = (function () {
    function ProdutoAlertaPrecoComponent(configuracao, alertaService, toastCtrl) {
        this.configuracao = configuracao;
        this.alertaService = alertaService;
        this.toastCtrl = toastCtrl;
        this.alerta = new __WEBPACK_IMPORTED_MODULE_4__providers_alerta_alerta_model__["a" /* Alerta */];
        this.requisicao = false;
        this.mascara = __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            allowDecimal: true,
            integerLimit: 3,
            decimalSymbol: ','
        });
    }
    ProdutoAlertaPrecoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertaService.pesquisarPeloProduto(this.produto.pag_pro_id).subscribe(function (response) { return _this.alerta = new __WEBPACK_IMPORTED_MODULE_4__providers_alerta_alerta_model__["a" /* Alerta */](response); }, function (error) { return console.error(error); });
    };
    ProdutoAlertaPrecoComponent.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    };
    ProdutoAlertaPrecoComponent.prototype.salvar = function (ev, preco) {
        var _this = this;
        ev.preventDefault();
        var alerta = this.alerta;
        alerta.pagProduto = this.produto.pag_pro_id;
        alerta.pagAlePreco = preco.replace(',', '.');
        this.requisicao = true;
        var servico = alerta.pagAleId
            ? this.alertaService.editar(alerta)
            : this.alertaService.cadastrar(alerta);
        servico.subscribe(function (response) {
            _this.presentToast('Alerta cadastrado com sucesso');
            _this.alerta = new __WEBPACK_IMPORTED_MODULE_4__providers_alerta_alerta_model__["a" /* Alerta */](response);
        }, function (error) {
            console.error(error);
            _this.presentToast('Não foi possível cadastrar o alerta');
        }, function () { return _this.requisicao = false; });
    };
    return ProdutoAlertaPrecoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoAlertaPrecoComponent.prototype, "produto", void 0);
ProdutoAlertaPrecoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produto-alerta-preco',template:/*ion-inline-start:"/var/www/html/app/src/components/produto-alerta-preco/produto-alerta-preco.html"*/'<div class="container" *ngIf="alerta">\n    <!--achei caro-->\n    <section class="achei-caro--content">\n        <div class="row">\n            <div class="achei-caro col-xs-12">\n                <h1>Achei Caro:</h1>\n                <p>Me avise quando o preço chegar em:</p>\n            </div>\n        </div>\n\n        <div class="row">\n            <form role="form" class="form-inline formulario">\n                <div class="form-group col-xs-6">\n                    <input type="text"\n                           class="form-control"\n                           id="price-alert"\n                           [value]="alerta.pagAlePreco | number:\'1.2-2\'"\n                           name="preco"\n                           #preco\n                           [textMask]="{mask: mascara}">\n                </div>\n                <div class="form-group col-xs-6">\n                    <button type="button" class="btn red-button add-active" (click)="salvar($event, preco.value)" *ngIf="!requisicao">\n                        {{ alerta.pagAleId ? \'Editar alerta\' : \'Criar alerta\' }}\n                    </button>\n                    <button type="button" class="btn red-button add-active" *ngIf="requisicao" disabled>\n                        Processando...\n                    </button>\n                </div>\n            </form>\n        </div>\n    </section>\n    <!--/achei caro -->\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/produto-alerta-preco/produto-alerta-preco.html"*/,
        styles: ['app-produto-alerta-preco.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_alerta_alerta_service__["a" /* AlertaService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ProdutoAlertaPrecoComponent);

//# sourceMappingURL=produto-alerta-preco.js.map

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alerta; });
var Alerta = (function () {
    function Alerta(dados) {
        if (dados === void 0) { dados = null; }
        if (dados) {
            this.pagAleId = dados.pag_ale_id;
            this.pagAlePreco = dados.pag_ale_preco;
        }
    }
    return Alerta;
}());

//# sourceMappingURL=alerta.model.js.map

/***/ }),
/* 332 */,
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoBtnAdicionarRemoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lista_lista_util__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProdutoBtnAdicionarRemoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProdutoBtnAdicionarRemoverComponent = (function () {
    function ProdutoBtnAdicionarRemoverComponent(configuracao, listaUtil) {
        this.configuracao = configuracao;
        this.listaUtil = listaUtil;
        this.fullWidth = false;
    }
    ProdutoBtnAdicionarRemoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configuracao.alteracaoNaLista.subscribe(function () { return _this.produtoAdicionado = _this.listaUtil.pesquisarProduto(_this.produto.pag_pro_id) ? true : false; });
    };
    ProdutoBtnAdicionarRemoverComponent.prototype.adicionar = function () {
        if (!this.configuracao.usuario.token) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
            return false;
        }
        var toastMsg = 'Produto adicionado com sucesso';
        this.listaUtil.adicionarProduto(this.produto.pag_pro_id, 1, toastMsg);
    };
    ProdutoBtnAdicionarRemoverComponent.prototype.remover = function () {
        var toastMsg = 'Produto removido com sucesso';
        this.listaUtil.adicionarProduto(this.produto.pag_pro_id, 0, toastMsg);
    };
    return ProdutoBtnAdicionarRemoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoBtnAdicionarRemoverComponent.prototype, "produto", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoBtnAdicionarRemoverComponent.prototype, "navCtrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoBtnAdicionarRemoverComponent.prototype, "fullWidth", void 0);
ProdutoBtnAdicionarRemoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produto-btn-adicionar-remover',template:/*ion-inline-start:"/var/www/html/app/src/components/produto-btn-adicionar-remover/produto-btn-adicionar-remover.html"*/'<button class="btn green-button add-inactive" (click)="adicionar()" *ngIf="!produtoAdicionado" [ngClass]="fullWidth ? \'btn-block\' : \'\'">\n    Adicionar\n</button>\n\n<button class="btn red-button add-active" (click)="remover()" *ngIf="produtoAdicionado" [ngClass]="fullWidth ? \'btn-block\' : \'\'">\n    Remover\n</button>\n'/*ion-inline-end:"/var/www/html/app/src/components/produto-btn-adicionar-remover/produto-btn-adicionar-remover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_lista_lista_util__["a" /* ListaUtil */]])
], ProdutoBtnAdicionarRemoverComponent);

//# sourceMappingURL=produto-btn-adicionar-remover.js.map

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoSelectQuantidadeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lista_lista_util__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProdutoSelectQuantidadeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProdutoSelectQuantidadeComponent = (function () {
    function ProdutoSelectQuantidadeComponent(configuracao, listaUtil) {
        this.configuracao = configuracao;
        this.listaUtil = listaUtil;
        this.quantidade = 0;
    }
    ProdutoSelectQuantidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configuracao.alteracaoNaLista.subscribe(function () {
            var produto = _this.listaUtil.pesquisarProduto(_this.produto.pag_pro_id);
            _this.quantidade = produto ? produto['quantidade'] : 0;
        });
    };
    ProdutoSelectQuantidadeComponent.prototype.adicionar = function () {
        if (!this.configuracao.usuario.token) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            return false;
        }
        var toastMsg = this.quantidade > 0
            ? 'Produto adicionado com sucesso'
            : 'Produto removido com sucesso';
        this.listaUtil.adicionarProduto(this.produto.pag_pro_id, this.quantidade, toastMsg);
    };
    ProdutoSelectQuantidadeComponent.prototype.valores = function () {
        var valores = [];
        for (var i = 0; i <= 50; i++) {
            valores.push(i);
        }
        return valores;
    };
    return ProdutoSelectQuantidadeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProdutoSelectQuantidadeComponent.prototype, "produto", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
], ProdutoSelectQuantidadeComponent.prototype, "navCtrl", void 0);
ProdutoSelectQuantidadeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produto-select-quantidade',template:/*ion-inline-start:"/var/www/html/app/src/components/produto-select-quantidade/produto-select-quantidade.html"*/'<div class="dropdown">\n    <form action="">\n        <div class="selectdiv">\n            <label>\n                <select class="fake-select form-control" [(ngModel)]="quantidade" name="quantidade" (change)="adicionar()">\n                    <option *ngFor="let valor of valores()" [value]="valor">{{valor}}</option>\n                </select>\n                <div class="sprites-arrow-select-fake"></div>\n            </label>\n\n            <!--<div class="sprites-arrow-select-fake"></div>-->\n        </div>\n    </form>\n</div>\n'/*ion-inline-end:"/var/www/html/app/src/components/produto-select-quantidade/produto-select-quantidade.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_core_shared_configuracao__["a" /* Configuracao */],
        __WEBPACK_IMPORTED_MODULE_3__providers_lista_lista_util__["a" /* ListaUtil */]])
], ProdutoSelectQuantidadeComponent);

//# sourceMappingURL=produto-select-quantidade.js.map

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, distancia, busca) {
        if (!items)
            return [];
        if (!distancia && !busca) {
            return items;
        }
        busca = busca.toLowerCase();
        return items.filter(function (it) {
            if (it.distancia <= distancia) {
                var show_marca = (it.pag_est_marca.toLowerCase().indexOf(busca) >= 0);
                var show_endereco = (it.pag_est_end_logradouro.toLowerCase().indexOf(busca) >= 0);
                var show_local_b2b = (it.pag_est_local_b2b.toLowerCase().indexOf(busca) >= 0);
                var show_local_b2c = (it.pag_est_local_b2c.toLowerCase().indexOf(busca) >= 0);
                return show_marca || show_endereco || show_local_b2b || show_local_b2c;
            }
            return false;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_template_util__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_shared_configuracao_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_usuario_editar_perfil_usuario_editar_perfil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_local_storage_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_configuration_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, configuracaoService, templateUtil, localStorage, configurationService, configuracao) {
        this.modalCtrl = modalCtrl;
        this.configuracaoService = configuracaoService;
        this.templateUtil = templateUtil;
        this.localStorage = localStorage;
        this.configurationService = configurationService;
        this.configuracao = configuracao;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.configuracaoService.carregar();
        var current_version = this.configurationService.getValue("current-version");
        var clear = this.configurationService.getValue("clear-storage"); //bool
        var savedAppVersion = localStorage.getItem("version");
        if (clear) {
            if (!savedAppVersion || savedAppVersion !== current_version) {
                console.info('/*clear all local storage*/');
                localStorage.clear();
                this.configuracao.limparDados();
            }
        }
        localStorage.setItem("version", current_version);
        this.configuracao.alteracao.subscribe(function (configuracao) {
            var classe = _this.configuracao.modo === 'comparacao'
                ? 'comparativo'
                : 'home';
            document.getElementById('target').className = classe;
        });
    };
    MyApp.prototype.ngOnDestroy = function () {
        this.configuracaoService.atualizar();
    };
    MyApp.prototype.openPage = function (page) {
        console.info(page);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_usuario_editar_perfil_usuario_editar_perfil__["a" /* UsuarioEditarPerfilPage */]);
        modal.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/var/www/html/app/src/app/app.html"*/'\n<ion-menu [content]="content" id="menu">\n\n    <ion-content>\n        <app-menu [navCtrl]="nav"></app-menu>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/var/www/html/app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__core_shared_configuracao_service__["a" /* ConfiguracaoService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_template_util__["a" /* TemplateUtil */],
        __WEBPACK_IMPORTED_MODULE_9__core_local_storage_service__["a" /* LocalStorageService */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_5__core_shared_configuracao__["a" /* Configuracao */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_usuario_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    return UsuarioModule;
}());
UsuarioModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__shared_usuario_service__["a" /* UsuarioService */]
        ]
    })
], UsuarioModule);

//# sourceMappingURL=usuario.module.js.map

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_configuracao__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_configuracao_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_interceptor__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_storage_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__shared_configuracao__["a" /* Configuracao */],
            __WEBPACK_IMPORTED_MODULE_3__shared_configuracao_service__["a" /* ConfiguracaoService */],
            __WEBPACK_IMPORTED_MODULE_5__local_storage_service__["a" /* LocalStorageService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_4__token_interceptor__["a" /* TokenInterceptor */],
                multi: true
            }
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_configuracao__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor(configuracao) {
        this.configuracao = configuracao;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (this.configuracao.usuario.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.configuracao.usuario.token
                }
            });
        }
        return next.handle(request);
    };
    return TokenInterceptor;
}());
TokenInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_configuracao__["a" /* Configuracao */]])
], TokenInterceptor);

//# sourceMappingURL=token.interceptor.js.map

/***/ })
],[258]);
//# sourceMappingURL=main.js.map