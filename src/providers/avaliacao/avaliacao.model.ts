export class AvaliacaoModel {
    pagAvaNome;
    pagAvaEmail;
    pagAvaNota;
    pagAvaMensagem;
    pagProduto;

    isValid() {
        return this.pagAvaNome
            && this.pagAvaEmail
            && this.pagAvaNota
            && this.pagAvaMensagem
            && this.pagProduto
        ;
    }
}
