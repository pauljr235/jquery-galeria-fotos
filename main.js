$(document).ready(function(){
    /*SELECIONANDO OS MESMOS ELEMENTOS COM JQUERY*/
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#inserir-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#inserir-imagem-nova').val('')
    })

});


    /*SELECIONANDO OS ELEMENTOS COM JS

    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))
    document.querySelector('header button').addEventListener('click', function(){
    })*/

    
