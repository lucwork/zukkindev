export class Alerta {
    pagAleId;
    pagProduto;
    pagAlePreco;

    constructor(dados: any = null) {
        if (dados) {
            this.pagAleId = dados.pag_ale_id;
            this.pagAlePreco = dados.pag_ale_preco;
        }
    }
}
