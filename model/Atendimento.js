//cpf
//timestemp

class Atendimento {
    #nome
    #cpf
    #datahora
    #dataatual
    #datanasc



    constructor(cpf, nome, datanasc) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#datanasc = datanasc;
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

    get datanasc() {
        return this.#datanasc
    }

    get dataatual() {
        return this.#dataatual;
    }

    get datahora() {
        return this.#datahora;
    }

    get idade() {

        const nascimento = new Date(this.#datanasc);
        const hoje = new Date();
        let idadeBase = hoje.getFullYear() - nascimento.getFullYear();
        const diferencaMeses = hoje.getMonth() - nascimento.getMonth();
        if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < nascimento.getDate())) {
            idadeBase--;
        }
        return idadeBase;
    }
    toString() {
    return `Nome: ${this.#nome} | Data/Hora: ${this.#dataatual} ${this.#datahora} | Idade: ${this.idade} anos`;
}
}