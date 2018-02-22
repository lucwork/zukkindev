import {Component, Input, OnInit} from '@angular/core';
import {ToastController} from "ionic-angular";

import {Configuracao} from "../../app/core/shared/configuracao";
import {AlertaService} from "../../providers/alerta/alerta.service";
import {Alerta} from "../../providers/alerta/alerta.model";

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

/**
 * Generated class for the ProdutoAlertaPrecoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-produto-alerta-preco',
    templateUrl: 'produto-alerta-preco.html',
    styles: ['app-produto-alerta-preco.scss']
})
export class ProdutoAlertaPrecoComponent implements OnInit {

    @Input() public produto;

    public alerta: Alerta = new Alerta;
    public requisicao = false;

    mascara = createNumberMask({
        prefix: '',
        allowDecimal: true,
        integerLimit: 3,
        decimalSymbol: ','
    });

    constructor(public configuracao: Configuracao,
                public alertaService: AlertaService,
                public toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.alertaService.pesquisarPeloProduto(this.produto.pag_pro_id).subscribe(
            (response: any) => this.alerta = new Alerta(response),
            error => console.error(error)
        );
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        toast.present();
    }

    salvar(ev, preco) {
        ev.preventDefault();

        let alerta = this.alerta;
        alerta.pagProduto = this.produto.pag_pro_id;
        alerta.pagAlePreco = preco.replace(',','.');

        this.requisicao = true;

        let servico = alerta.pagAleId
            ? this.alertaService.editar(alerta)
            : this.alertaService.cadastrar(alerta)
        ;

        servico.subscribe(
            (response: any) => {
                this.presentToast('Alerta cadastrado com sucesso');
                this.alerta = new Alerta(response);
            },
            error => {
                console.error(error);
                this.presentToast('Não foi possível cadastrar o alerta');
            },
            () => this.requisicao = false
        );
    }
}
