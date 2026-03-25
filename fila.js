class Fila {
    #inicio;
    #fim;
    #qnt;
    #elementos;

    constructor(tam = 10) {
        this.#fim = -1;
        this.#inicio = 0;
        this.#qnt = 0;
        this.#elementos = new Array(tam);
    }
    isFull() {
        return this.#qnt === this.#elementos.length;
    }

    isEmpty() {
        return this.#qnt === 0;
    }

    enqueue(elemento) {
        if (!this.isFull()) {
            this.#fim = (this.#fim + 1) % this.#elementos.length;
            this.#elementos[this.#fim] = elemento;
            this.#qnt++;

            console.log(`enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qnt}`);
            return true;
        }
        return false;
    }

    dequeue() {
        if (!this.isEmpty()) {
            let removido = this.#elementos[this.#inicio];

            this.#inicio = (this.#inicio + 1) % this.#elementos.length;
            this.#qnt--;

            console.log(`Removido: ${removido}`);
            console.log(`dequeue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qnt}`);

            return removido;
        }
        return null;
    }
}

first() {
    if (!this.isEmpty())
        return this.#elementos[this.#inicio];
    else
        return null;
}
last() {

    if (!this.isEmpty()) return this.#elementos[this.#fim];

    return null;
}



toString() {
    let resultado = "";
    for (let i = this.#inicio; i <= this.#fim; i++) {
        resultado += `${this.#elementos[i]} | `;
    }
    return resultado;
}

  
}










