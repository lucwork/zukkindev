import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {EnderecoService} from "../../providers/endereco/endereco.service";
import {Configuracao} from "../../app/core/shared/configuracao";
import {UsuarioCadastroEnderecoPage} from "../usuario-cadastro-endereco/usuario-cadastro-endereco";
import {LocalStorageService} from "../../app/core/local-storage.service";
import {EstabelecimentoSelecionarPage} from "../estabelecimento-selecionar/estabelecimento-selecionar";

/**
 * Generated class for the MeusEnderecosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-meus-enderecos',
    templateUrl: 'meus-enderecos.html',
    styles: ['./meus-enderecos.scss']
})
export class MeusEnderecosPage {

    public enderecoAtivo;
    public enderecos = [];
    public alerta = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public enderecoService: EnderecoService,
                public loadingCtrl: LoadingController,
                public toastCtrl: ToastController,
                public configuracao: Configuracao,
                public alertCtrl: AlertController,
                public localStorage: LocalStorageService) {
    }

    ionViewDidLoad() {
        let loader = this.buildLoading('Carregando endereços...');
        this.alerta = this.navParams.get('alerta');
        loader.present();

        this.enderecoService.listarTodos().subscribe(
            (response:any) => {
                console.log(response);

                /* percorre o retorno do servidor e separa os endereços */
                for (let endereco of response) {
                    if (endereco.pag_usu_end_id != this.configuracao.local.id) {
                        this.enderecos.push(endereco);
                    } else {
                        this.enderecoAtivo = endereco;
                    }
                }
            },
            error => {
                console.error(error);
                this.presentToast('Não foi possível carregar os endereços')
            },
            () => loader.dismiss()
        );
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    buildLoading(message: string) {
        return this.loadingCtrl.create({
            content: message
        });
    }

    voltar() {
        this.navCtrl.pop();
    }

    novo() {
        this.navCtrl.push(UsuarioCadastroEnderecoPage,{'campoNome': true});
    }

    estabelecimentosSelecionar() {
        this.navCtrl.push(EstabelecimentoSelecionarPage,{'campoNome': true});
    }

    ativar(endereco) {
        let alert = this.alertCtrl.create({
            title: 'Alterar endereço?',
            message: `Deseja alterar seu endereço ativo para: "${endereco.label}"`,
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        let loader = this.buildLoading('Alterando o endereço...');
                        loader.present();

                        this.enderecoService.ativar(endereco.pag_usu_end_id).subscribe(
                            (response: any) => {
                                this.configuracao.estabelecimentos = response.estabelecimentos;

                                this.configuracao.local = {
                                    id: response.id,
                                    nome: response.nome,
                                    cidade_id: response.cidade_id,
                                    cidade_nome: response.cidade_nome,
                                    estado_uf: response.estado_uf,
                                    cep: response.cep
                                };

                                this.localStorage.atualizar(this.configuracao);
                                this.configuracao.propagarAlteracao();

                                this.presentToast('Endereço alterado com sucesso');
                                this.navCtrl.popToRoot();
                            },
                            error => {
                                console.error(error);
                                this.presentToast('Não foi possível excluir o endereço');
                            },
                            () => loader.dismiss()
                        );
                    }
                }
            ]
        });
        alert.present();
    }

    excluir(endereco) {
        let alert = this.alertCtrl.create({
            title: 'Excluir endereço?',
            message: `Deseja excluir o endereço: "${endereco.label}"`,
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        let loader = this.buildLoading('Excluindo o endereço...');
                        loader.present();

                        this.enderecoService.excluir(endereco.pag_usu_end_id).subscribe(
                            () => {
                                /* remove o endereço excluido da lista */
                                this.enderecos = this.enderecos.filter((item) => item.pag_usu_end_id != endereco.pag_usu_end_id);
                                this.presentToast('Endereço removido com sucesso');
                            },
                            error => {
                                console.error(error);
                                this.presentToast('Não foi possível excluir o endereço');
                            },
                            () => loader.dismiss()
                        );
                    }
                }
            ]
        });
        alert.present();
    }
}
