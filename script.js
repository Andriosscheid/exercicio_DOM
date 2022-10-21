// ex 1
let formacao = '2022 - LabEduc - Trilha Frontend' 
let nFormacao = document.createElement('li') 
nFormacao.innerText = formacao 
let formacaoPai = document.querySelector('#formacao-lista') 
formacaoPai.appendChild(nFormacao) 

//ex 2.
let cidade = document.querySelector('.cidade')
let ncidade = 'Viridian City'
cidade.innerText = ncidade

//ex 3
let telefone = document.querySelectorAll('.telefone')
let ntelefone = 'Telefone: 8574-6587'
for(let i=0; i<telefone.length; i++) {
    telefone[i].innerText = ntelefone
}
//ex 4
var img = document.querySelector('.imagem-perfil')
img.setAttribute('src', 'https://i.pinimg.com/originals/56/17/af/5617af08114fbd4068831424cbdb61ef.jpg')
// https://i.pinimg.com/originals/56/17/af/5617af08114fbd4068831424cbdb61ef.jpg
