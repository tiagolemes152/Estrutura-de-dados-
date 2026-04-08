const minhaFila = new Fila(6);

function adicionarElemento() {
    const nome = document.getElementById("txtnovoNome").value;
    const cpf = document.getElementById("Cpf").value;


    const atendimento = new Atendimento(cpf, nome);


    if (minhaFila.enqueue(atendimento)) {
        mostrarFila();


    } else {
        alert("Fila cheia!");
    }
}

function abrirPainel() {
    window.open("painel.html", "_blank");
}

function removerElemento() {
    const removido = minhaFila.dequeue();

    if (removido === null) {
        alert("Fila vazia");
        return;
    }

    const mensagemRemocao = document.getElementById("mensagem-remocao");
    const horaAtual = obterHoraAtual();
    const tempoEspera = calcularDiferencaHoras(removido.datahora, horaAtual);
    // nome, horario chegada, horario atendimento, tempo de espera

    //localStorage.setItem('ultimoAtendido', dadoAtendimento);
    localStorage.setItem('ultimoAtendido', removido.nome);

    mensagemRemocao.innerHTML = (`Próximo a ser atendido(a) ${removido.nome}, chegou às ${removido.datahora}, está sendo atendido(a) às ${horaAtual} Tempo de espera ${tempoEspera}`)

    mostrarFila();


}


function mostrarFila() {
    const lista = document.getElementById("listFila");
    lista.innerHTML = "";
    let posicao = 1


    for (let item of minhaFila) {
        const li = document.createElement("li");
        const agora = obterHoraAtual();



        const diferenca = calcularDiferencaHoras(item.datahora, agora);

        li.textContent = `${posicao}°\n ${item.toString()} `;

        lista.appendChild(li);
        posicao++;

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

function buscarElemento() {
    const busca = document.getElementById("Cpf").value;

    let posicao = 1;
    let encontrado = false;

    for (let item of minhaFila) {
        if (item.cpf === busca) {
            alert(`Encontrado na fila, posição: ${posicao}`);
            encontrado = true;
            break;
        }
        posicao++
    }
    if (!encontrado)
        alert("Pessoa não está na fila");
}

function criarElementoHTMLItem(dados) {
    const li = document.createElement("li");

    li.classList.add("list-group-item", "mb-2", "shadow-sm");

    li.innerHTML = `
        <span class="badge rounded-pill ${dados.cor} mb-2">
            Espera: ${dados.tempo}
        </span>
        <div>
            <strong>${dados.posicao}</strong>
            ${dados.descricao}
        </div>
    `;
    return li;
}










