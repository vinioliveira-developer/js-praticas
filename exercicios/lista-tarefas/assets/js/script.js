// Nosso programa em js

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

        //cria novo item (li) e insere na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa); 
    }       

    // por fim das adições, ele limpa o campo de input do que foi digitado anteriormente
    inputTarefa.value = "";
}

// vermelho #A34743, VERDE #28A745