
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
            if (this.#elementos.length - 1 === this.#fim) this.#fim = 0
            else this.#fim++;

            this.#elementos[this.#fim] = elemento;
            this.#qnt++;
            console.log(
                `enqueue: início=${this.#inicio}, fim=${this.#fim}, qnt=${this.#qnt}`,
            );
            return true;
        }
        return false;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const removido = this.#elementos[this.#inicio];

        if (this.#inicio === this.#elementos.length - 1) this.#inicio = 0;
        else this.#inicio++;

        this.#qnt--;

        console.log(`Removido:${removido}`);
        console.log(
            `dequeue: início=${this.#inicio}, fim=${this.#fim}, qnt=${this.#qnt}`,
        );


        return removido;
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



    //toString() {
    //    let resultado = "";
    //    for (let i = this.#inicio; i <= this.#fim; i++) {
    //        resultado += `${this.#elementos[i]} | `;
    //    }
    //    return resultado;
    //}
    toString() {
        let resultado = "";


        let index = this.#inicio;

        for (let i = 0; i < this.#qnt; i++) {
            resultado += `${this.#elementos[index]} | `;


            if (index === this.#elementos.length - 1) {

                index = 0;
            } else {
                index++;
            }
        }

        return resultado;
    }
    [Symbol.iterator]() {
        let count = 0;
        let i = this.#inicio;
        const qtd = this.#qnt;
        const elementos = this.#elementos;
        const tamanho = elementos.length;

        return {
            next() {
                if (count < qtd) {
                    const value = elementos[i];
                    i = (i + 1) % tamanho;
                    count++;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
    


}













