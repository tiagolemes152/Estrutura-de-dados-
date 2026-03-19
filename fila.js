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
        return this.#fim === this.#elementos.length - 1;
    }
    isEmpty() {
        returnthis.#fim < this.#inicio;
    }
    enqueue(elemento) {
        if (!this.isFull()) {
            this.#fim++;
            this.#elementos[this.#fim] = elemento;
            this.#qnt++;
            console.log(`enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qnt}`);
            return true;
        }
        return false;
    }
    dequeue() {
        if (this.isEmpty()) {
            this.#qnt--;
            let removido = this.#elementos[this.#inicio++];
            this.#inicio++;
            return removido;
        }
        return null;
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










    //enqueue
    //isfull
    //dequeue
    //isempety
