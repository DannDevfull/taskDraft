// O que esse novo script deve fazer?
// Ele precisa ler o que está escrito depois do ponto de interrogação
const parametros = new URLSearchParams(window.location.search);
const idParams = Number(parametros.get("id"));

// Pegando o meu objeto no LocalStorage
const tarefas = localStorage.getItem("ListaTarefas");

// Essa variável funcionará como um array dos objetos (listas de objetos)
let listaObjetos;

// validando se o meu objetos adquirido está preenchido ou não
// Caso esteja preenchido, ele descompactará o objeto que está em string para código puro
if (tarefas == null){
    listaObjetos = [];
}else{
    listaObjetos = JSON.parse(tarefas);
}


// Selecionando o seletor que está em meu HTML, preparando para colocar elemento dentro dele pelo JS
const containerLayout = document.querySelector(".tarefaName");

// Validando se o ID do meu Objeto é o mesmo puxado da URL
const comparandoTarefas = listaObjetos.find( (tarefaAtual) => {
    return tarefaAtual.id === idParams;
});

// Caso seja o mesmo, o meu "comparandoTarefas" (que contém meu objeto inteiro) vai ser usado para inserir o conteúdo no HTML
if (comparandoTarefas){
    let titleN2 = document.createElement("h2");
    let titleN3 = document.createElement("h3");

    titleN2.textContent = comparandoTarefas.titulo;
    titleN3.textContent = comparandoTarefas.descricao;

    containerLayout.appendChild(titleN2);
    containerLayout.appendChild(titleN3);
}else{
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "tarefa não encontrada!"
    containerLayout.appendChild(paragrafo);
}




