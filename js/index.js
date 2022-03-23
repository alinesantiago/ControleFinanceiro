var cadastro = [
    {
        digito: false,
        mercadoria: 'Quis nostrud exercitation	',
        valor: '9779,99'
    },
    {
        digito: false,
        mercadoria: 'Quis nostrud exercitation	',
        valor: '5566,99'
    },
    {
        digito: true,
        mercadoria: 'Lorem ipsum',
        valor: '9,99'
    }
];

function limparDados() {
    var cadastro = [{ }]
    desenhaCadastro()
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



desenhaCadastro()

