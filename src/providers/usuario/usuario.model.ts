export class UsuarioModel {

    public nome: string;
    public sobrenome: string;
    public dataNascimento: string;
    public sexo: string;
    public email: string;
    public celular: string;
    public telefone: string;
    public plainPassword: string;
    public cpf: string;
    public token: string;
    public roles;
    public username;
    public facebook_id : string;

    public isValid() {
        return this.nome
            && this.sobrenome
            && this.dataNascimento
            && this.sexo
            && this.email
            && this.celular
            && this.plainPassword
            && this.plainPassword.length >= 6
            && this.cpf
            ;
    }

    public validEdit() {
        return this.nome
            && this.sobrenome
            && this.sexo
            && this.celular
            && this.cpf
            ;
    }
}
