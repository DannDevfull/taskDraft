const btn = document.querySelector('.btn');
const textRecebido = document.querySelector('#text');
const tasksArticle = document.querySelector('.tasks');
const buttonTheme = document.querySelector('.change-theme');


// Lendo o conteúdo salvo no LocalStorage
const dadosSalvos = localStorage.getItem("ListaTarefas");
let listaObjetos = [];



if(dadosSalvos == null){
    listaObjetos = [];
}else{
    listaObjetos = JSON.parse(dadosSalvos);
}



function renderizarTarefa(tarefa){
            
            let tagDiv = document.createElement('div');
            let tagAncora = document.createElement('span');
            let buttonDelete = document.createElement('button');
            let text = tarefa.descricao;
            

            if(tarefa.titulo == "Sem título"){
                 tagAncora.textContent = "Clique aqui para editar esse campo";
            }else{
                tagAncora.textContent = tarefa.titulo;
            }



            // O que vou carregar é a minha página com o id único da tarefa
            tagAncora.setAttribute('data-url','tarefas.html?id='+ tarefa.id);
        

        

        
            tagAncora.addEventListener('click', function(){
                tagAncora.contentEditable = 'true';
                tagAncora.focus();
                // focus coloca o curso piscando dentro dele

            });

            tagAncora.addEventListener('dblclick', function() {
                
                if(tagAncora.textContent == ""){
                    alert("Você ainda não digitou o nome de sua tarefa")
                    tagAncora.contentEditable = "false"
                }else{

                    const url = this.getAttribute('data-url');
                    window.location.href = url;
                };
                
            });

                // click fora para sair do modo de edição
                tagAncora.addEventListener('blur', function(){
                if(tagAncora.textContent == ''){
                    alert('Por favor, dê um nome a sua tarefa!');
                    tagAncora.contentEditable = 'true'
                }else{
                    tagAncora.contentEditable = 'false';
                    tarefa.titulo = tagAncora.textContent;
                    salvarTarefas();

                    console.log('Conteúdo pronto para navegação');

            }
        });

         
         // Deixando possivel deletar as tarefas
        
        buttonDelete.addEventListener('click', function(){
            tagDiv.remove();
            const indice = listaObjetos.findIndex((tarefaAtual) => {
                 return tarefaAtual.id === tarefa.id;
            });

            if( indice != -1){
                listaObjetos.splice(indice, 1);
            }else{
                console.log("Índice -1 encontrado!");
            }

            salvarTarefas();

        });


        buttonDelete.textContent = "Excluir";
    
        tagDiv.textContent += text;
        tagDiv.appendChild(buttonDelete);
        tagDiv.appendChild(tagAncora);
        tasksArticle.appendChild(tagDiv);
}

// Estou chamando o "renderizarTarefa(tarefa)" para cada item do meu Array
// Afinal, a função acima que recebe como parâmetro o objeto só funciona para um único objeto. 
listaObjetos.forEach((tarefa) => {
    renderizarTarefa(tarefa);
})


btn.addEventListener('click', function(){

    if(textRecebido.value.trim() == ""){
        alert("Texto inválido ou Vazio. Por favor, verifique e tente novamente!");
    }else{

        const tarefas = {
            id: Date.now(),
            titulo: "Sem título",
            descricao: textRecebido.value,
        };

        listaObjetos.push(tarefas);
        salvarTarefas();



        // Chamando minha função que renderizará toda a lógica desta interface
        renderizarTarefa(tarefas);  //Esse argumento é o meu objeto acima
       


        // Depois que o programa executar essa série de passos, o valor do input recebe vazio novamente
        textRecebido.value = "";

    };
    
});

       


function salvarTarefas(){
    // Pegando a minha lista de objetos e a transformando em ums string estrutura (Formato JSON)
   const listaEmTexto = JSON.stringify(listaObjetos);
   localStorage.setItem("ListaTarefas", listaEmTexto);

}
console.log(localStorage.getItem("ListaTarefas"));




buttonTheme.addEventListener('click', function(){
  
        document.body.classList.toggle('light-theme');
    
});
