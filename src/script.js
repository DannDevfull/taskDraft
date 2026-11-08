const btn = document.querySelector('.btn');
const textRecebido = document.querySelector('#text');
const tasksArticle = document.querySelector('.tasks');
console.log(tasksArticle);

btn.addEventListener('click', function(){
    let tagDiv = document.createElement('div');
    let tagAncora = document.createElement('a');
    let text = textRecebido.value;

    


    tagAncora.textContent = "Clique aqui para editar esse texto";
    tagAncora.href = '#'

    tagAncora.contentEditable = 'false';

    // para  não gerar conflito entre o editar clicando e o navegar pelo link clicando, devemos fazer com que o link só seja editavel qunado o usuário clicar duas vezes.

    // Double Click para editar
    tagAncora.addEventListener('dblclick', function() {

        tagAncora.contentEditable = 'true';
        tagAncora.focus();
        // focus coloca o curso piscando dentro dele
        console.log('texto do link pronto para ser editado');

    });

    
    // click fora para sair do modo de edição
    tagAncora.addEventListener('blur', function(){
        tagAncora.contentEditable = 'false';
        console.log('Conteúdo pronto para navegação');
    });

    

    tagDiv.textContent += text;
    tagDiv.innerHTML += '<button class="btn">Excluir</button>';
    
    tagDiv.appendChild(tagAncora);
    tasksArticle.appendChild(tagDiv);
   
    
    
    
})
