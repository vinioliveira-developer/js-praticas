# 📌 Anotações JavaScript — Array e Estrutura de Repetição FOR

## Array

Array é uma **estrutura de dados** usada para armazenar uma coleção de valores dentro de uma única variável.

### Criando um Array

```js
let tarefas = [];
```

Usando `[]`, informo ao JavaScript que essa variável será uma lista.

### Índices

* Cada item do array possui um **índice**
* Os índices começam em **0**

Exemplo:

```js
let nomes = ['Ana', 'João', 'Maria'];
// Ana -> índice 0
// João -> índice 1
// Maria -> índice 2
```

### length

O `length` retorna a **quantidade total de itens** existentes no array.

```js
nomes.length; // 3
```

### push()

O método `push()` adiciona um novo item **no final do array**.

```js
tarefas.push('Estudar JavaScript');
```

---

## Estrutura de Repetição FOR

A estrutura `for` é usada para **repetir um bloco de código** enquanto uma condição for verdadeira.

Ela é muito utilizada para **percorrer arrays**.

### Estrutura do FOR

```js
for (let i = 0; i < tarefas.length; i++) {
  console.log(tarefas[i]);
}
```

O `for` possui três partes:

1. **Inicialização** → valor inicial do iterador (`let i = 0`)
2. **Condição** → até quando o loop vai rodar (`i < tarefas.length`)
3. **Incremento** → o que acontece a cada repetição (`i++`)

### Uso prático

No projeto de lista de tarefas, o `for` é usado para:

* Percorrer todos os itens do array
* Imprimir cada item na tela (ex: criar `<li>` dinamicamente)

---

## Conclusão

Arrays permitem armazenar dados de forma organizada.

O `for` permite percorrer esses dados e executar ações para cada item.

Esses dois conceitos juntos são fundamentais para criar funcionalidades reais em JavaScript.
