
class FilaEncadeada {
    #inicio;
    #fim;
    #qnt;
   


    constructor() {
        this.#fim = null;
        this.#inicio = null;
        this.#qnt = 0;

    }


    isEmpty() {
        return this.#inicio === null; //se tiver vazio, inicio aponta para o novoNo 
    }

    enqueue(novoElemento) {

        const novoNo = new No(novoElemento);
        if (this.isEmpty())
            this.#inicio = novoNo;

        else
            this.#fim.proximo = novoNo;


        this.#fim = novoNo;
        this.#qnt++;
        console.log(`Adicionado${novoElemento}`);
        console.log(`Quantidade${this.#qnt}`);
        return true;
    }

    dequeue() {
        // 1. O Porteiro: A fila tá vazia? Se sim, vaza e retorna nulo.
        if (this.isEmpty()) {
            return null;
        }

        // 2. Se o código chegou até aqui, é porque TEM GENTE na fila.
        let removido = this.#inicio.dado; // Salva o dado da primeira pessoa
        
        this.#inicio = this.#inicio.proximo; // O segundo da fila vira o primeiro
        this.#qnt--; // Diminui o tamanho da fila

        // 3. Regra de Segurança: Se depois de tirar essa pessoa a fila zerou,
        // precisamos garantir que a placa de "fim" da fila também seja apagada.
        if (this.isEmpty()) {
            this.#fim = null;
        }

        console.log(`Removido com sucesso!`);
        console.log(`Quantidade restante: ${this.#qnt}`);
        
        return removido; // Devolve a pessoa pra quem chamou
    
    }


    first() {
        if (!this.isEmpty())
            return this.#inicio[this.#inicio];
        else
            return null;
    }
    //last
    toString() {
        let resultado = "";
        let index = this.#inicio;
        while(aux!=null){
            resultado+= aux.dado+ " | ";
            aux = aux.proximo; //dado na fila 
        }

      

        return resultado;
    }

    [Symbol.iterator]() {
        let aux = this.#inicio;
        return {
            next() {
                if (aux != null){
                    const value = aux.dado;
                    aux = aux.proximo;
                
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }



}













