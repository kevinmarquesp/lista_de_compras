adicionar_item.adicionar.addEventListener( 'click', function() {
    if( adicionar_item.quantidade.value.length == 0) {
        adicionar_item.quantidade.value = 1
    }
    // Verificando se os dados foram preechidos corretamente...
    if(
        (adicionar_item.nome.value.length == 0 || adicionar_item.preco.value.length == 0) ||
        ( Number(adicionar_item.quantidade.value) < 1 || Number(adicionar_item.preco.value) <= 0)
    ) {
        errorMensage()
    } else {
        let preco_num = Number( adicionar_item.preco.value)
        let quantidade_num = Number( adicionar_item.quantidade.value)
        lista_array.push( {
            nome: adicionar_item.nome.value,
            preco: [
                preco_num,
                preco_num.toLocaleString( 'pt-br', { style:'currency', currency:'BRL'})
            ],
            quantidade: quantidade_num,
            total: [
                preco_num*quantidade_num,
                (preco_num*quantidade_num).toLocaleString( 'pt-br', { style:'currency', currency:'BRL'})
            ]
        })
        atualizarListaPrincipal()
        back()

        // Limpando os inputs
        adicionar_item.nome.value = ''
        adicionar_item.preco.value = ''
        adicionar_item.quantidade.value = ''
    }
})
adicionar_item.cancelar.addEventListener( 'click', back)



editar_item.salvar.addEventListener( 'click', () => {
    if( editar_item.quantidade.value.length == 0) {
        editar_item.quantidade.value = 1
    }

    // Verificando (denovo) os dados relatados...
    if(
        (editar_item.nome.value.length == 0 || editar_item.preco.value.length == 0) ||
        ( Number(editar_item.quantidade.value) < 1 || Number(editar_item.preco.value) <= 0)
    ) {
        errorMensage()
    } else {
        let preco_num = Number( editar_item.preco.value)
        let quantidade_num = Number( editar_item.quantidade.value)

        lista_array[variavelImportante].nome = editar_item.nome.value
        lista_array[variavelImportante].preco = [
            preco_num,
            preco_num.toLocaleString( 'pt-br', { style:'currency', currency:'BRL'})
        ],
        lista_array[variavelImportante].quantidade = quantidade_num
        lista_array[variavelImportante].total = [
            preco_num*quantidade_num,
            (preco_num*quantidade_num).toLocaleString( 'pt-br', { style:'currency', currency:'BRL'})
        ]

        back()
    }
})
editar_item.cancelar.addEventListener( 'click', back)
