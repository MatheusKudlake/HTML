function escreveConsole(){
    console.log("Escreveu no console")
}

function exibeDados(){
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    document.getElementById('result').innerHTML="Seu nome é: "+nome+". Seja bem vindo!<br>Senha: "+senha
}

function exibeMensagem(){
    let nome = document.getElementById('nome').value
    alert("Seu nome é: "+ nome+". Seja bem vindo!")
}

function verRadio2(){
    let elementos = document.getElementsByName('f')
    for(let i=0; i<elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('radios').innerHTML='Você é feliz? Resposta: '+ elementos[i].value
        }
    }
}

function verSelect(){
    let select = document.querySelector('#curso')
    document.querySelector('.output').textContent='Curso: '+select.value
}

function maracutaia(){
    document.getElementById('titulo').style.color='red'  
}