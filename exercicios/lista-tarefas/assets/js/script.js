// Nosso programa em js

    // cria um array para armazenar as tarefas
    let tarefas = [];

function adicionarTarefa() {    
    // Recebe a informação da tarefa a ser adicionada
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem");
    
    // estruturas condicionais (if else) e operadores relacionais
    // se o valor do input for vazio então mostre uma mensagem de erro para o usuario
    if (tarefa == "") {
        // mostre uma mensagem de erro
        let mensagemErro = "Digite uma terefa para adicioná-la a sua lista!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = '#A34743';
    } else {
        // Exime a mensagem de sucesso após a tarefa ser adicionada 
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = '#28A745';
        tarefas.push(tarefa);
        renderizarTarefas();
    }       

    // por fim das adições, ele limpa o campo de input do que foi digitado anteriormente
    inputTarefa.value = "";
}

function renderizarTarefas() {
    // Função para renderizar as tarefas na tela
    // Esta função pode ser expandida para mostrar todas as tarefas armazenadas no array
    //cria novo item (li) e insere na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML = ""; // Limpa a lista antes de renderizar novamente
        
        // Loop através do array de tarefas e cria um item de lista para cada tarefa
        for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        listaTarefas.appendChild(novaTarefa);
        }
}

// vermelho #A34743, VERDE #28A745