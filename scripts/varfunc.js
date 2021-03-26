function errorMensage() {
    alert( 'Oops! Algo deu errado...\nTalvez os dados não foram preenchidos corretamente')
}
function deleteByKey(key) {
    let result = new Array()
    for( let c = 0; c < lista_array.length; c++) {
        if( c !== key) {
            result.push( lista_array[c])
        }
    }
    lista_array = result

    atualizarListaPrincipal()
}

function atualizarListaPrincipal() {
    // Limpando a página primeiro.
    pagina_inicial.lista_principal.innerHTML = ''
    pagina_inicial.dados_finais.innerHTML = ''

    // Caso a lista esteja vazia...
    if( lista_array.length == 0) {
        pagina_inicial.nada_adicionado.style.display = 'initial'
        return
    } else {
        pagina_inicial.nada_adicionado.style.display = 'none'

        // Mostrar cada intem na página.
        for( let c = 0; c < lista_array.length; c++) {
            pagina_inicial.lista_principal.innerHTML += `<li class="item_lista">
                <ul class="descricao">
                    <li>
                        <span class="nome"> ${lista_array[c].nome} </span>
                        <span class="preco"> ${lista_array[c].preco[1]} </span>
                    </li>
                    <li>
                        <span class="preco_total"> ${lista_array[c].total[1]} </span>
                        <span class="quantidade"> (${lista_array[c].quantidade}x) </span>
                    </li>
                </ul>
                <div class="li_botoes">
                    <button class="detalhes"> Detalhes </button>
                    <button class="remover"> Remover </button>
                </div>
            </li>`
        }

        
        // Mostrando os dados finais da compra.
        let dadosFinais = () => {
            let dados = [0, 0]
            for( let c = 0; c < lista_array.length; c++) {
                dados[0] += lista_array[c].quantidade
                dados[1] += lista_array[c].total[0]

            }
            dados[1] = dados[1].toLocaleString( 'pt-br', { style:'currency', currency:'BRL'})
            return dados
        }

        pagina_inicial.dados_finais.innerHTML = `<div class="linha"><div></div></div>
        <ul>
            <li id="produtos"> Produtos: ${lista_array.length} </li>
            <li id="itens"> Itens: ${dadosFinais()[0]} </li>
            <li id="preco_total"> Total: <span class="verde"> ${dadosFinais()[1]} </span> </li>
        </ul>`
        

        // Botões de editar e de remover.
        const editar_buttons = document.querySelectorAll( 'button.detalhes')
        const remover_buttons = document.querySelectorAll( 'button.remover')

        for( let c = 0; c < lista_array.length; c++) {
            editar_buttons[c].addEventListener( 'click', () => {
                pagina_inicial.elemento.style.display = 'none'
                editar_item.elemento.style.display = 'initial'

                editar_item.nome.value = lista_array[c].nome
                editar_item.preco.value = lista_array[c].preco[0]
                editar_item.quantidade.value = lista_array[c].quantidade

                variavelImportante = c
            })
            remover_buttons[c].addEventListener( 'click', () => {
                deleteByKey(c)
            })
        }
    }
}




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

var variavelImportante
var lista_array = new Array()
/* {
    nome: "Arroz",
    preco: [21.9, "R$ 21,90"],
    quantidade: 1,
    total: [21.9, "R$ 21,90"]
} */


pagina_inicial.elemento.style.display = 'initial'
adicionar_item.elemento.style.display = 'none'
editar_item.elemento.style.display = 'none'
atualizarListaPrincipal()
