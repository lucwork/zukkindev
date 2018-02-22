export class Pedido {
    frete;
    conveniencia;
    estabelecimento;
    entregaTipo;
    subTotal;
    produtos;
    referencia;
    descricao;
    cartao;
    endereco;

    validarDados() {
        return this.estabelecimento
            && this.entregaTipo
            && this.subTotal
            && this.produtos
            && this.cartao
            && this.endereco
        ;
    }
}
