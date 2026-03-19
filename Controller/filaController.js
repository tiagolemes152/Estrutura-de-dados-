const minhaFila = new Fila(5);
function adicionarElemento() {
    const novoElemento = document.getElementById("txtnovoNome");
    if (minhaFila.enqueue(novoElemento.value) === true) {
        mostrarFila();
    } else {
        alert("Fila cheia!");
    }

function mostrarFila() {
   const filaElemento = document.getElementById("lblPessoasFila");
   filaElemento.textContent = minhaFila.toString();
    }
}

