// model/No.js

class No{
#dado
#proximo

constructor (novoDado){
    this.#dado = novoDado;
    this.#proximo  = null;
}
get dado(){
    return this.#dado
}

get proximo(){
    return this.#proximo
}
set dado (novodado){
   this.#dado = novodado
}
set proximo(novoproximo){
    this.#proximo = novoproximo
}
 toString(){
        return this.#dado.toString();
    }
    
}