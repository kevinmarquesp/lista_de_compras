function back() {
    pagina_inicial.elemento.style.display = 'initial'
    adicionar_item.elemento.style.display = 'none'
    editar_item.elemento.style.display = 'none'
    
    // Isso dispara o evento 'cliick' nos botoes de limpar o texto.
    for( let c = 0; c < 3; c++) {
        adicionar_item.clear_buttons[c].dispatchEvent( new Event( 'click'))
    }
    editar_item.nome.value = ''
    editar_item.preco.value = ''
    editar_item.quantidade.value = ''
}


pagina_inicial.adicionar.addEventListener( 'click', function() {
    pagina_inicial.elemento.style.display = 'none'
    adicionar_item.elemento.style.display = 'initial'
})

for( let c = 0; c < 3; c++) {
    adicionar_item.clear_buttons[c].addEventListener( 'click', function() {
        switch(c) {
            case 0:
                adicionar_item.nome.value = ''
                break
            case 1:
                adicionar_item.preco.value = ''
                break
            default:
                adicionar_item.quantidade.value = ''
        }
    })
}
