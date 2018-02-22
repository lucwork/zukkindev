import {Component} from '@angular/core';

import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';

import {EnderecoService} from '../../providers/endereco/endereco.service';
import {EnderecoModel} from '../../providers/endereco/endereco.model';
import {Configuracao} from "../../app/core/shared/configuracao";
import {LocalStorageService} from "../../app/core/local-storage.service";

/**
 * Generated class for the UsuarioCadastroEnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-usuario-cadastro-endereco',
    templateUrl: 'usuario-cadastro-endereco.html',
})
export class UsuarioCadastroEnderecoPage {

    bairroSomenteLeitura = true;
    logradouroSomenteLeitura = true;

    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;

    endereco: EnderecoModel;
    loader;

    campoNome = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                private enderecoService: EnderecoService,
                public loadingCtrl: LoadingController,
                public configuracao: Configuracao,
                public localStorage: LocalStorageService) {

        this.endereco = new EnderecoModel();

        console.log(this.navParams.get('campoNome'));
        if (this.navParams.get('campoNome')) {
            this.campoNome = true;
        }
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    presentLoading(message: string) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    }

    pesquisarEnderecoPeloCep(cep: string) {
        this.endereco.pagUsuEndCep = cep.replace(/[^0-9]/,'');

        if (!this.endereco.pagUsuEndCep || 8 !== this.endereco.pagUsuEndCep.length) {
            return false;
        }

        this.presentLoading('Pesquisando o CEP...');

        this.enderecoService.pesquisarPeloCep(this.endereco.pagUsuEndCep).subscribe(
            (response) => {

                this.logradouro = response['logradouro_nome'];
                this.bairro = response['bairro_nome'];
                this.cidade = response['cidade_nome'];
                this.estado = response['estado_uf'];

                if (response['bairro_id']) {
                    this.endereco.pagBairro = response['bairro_id'];
                }

                if (response['cidade_id']) {
                    this.endereco.pagCidade = response['cidade_id'];
                }

                if (!this.logradouro) {
                    this.logradouroSomenteLeitura = false;
                }

                if (!this.bairro) {
                    this.bairroSomenteLeitura = false;
                }

                this.loader.dismissAll();
            },
            (error) => {
                console.error(error);
                this.presentToast('Não foi possível consultar o cep');
                this.loader.dismiss()
            }
        );
    }

    cadastrar() {
        if (!this.endereco.pagUsuEndNome) {
            this.endereco.pagUsuEndNome = 'Meu Endereço';
        }

        this.endereco.pagUsuEndLogradouro = `${this.logradouro}, ${this.numero}`;

        console.log(this.endereco);

        if (!this.endereco.isValid()) {
            this.presentToast('Preencha todos os campos obrigatórios');
            return false;
        }

        this.presentLoading('Realizando o cadastro...');

        this.enderecoService.cadastrar(this.endereco).subscribe(
            (response) => {
                console.log(response);

                this.configuracao.local = {
                    'id': response['id'],
                    'cep': response['cep'],
                    'nome': response['nome'],
                    'cidade_id': response['cidade_id'],
                    'cidade_nome': response['cidade_nome'],
                    'estado_uf': response['estado_uf']
                };

                this.configuracao.estabelecimentosMarketplace = response['estabelecimentos']['marketplace'];
                this.configuracao.estabelecimentosComparacao = response['estabelecimentos']['comparacao'];

                this.localStorage.atualizar(this.configuracao);
                this.configuracao.propagarAlteracao();

                this.navCtrl.popToRoot();
            },
            (error) => {
                console.error(error);
                this.presentToast('Não foi posśivel cadastrar o endereço');
            },
            () => this.loader.dismiss()
        );
    }

    voltar() {
        this.navCtrl.popToRoot();
    }

}
