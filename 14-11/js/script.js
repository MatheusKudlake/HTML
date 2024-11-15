let i=1

function salvar(){
    let nome = document.querySelector('#n').value
    //let nome = document.querySelector('#n').value + ' ' + document.querySelector('#sn')

    nome = nome + ' ' + document.querySelector('#sn').value
    //nome+= ' ' + document.querySelector('#sn').value

    let email = document.querySelector('#e').value

    //Buscar o body da tabela
    let tbody = document.querySelector('.table tbody')

    //Cria o table row (tr)
    let linha = document.createElement('tr')
    
    //Cria os td
    let colId = document.createElement('td') = i
    let colNome = document.createElement('td') = nome
    let colEmail = document.createElement('td') = email

    //Coloca os elementos da linha dentro da linha
    linha.appendChild(colId)
    linha.appendChild(colNome)
    linha.appendChild(colEmail)

    //Coloca a linha com os elementos dentro da tabela (tbody)
    tbody.appendChild(linha)

    i++
}