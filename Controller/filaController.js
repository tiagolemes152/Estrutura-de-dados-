// declarando o tamanho das filas
const minhaFilaNormal = new FilaEncadeada(6);
const minhaFilaPrioritaria = new FilaEncadeada(6);

// contatador que começa valendo 0 e posteriormente vai receber ate 3 valores antes de pular para a fila normal 
let contador = 0;

function adicionarElemento() {

    // o .value serve para pegar os valores digitados pelo user nos respectivos campos 
    const nome = document.getElementById("txtnovoNome").value;
    const cpf = document.getElementById("Cpf").value;
    const datanasc = document.getElementById("datanasc").value;

    if (!datanasc) {
        alert("Por favor, preencha a data de nascimento.");
        return;
    }

    // converte a data do input (string) e a data de hoje para objetos Date do JS
    const dataInserida = new Date(datanasc);
    const dataAtual = new Date();

    // se a data inserida for maior (mais no futuro) que hoje:
    if (dataInserida > dataAtual) {
        alert("Data inválida! Viajantes do tempo não são permitidos na fila.");
        return; // Barra a execução
    }

   



    // estrutura condicional para verificar se o elemento inserido tem mais ou menos de 60
    const atendimento = new Atendimento(cpf, nome, datanasc);

    if (atendimento.idade >= 60) {

        if (minhaFilaPrioritaria.enqueue(atendimento)) {
            mostrarminhaFilaPrioritaria();
        } else { alert('Fila Prioritaria cheia') }
    }

    else {
        if
            (minhaFilaNormal.enqueue(atendimento)) {
            mostrarFilaNormal();
        }
        else { alert('Fila Normal cheia') }
    }


}


function abrirPainel() {
    window.open("painel.html", "_blank");
}

function removerElemento() {
    let removido = null;
    let tipoAtendimento = "";

    // inicio da estrutura condicional para atender ate no max 3 da fila prioritaria e 1 da normal
    if (!minhaFilaPrioritaria.isEmpty() && (contador< 3 || minhaFilaNormal.isEmpty())) {

        removido = minhaFilaPrioritaria.dequeue();
        contador++;
        tipoAtendimento = "Prioritaria";

    }

    else if (!minhaFilaNormal.isEmpty()) {

        removido = minhaFilaNormal.dequeue();
        contador = 0;
        tipoAtendimento = "Normal";

    }
    //
    else {
        alert("Ambas as filas estão vazias!");
        return;
    }

    const mensagemRemocao = document.getElementById("mensagem-remocao");
    const horaAtual = obterHoraAtual();
    const tempoEspera = calcularDiferencaHoras(removido.datahora, horaAtual);
    // nome, horario chegada, horario atendimento, tempo de espera

    //localStorage.setItem('ultimoAtendido', dadoAtendimento);
    localStorage.setItem('ultimoAtendido', removido.nome);

    mensagemRemocao.innerHTML = (`
        <h2 class="alert-heading fw-bold mb-1"><i class="fas fa-bullhorn text-danger"></i> ATENDIMENTO ATUAL</h2>
        <h1 class="display-6 text-dark fw-bold">${removido.nome}</h1>
        <hr>
        <p class="mb-0 text-dark">
            <strong>Fila:</strong> ${tipoAtendimento} | 
            <strong>Chegada:</strong> ${removido.datahora} | 
            <strong>Espera:</strong> ${tempoEspera}
        </p>
    `);
    mensagemRemocao.style.display = "block";
    mostrarFilaNormal();
    mostrarminhaFilaPrioritaria();


}


function mostrarFilaNormal() {
    const lista = document.getElementById("listFilaNormal");
    lista.innerHTML = "";
    let posicao = 1

   // para cada elemento add na fila, o laço passsa os parametros, hora, tempo de espera ate o momento de ser atendido 
    for (let item of minhaFilaNormal) {
        const li = document.createElement("li");
        const agora = obterHoraAtual();



        const diferenca = calcularDiferencaHoras(item.datahora, agora);

        li.textContent = `${posicao}°\n ${item.toString()} `;

        lista.appendChild(li);
        posicao++;

    }
}
function mostrarminhaFilaPrioritaria() {
    const lista = document.getElementById("listminhaFilaPrioritaria");
    lista.innerHTML = "";
    let posicao = 1

    // para cada elemento add na fila, o laço passsa os parametros, hora, tempo de espera ate o momento de ser atendido 

    for (let item of minhaFilaPrioritaria) {
        const li = document.createElement("li");
        const agora = obterHoraAtual();



        const diferenca = calcularDiferencaHoras(item.datahora, agora);

        li.textContent = `${posicao}°\n ${item.toString()} `;

        lista.appendChild(li);
        posicao++;

    }
}
const inputCpf = document.getElementById("Cpf");

// usado para mascarar o cpf e limitar a quantidade de digitos 
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





function buscarElemento() {
    const busca = document.getElementById("Cpf").value;

    let posicao = 1;
    let encontrado = false;

    // laço percorrer o elemento desejado na fila prioritaria 
    for (let item of minhaFilaPrioritaria) {
        if (item.cpf === busca) {
            alert(`Encontrado na Fila Prioritária, posição: ${posicao}`);
            encontrado = true;
            break;
        }
        posicao++;
    }

    // busca na fila normal (só entra aqui se não achou na prioritaria)
    if (!encontrado) {
        posicao = 1; // reseta a contagem de posição para começar do 1 na nova fila

        for (let item of minhaFilaNormal) {
            if (item.cpf === busca) {
                alert(`Encontrado na Fila Normal, posição: ${posicao}`);
                encontrado = true;
                break;
            }
            posicao++;
        }
    }

    // se os dois loops terminaram e a variável continua falsa...
    if (!encontrado) {
        alert("Pessoa não está em nenhuma das filas.");
    }
}


 











