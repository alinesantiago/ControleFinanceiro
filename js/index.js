var cadastroCru = localStorage.getItem('cadastro')
if (cadastroCru != null) {
    var cadastro = JSON.parse(cadastroCru);
} else {
    var cadastro = [];

}

////////////////////////////////////////////////////////////////

function enviarDados(e) {
    var cadastroCru = localStorage.getItem('cadastro')
    if (cadastroCru != null) {
        var cadastro = JSON.parse(cadastroCru);
    } else {
        var cadastro = [];
    }
} //tentar método do video


let subirDados = document.getElementById("enviar-dados");
subirDados.addEventListener("click", enviarDados)


//Excluindo dados
function limparDados(e) {
    //seleciona todas as linhas a serem excluídas
    linhasExistentes = [...document.querySelectorAll('info-extrato, tbody, extrato-resultado, conteudo-dinamico')];
    linhasExistentes.forEach((element) => {
        //remove as linhas
        element.remove()
    });
   window.confirm("Deseja excluir os dados?");
    //limpa local storage
    localStorage.clear();
    var cadastro = [];
    desenhaCadastro();
}


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

if (document.querySelector('info-extrato, tbody, extrato-resultado, conteudo-dinamico') != null){
    
}
/////////////////////////////////////////////////////////////////////////////////////////

desenhaCadastro()