function desenhaCadastro() {

    //saldo inicia zerado
    var saldo = 0;
    //percorre os itens do cadastro, como digito/tipo de transação e valor
    for (item in cadastro) {
        let calculo = parseInt(cadastro[item].valor)
        //se for mais, soma - se for menos, subtrai
        if (cadastro[item].digito == "+") {
            saldo += calculo;
        } else {
            saldo -= calculo;
        }
    }

    //impressão do saldo final
    document.querySelector('tbody.extrato-resultado').innerHTML = ` <tr>
    <th class="valor" style=" border-bottom:1px solid;">
    </th>
    <th class="mercadoria" style=" border-bottom:1px solid;">
    Total
    </th>
    <th class="valor" id="resultadofinal" style=" border-bottom:1px solid;">
    R$${saldo}
    </th>
    <th class="total" style=" border-bottom:1px solid;">
    </th>
    </tr>`

    //Notifica se saldo for 0
    if (cadastro.length == 0) {
        document.querySelector('table.info-extrato tbody.extrato-resultado').innerHTML =
            `<div> Nenhuma transação cadastrada.</div>`
    }

    //impressão da parte fixa do saldo
    document.querySelector('table.info-extrato tbody').innerHTML = ` <tr>
    <th class="spacing" style=" border-bottom:1px solid;">

    </th>
    <th class="mercadoria" style=" border-bottom:1px solid;">
        Mercadoria
    </th>
    <th class="valor" style=" border-bottom:1px solid;">
       Valor
    </th>
    <th class="spacing" style=" border-bottom:1px solid;"> 
     </th>
    </tr>`

    for (central in cadastro) {
        document.querySelector('table.info-extrato tbody').innerHTML +=
            `
        <tr class="conteudo-dinamico">
        <td class="digito" > ${cadastro[central].digito} </td>
        <td class="mercadoria"> ${cadastro[central].mercadoria} </td>
        <td class="valor"> R$${cadastro[central].valor} </td>
        <th class="valor2" style=" border-bottom:1px solid;"> </th>
        </tr>
        `
    }


}


//armazenamento no localStorage
var cadastroCru = localStorage.getItem('cadastro')
if (cadastroCru != null) {
    var cadastro = JSON.parse(cadastroCru);
} else {
    var cadastro = [];
}


////////////////////////////////////////////////////////////////

//função enviar dados.................................................
function enviarDados(e) {
    e.preventDefault();
    //enviando ao local storage
    cadastro.push({
        digito: e.target.elements['transacao'].value,
        mercadoria: e.target.elements['nomemercadoria'].value,
        valor: e.target.elements['valormercadoria'].value
    })
    localStorage.setItem("cadastro", JSON.stringify(cadastro));
    desenhaCadastro();
}


//Excluindo dados.....................................................................................................
function limparDados() {
    //testa quantidade, se diferente de 0 executa a função limpeza de dados, se não, alerta a inexistencia deles
    if (cadastro != 0 && window.confirm("Deseja excluir os dados?")) {
        exclusaoDados();
    } else if (cadastro <= 0) {
        alert('Não há transações para serem excluídas.');
    }
}

//Exclusão de dados.......................................................
function exclusaoDados() {
    for (element of document.querySelectorAll(".conteudo-dinamico")) {
        element.remove();
        localStorage.clear();
        cadastro = [];
        localStorage.setItem("cadastro", JSON.stringify(cadastro));
        desenhaCadastro();
    }

}


//Fechar e abrir menu.................................................
var botaofechar = document.getElementById('fechar');
botaofechar.addEventListener('click', function () {

    var menu = document.getElementById('menu');

    menu.classList.toggle('hiden');

});


/////////////////////////////////////////////////////////////////////////////////////////

desenhaCadastro() 