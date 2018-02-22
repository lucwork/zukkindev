export class Cartao {

    public bandeira;
    public numero;
    public mes;
    public ano;
    public nome;
    public sobrenome;
    public cvv;
    public nomeCompleto;

    private bandeiras;

    constructor() {
        this.bandeiras = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            master: /^5[1-5][0-9]{14}/,
            amex: /^3[47][0-9]{13}/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/
        };
    }

    validarNumero() {
        return this.obterBandeira();
    }

    validarCvv() {

    }

    obterBandeira() {
        let numero = new String(this.numero);
        this.bandeira = false;

        for (let bandeira in this.bandeiras) {
            if (numero.match(this.bandeiras[bandeira])) {
                this.bandeira = bandeira;
                break;
            }
        }

        return this.bandeira;
    }

    validarDados() {
        const cvvRegex = /^[0-9]{3,4}$/;

        return cvvRegex.test(this.cvv) && this.validarNumero() && this.nomeCompleto;
    }
}
