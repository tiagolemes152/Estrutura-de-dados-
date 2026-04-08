//cpf
//timestemp

class Atendimento {
    #nome
    #cpf
    #datahora
    #dataatual
    

    constructor(cpf, nome) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataatual = obterDataAtual();
        this.#datahora = obterHoraAtual();

        
    }
    // Getters são usados para acessar atributos (principalmente privados) de um objeto de forma controlada
    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get dataatual() {
        return this.#dataatual;
    }

    get datahora() {
        return this.#datahora;
    }
    
   

   

    toString() {
        return ` ${this.#nome} Data/Hora: ${this.#dataatual} ${this.#datahora}`;
    }   
}