export class EnderecoModel {
    public pagUsuEndNome: string;
    public pagUsuEndCep: string;
    public pagUsuEndLogradouro: string;
    public pagUsuEndComplemento: string;
    public pagBairroDescricao: string;
    public pagBairro: number;
    public pagCidade: number;

    public isValid() {
        return this.pagUsuEndNome
            && this.pagUsuEndCep
            && this.pagUsuEndLogradouro
            && this.pagCidade
            ;
    }
}