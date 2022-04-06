function desenhaCadastro() {
    if (cadastro.length == 0) {
        document.querySelector('table.info-extrato tbody.extrato-resultado').innerHTML =
            `<div> Nenhuma transação cadastrada.</div>`
    }

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
    //verifica se o cadastro está vazio, e informa.
    //if (cadastro.length == 0) {
    //   document.querySelector('table.info-extrato tbody.extrato-resultado').innerHTML = `<div> Nenhuma transação cadastrada.</div>`;
}

var cadastroCru = localStorage.getItem('cadastro')
if (cadastroCru != null) {
    var cadastro = JSON.parse(cadastroCru);
} else {
    var cadastro = [];

}

////////////////////////////////////////////////////////////////

function enviarDados(e) {
    //enviando ao local storage
    cadastro.push({
        digito: e.target.elements['transacao'].value,
        mercadoria: e.target.elements['nomemercadoria'].value,
        valor: e.target.elements['valormercadoria'].value
    })
    localStorage.setItem("cadastro", JSON.stringify(cadastro));
    desenhaCadastro();//alteraçao aqui
    console.log(cadastro)
} //ERRO = UNDEFINED / JSON    





//Excluindo dados
function limparDados() {
    //testa quantidade, se diferente de 0 executa a função limpeza de dados, se não, alerta a inexistencia deles
    if (cadastro != 0 && window.confirm("Deseja excluir os dados?")) {
        exclusaoDados();
    } else if (cadastro <= 0) {
        alert('Não há transações para serem excluídas.');
    }
}

//Exclusão de dados
    function exclusaoDados(){
    for (element of document.querySelectorAll(".conteudo-dinamico")) {
        element.remove();
        localStorage.clear();
        cadastro = [];
        localStorage.setItem("cadastro", JSON.stringify(cadastro));
        desenhaCadastro();
    }

} 

//testa quantidade, se maior que 0 executa a limpeza de dados, se não, alerta a inexistencia deles


//pensei em usar lenght mas dá erro...    




//função desenhar cadastro

/////////////////////////////////////////////////////////////////////////////////////////

desenhaCadastro() 