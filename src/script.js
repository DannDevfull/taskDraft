const btn = document.querySelector('.btn');
const textRecebido = document.querySelector('#text');
const tasksArticle = document.querySelector('.tasks');
const buttonTheme = document.querySelector('.change-theme')

btn.addEventListener('click', function(){

    if(textRecebido.value == " "){
        alert("Texto inválido ou Vazio. Por favor, verifique e tente novamente!");
    }else{

        let tagDiv = document.createElement('div');
        let tagAncora = document.createElement('span');
        let buttonDelete = document.createElement('button');
        let text = textRecebido.value;
        
        tagAncora.textContent = "Clique aqui para editar esse texto";
        tagAncora.setAttribute('data-url','https://github.com/DannDevfull' );
       

       

    
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
                console.log('Conteúdo pronto para navegação');

            }
        });

         


        buttonDelete.textContent = "Excluir";
    
        tagDiv.textContent += text;
        tagDiv.appendChild(buttonDelete);
        tagDiv.appendChild(tagAncora);
        tasksArticle.appendChild(tagDiv);

        // Depois que o programa executar essa série de passos, o valor do input recebe vazio novamente
        textRecebido.value = " ";
       

        // Deixando possivel deletar as tarefas
  
        buttonDelete.addEventListener('click', function(){

            tagDiv.remove();
    
        });

    };
    
});


buttonTheme.addEventListener('click', function(){
  
        document.body.classList.toggle('light-theme');
    
});
