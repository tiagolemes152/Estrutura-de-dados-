const minhaFila = new Fila(5);

function adicionarElemento() {
    const nome = document.getElementById("txtnovoNome").value;
    const cpf = document.getElementById("Cpf").value;

    const atendimento = new Atendimento(cpf, nome);

    if (minhaFila.enqueue(atendimento)) {
        atualizarFila();
    } else {
        alert("Fila cheia!");
    }
}



function mostrarFila() {
    const filaElemento = document.getElementById("lblPessoasFila");
    filaElemento.textContent = minhaFila.toString();
}



function removerElemento() {
    const removido = minhaFila.dequeue();

    if (removido === null) {
        alert("Fila vazia");
    } else {
        alert("Atendido: " + removido);
        mostrarFila();
    }
}



function mostrarFila() {
    const filaElemento = document.getElementById("listFila");
    filaElemento.innerHTML = "";
    for (let item of minhaFila) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        filaElemento.appendChild(listItem);
    }
}
function atualizarFila() {
    const lista = document.getElementById("listFila");
    lista.innerHTML = "";

    for (let item of minhaFila) {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>Nome:</strong> ${item.nome} <br>
            <strong>CPF:</strong> ${item.cpf} <br>
            <strong>Entrada:</strong> ${item.dataatual}<br>
            <strong>Entrada:</strong> ${item.datahora}<br>        
            `;

        lista.appendChild(li);
    }
    const inputCpf = document.getElementById("Cpf");

    inputCpf.addEventListener("input", function () {
        let valor = inputCpf.value;

        // Remove tudo que não for número
        valor = valor.replace(/\D/g, "");

        // Limita a 11 dígitos
        valor = valor.slice(0, 11);

        // Aplica a máscara
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        inputCpf.value = valor;
    });
}


