const pagina_inicial = {
    elemento: document.querySelector( 'div#pagina_inicial'),
    lista_principal: document.querySelector( 'ul#lista_principal'),
    nada_adicionado: document.querySelector( 'div#nada_adicionado'),
    dados_finais: document.querySelector( 'div#dados_finais'),
    adicionar: document.querySelector( 'button#adicionar')
}
const adicionar_item = {
    elemento: document.querySelector( 'div#adicionar_item'),
    nome: document.querySelector( 'input#nome_produto'),
    preco: document.querySelector( 'input#preco_produto'),
    quantidade: document.querySelector( 'input#quantidade_produto'),
    clear_buttons: document.querySelectorAll( 'button.clear'),
    cancelar: document.querySelector( 'button#cancelar_add'),
    adicionar: document.querySelector( 'button#adicionar_add')
}
const editar_item = {
    elemento: document.querySelector( 'div#editar_item'),
    nome: document.querySelector( 'input#nome_edit'),
    preco: document.querySelector( 'input#preco_edit'),
    quantidade: document.querySelector( 'input#quantidade_edit'),
    cancelar: document.querySelector( 'button#cancelar_edit'),
    salvar: document.querySelector( 'button#salvar')
}

pagina_inicial.elemento.style.display = 'initial'
adicionar_item.elemento.style.display = 'none'
editar_item.elemento.style.display = 'none'