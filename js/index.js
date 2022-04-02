var cadastroCru = localStorage.getItem('cadastro')
if (cadastroCru != null) {
    var cadastro = JSON.parse(cadastroCru);
} else {
    var cadastro = [];

}

////////////////////////////////////////////////////////////////

function enviarDados(e) {
    e.preventDefault();
    var cadastroCru = localStorage.getItem('cadastro')
    if (cadastroCru != null) {
        var cadastro = JSON.parse(cadastroCru);
    } else {
        var cadastro = [];
    }
    //enviando ao local storage
    cadastro.push({
        digito: e.target.elements['transacao'].value,
        mercadoria: e.target.elements['nomemercadoria'].value,
        valor: e.target.elements['valormercadoria'].value
    })
    localStorage.setItem("cadastro", JSON.stringify(cadastroCru));

    console.log(cadastro)
} //ERRO = UNDEFINED / JSON

//Excluindo dados
function limparDados() {
    if (cadastro != 0 && window.confirm("Deseja excluir os dados?") ) {
        //seleciona todas as linhas a serem excluídas
        linhasExistentes = [...document.querySelectorAll('info-extrato, tbody, extrato-resultado, conteudo-dinamico')];
        linhasExistentes.forEach((element) => {
            //remove as linhas
            element.remove()
        });
        //limpa local storage
        localStorage.clear();
        var cadastro = [];
    } else if (cadastro == '') {
        alert('oi')
    }
}  //pensei em usar lenght mas dá erro...




//função desenhar cadastro
function desenhaCadastro() {
    for (central in cadastro) {
        document.querySelector('table.info-extrato tbody').innerHTML +=
            `
    <tr class="conteudo-dinamico">
        <td class="digito" > ${cadastro[central].digito ? '+' : '-'} </td>
        <td class="mercadoria"> ${cadastro[central].mercadoria} </td>
        <td class="valor"> ${cadastro[central].valor} </td>
        <th class="valor2" style=" border-bottom:1px solid;"> </th>
    </tr>
    `
    }
}

//verifica se o cadastro está vazio, e informa.
if (cadastro.length == 0) {
    document.querySelector('table.info-extrato tbody.extrato-resultado').innerHTML = `<div> Nenhuma transação cadastrada.</div>`;
}


/////////////////////////////////////////////////////////////////////////////////////////

desenhaCadastro()