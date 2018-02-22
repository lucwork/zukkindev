import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Configuracao} from "../../app/core/shared/configuracao";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {UsuarioService} from "../../app/usuario/shared/usuario.service";
import {UsuarioModel} from "../../providers/usuario/usuario.model";
import {EnderecoService} from "../../providers/endereco/endereco.service";
import {ResumoProvider} from "../../providers/resumo/resumo";
import {Cartao} from "../../providers/pagamento/cartao.model";
import {PedidoProvider} from "../../providers/pedido/pedido.provider";
import {Pedido} from "../../providers/pedido/pedido.model";
import {ObrigadoPage} from "../obrigado/obrigado";
import {CarrinhoPage} from "../carrinho/carrinho";
import {DataUtil} from "../../providers/util/data.util";
import {EstabelecimentoProvider} from "../../providers/estabelecimento/estabelecimento";

/**
 * Generated class for the FinalizarCompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-finalizar-compra',
    templateUrl: 'finalizar-compra.html',
})
export class FinalizarCompraPage {

    public usuario;
    public enderecos;
    public enderecoAtivo;
    public resumo;

    public mostrarEndereco = false;
    public mostrarPagamento = false;

    public selectOptions = {
        title: 'Endereço de entrega',
        mode: 'md'
    };

    public cartao = new Cartao();

    public numeroDoCartaoCorreto = false;

    public pedido = new Pedido();

    public dataUtil = new DataUtil();

    public desabilitarBotaoIrParaPagamento = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public configuracao: Configuracao,
                private usuarioService: UsuarioService,
                public usuarioProvider: UsuarioProvider,
                private enderecoService: EnderecoService,
                private resumoService: ResumoProvider,
                private pedidoProvider: PedidoProvider,
                public loadingCtrl: LoadingController,
                public toastCtrl: ToastController,
                private estabelecimentoProvider: EstabelecimentoProvider) {
    }

    ionViewDidLoad() {
        this.carregarDadosDoUsuario();
        this.carregarEnderecos();
        this.carregarResumo();
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    private createLoader(message) {
        return this.loadingCtrl.create({
            content: message
        });
    }

    private carregarEnderecos() {
        console.info('carregando endereços');
        this.enderecoService.listarTodos().subscribe(
            (response:any) => {
                this.enderecos = response;
                this.enderecoAtivo = response.find(endereco => endereco.pag_usu_end_id = this.configuracao.local.id);
            }
        );
    }

    private carregarDadosDoUsuario() {
        let loader = this.createLoader('Carregando informações...');
        loader.present();

        console.info('carregando dados do usuário');
        this.usuarioService.meuPerfil().subscribe(
            (response:any) => {
                loader.dismiss();
                this.usuario = response;
            },
            error => {
                loader.dismiss();
                console.error(error);
            }
        );
    }

    private carregarResumo() {
        console.info('carregando resumo');
        let params = {
            lista: this.configuracao.lista.id,
            estabelecimentos: this.configuracao.estabelecimentoBase,
            modo: this.configuracao.modo,
        };
        this.resumoService.get(params).subscribe(
            (response:any) => {
                this.resumo = response.shift();
            }
        );
    }

    editarCadastro() {
        let u = new UsuarioModel();
        u.nome = this.usuario.nome;
        u.sobrenome = this.usuario.sobrenome;
        u.dataNascimento = this.dataUtil.getDataDeNascimento(this.usuario.data_nascimento);
        u.sexo = this.usuario.sexo;
        u.cpf = this.usuario.cpf.replace(/[^0-9]/g,'');

        if (this.usuario.telefone) {
            u.telefone = this.usuario.telefone.replace(/[^0-9]/g,'');
        }
        if (this.usuario.celular) {
            u.celular = this.usuario.celular.replace(/[^0-9]/g,'');
        } else {
            this.presentToast('Informe o celular.');
            return false;
        }
        if (!u.validEdit()) {
            this.presentToast('Informe todos os campos obrigatórios do formulário.');
            return false;
        }

        console.log(u);

        let loader = this.createLoader('Atualizando informações...');
        loader.present();

        this.usuarioService.atualizar(u).subscribe(
            (response) => {
                this.usuarioProvider.atualizaUsuario(this.usuario);
                loader.dismiss();
                this.presentToast('Cadastro atualizados!');
            },
            (error) => {
                loader.dismiss();
                console.error(error);
                this.presentToast('Não foi possível atualizar o cadastro.');
            }
        );

        // this.navCtrl.push(UsuarioEditarPerfilPage);
    }

    verificarBandeiraCartao(numero) {
        this.cartao.obterBandeira();
        console.log(this.cartao.bandeira);
    }

    meses() {
        return ['01','02','03','04','05','06','07','08','09','10','11','12'];
    }

    anos() {
        let data = new Date();
        let anoAtual = data.getFullYear();
        let anos = [anoAtual];

        for (let i = 1; i <= 20; i++) {
            anos.push(anoAtual + i);
        }

        return anos;
    }

    validarNumeroDoCartao() {
        this.numeroDoCartaoCorreto = this.cartao.validarNumero();
    }

    finalizarCompra() {
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

        let loader = this.createLoader('Processando...');
        loader.present();

        this.pedidoProvider.cadastrar(this.pedido).subscribe(
            (response:any) => {
                loader.dismiss();
                console.log(response);

                this.navCtrl.push(ObrigadoPage,{id: response.id});
            },
            error => {
                loader.dismiss();
                console.error(error);
                this.presentToast('Ocorreu um erro no servidor e não foi possível fazer o pagamento');
            }
        );
    }

    selecionarTipoDeEntrega(entrega) {
        this.pedido.entregaTipo = entrega.tipo_id;
    }

    paginaCarrinho(ev) {
        ev.preventDefault();
        this.navCtrl.push(CarrinhoPage);
    }

    enderecoAlterado(endereco) {
        let loader = this.createLoader('Verificando endereço...');
        loader.present();

        this.estabelecimentoProvider.consultarFrete(
            this.configuracao.estabelecimentoBase,
            endereco.pag_usu_end_cep
        ).subscribe(
            (response:any) => {
                this.desabilitarBotaoIrParaPagamento = !response.frete;
                loader.dismiss();

                if (!response.frete) {
                    this.presentToast('O endereço selecionado está fora da área de entrega. Por favor, escolha outro local');
                } else {
                    this.resumo.estabelecimento.frete = response.frete.pag_valor_frete;
                }
            },
            (error:any) => {
                this.desabilitarBotaoIrParaPagamento = false;
                loader.dismiss();
                this.presentToast('Não foi possível consultar o frete desse endereço, por favor, escolha outro endereço');

                console.error(error)
            }
        );
    }

    calcularTotal() {
        let total = parseFloat(this.resumo.estabelecimento.frete) + parseFloat(this.resumo.sub_total);

        if (this.resumo.estabelecimento.taxa_de_conveniencia) {
            total += parseFloat(this.resumo.estabelecimento.taxa_de_conveniencia);
        }

        return total;
    }
}
