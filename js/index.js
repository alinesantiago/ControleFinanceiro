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
    console.log(e.target.elements['digito'].value)
} //tentar método do video


let subirDados = document.getElementById("enviar-dados");
subirDados.addEventListener("click", enviarDados)


//Excluindo dados
function limparDados() {
    if (cadastro > 0 && window.confirm("Deseja excluir os dados?") ) {
        //seleciona todas as linhas a serem excluídas
        linhasExistentes = [...document.querySelectorAll('info-extrato, tbody, extrato-resultado, conteudo-dinamico')];
        linhasExistentes.forEach((element) => {
            //remove as linhas
            element.remove()
        });
        //limpa local storage
        localStorage.clear();
        var cadastro = [];
    } else if (cadastro == 0) {
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