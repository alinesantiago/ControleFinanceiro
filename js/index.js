var cadastroCru = localStorage.getItem(cadastro)
    if (cadastroCru != null){
        var cadastro = JSON.parse(localStorage('cadastro'))
    } else {
        var cadastro = [];
    }


////////////////////////////////////////////////////////////////
function limparDados() {
    linhasExistentes = [...document.querySelectorAll('info-extrato, tbody, extrato-resultado, conteudo-dinamico')];
    linhasExistentes.forEach((element) => {
        element.remove()
    });

    localStorage.clear();
    var cadastro = [];
    desenhaCadastro();
    alert("Dados limpos!");
}



function enviarDados(e){
    console.log(e)
    e.preventDefault(); // prevent default previne a ação padrão de certo evento
    var cadastroCru = localStorage.getItem(cadastro)
    if (cadastroCru != null){
        var cadastro = JSON.parse(localStorage('cadastro'))
    } else {
        var cadastro = [];
    }

    cadastro.push
}

function desenhaCadastro() {

    for (central in cadastro) {
        document.querySelector('table.info-extrato tbody').innerHTML += `
    <tr class="conteudo-dinamico">
        <td class="digito" > ${cadastro[central].digito ? '+' : '-'} </td>
        <td class="mercadoria"> ${cadastro[central].mercadoria} </td>
        <td class="valor"> ${cadastro[central].valor} </td>
        <th class="valor2" style=" border-bottom:1px solid;"> </th>
    </tr>
    `
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

desenhaCadastro()
