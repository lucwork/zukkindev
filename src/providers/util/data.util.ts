export class DataUtil {

    public dia;
    public mes;
    public ano;

    toJSON(): string {
        return this.toDate().toJSON();
    }

    maiorDeIdade(): boolean {
        const anoLimite = new Date().getFullYear() - 18;
        return parseInt(this.ano) <= anoLimite;
    }

    toDate(): Date {
        return new Date(this.ano, this.mes, this.dia);
    }

    getDataDeNascimento(dataObj = null) {
        const data = dataObj ? dataObj : this.toJSON();

        if (data != null) {
            return data.split(/(T)/).shift();
        }
        return null;
    }
}
