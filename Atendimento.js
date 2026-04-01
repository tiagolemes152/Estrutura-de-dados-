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
        this.#dataatual = this.obterDataAtual();
        this.#datahora = this.obterHoraAtual();
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

    obterDataAtual() {
        let dataAtual = new Date();
        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
        let ano = dataAtual.getFullYear();
        return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
    }

    // Função para obter a hora atual formatada
    obterHoraAtual() {
        const data = new Date();
        const hora = data.getHours().toString().padStart(2, '0');
        const minuto = data.getMinutes().toString().padStart(2, '0');
        const segundo = data.getSeconds().toString().padStart(2, '0');
        return `${hora}:${minuto}:${segundo}`;
    }

    // Função para calcular a diferença entre duas horas
    calcularDiferencaHoras(hora1, hora2) {
        const [h1, m1, s1] = hora1.split(':').map(Number);
        const [h2, m2, s2] = hora2.split(':').map(Number);
        const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
        const horas = Math.floor(diferencaSegundos / 3600);
        const minutos = Math.floor((diferencaSegundos % 3600) / 60);
        const segundos = diferencaSegundos % 60;
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }


    toString() {
        return `CPF= ${this.#cpf}, Nome= ${this.#nome}, Data/Hora: ${this.#dataatual} ${this.#datahora}`;
    }
}